import { UPGRADE_UNLOCKS, APP_URL } from "../../data/content";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";

const TONES = [
  "from-blue-500 to-indigo-500",
  "from-rose-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-purple-500 to-fuchsia-500",
  "from-emerald-500 to-green-500",
  "from-cyan-500 to-sky-500",
  "from-fuchsia-500 to-purple-500",
  "from-slate-700 to-slate-900",
];

export default function WhyUpgrade() {
  return (
    <section data-testid="why-upgrade-section" className="relative py-28 bg-slate-50/60 border-y border-slate-200/70">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Why upgrade</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Free gets you the headline. <span className="gradient-text">Paid gives you the playbook.</span>
            </h2>
            <p className="mt-4 text-base text-slate-600">
              The full Executive Report unlocks the timeline, exposed fields, dark-web intelligence and AI actions — for just $1.99 / ₹149 one-time. Credits never expire.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href={`${APP_URL}/signup`} data-testid="why-upgrade-cta" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold transition shadow">
              Unlock Full Report <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/pricing" data-testid="why-upgrade-pricing" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:border-blue-500 hover:text-blue-600 text-slate-900 text-sm font-semibold transition">
              See Pricing
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {UPGRADE_UNLOCKS.map((u, i) => {
            const Icon = Icons[u.icon] || Lock;
            return (
              <div key={i} data-testid={`upgrade-unlock-${i}`} className="card-elev rounded-2xl p-4 bg-white">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${TONES[i % TONES.length]} flex items-center justify-center shadow mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-display font-semibold text-slate-900 text-sm">{u.title}</div>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{u.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
