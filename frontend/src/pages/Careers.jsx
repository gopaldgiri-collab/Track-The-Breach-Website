import PageHero from "../components/PageHero";
import { JOBS } from "../data/content";
import { ArrowRight, Heart, Globe2, Brain, Coffee, Zap, ShieldCheck } from "lucide-react";

const BENEFITS = [
  { Icon: Globe2, t: "Remote-first", d: "Work from anywhere. 5 offices for those who want them.", color: "from-blue-500 to-indigo-500" },
  { Icon: Heart, t: "Comprehensive healthcare", d: "Global health, dental, vision for you & dependents.", color: "from-rose-500 to-pink-500" },
  { Icon: Brain, t: "Learning budget", d: "$2,500 / year for courses, books, conferences.", color: "from-purple-500 to-fuchsia-500" },
  { Icon: Coffee, t: "Unlimited PTO", d: "Minimum 25 days. We enforce a take-them culture.", color: "from-amber-500 to-orange-500" },
  { Icon: Zap, t: "Top-tier equipment", d: "Latest MacBook Pro, accessory budget, home-office stipend.", color: "from-cyan-500 to-blue-500" },
  { Icon: ShieldCheck, t: "Identity protection", d: "Full Secure plan for every employee and family.", color: "from-emerald-500 to-green-500" },
];

export default function Careers() {
  return (
    <div data-testid="careers-page">
      <PageHero
        eyebrow="CAREERS"
        title="Build the future of digital identity defense."
        subtitle="We're hiring world-class engineers, researchers, designers, and operators who want to protect the next billion identities."
        icon="Sparkles"
      />

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600">Culture</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">A small team. Outsized impact.</h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              We move fast, ship every week, and trust each other to disagree well. The best ideas win regardless of seniority. Engineering, product, and design sit at the same table.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {["Ship-every-week mindset", "Rigorous, kind feedback", "Customer obsession over ego", "Boring stack where it matters; daring where it counts"].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BENEFITS.map(({ Icon, t, d, color }, i) => (
              <div key={i} className="card-elev rounded-2xl p-5">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow mb-3`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-sm">{t}</h3>
                <p className="mt-1 text-xs text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-slate-200/70 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Open positions</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">We&apos;re hiring across every team.</h2>
            </div>
            <a href="mailto:careers@trackthebreach.com" data-testid="careers-general-apply" className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold">
              Don&apos;t see your role? Apply anyway <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="space-y-2">
            {JOBS.map((j, i) => (
              <a
                key={i}
                href="#"
                data-testid={`job-${i}`}
                className="group flex items-center gap-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 px-5 py-4 transition"
              >
                <div className="text-xs font-mono uppercase tracking-[0.15em] text-blue-600/80 w-32 flex-shrink-0">{j.team}</div>
                <div className="flex-1 font-display text-slate-900 font-medium">{j.role}</div>
                <div className="hidden md:block text-xs text-slate-500">{j.location}</div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
