import { HOW_IT_WORKS } from "../../data/content";

export default function HowItWorks() {
  return (
    <section data-testid="how-it-works-section" className="relative py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300/90">How it works</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            From signup to intelligence in <span className="gradient-text">90 seconds.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0" />

          {HOW_IT_WORKS.map((s, i) => (
            <div
              key={s.step}
              data-testid={`step-${i}`}
              className="relative rounded-2xl bg-[#0B1226] border border-white/5 p-6 hover:border-indigo-500/30 transition"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-indigo-300/80">
                  Step
                </div>
                <div className="font-mono text-5xl font-extrabold text-white/10 tracking-tighter">
                  {s.step}
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/30" />
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
