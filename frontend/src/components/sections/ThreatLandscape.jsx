import { THREATS } from "../../data/content";
import * as Icons from "lucide-react";

export default function ThreatLandscape() {
  return (
    <section data-testid="threat-landscape-section" className="relative py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-rose-400/90">The modern threat landscape</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Your identity is under attack from <span className="text-rose-300">ten directions at once.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed">
            From credential dumps to deepfakes, attackers no longer pick a single vector. They combine them. Track The Breach watches every front so nothing slips through.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {THREATS.map((t, i) => {
            const Icon = Icons[t.icon] || Icons.AlertTriangle;
            return (
              <div
                key={t.title}
                data-testid={`threat-card-${i}`}
                className="group relative rounded-2xl bg-[#0B1226] border border-white/5 p-5 hover:border-rose-500/30 hover:-translate-y-1 transition duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:bg-rose-500/20 transition">
                  <Icon className="w-5 h-5 text-rose-300" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{t.title}</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
