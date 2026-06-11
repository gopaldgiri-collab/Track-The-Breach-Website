import { ArrowRight, Shield } from "lucide-react";
import { APP_URL } from "../../data/content";

export default function FinalCTA() {
  return (
    <section data-testid="final-cta-section" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-indigo-500/30 text-xs font-mono uppercase tracking-[0.18em] text-indigo-300/90 mb-8">
            <Shield className="w-3.5 h-3.5" />
            Your identity is a target — defend it now
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.05]">
            Protect your digital identity
            <br />
            <span className="gradient-text">before someone else finds it.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Run a free Exposure Report in 90 seconds. Upgrade only if you want continuous monitoring, takedowns, and concierge support.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`${APP_URL}/signup`}
              data-testid="final-cta-primary"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition shadow-[0_0_50px_rgba(79,70,229,0.4)] hover:shadow-[0_0_70px_rgba(79,70,229,0.6)]"
            >
              Get Free Exposure Report
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="/contact"
              data-testid="final-cta-secondary"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/15 hover:border-cyan-500/60 hover:text-cyan-300 text-white font-medium transition"
            >
              Talk to Sales
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-400 max-w-2xl mx-auto">
            {[
              "No credit card required",
              "Cancel anytime",
              "SOC 2 Type II",
              "GDPR + DPDP aligned",
            ].map((b) => (
              <div key={b} className="px-3 py-2 rounded-lg border border-white/5 bg-white/[0.02]">
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
