import { HOW_IT_WORKS, APP_URL } from "../../data/content";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const COLORS = [
  "from-blue-500 to-indigo-500",
  "from-cyan-500 to-sky-500",
  "from-emerald-500 to-green-500",
  "from-amber-500 to-orange-500",
  "from-purple-500 to-fuchsia-500",
  "from-rose-500 to-pink-500",
  "from-slate-700 to-slate-900",
];

export default function UserJourney() {
  return (
    <section data-testid="user-journey-section" className="relative py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600">Your journey</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            From sign-up to <span className="gradient-text">always-on protection</span> — in minutes.
          </h2>
          <p className="mt-4 text-base text-slate-600">Seven simple steps. No credit card needed to start. Cancel any time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0" />
          {HOW_IT_WORKS.map((s, i) => (
            <div key={s.step} data-testid={`journey-step-${i}`} className="relative card-elev rounded-2xl p-5 hover:-translate-y-1 transition">
              <div className="flex items-start justify-between mb-4">
                <div className={`px-2.5 py-1 rounded-lg bg-gradient-to-br ${COLORS[i % COLORS.length]} font-mono text-[10px] uppercase tracking-[0.18em] text-white`}>Step {s.step}</div>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <h3 className="font-display text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href={`${APP_URL}/signup`} data-testid="journey-cta" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold transition shadow-[0_12px_40px_-12px_rgba(37,99,235,0.55)]">
            Start FREE Email Scan
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
