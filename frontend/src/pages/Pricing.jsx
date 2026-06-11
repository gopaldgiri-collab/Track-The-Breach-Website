import { useState } from "react";
import { PRICING_PLANS, CREDIT_USAGE, APP_URL } from "../data/content";
import { Check, ArrowRight, ShieldCheck, Sparkles, Lock, IndianRupee, DollarSign, CreditCard } from "lucide-react";
import * as Icons from "lucide-react";
import PageHero from "../components/PageHero";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";

const PLAN_COLORS = [
  { grad: "from-blue-500 to-indigo-500", chip: "bg-blue-50 text-blue-700 border-blue-200", glow: "shadow-[0_20px_60px_-20px_rgba(37,99,235,0.35)]" },
  { grad: "from-purple-500 to-fuchsia-500", chip: "bg-purple-50 text-purple-700 border-purple-200", glow: "shadow-[0_20px_60px_-20px_rgba(168,85,247,0.35)]" },
  { grad: "from-cyan-500 to-blue-500", chip: "bg-cyan-50 text-cyan-700 border-cyan-200", glow: "shadow-[0_20px_60px_-20px_rgba(6,182,212,0.4)]" },
  { grad: "from-orange-500 to-amber-500", chip: "bg-orange-50 text-orange-700 border-orange-200", glow: "shadow-[0_20px_60px_-20px_rgba(249,115,22,0.35)]" },
  { grad: "from-emerald-500 to-green-500", chip: "bg-emerald-50 text-emerald-700 border-emerald-200", glow: "shadow-[0_20px_60px_-20px_rgba(34,197,94,0.35)]" },
];

