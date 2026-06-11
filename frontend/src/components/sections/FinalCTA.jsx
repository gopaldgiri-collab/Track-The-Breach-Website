import { ArrowRight, Shield } from "lucide-react";
import { APP_URL } from "../../data/content";

export default function FinalCTA() {
  return (
    <section data-testid="final-cta-section" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg-light radial-fade opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-300/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-purple-300/25 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-blue-200 text-xs font-mono uppercase tracking-[0.18em] text-blue-600 mb-8">
            <Shield className="w-3.5 h-3.5" />
            Your identity is a target — defend it now
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[1.05]">
            Protect your digital identity
            <br />
            <span className="gradient-text">before someone else finds it.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Create your account in 30 seconds — no credit card required. Pick a plan only when you&apos;re ready to run scans.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`${APP_URL}/signup`}
              data-testid="final-cta-primary"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold transition shadow-[0_14px_50px_-12px_rgba(37,99,235,0.5)] hover:shadow-[0_18px_60px_-12px_rgba(37,99,235,0.7)]"
            >
              Sign Up Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="/contact"
              data-testid="final-cta-secondary"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-slate-300 bg-white hover:border-blue-500 hover:text-blue-600 text-slate-900 font-medium transition"
            >
              Talk to Sales
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-600 max-w-2xl mx-auto">
            {[
              "No credit card required",
              "Cancel anytime",
              "SOC 2 Type II",
              "GDPR + DPDP aligned",
            ].map((b) => (
              <div key={b} className="px-3 py-2 rounded-lg border border-slate-200 bg-white/70">
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
