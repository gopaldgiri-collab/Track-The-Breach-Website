import { Link } from "react-router-dom";
import { MONITORING } from "../../data/content";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";

const COLOR_MAP = {
  indigo: { grad: "from-blue-500 to-indigo-500", chip: "bg-blue-50 border-blue-200 text-blue-700" },
  cyan: { grad: "from-cyan-500 to-sky-500", chip: "bg-cyan-50 border-cyan-200 text-cyan-700" },
  violet: { grad: "from-violet-500 to-purple-500", chip: "bg-violet-50 border-violet-200 text-violet-700" },
  amber: { grad: "from-amber-500 to-orange-500", chip: "bg-amber-50 border-amber-200 text-amber-700" },
  rose: { grad: "from-rose-500 to-pink-500", chip: "bg-rose-50 border-rose-200 text-rose-700" },
  fuchsia: { grad: "from-fuchsia-500 to-pink-500", chip: "bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700" },
  red: { grad: "from-red-500 to-rose-500", chip: "bg-red-50 border-red-200 text-red-700" },
  emerald: { grad: "from-emerald-500 to-green-500", chip: "bg-emerald-50 border-emerald-200 text-emerald-700" },
};

export default function WhatWeMonitor() {
  return (
    <section data-testid="what-we-monitor-section" className="relative py-28 border-y border-slate-200/70 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 items-end">
          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">What we monitor</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Eight modules. One identity graph.
            </h2>
          </div>
          <p className="text-base text-slate-600 md:text-right">
            Activate the modules you need. We correlate every signal into one Risk Score.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MONITORING.map((m, i) => {
            const Icon = Icons[m.icon] || Icons.ShieldCheck;
            const colors = COLOR_MAP[m.color] || COLOR_MAP.indigo;
            return (
              <Link
                key={m.title}
                to={m.to}
                data-testid={`monitor-card-${i}`}
                className="group relative overflow-hidden card-elev rounded-2xl p-6 hover:-translate-y-1 transition duration-300"
              >
                <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${colors.grad} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="relative font-display text-lg font-semibold text-slate-900 flex items-center justify-between gap-2">
                  {m.title}
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition" />
                </h3>
                <p className="relative mt-2 text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                <div className="relative mt-5 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em] text-slate-500 group-hover:text-blue-600 transition">
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
