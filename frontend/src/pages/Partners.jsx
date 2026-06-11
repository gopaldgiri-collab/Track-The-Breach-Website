import PageHero from "../components/PageHero";
import FinalCTA from "../components/sections/FinalCTA";
import { Handshake, Sparkles, ArrowRight, Check } from "lucide-react";

const TIERS = [
  { name: "Technology Partners", desc: "SIEM, SOAR, IAM, MDM, and DLP platforms integrating Track The Breach intel into their stack.", who: "Splunk · Sentinel · Chronicle · Okta · CrowdStrike", cta: "Apply as Tech Partner", color: "from-blue-500 to-indigo-500" },
  { name: "Cybersecurity Partners", desc: "MSSPs and consultancies bundling Track The Breach into their managed offerings.", who: "MSSPs · MDR providers · DFIR firms", cta: "Apply as MSSP", color: "from-purple-500 to-fuchsia-500" },
  { name: "Reseller Program", desc: "VARs and regional distributors with margin tiers up to 35% and white-glove onboarding.", who: "Regional distributors · Government VARs", cta: "Apply as Reseller", color: "from-cyan-500 to-blue-500" },
  { name: "Affiliate Program", desc: "Creators, journalists, and security influencers earning lifetime revenue share.", who: "Creators · Newsletters · Communities", cta: "Apply as Affiliate", color: "from-orange-500 to-amber-500" },
];

const BENEFITS = [
  "Up to 35% margin on resold subscriptions",
  "Dedicated partner success manager",
  "Co-branded marketing assets and case studies",
  "Early access to roadmap and beta features",
  "Joint go-to-market funding for qualified deals",
  "Quarterly partner business reviews",
];

export default function Partners() {
  return (
    <div data-testid="partners-page">
      <PageHero
        eyebrow="PARTNERS"
        title="Grow with the breach intelligence platform built for the next decade."
        subtitle="Our partners build on top of, resell, and bundle Track The Breach to deliver next-generation identity protection — and we share success with them."
        icon="Handshake"
      />

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TIERS.map((t, i) => (
              <div key={i} data-testid={`partner-tier-${i}`} className="card-elev rounded-2xl p-6 hover:-translate-y-1 transition">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow mb-3`}>
                  <Handshake className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900">{t.name}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{t.desc}</p>
                <div className="mt-3 text-xs font-mono text-blue-600/90">{t.who}</div>
                <a href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition">
                  {t.cta} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-slate-200/70 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600">Partner benefits</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">A partner program that actually delivers.</h2>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BENEFITS.map((b, i) => (
              <div key={i} className="card-elev rounded-2xl p-4 flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="affiliate" className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-500 mx-auto flex items-center justify-center shadow-lg mb-4">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Affiliate program with lifetime revenue share.</h2>
          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">Earn 30% revenue share on every customer you refer — for the lifetime of their subscription. No caps. Monthly payouts via Stripe.</p>
          <a href="/contact" data-testid="affiliate-apply" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-semibold transition shadow-lg">
            Apply now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
