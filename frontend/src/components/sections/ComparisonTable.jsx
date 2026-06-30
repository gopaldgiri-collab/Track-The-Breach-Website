import { COMPARISON_PLANS, COMPARISON_FEATURES, PRICING_PLANS, APP_URL } from "../../data/content";
import { Fragment } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// `variant` can be "full" (Pricing page) or "short" (Homepage)
export default function ComparisonTable({ variant = "full" }) {
  // For the short homepage variant, show only top-priority groups
  const groups = variant === "short"
    ? COMPARISON_FEATURES.filter((g) => ["Core Intelligence", "Email Intelligence", "AI & Monitoring"].includes(g.group))
    : COMPARISON_FEATURES;

  return (
    <section data-testid={`comparison-table-${variant}`} className="relative py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Compare plans</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Pick the protection that <span className="gradient-text">matches your risk.</span>
          </h2>
          {variant === "short" && (
            <p className="mt-3 text-sm text-slate-600">
              A quick look at the core differences. <Link to="/pricing" data-testid="comparison-see-full" className="text-blue-600 font-semibold hover:underline">See full comparison →</Link>
            </p>
          )}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm min-w-[820px]">
            <thead className="bg-slate-50 sticky top-0">
              <tr>
                <th className="text-left font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500 px-4 py-3 w-[28%]">Feature</th>
                {COMPARISON_PLANS.map((name) => {
                  const plan = PRICING_PLANS.find((p) => p.name === name);
                  return (
                    <th key={name} className="text-center px-3 py-3">
                      <div className="font-display font-bold text-slate-900 text-sm">{name}</div>
                      {plan && (
                        <div className="text-[10px] text-slate-500 font-medium mt-0.5">{plan.priceUSD} {plan.priceINR ? `/ ${plan.priceINR}` : ""}</div>
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {groups.map((g) => (
                <Fragment key={`g-${g.group}`}>
                  <tr className="bg-blue-50/40">
                    <td colSpan={COMPARISON_PLANS.length + 1} className="px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-blue-700 font-bold">
                      {g.group}
                    </td>
                  </tr>
                  {g.items.map((row, ri) => (
                    <tr key={`${g.group}-${ri}`} className="border-t border-slate-100">
                      <td className="px-4 py-3 text-slate-800 font-medium">{row.feature}</td>
                      {row.values.map((v, vi) => (
                        <td key={vi} className="text-center px-3 py-3">
                          {v === true ? (
                            <Check className="w-4 h-4 text-emerald-600 inline" />
                          ) : v === false ? (
                            <X className="w-4 h-4 text-slate-300 inline" />
                          ) : (
                            <span className="text-xs text-slate-700">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
              <tr className="border-t border-slate-200 bg-slate-50/60">
                <td className="px-4 py-4"></td>
                {COMPARISON_PLANS.map((name) => {
                  const slug = name.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <td key={name} className="text-center px-2 py-4">
                      <a href={`${APP_URL}/signup?plan=${slug}`} data-testid={`compare-cta-${slug}`} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold transition">
                        {name === "Free" ? "Start Free" : "Choose"} <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
