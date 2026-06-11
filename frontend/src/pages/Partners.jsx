import PageHero from "../components/PageHero";
import FinalCTA from "../components/sections/FinalCTA";
import { Handshake, Sparkles, Building2, TrendingUp, ArrowRight, Check } from "lucide-react";

const TIERS = [
  { name: "Technology Partners", desc: "SIEM, SOAR, IAM, MDM, and DLP platforms integrating Track The Breach intel into their stack.", who: "Splunk · Sentinel · Chronicle · Okta · CrowdStrike", cta: "Apply as Tech Partner" },
  { name: "Cybersecurity Partners", desc: "MSSPs and consultancies bundling Track The Breach into their managed offerings.", who: "MSSPs · MDR providers · DFIR firms", cta: "Apply as MSSP" },
  { name: "Reseller Program", desc: "VARs and regional distributors with margin tiers up to 35% and white-glove onboarding.", who: "Regional distributors · Government VARs", cta: "Apply as Reseller" },
  { name: "Affiliate Program", desc: "Creators, journalists, and security influencers earning lifetime revenue share.", who: "Creators · Newsletters · Communities", cta: "Apply as Affiliate" },
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
              <div key={i} data-testid={`partner-tier-${i}`} className="rounded-2xl bg-[#0F172A] border border-white/5 p-6 hover:border-indigo-500/30 transition">
                <Handshake className="w-5 h-5 text-indigo-300 mb-3" />
                <h3 className="font-display text-xl font-semibold text-white">{t.name}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{t.desc}</p>
                <div className="mt-3 text-xs font-mono text-cyan-300/90">{t.who}</div>
                <a href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  {t.cta} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-white/5 bg-gradient-to-b from-transparent via-[#070b1c] to-transparent">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300/80">Partner benefits</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">A partner program that actually delivers.</h2>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BENEFITS.map((b, i) => (
              <div key={i} className="rounded-2xl bg-[#0B1226] border border-white/5 p-4 flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-300">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="affiliate" className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <Sparkles className="w-7 h-7 text-fuchsia-400 mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">Affiliate program with lifetime revenue share.</h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto">Earn 30% revenue share on every customer you refer — for the lifetime of their subscription. No caps. Monthly payouts via Stripe.</p>
          <a href="/contact" data-testid="affiliate-apply" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold transition">
            Apply now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
