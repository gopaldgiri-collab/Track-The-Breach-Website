import PageHero from "../components/PageHero";
import { ShieldCheck, FileText, Lock, AlertTriangle, Activity, Globe2, Server } from "lucide-react";

const COMPLIANCE = [
  { Icon: ShieldCheck, t: "SOC 2 Type II", d: "Audited annually by an AICPA-registered firm. Report available under NDA.", color: "from-emerald-500 to-green-500" },
  { Icon: FileText, t: "ISO/IEC 27001", d: "Information security management system certified end-to-end.", color: "from-blue-500 to-indigo-500" },
  { Icon: Globe2, t: "GDPR & DPDP", d: "Aligned with EU GDPR and India DPDP Act. DPO-led privacy program.", color: "from-purple-500 to-fuchsia-500" },
  { Icon: Lock, t: "Data Processing Addendum", d: "Standard contractual clauses available on request for EU/UK customers.", color: "from-cyan-500 to-blue-500" },
  { Icon: Server, t: "Region-pinned tenants", d: "EU, India, UAE, Singapore data-residency options on Enterprise & Full Secure.", color: "from-orange-500 to-amber-500" },
  { Icon: AlertTriangle, t: "Responsible disclosure", d: "Public security@ inbox + monetary bug bounty up to $25,000.", color: "from-rose-500 to-pink-500" },
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
            {COMPLIANCE.map(({ Icon, t, d, color }, i) => (
              <div key={i} className="card-elev rounded-2xl p-6 hover:-translate-y-1 transition">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-base font-semibold text-slate-900">{t}</h3>
                <p className="mt-2 text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-slate-200/70 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Policies & legal</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Read every policy in one place.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
            {POLICIES.map((p) => (
              <a key={p.id} id={p.id} href={`#${p.id}`} data-testid={`policy-${p.id}`} className="card-elev rounded-2xl p-5 hover:-translate-y-1 transition group">
                <h3 className="font-display font-semibold text-slate-900 group-hover:text-blue-600 transition">{p.t}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.d}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8 shadow-[0_20px_60px_-20px_rgba(37,99,235,0.5)]">
            <Activity className="w-5 h-5 text-emerald-300 mb-3" />
            <h3 className="font-display text-2xl font-bold">Live system status</h3>
            <p className="mt-2 text-sm text-blue-100">Subscribe at <a className="underline" href="https://status.trackthebreach.com">status.trackthebreach.com</a> for real-time incident updates.</p>
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-300/30 text-xs font-mono text-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" /> All systems operational
            </div>
          </div>
          <a href="mailto:security@trackthebreach.com" data-testid="security-contact" className="card-elev rounded-2xl p-6 hover:-translate-y-1 transition">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow mb-3">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-display font-semibold text-slate-900">Report a vulnerability</h3>
            <p className="mt-2 text-sm text-slate-600">Email security@trackthebreach.com. PGP key on request. Bounties up to $25,000.</p>
          </a>
        </div>
      </section>
    </div>
  );
}