export default function Pricing() {
  const [currency, setCurrency] = useState("USD");

  return (
    <div data-testid="pricing-page">
      <PageHero
        eyebrow="PRICING"
        title="Pricing built to defend you — from today's breaches and tomorrow's threats."
        subtitle="Pay once. Use credits whenever you need a scan. They never expire — keep them for years if you want. Account creation is free, no credit card required at sign-up."
        icon="ShieldCheck"
      >
        <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-white border border-slate-200 shadow-sm" data-testid="currency-toggle">
          <button
            onClick={() => setCurrency("USD")}
            data-testid="currency-usd"
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition ${currency === "USD" ? "bg-blue-600 text-white shadow" : "text-slate-600 hover:text-slate-900"}`}
          >
            <DollarSign className="w-3.5 h-3.5" /> USD
          </button>
          <button
            onClick={() => setCurrency("INR")}
            data-testid="currency-inr"
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition ${currency === "INR" ? "bg-blue-600 text-white shadow" : "text-slate-600 hover:text-slate-900"}`}
          >
            <IndianRupee className="w-3.5 h-3.5" /> INR
          </button>
        </div>
      </PageHero>

      {/* Plan cards — row 1: 3 starter plans */}
      <section className="relative pb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">For individuals & growing teams</div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Choose how you start.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRICING_PLANS.slice(0, 3).map((p, i) => {
              const c = PLAN_COLORS[i];
              return (
                <div
                  key={p.name}
                  data-testid={`pricing-plan-${i}`}
                  className={`relative rounded-2xl p-6 flex flex-col transition bg-white border ${
                    p.highlight ? `border-blue-300 ring-2 ring-blue-500/30 ${c.glow}` : "border-slate-200 hover:-translate-y-1"
                  }`}
                >
                  {p.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.grad} flex items-center justify-center shadow-lg mb-4`}>
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>

                  <div className="text-xs font-mono uppercase tracking-[0.18em] text-slate-500 mb-1">{p.name}</div>
                  <div className={`text-sm font-display font-semibold inline-block w-fit px-2.5 py-0.5 rounded-md ${c.chip} border mb-2`}>
                    {p.tagline}
                  </div>
                  <p className="text-xs text-slate-500 min-h-[40px]">{p.audience}</p>

                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="font-display text-4xl font-extrabold text-slate-900 tracking-tighter">
                      {currency === "USD" ? p.priceUSD : p.priceINR}
                    </span>
                    <span className="text-xs text-slate-500">{p.period}</span>
                  </div>

                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 bg-slate-50 border border-slate-200 px-2 py-1 rounded-md w-fit">
                    <CreditCard className="w-3 h-3" />
                    {p.credits}
                  </div>
                  <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md w-fit">
                    <Check className="w-2.5 h-2.5" />
                    {p.creditNote}
                  </div>

                  <a
                    href={`${APP_URL}/signup?plan=${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                    data-testid={`pricing-cta-${i}`}
                    className={`mt-5 group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition ${
                      p.highlight
                        ? "bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow"
                        : "border border-slate-300 bg-white hover:border-blue-500 hover:text-blue-600 text-slate-900"
                    }`}
                  >
                    {p.cta}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                  </a>

                  <div className="mt-5 grid grid-cols-3 gap-1 text-[10px] uppercase tracking-wider text-slate-500 text-center">
                    <Cell label="Protection" value={p.protection} />
                    <Cell label="Monitoring" value={p.monitoring} />
                    <Cell label="Support" value={p.support} />
                  </div>

                  <ul className="mt-6 space-y-2.5 text-sm text-slate-700 flex-1">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-slate-200 text-[10px] font-mono text-slate-500">
                    Credits shown only as secondary information on detail dashboards.
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plan cards — row 2: 2 premium detailed plans */}
      <section className="relative pb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Premium & VIP-grade protection</div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">For executives, organizations & high-risk individuals.</h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> White-glove tier
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {PRICING_PLANS.slice(3).map((p, idx) => {
              const i = idx + 3;
              const c = PLAN_COLORS[i];
              return (
                <div
                  key={p.name}
                  data-testid={`pricing-plan-${i}`}
                  className={`relative rounded-2xl bg-white border border-slate-200 p-6 lg:p-9 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition ${c.glow}`}
                >
                  <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${c.grad} opacity-10 blur-3xl pointer-events-none`} />

                  <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Left: identity + price + CTA */}
                    <div className="md:col-span-5 flex flex-col">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.grad} flex items-center justify-center shadow-lg mb-5`}>
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>

                      <div className="text-xs font-mono uppercase tracking-[0.18em] text-slate-500 mb-1">{p.name}</div>
                      <div className={`text-sm font-display font-semibold inline-block w-fit px-2.5 py-0.5 rounded-md ${c.chip} border mb-3`}>
                        {p.tagline}
                      </div>
                      <p className="text-xs text-slate-500">{p.audience}</p>

                      <div className="mt-5 flex items-baseline gap-1.5 flex-wrap">
                        <span className="font-display text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tighter">
                          {currency === "USD" ? p.priceUSD : p.priceINR}
                        </span>
                        <span className="text-xs text-slate-500">{p.period}</span>
                      </div>

                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 bg-slate-50 border border-slate-200 px-2 py-1 rounded-md w-fit">
                        <CreditCard className="w-3 h-3" />
                        {p.credits}
                      </div>
                      <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md w-fit">
                        <Check className="w-2.5 h-2.5" />
                        {p.creditNote}
                      </div>

                      <a
                        href={`${APP_URL}/signup?plan=${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                        data-testid={`pricing-cta-${i}`}
                        className={`mt-6 group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition bg-gradient-to-br ${c.grad} text-white shadow hover:shadow-lg`}
                      >
                        {p.cta}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                      </a>

                      <div className="mt-5 grid grid-cols-3 gap-1 text-[10px] uppercase tracking-wider text-slate-500 text-center">
                        <Cell label="Protection" value={p.protection} />
                        <Cell label="Monitoring" value={p.monitoring} />
                        <Cell label="Support" value={p.support} />
                      </div>
                    </div>

                    {/* Right: features + extra benefits */}
                    <div className="md:col-span-7 md:border-l md:border-slate-200 md:pl-7">
                      <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600/80 mb-4">What&apos;s included</div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-slate-700">
                        {p.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="flex items-center gap-2 text-slate-600">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          SOC 2 Type II audited
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <Lock className="w-3.5 h-3.5 text-blue-600" />
                          Custom data residency
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <Sparkles className="w-3.5 h-3.5 text-fuchsia-600" />
                          Dedicated analyst & CSM
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <Check className="w-3.5 h-3.5 text-cyan-600" />
                          99.99% uptime SLA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reassurance */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium">
              <Lock className="w-3.5 h-3.5" /> Account creation is free — no credit card at sign-up
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-medium">
              Razorpay secure checkout · USD + INR supported
            </span>
          </div>
        </div>
      </section>

      {/* Credit usage */}
      <section className="py-20 border-y border-slate-200/70 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-10">
            <div className="lg:col-span-7">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Credit Usage</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Transparent. Predictable. No surprise bills.
              </h2>
            </div>
            <p className="lg:col-span-5 text-base text-slate-600">
              Each plan ships with a one-time credit pack. Credits never expire and are spent only when you run a scan — never on monitoring, alerts, or reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {CREDIT_USAGE.map((s, i) => {
              const Icon = Icons[s.icon] || Icons.Sparkles;
              return (
                <div key={i} data-testid={`credit-usage-${i}`} className="card-elev rounded-2xl p-5 flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${PLAN_COLORS[i % PLAN_COLORS.length].grad} flex items-center justify-center shadow`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-semibold text-slate-900">{s.service}</div>
                    <div className="text-xs text-slate-500 mt-0.5">Credits per scan</div>
                  </div>
                  <div className="font-mono text-2xl font-bold text-slate-900 tabular-nums">{s.credits}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reassurance row */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-4">
          {[
            { Icon: ShieldCheck, t: "30-day money back", d: "Not satisfied? Get a full refund. No questions, no retention games.", color: "from-emerald-500 to-green-500" },
            { Icon: Sparkles, t: "Free account creation", d: "Sign up without a credit card. Explore the dashboard before you pay.", color: "from-blue-500 to-indigo-500" },
            { Icon: Check, t: "Cancel anytime", d: "Self-serve cancellation in your account settings. No phone calls.", color: "from-purple-500 to-fuchsia-500" },
          ].map(({ Icon, t, d, color }, i) => (
            <div key={i} className="card-elev rounded-2xl p-6">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow mb-3`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display text-base font-semibold text-slate-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ limit={10} />
      <FinalCTA />
    </div>
  );
}

function Cell({ label, value }) {
  return (
    <div className="rounded-md py-1.5 bg-slate-50 border border-slate-200">
      <div className="text-[9px]">{label}</div>
      <div className="text-slate-700 mt-0.5 normal-case tracking-normal text-[10px]">{value}</div>
    </div>
  );
}
