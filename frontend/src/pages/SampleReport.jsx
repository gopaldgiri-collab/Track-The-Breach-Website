import { Link } from "react-router-dom";
import { APP_URL } from "../data/content";
import { ArrowRight, ShieldCheck, AlertTriangle, Database, Lock, FileText, Brain, Clock, Sparkles, CheckCircle2, Mail, Phone, AtSign, BadgeCheck, Camera } from "lucide-react";
import FAQ from "../components/sections/FAQ";
import FinalScanCTA from "../components/sections/FinalScanCTA";
import SEO from "../components/SEO";

const LOCKED_SECTIONS = [
  { Icon: Database, title: "Provider Intelligence", desc: "Which services exposed your data and how." },
  { Icon: Lock, title: "Password Exposure", desc: "Exactly which passwords leaked — hashed or plain." },
  { Icon: Clock, title: "Breach Timeline", desc: "A chronological map of every exposure." },
  { Icon: Brain, title: "AI Deep Analysis", desc: "Personalized AI risk narrative and remediation plan." },
  { Icon: ShieldCheck, title: "Dark Web Intelligence", desc: "Listings, brokers and forums where your data appears." },
  { Icon: FileText, title: "Executive PDF", desc: "Court-ready, hash-stamped PDF you can download." },
];

export default function SampleReport() {
  return (
    <div data-testid="sample-report-page">
      <SEO
        title="Sample Digital Identity Report | Track The Breach"
        description="View a sample AI-generated Digital Identity Report to understand what you'll receive after your free scan."
      />
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-12">
        <div className="absolute inset-0 grid-bg-light radial-fade opacity-60" />
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-blue-200 text-xs font-mono uppercase tracking-[0.18em] text-blue-700">
              <FileText className="w-3 h-3" /> Sample Executive Report
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-bold tracking-tight text-slate-900">
              See what your <span className="gradient-text">real report</span> will look like.
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-2xl leading-relaxed">
              This is a redacted sample of the Executive Report we generate. Run your <strong className="text-slate-900">FREE Email Scan</strong> to see your own — then unlock the full report for just $1.99 / ₹149.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`${APP_URL}/signup`} data-testid="sample-cta-hero" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold transition shadow">
                Start FREE Scan <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/pricing" data-testid="sample-cta-pricing" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:border-blue-500 hover:text-blue-600 text-slate-900 font-semibold transition">
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE REPORT */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            This is a sample report. Your report will be personalized based on your digital identity.
          </div>
          <div className="relative rounded-3xl bg-slate-900 text-white p-6 md:p-10 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-rose-500 flex items-center justify-center shadow"><AlertTriangle className="w-5 h-5 text-white" /></div>
                <div>
                  <div className="font-display font-bold text-lg">Target: sample@trackthebreach.com</div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">Executive Digital Identity Report</div>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-md bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider">Critical Risk</span>
            </div>

            {/* Scores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-rose-500/20 to-rose-700/10 border border-rose-500/30 p-5">
                <div className="text-[10px] uppercase font-mono text-rose-300">Digital Identity Score</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-mono text-5xl font-extrabold text-rose-400">82</span>
                  <span className="text-slate-400">/ 100</span>
                </div>
                <div className="mt-1 text-xs text-rose-300">Severely exposed</div>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="text-[10px] uppercase font-mono text-slate-400">Risk Score</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-mono text-5xl font-extrabold text-amber-400">95</span>
                  <span className="text-slate-400">/ 100</span>
                </div>
                <div className="mt-1 text-xs text-amber-300">Action required</div>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="text-[10px] uppercase font-mono text-slate-400">Total Findings</div>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <Stat n="29" label="Total" />
                  <Stat n="7" label="Critical" color="text-rose-400" />
                  <Stat n="22" label="High" color="text-amber-400" />
                </div>
              </div>
            </div>

            {/* AI Summary */}
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 p-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-blue-300">
                <Sparkles className="w-3.5 h-3.5" /> AI Security Summary
              </div>
              <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                This identity is <strong>severely exposed</strong>. We found this email in <strong>29 distinct breach events</strong> including major dumps like Exploit.In, Collection #1, Adobe and Citoday. <strong>7 critical-severity breaches</strong> contain plaintext credentials. Immediate remediation is strongly recommended — rotate passwords on all reused accounts and enable MFA.
              </p>
            </div>

            {/* Top findings */}
            <div className="mt-6">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400 mb-3">Top breach findings</div>
              <div className="space-y-2">
                {[
                  { name: "Exploit.In", meta: "Late 2016 · Combo List · 593M records", sev: "CRITICAL" },
                  { name: "Collection #1", meta: "Jan 2019 · Credential Stuffing · 773M records", sev: "CRITICAL" },
                  { name: "People Data Labs", meta: "Oct 2019 · Data Enrichment · 622M records", sev: "HIGH" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Database className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-display font-bold text-white text-sm">{f.name}</div>
                      <div className="text-[11px] text-slate-400">{f.meta}</div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${f.sev === "CRITICAL" ? "bg-rose-500/20 text-rose-300" : "bg-amber-500/20 text-amber-300"}`}>{f.sev}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* LOCKED SECTIONS */}
            <div className="mt-8 relative">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400 mb-3 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5" /> Premium sections — unlock with Starter
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 relative">
                {LOCKED_SECTIONS.map(({ Icon, title, desc }, i) => (
                  <div key={i} className="relative rounded-2xl bg-white/5 border border-white/10 p-5 overflow-hidden">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center"><Icon className="w-4 h-4 text-white" /></div>
                      <div className="font-display font-semibold text-white text-sm">{title}</div>
                    </div>
                    <p className="mt-2 text-xs text-slate-400 blur-[2px] select-none">{desc} — Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
                    <div className="absolute top-3 right-3">
                      <Lock className="w-3.5 h-3.5 text-slate-300" />
                    </div>
                  </div>
                ))}
                {/* Soft overlay tease */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent pointer-events-none rounded-2xl" />
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="text-sm text-slate-200">
                  Unlock the full Executive Report — timeline, exposed fields, dark-web intel, PDF & more.
                </div>
                <a href={`${APP_URL}/signup`} data-testid="sample-unlock-cta" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-sm font-semibold transition">
                  Unlock Full Report ($1.99) <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE SCAN */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Beyond email</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Your full report covers every identifier you care about.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { Icon: Mail, t: "Email" },
              { Icon: Phone, t: "Phone" },
              { Icon: AtSign, t: "Social" },
              { Icon: BadgeCheck, t: "Government ID" },
              { Icon: Camera, t: "Photo / Video" },
            ].map(({ Icon, t }, i) => (
              <div key={i} className="card-elev rounded-2xl p-5 text-center">
                <div className="w-11 h-11 mx-auto rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-display font-semibold text-slate-900 text-sm">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ limit={8} />

      {/* FINAL CTA */}
      <FinalScanCTA />
    </div>
  );
}

function Stat({ n, label, color = "text-white" }) {
  return (
    <div className="text-center">
      <div className={`font-mono text-xl font-bold ${color}`}>{n}</div>
      <div className="text-[9px] uppercase text-slate-400 tracking-wider">{label}</div>
    </div>
  );
}
