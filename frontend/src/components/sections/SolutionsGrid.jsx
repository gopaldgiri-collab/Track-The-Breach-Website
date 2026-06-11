import { Link } from "react-router-dom";
import { SOLUTIONS_CARDS } from "../../data/content";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";

const COLORS = [
  "from-blue-500 to-indigo-500",
  "from-purple-500 to-fuchsia-500",
  "from-cyan-500 to-sky-500",
  "from-emerald-500 to-green-500",
  "from-orange-500 to-amber-500",
  "from-rose-500 to-pink-500",
  "from-violet-500 to-purple-500",
  "from-teal-500 to-cyan-500",
  "from-indigo-500 to-blue-500",
];

export default function SolutionsGrid() {
  return (
    <section data-testid="solutions-grid-section" className="relative py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600">Solutions</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
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
                className="group relative card-elev rounded-2xl p-6 hover:-translate-y-1 transition"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${COLORS[i % COLORS.length]} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
