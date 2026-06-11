import { Link } from "react-router-dom";
import { Shield, Twitter, Linkedin, Github, Youtube, Globe2 } from "lucide-react";
import { NAV, APP_URL } from "../../data/content";

const SOCIAL = [
  { Icon: Twitter, href: "https://twitter.com", label: "twitter" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "linkedin" },
  { Icon: Github, href: "https://github.com", label: "github" },
  { Icon: Youtube, href: "https://youtube.com", label: "youtube" },
];

const SEO_LINKS = [
  { label: "Check Email Breach", to: "/check-email-breach" },
  { label: "Email Leak Checker", to: "/email-leak-checker" },
  { label: "Phone Leak Checker", to: "/phone-leak-checker" },
  { label: "Digital Identity Protection", to: "/digital-identity-protection" },
  { label: "Identity Theft Protection", to: "/identity-theft-protection" },
  { label: "Dark Web Monitoring", to: "/dark-web-monitoring" },
  { label: "Online Privacy Protection", to: "/online-privacy-protection" },
  { label: "Personal Cybersecurity", to: "/personal-cybersecurity" },
  { label: "Deepfake Detection", to: "/deepfake-detection" },
  { label: "Fake Profile Detection", to: "/fake-profile-detection" },
  { label: "Online Impersonation", to: "/online-impersonation-detection" },
  { label: "Data Breach Monitoring", to: "/data-breach-monitoring" },
  { label: "Government ID Exposure", to: "/government-id-exposure" },
  { label: "Photo Misuse Detection", to: "/photo-misuse-detection" },
  { label: "Video Misuse Detection", to: "/video-misuse-detection" },
  { label: "Account Takeover", to: "/account-takeover-prevention" },
  { label: "WhatsApp Scam Protection", to: "/whatsapp-scam-protection" },
  { label: "SIM Swap Protection", to: "/sim-swap-protection" },
  { label: "Cyber Safety for Families", to: "/cyber-safety-families" },
  { label: "Executive Digital Protection", to: "/executive-digital-protection" },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative border-t border-white/5 bg-[#040611] mt-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="container mx-auto px-6 lg:px-8 pt-20 pb-10">
        {/* Top brand row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5" data-testid="footer-logo">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-white text-[15px]">Track The Breach</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-indigo-300/80">Identity Intelligence</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-sm leading-relaxed">
              AI-powered Digital Identity Protection and Breach Intelligence for individuals, families, professionals, and enterprises worldwide.
            </p>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-mono text-slate-500">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Operating in 50+ countries</span>
            </div>
            <div className="mt-6 flex items-center gap-2">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-testid={`footer-social-${label}`}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterCol title="Product" items={NAV.product.slice(0, 8)} testidPrefix="footer-product" />
            <FooterCol title="Solutions" items={NAV.solutions} testidPrefix="footer-solutions" />
            <FooterCol title="Resources" items={NAV.resources} testidPrefix="footer-resources" />
            <FooterCol title="Company" items={NAV.company} testidPrefix="footer-company" />
          </div>
        </div>

        {/* SEO link cloud */}
        <div className="border-t border-white/5 pt-10 pb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-indigo-300/80">Free Tools & SEO</div>
            <Link to="/pricing" className="text-xs text-slate-400 hover:text-white" data-testid="footer-see-pricing">
              See all plans →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-2">
            {SEO_LINKS.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                data-testid={`footer-seo-${s.to.replace(/[^a-z0-9]+/g, "-").replace(/^-/, "")}`}
                className="text-xs text-slate-500 hover:text-cyan-300 transition truncate"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Track The Breach. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <Link to="/trust-center" data-testid="footer-trust" className="hover:text-white">Trust Center</Link>
            <Link to="/trust-center#privacy" data-testid="footer-privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/trust-center#terms" data-testid="footer-terms" className="hover:text-white">Terms</Link>
            <Link to="/trust-center#gdpr" data-testid="footer-gdpr" className="hover:text-white">GDPR</Link>
            <Link to="/trust-center#dpdp" data-testid="footer-dpdp" className="hover:text-white">DPDP</Link>
            <a href="https://status.trackthebreach.com" className="hover:text-white inline-flex items-center gap-1.5" data-testid="footer-status">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All systems operational
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items, testidPrefix }) {
  return (
    <div>
      <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-indigo-300/80 mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.to + item.label}>
            <Link
              to={item.to}
              data-testid={`${testidPrefix}-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="text-sm text-slate-400 hover:text-white transition"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
