module.exports = {
  apps: [{
    name: "trackthebreach-api",
    script: "/var/www/Track-The-Breach-Website/backend/venv/bin/uvicorn",
    args: "server:app --host 0.0.0.0 --port 8000",
    cwd: "/var/www/Track-The-Breach-Website/backend",
    interpreter: "none"
  }]
}
