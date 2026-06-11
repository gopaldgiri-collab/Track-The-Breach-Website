import { WHY_US } from "../../data/content";
import * as Icons from "lucide-react";

const COLORS = [
  "from-blue-500 to-indigo-500",
  "from-purple-500 to-fuchsia-500",
  "from-cyan-500 to-sky-500",
  "from-emerald-500 to-green-500",
  "from-orange-500 to-amber-500",
  "from-rose-500 to-pink-500",
  "from-violet-500 to-purple-500",
  "from-teal-500 to-cyan-500",
];

export default function WhyUs() {
  return (
    <section data-testid="why-us-section" className="relative py-28 border-y border-slate-200/70 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Why Track The Breach</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Built different. Engineered for the threats coming next.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY_US.map((w, i) => {
            const Icon = Icons[w.icon] || Icons.Sparkles;
            return (
              <div
                key={w.title}
                data-testid={`why-us-card-${i}`}
                className="group card-elev rounded-2xl p-6 hover:-translate-y-1 transition duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${COLORS[i % COLORS.length]} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-base font-semibold text-slate-900">{w.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
