import { HOW_IT_WORKS } from "../../data/content";

const STEP_COLORS = [
  "from-blue-500 to-indigo-500",
  "from-purple-500 to-fuchsia-500",
  "from-cyan-500 to-sky-500",
  "from-emerald-500 to-green-500",
];

export default function HowItWorks() {
  return (
    <section data-testid="how-it-works-section" className="relative py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600">How it works</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            From sign-up to intelligence in <span className="gradient-text">90 seconds.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0" />

          {HOW_IT_WORKS.map((s, i) => (
            <div
              key={s.step}
              data-testid={`step-${i}`}
              className="relative card-elev rounded-2xl p-6 hover:-translate-y-1 transition"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`px-2.5 py-1 rounded-lg bg-gradient-to-br ${STEP_COLORS[i]} font-mono text-[10px] uppercase tracking-[0.18em] text-white`}>
                  Step
                </div>
                <div className="font-mono text-5xl font-extrabold text-slate-200 tracking-tighter">
                  {s.step}
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
