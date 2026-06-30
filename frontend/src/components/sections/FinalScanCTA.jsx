import { APP_URL } from "../../data/content";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalScanCTA() {
  return (
    <section data-testid="final-scan-cta" className="relative py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white p-10 md:p-16 text-center shadow-2xl overflow-hidden">
          <div className="absolute -top-32 -right-20 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-white/70">Start free</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tight">
              Start with one <span className="text-cyan-200">Free Email ID Scan.</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
              Know where your digital identity is exposed before someone else does. Results in under 2 minutes — no credit card.
            </p>
            <a href={`${APP_URL}/signup`} data-testid="final-scan-cta-button" className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-blue-700 hover:bg-blue-50 text-base font-semibold transition shadow">
              Start Scanning Free <ArrowRight className="w-4 h-4" />
            </a>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-blue-100">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> Free Email ID Scan</span>
              <span className="text-white/40">·</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> No Credit Card</span>
              <span className="text-white/40">·</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> AI Powered</span>
              <span className="text-white/40">·</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> 2-minute results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
