import { WHY_US } from "../../data/content";
import * as Icons from "lucide-react";

export default function WhyUs() {
  return (
    <section data-testid="why-us-section" className="relative py-28 border-y border-white/5 bg-gradient-to-b from-transparent via-[#070b1c] to-transparent">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-300/80">Why Track The Breach</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
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
                className="group rounded-2xl bg-[#0B1226] border border-white/5 p-6 hover:border-indigo-500/30 hover:-translate-y-1 transition duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-indigo-300" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{w.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
