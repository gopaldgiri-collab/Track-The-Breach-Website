import { Toaster } from "sonner";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/layout/Layout";

import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import Partners from "@/pages/Partners";
import Blog from "@/pages/Blog";
import TrustCenter from "@/pages/TrustCenter";
import FAQPage from "@/pages/FAQPage";
import BlogPost from "@/pages/BlogPost";
import CategoryPage from "@/pages/CategoryPage";

import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import GDPRCompliance from "@/pages/GDPRCompliance";
import DPDPCompliance from "@/pages/DPDPCompliance";
import ResponsibleDisclosure from "@/pages/ResponsibleDisclosure";

import SecurityOverview from "@/pages/SecurityOverview";
import DataProcessingAddendum from "@/pages/DataProcessingAddendum";

const CATEGORY_ROUTES = [
  "platform",
  "email-monitoring",
  "phone-monitoring",
  "social-monitoring",
  "government-id-monitoring",
  "photo-monitoring",
  "video-monitoring",
  "dark-web-monitoring",
  "digital-footprint-monitoring",
  "ai-risk-intelligence",
  "continuous-monitoring",

  "individuals",
  "families",
  "professionals",
  "influencers",
  "executives",
  "business",
  "enterprise",
  "researchers",
  "security-teams",

  "why-track-the-breach",
  "our-vision",
  "our-mission",
  "market-opportunity",
  "technology",
  "security-architecture",
  "company-overview",
  "cybersecurity-future",

  "executive-protection",
  "employee-monitoring",
  "brand-protection",
  "enterprise-monitoring",
  "incident-intelligence",
  "identity-protection-for-business",

  "check-email-breach",
  "email-leak-checker",
  "phone-leak-checker",
  "digital-identity-protection",
  "identity-theft-protection",
  "online-privacy-protection",
  "personal-cybersecurity",
  "deepfake-detection",
  "fake-profile-detection",
  "online-impersonation-detection",
  "data-breach-monitoring",
  "government-id-exposure",
  "photo-misuse-detection",
  "video-misuse-detection",
  "account-takeover-prevention",
  "whatsapp-scam-protection",
  "sim-swap-protection",
  "cyber-safety-families",
  "executive-digital-protection",
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            <Route path="/help" element={<FAQPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/learn" element={<Blog />} />
            <Route path="/breach-library" element={<Blog />} />
            <Route path="/press" element={<About />} />

            <Route path="/trust-center" element={<TrustCenter />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/gdpr-compliance" element={<GDPRCompliance />} />
            <Route path="/dpdp-compliance" element={<DPDPCompliance />} />
            <Route path="/responsible-disclosure" element={<ResponsibleDisclosure />} />

            <Route path="/security" element={<SecurityOverview />} />
            <Route
              path="/data-processing-addendum"
              element={<DataProcessingAddendum />}
            />

            {CATEGORY_ROUTES.map((slug) => (
              <Route
                key={slug}
                path={`/${slug}`}
                element={<CategoryPage slug={slug} />}
              />
            ))}

            <Route
              path="*"
              element={<CategoryPage slug="__missing__" />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>

      <Toaster
        theme="dark"
        position="bottom-right"
      />
    </div>
  );
}

export default App;
