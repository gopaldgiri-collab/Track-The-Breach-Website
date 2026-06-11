import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Shield, ArrowUpRight } from "lucide-react";
import { NAV, APP_URL } from "../../data/content";

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
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050816]/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" data-testid="navbar-logo" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-50 group-hover:opacity-80 transition" />
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-white tracking-tight text-[15px]">Track The Breach</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-indigo-300/80">Identity Intelligence</span>
            </div>
          </Link>

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
                  className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition rounded-lg"
                >
                  {m.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === m.key ? "rotate-180" : ""}`} />
                </button>
                {openMenu === m.key && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                    <div className="glass-strong rounded-2xl p-3 shadow-2xl shadow-black/60 w-[520px] grid grid-cols-2 gap-1">
                      {NAV[m.key].map((item) => (
                        <Link
                          key={item.to + item.label}
                          to={item.to}
                          data-testid={`nav-${m.key}-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className="group flex flex-col gap-0.5 px-3 py-2.5 rounded-xl hover:bg-white/5 transition"
                        >
                          <span className="text-sm font-medium text-white group-hover:text-cyan-300 transition flex items-center gap-1">
                            {item.label}
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition" />
                          </span>
                          {item.desc && <span className="text-xs text-slate-400">{item.desc}</span>}
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
                className="px-4 py-2 text-sm text-slate-300 hover:text-white transition rounded-lg"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                data-testid="nav-contact"
                className="px-4 py-2 text-sm text-slate-300 hover:text-white transition rounded-lg"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`${APP_URL}/login`}
              data-testid="navbar-login"
              className="px-4 py-2 text-sm text-slate-300 hover:text-white transition"
            >
              Log in
            </a>
            <a
              href={`${APP_URL}/signup`}
              data-testid="navbar-signup"
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition shadow-[0_0_30px_rgba(79,70,229,0.35)]"
            >
              Sign Up Free
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div data-testid="mobile-menu" className="lg:hidden pb-6 pt-2 max-h-[80vh] overflow-y-auto">
            {MENUS.map((m) => (
              <div key={m.key} className="border-t border-white/5 py-3">
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-indigo-300/80 px-1 mb-2">
                  {m.label}
                </div>
                <div className="grid grid-cols-1 gap-0.5">
                  {NAV[m.key].slice(0, 6).map((item) => (
                    <Link
                      key={item.to + item.label}
                      to={item.to}
                      data-testid={`mobile-nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="px-1 py-2 text-sm text-slate-200 hover:text-cyan-300 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="border-t border-white/5 pt-4 flex flex-col gap-2">
              <Link to="/pricing" className="px-1 py-2 text-sm text-slate-200" data-testid="mobile-pricing">Pricing</Link>
              <Link to="/contact" className="px-1 py-2 text-sm text-slate-200" data-testid="mobile-contact">Contact</Link>
              <a href={`${APP_URL}/login`} data-testid="mobile-login" className="px-1 py-2 text-sm text-slate-200">Log in</a>
              <a
                href={`${APP_URL}/signup`}
                data-testid="mobile-signup"
                className="mt-1 text-center px-4 py-3 rounded-lg bg-indigo-600 text-white text-sm font-semibold"
              >
                Sign Up Free
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
