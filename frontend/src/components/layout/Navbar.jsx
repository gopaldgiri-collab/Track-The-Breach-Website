import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { NAV, APP_URL, LOGO_URL, BRAND_MOTTO } from "../../data/content";

const MENUS = [
  { key: "product", label: "Product" },
  { key: "solutions", label: "Solutions" },
  { key: "resources", label: "Resources" },
  { key: "company", label: "Company" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
    setOpenMenu(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile drawer open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/70 shadow-sm" : "bg-white/50 backdrop-blur-md"
      }`}
    >
      {/* Motto strip */}
      <div className="hidden md:flex items-center justify-center gap-2 py-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white text-[11px] font-mono uppercase tracking-[0.25em]">
        <ShieldCheck className="w-3 h-3" />
        <span data-testid="brand-motto">{BRAND_MOTTO}</span>
      </div>

      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 relative">
          {/* Mobile-only hamburger on the left */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 -ml-2 text-slate-900 z-20"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand: centered on mobile, left on desktop */}
          <Link
            to="/"
            data-testid="navbar-logo"
            className="flex items-center gap-2.5 lg:gap-3 group absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <img src={LOGO_URL} alt="Track The Breach" className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 object-contain" />
            <span className="font-display font-bold text-slate-900 tracking-tight text-[14px] sm:text-[15px] lg:text-[17px] whitespace-nowrap">Track The Breach</span>
          </Link>

          {/* Mobile spacer to balance the hamburger so brand stays centered */}
          <div className="lg:hidden w-10 z-20" aria-hidden="true" />

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {MENUS.map((m) => (
              <li
                key={m.key}
                className="relative"
                onMouseEnter={() => setOpenMenu(m.key)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  data-testid={`nav-${m.key}-trigger`}
                  onClick={() => setOpenMenu(openMenu === m.key ? null : m.key)}
                  className="flex items-center gap-1 px-4 py-2 text-[15px] font-semibold text-slate-800 hover:text-blue-600 transition rounded-lg"
                >
                  {m.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === m.key ? "rotate-180" : ""}`} />
                </button>
                {openMenu === m.key && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                    <div className="glass-strong rounded-2xl p-3 shadow-2xl shadow-blue-900/10 w-[520px] grid grid-cols-2 gap-1">
                      {NAV[m.key].map((item) => (
                        <Link
                          key={item.to + item.label}
                          to={item.to}
                          data-testid={`nav-${m.key}-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="group flex flex-col gap-0.5 px-3 py-2.5 rounded-xl hover:bg-blue-50 transition"
                        >
                          <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition flex items-center gap-1">
                            {item.label}
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition" />
                          </span>
                          {item.desc && <span className="text-xs text-slate-500">{item.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/pricing"
                data-testid="nav-pricing"
                className="px-4 py-2 text-[15px] font-semibold text-slate-800 hover:text-blue-600 transition rounded-lg"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/sample-report"
                data-testid="nav-sample-report"
                className="px-4 py-2 text-[15px] font-semibold text-slate-800 hover:text-blue-600 transition rounded-lg"
              >
                Sample Report
              </Link>
            </li>
            <li>
              <Link
                to="/free-email-scan"
                data-testid="nav-free-scan"
                className="px-4 py-2 text-[15px] font-semibold text-blue-700 hover:text-blue-800 transition rounded-lg"
              >
                Free Scan
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`${APP_URL}/login`}
              data-testid="navbar-login"
              className="px-4 py-2 text-[15px] font-semibold text-slate-800 hover:text-blue-600 transition"
            >
              Log in
            </a>
            <a
              href={`${APP_URL}/signup`}
              data-testid="navbar-signup"
              className="group relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-bold transition shadow-[0_10px_30px_-8px_rgba(37,99,235,0.65)] ring-2 ring-blue-500/0 hover:ring-blue-500/30"
            >
              Start Scanning Free
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile drawer + backdrop — portaled to document.body so they escape the
          header's backdrop-filter containing block (otherwise the fixed overlay
          collapses to height:0 and clicks are not received). */}
      {typeof document !== "undefined" && createPortal(
        <>
          {/* Backdrop */}
          <div
            data-testid="mobile-menu-backdrop"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
            className={`lg:hidden fixed inset-0 top-16 bg-slate-900/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
              mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          />

          {/* Drawer */}
          <div
            data-testid="mobile-menu"
            className={`lg:hidden fixed left-3 right-3 top-[68px] z-50 transform transition-all duration-300 ease-out ${
              mobileOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-4 opacity-0 pointer-events-none"
            }`}
          >
            <div className="rounded-3xl glass-strong shadow-2xl shadow-blue-900/15 overflow-hidden max-h-[80vh] overflow-y-auto">
              <div className="p-3">
                {MENUS.map((m, idx) => {
                  const isOpen = mobileSection === m.key;
                  return (
                    <div
                      key={m.key}
                      className="rounded-2xl overflow-hidden mb-2 last:mb-0 border border-slate-200/70 bg-white/60"
                      style={{ animationDelay: `${idx * 60}ms` }}
                    >
                      <button
                        onClick={() => setMobileSection(isOpen ? null : m.key)}
                        data-testid={`mobile-section-${m.key}`}
                        className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-blue-50/60 transition"
                        aria-expanded={isOpen}
                      >
                        <span className="text-[15px] font-semibold text-slate-900">{m.label}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-2 pb-3 grid grid-cols-1 gap-1">
                            {NAV[m.key].map((item) => (
                              <Link
                                key={item.to + item.label}
                                to={item.to}
                                data-testid={`mobile-nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                className="block px-3 py-2.5 rounded-xl text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                              >
                                <span className="font-medium">{item.label}</span>
                                {item.desc && <span className="block text-[11px] text-slate-500 mt-0.5">{item.desc}</span>}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Direct links */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Link to="/pricing" data-testid="mobile-pricing" className="rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition text-center">
                    Pricing
                  </Link>
                  <Link to="/sample-report" data-testid="mobile-sample-report" className="rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition text-center">
                    Sample Report
                  </Link>
                  <Link to="/free-email-scan" data-testid="mobile-free-scan" className="rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition text-center">
                    Free Email ID Scan
                  </Link>
                  <Link to="/contact" data-testid="mobile-contact" className="rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition text-center">
                    Contact
                  </Link>
                </div>

                {/* CTAs */}
                <div className="mt-3 flex flex-col gap-2">
                  <a href={`${APP_URL}/login`} data-testid="mobile-login" className="rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm font-semibold text-slate-800 hover:text-blue-600 transition text-center">
                    Log in
                  </a>
                  <a
                    href={`${APP_URL}/signup`}
                    data-testid="mobile-signup"
                    className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold px-4 py-3 text-center shadow-[0_12px_30px_-12px_rgba(37,99,235,0.55)]"
                  >
                    Start Scanning Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </header>
  );
}
