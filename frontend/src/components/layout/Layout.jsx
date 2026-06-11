import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FBFCFF] text-slate-900 relative">
      {/* Floating ambient gradient orbs */}
      <div className="ambient-bg" aria-hidden="true">
        <span className="orb-green" />
        <span className="orb-orange" />
        <span className="orb-cyan" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="pt-24 lg:pt-28">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
