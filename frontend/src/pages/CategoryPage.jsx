import { useParams } from "react-router-dom";
import { PAGES, APP_URL } from "../data/content";
import PageHero from "../components/PageHero";
import FinalCTA from "../components/sections/FinalCTA";
import SolutionsGrid from "../components/sections/SolutionsGrid";
import FAQ from "../components/sections/FAQ";
import * as Icons from "lucide-react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const FEATURE_COLORS = [
  "from-blue-500 to-indigo-500",
  "from-purple-500 to-fuchsia-500",
  "from-cyan-500 to-sky-500",
  "from-emerald-500 to-green-500",
  "from-orange-500 to-amber-500",
  "from-rose-500 to-pink-500",
];

export default function CategoryPage({ slug }) {
  const params = useParams();
  const key = slug || params.slug;
  const page = PAGES[key];

  if (!page) {
    return (
      <div className="container mx-auto px-6 py-32 text-center" data-testid="category-page-missing">
        <h1 className="font-display text-4xl text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you&apos;re looking for is being prepared.</p>
        <a href="/" className="mt-6 inline-block text-blue-600">← Back to home</a>
      </div>
    );
  }

  return (
    <div data-testid={`category-page-${key}`}>
      <PageHero eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} icon={page.icon}>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`${APP_URL}/signup`}
            data-testid="category-cta-primary"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold transition shadow-[0_12px_40px_-12px_rgba(37,99,235,0.55)]"
          >
            Sign Up Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="/contact"
            data-testid="category-cta-secondary"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 bg-white hover:border-blue-500 hover:text-blue-600 text-slate-900 font-medium transition"
          >
            Talk to Sales
          </a>
        </div>
      </PageHero>

      {/* Feature grid */}
      <section className="relative py-20 border-y border-slate-200/70 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.features.map((f, i) => {
              const Icon = Icons[f.icon] || Icons.Sparkles;
              return (
                <div
                  key={i}
                  data-testid={`category-feature-${i}`}
                  className="card-elev rounded-2xl p-6 hover:-translate-y-1 transition"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${FEATURE_COLORS[i % FEATURE_COLORS.length]} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outcome strip */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600">Outcomes</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Measurable defense, week after week.
              </h2>
              <p className="mt-5 text-base text-slate-600 leading-relaxed">
                Every alert is scored, prioritized, and shipped with remediation. You&apos;ll watch your Risk Score fall — measurably, monthly.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { stat: "−71%", label: "Reduction in false positives vs legacy tools" },
                { stat: "<90s", label: "Median scan completion time" },
                { stat: "24h", label: "Average managed-takedown turnaround" },
                { stat: "99.99%", label: "Platform uptime SLA" },
              ].map((s, i) => (
                <div key={i} className="card-elev rounded-2xl p-5">
                  <div className="font-mono text-3xl font-bold text-slate-900 tabular-nums">{s.stat}</div>
                  <div className="mt-1 text-xs text-slate-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-14 border-y border-slate-200/70">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              Built on the same engine trusted by individuals, Fortune 500 enterprises, and governments worldwide.
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              {["SOC 2 Type II", "ISO 27001", "GDPR Aligned", "DPDP Aligned"].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-slate-200 bg-white text-slate-700">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SolutionsGrid />
      <FAQ limit={8} />
      <FinalCTA />
    </div>
  );
}
