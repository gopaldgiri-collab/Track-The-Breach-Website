import { Link } from "react-router-dom";
import { SOLUTIONS_CARDS } from "../../data/content";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export default function SolutionsGrid() {
  return (
    <section data-testid="solutions-grid-section" className="relative py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300/80">Solutions</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Protection for every kind of identity.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SOLUTIONS_CARDS.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.User;
            return (
              <Link
                key={s.title}
                to={s.to}
                data-testid={`solution-card-${i}`}
                className="group relative rounded-2xl bg-[#0F172A] border border-white/5 p-6 hover:border-cyan-500/30 transition"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-300" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
