import { PRICING_PLANS, APP_URL } from "../data/content";
import { Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";

const COMPARE = [
  { label: "Email Monitoring", plans: [true, true, true, true, true] },
  { label: "Phone Monitoring", plans: [false, true, true, true, true] },
  { label: "Social Media Monitoring", plans: [false, true, true, true, true] },
  { label: "Government ID Monitoring", plans: [false, false, true, true, true] },
  { label: "Photo Exposure Detection", plans: [false, true, true, true, true] },
  { label: "Video & Deepfake Detection", plans: [false, false, true, true, true] },
  { label: "Dark Web Monitoring", plans: [false, true, true, true, true] },
  { label: "Digital Footprint Analysis", plans: [false, true, true, true, true] },
  { label: "AI Risk Intelligence", plans: [false, true, true, true, true] },
  { label: "Managed Takedowns", plans: [false, false, "10/mo", "Unlimited", "Unlimited"] },
  { label: "REST API + Webhooks", plans: [false, false, true, true, true] },
  { label: "SSO / SAML / SCIM", plans: [false, false, false, true, true] },
  { label: "SIEM / SOAR Integrations", plans: [false, false, false, true, true] },
  { label: "Dedicated Security Analyst", plans: [false, false, false, true, true] },
  { label: "24/7 Crisis Hotline", plans: [false, false, false, false, true] },
];

export default function Pricing() {
  return (
    <div data-testid="pricing-page">
      <PageHero
        eyebrow="PRICING"
        title="Outcomes, not credits."
        subtitle="Pick the protection level that fits the life you're defending. Every plan ships with our AI Risk Score, professional reports, and continuous monitoring you can trust."
        icon="ShieldCheck"
      />

      {/* Plan cards */}
      <section className="relative pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {PRICING_PLANS.map((p, i) => (
              <div
                key={p.name}
                data-testid={`pricing-plan-${i}`}
                className={`relative rounded-2xl p-6 flex flex-col transition ${
                  p.highlight
                    ? "bg-gradient-to-b from-indigo-600/15 to-[#0F172A] border-2 border-indigo-500/50 shadow-[0_0_40px_rgba(79,70,229,0.25)]"
                    : "bg-[#0F172A] border border-white/10"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-cyan-300/80 mb-2">{p.name}</div>
                <p className="text-xs text-slate-400 min-h-[40px]">{p.audience}</p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-extrabold text-white tracking-tighter">{p.price}</span>
                  <span className="text-xs text-slate-500">/ {p.period}</span>
                </div>

                <a
                  href={p.name === "Enterprise" ? "/contact" : `${APP_URL}/signup?plan=${p.name.toLowerCase()}`}
                  data-testid={`pricing-cta-${i}`}
                  className={`mt-5 group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition ${
                    p.highlight
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                      : "border border-white/15 hover:border-cyan-500/60 hover:text-cyan-300 text-white"
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </a>

                <div className="mt-5 grid grid-cols-3 gap-1 text-[10px] uppercase tracking-wider text-slate-500 text-center">
                  <div className="rounded-md py-1.5 bg-white/[0.03] border border-white/5">
                    <div className="text-[9px]">Protection</div>
                    <div className="text-slate-300 mt-0.5 normal-case tracking-normal text-[10px]">{p.protection}</div>
                  </div>
                  <div className="rounded-md py-1.5 bg-white/[0.03] border border-white/5">
                    <div className="text-[9px]">Monitoring</div>
                    <div className="text-slate-300 mt-0.5 normal-case tracking-normal text-[10px]">{p.monitoring}</div>
                  </div>
                  <div className="rounded-md py-1.5 bg-white/[0.03] border border-white/5">
                    <div className="text-[9px]">Support</div>
                    <div className="text-slate-300 mt-0.5 normal-case tracking-normal text-[10px]">{p.support}</div>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 text-sm text-slate-300 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-slate-500">
                  Credits shown only as secondary information on detail dashboards.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare matrix */}
      <section className="py-20 border-y border-white/5 bg-gradient-to-b from-transparent via-[#070b1c] to-transparent">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-300/80">Compare plans</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              What's included where.
            </h2>
          </div>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="min-w-full text-sm" data-testid="pricing-compare-table">
              <thead>
                <tr className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400">
                  <th className="text-left font-medium pb-4 w-1/3">Capability</th>
                  {PRICING_PLANS.map((p) => (
                    <th key={p.name} className="font-medium pb-4 px-3 text-center">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={i} className="border-t border-white/5">
                    <td className="py-3 pr-4 text-slate-300">{row.label}</td>
                    {row.plans.map((v, j) => (
                      <td key={j} className="py-3 px-3 text-center">
                        {v === true ? (
                          <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                        ) : v === false ? (
                          <span className="text-slate-700">—</span>
                        ) : (
                          <span className="font-mono text-xs text-cyan-300">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-4">
          {[
            { Icon: ShieldCheck, t: "30-day money back", d: "Not satisfied? Get a full refund. No questions, no retention games." },
            { Icon: Sparkles, t: "Free tier forever", d: "Run a monthly exposure report on email + phone without paying a cent." },
            { Icon: Check, t: "Cancel anytime", d: "Self-serve cancellation in your account settings. No phone calls required." },
          ].map(({ Icon, t, d }, i) => (
            <div key={i} className="rounded-2xl bg-[#0B1226] border border-white/5 p-6">
              <Icon className="w-5 h-5 text-emerald-400 mb-3" />
              <h3 className="font-display text-base font-semibold text-white">{t}</h3>
              <p className="mt-2 text-sm text-slate-400">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ limit={10} />
      <FinalCTA />
    </div>
  );
}
