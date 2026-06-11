import PageHero from "../components/PageHero";
import { ShieldCheck, FileText, Lock, AlertTriangle, Activity, Globe2, Award, Server } from "lucide-react";

const COMPLIANCE = [
  { Icon: ShieldCheck, t: "SOC 2 Type II", d: "Audited annually by an AICPA-registered firm. Report available under NDA." },
  { Icon: FileText, t: "ISO/IEC 27001", d: "Information security management system certified end-to-end." },
  { Icon: Globe2, t: "GDPR & DPDP", d: "Aligned with EU GDPR and India DPDP Act. DPO-led privacy program." },
  { Icon: Lock, t: "Data Processing Addendum", d: "Standard contractual clauses available on request for EU/UK customers." },
  { Icon: Server, t: "Region-pinned tenants", d: "EU, India, UAE, Singapore data-residency options on Enterprise & Full Secure." },
  { Icon: AlertTriangle, t: "Responsible disclosure", d: "Public security@ inbox + monetary bug bounty up to $25,000." },
];

const POLICIES = [
  { id: "privacy", t: "Privacy Policy", d: "How we collect, use, share, and store data. Last updated Feb 12, 2026." },
  { id: "terms", t: "Terms of Service", d: "Master terms for individual and business subscriptions." },
  { id: "gdpr", t: "GDPR", d: "Rights of EU/UK data subjects and how to exercise them." },
  { id: "dpdp", t: "DPDP", d: "Compliance with India's Digital Personal Data Protection Act." },
  { id: "dpa", t: "Data Processing Addendum", d: "DPA + SCCs for business customers processing EU personal data." },
  { id: "subprocessors", t: "Subprocessors", d: "Current list of subprocessors and regional scope." },
  { id: "responsible-disclosure", t: "Responsible Disclosure", d: "How to report vulnerabilities and our bug bounty program." },
  { id: "data-handling", t: "Data Handling Policy", d: "How we ingest, store, retain, and destroy customer data." },
];

export default function TrustCenter() {
  return (
    <div data-testid="trust-page">
      <PageHero
        eyebrow="TRUST CENTER"
        title="Security & compliance, built into the foundation."
        subtitle="Transparency about how we secure, store, and govern your data. Always-current compliance status, security policies, and our public bug-bounty program."
        icon="ShieldCheck"
      />

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {COMPLIANCE.map(({ Icon, t, d }, i) => (
              <div key={i} className="rounded-2xl bg-[#0B1226] border border-white/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5 text-emerald-400" />
                  <Award className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{t}</h3>
                <p className="mt-2 text-sm text-slate-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-white/5 bg-gradient-to-b from-transparent via-[#070b1c] to-transparent">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-300/80">Policies & legal</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">Read every policy in one place.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
            {POLICIES.map((p, i) => (
              <a key={p.id} id={p.id} href={`#${p.id}`} data-testid={`policy-${p.id}`} className="rounded-2xl bg-[#0F172A] border border-white/5 p-5 hover:border-cyan-500/30 transition group">
                <h3 className="font-display font-semibold text-white group-hover:text-cyan-200 transition">{p.t}</h3>
                <p className="mt-1 text-sm text-slate-400">{p.d}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-2xl bg-gradient-to-br from-indigo-600/15 to-cyan-500/10 border border-indigo-500/30 p-8">
            <Activity className="w-5 h-5 text-emerald-400 mb-3" />
            <h3 className="font-display text-2xl font-bold text-white">Live system status</h3>
            <p className="mt-2 text-sm text-slate-300">Subscribe at <a className="text-cyan-300 underline" href="https://status.trackthebreach.com">status.trackthebreach.com</a> for real-time incident updates.</p>
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> All systems operational
            </div>
          </div>
          <a href="mailto:security@trackthebreach.com" data-testid="security-contact" className="rounded-2xl bg-[#0F172A] border border-white/5 p-6 hover:border-rose-500/30 transition">
            <AlertTriangle className="w-5 h-5 text-rose-400 mb-3" />
            <h3 className="font-display font-semibold text-white">Report a vulnerability</h3>
            <p className="mt-2 text-sm text-slate-400">Email security@trackthebreach.com. PGP key on request. Bounties up to $25,000.</p>
          </a>
        </div>
      </section>
    </div>
  );
}
