import { STATS } from "../../data/content";
import { Database, Layers, Globe2, Activity } from "lucide-react";

const ICONS = [Database, Layers, Globe2, Activity];
const COLORS = [
  "from-blue-500 to-indigo-500",
  "from-purple-500 to-fuchsia-500",
  "from-emerald-500 to-green-500",
  "from-orange-500 to-amber-500",
];

export default function TrustStats() {
  return (
    <section data-testid="trust-stats-section" className="relative py-20 border-y border-slate-200/70 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Trusted at scale</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Intelligence built on a planet-scale dataset.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={s.label}
                data-testid={`trust-stat-${i}`}
                className="group relative card-elev rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition duration-300"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${COLORS[i]} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-mono text-4xl md:text-5xl font-bold text-slate-900 tabular-nums tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-slate-600">{s.label}</div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            );
          })}
        </div>

        {/* Logo strip */}
        <div className="mt-16 text-center">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-6">Featured & relied upon by</div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-slate-400 text-sm">
            {["FORBES", "TECHCRUNCH", "WIRED", "BLOOMBERG", "REUTERS", "DARK READING", "CYBER NEWS", "THE HACKER NEWS"].map((l) => (
              <span key={l} className="font-display font-bold tracking-[0.18em] text-xs md:text-sm hover:text-slate-700 transition">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
