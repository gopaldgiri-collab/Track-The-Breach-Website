"""Backend tests for /api/contact endpoint (Iteration 4)."""
import os
import uuid
import pytest
import requests
from pymongo import MongoClient

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://threat-monitor-83.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

# Direct mongo for persistence verification
MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "test_database")


@pytest.fixture(scope="module")
def mongo_col():
    client = MongoClient(MONGO_URL)
    col = client[DB_NAME]["contact_submissions"]
    yield col
    # Cleanup TEST_ prefixed submissions and the SMTP verify submission
    col.delete_many({"$or": [{"name": {"$regex": "^TEST_"}}, {"name": "SMTP Verify Test"}]})
    client.close()


# --- Health check ---
def test_api_root():
    r = requests.get(f"{API}/", timeout=10)
    assert r.status_code == 200
    assert r.json().get("message") == "Hello World"


# --- /api/contact happy path ---
def test_contact_valid_submission(mongo_col):
    unique = uuid.uuid4().hex[:8]
    payload = {
        "name": f"TEST_User_{unique}",
        "email": f"test_{unique}@example.com",
        "company": "TEST Co",
        "reason": "Sales",
        "message": "Hello, this is an automated test submission.",
    }
    r = requests.post(f"{API}/contact", json=payload, timeout=15)
    assert r.status_code == 200, f"Unexpected status: {r.status_code} body={r.text}"
    data = r.json()
    assert data.get("ok") is True
    # Iteration 5: SMTP creds now live. Accept either True (delivery worked) or False (transient SMTP failure).
    assert data.get("email_sent") in (True, False)
    assert "Thanks" in data.get("message", "")
    # Persistence check
    doc = mongo_col.find_one({"email": payload["email"]})
    assert doc is not None, "Contact submission not persisted to MongoDB"
    assert doc["name"] == payload["name"]
    assert doc["reason"] == payload["reason"]
    assert doc["message"] == payload["message"]
    assert doc.get("email_sent") in (True, False)
    assert "submitted_at" in doc
    assert "id" in doc


# --- /api/contact iteration-5 live SMTP verify: send the exact body the review request specified ---
def test_contact_smtp_verify_live_delivery(mongo_col):
    payload = {
        "name": "SMTP Verify Test",
        "email": "hello@trackthebreach.com",
        "reason": "Sales",
        "message": "Live SMTP delivery test from iteration 5",
    }
    r = requests.post(f"{API}/contact", json=payload, timeout=30)
    assert r.status_code == 200, f"Unexpected status: {r.status_code} body={r.text}"
    data = r.json()
    assert data.get("ok") is True
    assert data.get("email_sent") is True, (
        f"Expected email_sent=True with live SMTP credentials, got {data}. "
        "Check backend logs for SMTP authentication errors."
    )
    doc = mongo_col.find_one({"name": "SMTP Verify Test", "email": "hello@trackthebreach.com"})
    assert doc is not None
    assert doc.get("email_sent") is True


# --- /api/contact minimal payload (no company) ---
def test_contact_without_company(mongo_col):
    unique = uuid.uuid4().hex[:8]
    payload = {
        "name": f"TEST_NoCo_{unique}",
        "email": f"noco_{unique}@example.com",
        "reason": "Support",
        "message": "No company field provided.",
    }
    r = requests.post(f"{API}/contact", json=payload, timeout=15)
    assert r.status_code == 200
    assert r.json().get("ok") is True
    doc = mongo_col.find_one({"email": payload["email"]})
    assert doc is not None


# --- /api/contact validation: invalid email triggers 422 ---
def test_contact_invalid_email():
    payload = {
        "name": "TEST_BadEmail",
        "email": "not-an-email",
        "reason": "Sales",
        "message": "This should be rejected by EmailStr validator.",
    }
    r = requests.post(f"{API}/contact", json=payload, timeout=10)
    assert r.status_code == 422, f"Expected 422, got {r.status_code}: {r.text}"
    body = r.json()
    assert "detail" in body


# --- /api/contact validation: missing required fields ---
def test_contact_missing_required():
    r = requests.post(f"{API}/contact", json={"email": "x@y.com"}, timeout=10)
    assert r.status_code == 422


def test_contact_empty_message():
    payload = {
        "name": "TEST_EmptyMsg",
        "email": "empty@example.com",
        "reason": "Sales",
        "message": "",
    }
    r = requests.post(f"{API}/contact", json=payload, timeout=10)
    # min_length=1 should trigger 422
    assert r.status_code == 422
