import { Link } from "react-router-dom";
import { MONITORING } from "../../data/content";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";

const COLOR_MAP = {
  indigo: "from-indigo-500/30 to-indigo-500/0 border-indigo-500/30 text-indigo-300",
  cyan: "from-cyan-500/30 to-cyan-500/0 border-cyan-500/30 text-cyan-300",
  violet: "from-violet-500/30 to-violet-500/0 border-violet-500/30 text-violet-300",
  amber: "from-amber-500/30 to-amber-500/0 border-amber-500/30 text-amber-300",
  rose: "from-rose-500/30 to-rose-500/0 border-rose-500/30 text-rose-300",
  fuchsia: "from-fuchsia-500/30 to-fuchsia-500/0 border-fuchsia-500/30 text-fuchsia-300",
  red: "from-red-500/30 to-red-500/0 border-red-500/30 text-red-300",
  emerald: "from-emerald-500/30 to-emerald-500/0 border-emerald-500/30 text-emerald-300",
};

export default function WhatWeMonitor() {
  return (
    <section data-testid="what-we-monitor-section" className="relative py-28 bg-[#070b1c]/40 border-y border-white/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 items-end">
          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-300/80">What we monitor</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              Eight modules. One identity graph.
            </h2>
          </div>
          <p className="text-base text-slate-400 md:text-right">
            Activate the modules you need. We correlate every signal into one Risk Score.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MONITORING.map((m, i) => {
            const Icon = Icons[m.icon] || Icons.ShieldCheck;
            const colors = COLOR_MAP[m.color];
            return (
              <Link
                key={m.title}
                to={m.to}
                data-testid={`monitor-card-${i}`}
                className="group relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/5 p-6 hover:border-white/15 transition duration-300"
              >
                <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${colors.split(" ").slice(0,2).join(" ")} blur-2xl opacity-50 group-hover:opacity-80 transition`} />
                <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${colors.split(" ").slice(0,2).join(" ")} border ${colors.split(" ")[2]} flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 ${colors.split(" ")[3]}`} />
                </div>
                <h3 className="relative font-display text-lg font-semibold text-white flex items-center justify-between gap-2">
                  {m.title}
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition" />
                </h3>
                <p className="relative mt-2 text-sm text-slate-400 leading-relaxed">{m.desc}</p>
                <div className="relative mt-5 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em] text-slate-500 group-hover:text-cyan-300 transition">
                  Explore module
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
