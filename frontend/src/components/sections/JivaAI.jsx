import { JIVA_AI } from "../../data/content";
import * as Icons from "lucide-react";
import { Sparkles, Clock } from "lucide-react";

export default function JivaAI() {
  return (
    <section data-testid="jiva-ai-section" className="relative py-28 overflow-hidden">
      <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-purple-200 text-xs font-mono uppercase tracking-[0.18em] text-purple-700">
            <Sparkles className="w-3 h-3" />
            <span>Meet {JIVA_AI.name}</span>
          </div>
          <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            {JIVA_AI.tagline}.
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">{JIVA_AI.intro}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Today */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 lg:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available today
              </span>
            </div>
            <h3 className="mt-3 font-display text-xl font-bold text-slate-900">What Jiva does for you now</h3>
            <ul className="mt-5 space-y-3">
              {JIVA_AI.current.map((c, i) => {
                const Icon = Icons[c.icon] || Sparkles;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-slate-900 text-sm">{c.title}</div>
                      <p className="text-xs text-slate-600 mt-0.5">{c.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Roadmap */}
          <div className="rounded-3xl bg-gradient-to-br from-purple-50 via-white to-blue-50 border border-purple-200 p-6 lg:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-bold uppercase tracking-wider">
                <Clock className="w-2.5 h-2.5" /> Coming Soon
              </span>
            </div>
            <h3 className="mt-3 font-display text-xl font-bold text-slate-900">Where Jiva is heading</h3>
            <ul className="mt-5 space-y-3">
              {JIVA_AI.roadmap.map((c, i) => {
                const Icon = Icons[c.icon] || Sparkles;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-slate-900 text-sm">{c.title}</div>
                      <p className="text-xs text-slate-600 mt-0.5">{c.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 text-[11px] text-slate-500 italic">Coming Soon features are in active development and not yet generally available.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
