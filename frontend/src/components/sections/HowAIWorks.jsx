import { AI_PIPELINE } from "../../data/content";
import * as Icons from "lucide-react";
import { ChevronRight } from "lucide-react";

const TONES = [
  "from-blue-500 to-indigo-500",
  "from-cyan-500 to-sky-500",
  "from-emerald-500 to-green-500",
  "from-fuchsia-500 to-purple-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
];

export default function HowAIWorks() {
  return (
    <section data-testid="how-ai-works-section" className="relative py-28 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">How our AI works</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            One person. Dozens of identifiers. <span className="gradient-text">One AI brain.</span>
          </h2>
          <p className="mt-5 text-base text-slate-600 leading-relaxed">
            Our AI correlates every piece of your digital footprint — emails, phones, social, photos, government IDs, dark-web mentions — into a single Digital Identity Graph, then writes you a personalized Executive Report.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {AI_PIPELINE.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.Sparkles;
            const tone = TONES[i % TONES.length];
            return (
              <div key={i} data-testid={`ai-step-${i}`} className="relative card-elev rounded-2xl p-4 hover:-translate-y-1 transition">
                <div className="absolute top-2 right-3 font-mono text-[10px] text-slate-400 tabular-nums">{String(i + 1).padStart(2, "0")}</div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tone} flex items-center justify-center shadow mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-display font-semibold text-slate-900 text-sm">{s.title}</div>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                {i < AI_PIPELINE.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
