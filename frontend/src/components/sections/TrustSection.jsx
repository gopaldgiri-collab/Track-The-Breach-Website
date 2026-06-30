import { TRUST_PILLARS } from "../../data/content";
import * as Icons from "lucide-react";

const TONES = [
  "from-blue-500 to-indigo-500",
  "from-emerald-500 to-green-500",
  "from-rose-500 to-pink-500",
  "from-purple-500 to-fuchsia-500",
  "from-cyan-500 to-sky-500",
  "from-amber-500 to-orange-500",
];

export default function TrustSection() {
  return (
    <section data-testid="trust-section" className="relative py-24 bg-slate-50/60 border-y border-slate-200/70">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Built on trust</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Enterprise-grade infrastructure. <span className="gradient-text">Consumer-friendly experience.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {TRUST_PILLARS.map((p, i) => {
            const Icon = Icons[p.icon] || Icons.ShieldCheck;
            return (
              <div key={i} data-testid={`trust-pillar-${i}`} className="card-elev rounded-2xl p-5 bg-white">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${TONES[i % TONES.length]} flex items-center justify-center shadow mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-display font-semibold text-slate-900">{p.title}</div>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
