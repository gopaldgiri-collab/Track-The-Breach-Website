import { useState } from "react";
import { ArrowRight, ShieldCheck, Mail, Phone, AtSign, BadgeCheck, Camera, X, Database, AlertTriangle, FileText, CheckCircle2, Search, Clock, Video, Fingerprint } from "lucide-react";
import { APP_URL } from "../../data/content";

const MODULES = [
  { Icon: Mail, label: "Email Exposure", value: "18 Breach Records Found", tone: "rose" },
  { Icon: Phone, label: "Phone Number Risk", value: "6 Public Exposures", tone: "amber" },
  { Icon: ShieldCheck, label: "Digital Identity Score", value: "Risk Score: 84 / 100", tone: "blue", emphasis: true },
  { Icon: AtSign, label: "Social Intelligence", value: "3 Impersonation Risks", tone: "fuchsia" },
  { Icon: BadgeCheck, label: "Government ID Exposure", value: "Sensitive Data Detected", tone: "rose" },
  { Icon: Camera, label: "Photo & Video Exposure", value: "2 Public Matches", tone: "cyan" },
];

const TONE_MAP = {
  rose: { bg: "bg-rose-50", text: "text-rose-700", icon: "from-rose-500 to-pink-500" },
  amber: { bg: "bg-amber-50", text: "text-amber-700", icon: "from-amber-500 to-orange-500" },
  blue: { bg: "bg-blue-50", text: "text-blue-700", icon: "from-blue-500 to-indigo-500" },
  fuchsia: { bg: "bg-fuchsia-50", text: "text-fuchsia-700", icon: "from-fuchsia-500 to-purple-500" },
  cyan: { bg: "bg-cyan-50", text: "text-cyan-700", icon: "from-cyan-500 to-sky-500" },
};

const FINDINGS = [
  { name: "Exploit.In", meta: "Late 2016 · Combo List · 593M records", sev: "CRITICAL RISK", tags: ["Email addresses", "Passwords"] },
  { name: "Collection #1", meta: "Jan 2019 · Credential Stuffing · 773M records", sev: "CRITICAL RISK", tags: ["Email addresses", "Passwords"] },
  { name: "People Data Labs (PDL)", meta: "Oct 2019 · Data Enrichment · 622M records", sev: "HIGH RISK", tags: ["Email", "Employers", "Geo", "Job titles", "Names", "Phone", "Social"] },
  { name: "Citoday", meta: "Nov 2020 · Hacking Forum · 226M records", sev: "CRITICAL RISK", tags: ["Email addresses", "Passwords"] },
  { name: "Adobe", meta: "Oct 2013 · Data Breach · 153M records", sev: "HIGH RISK", tags: ["Email", "Names", "Job Titles"] },
];

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section data-testid="hero-section" className="relative overflow-hidden pt-10 pb-24 md:pt-16 md:pb-28">
      <div className="absolute inset-0 grid-bg-light radial-fade opacity-60" />
      <div className="absolute -top-32 left-1/4 w-[700px] h-[700px] bg-blue-400/25 rounded-full blur-3xl" />
      <div className="absolute top-40 -right-20 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-blue-200 text-xs font-mono uppercase tracking-[0.18em]">
              <Search className="w-3 h-3 text-blue-600" />
              <span className="text-blue-700">AI-powered Data Breach Detection Platform</span>
            </div>

            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[55px] leading-[1.15] font-bold tracking-tight text-slate-900">
             Let's Protect Your <span className="gradient-text"> Digital Identity</span> Before Hackers Exploit It <br />
	  </h1>

            <p className="mt-6 text-base md:text-sm text-slate-600 max-w-xl leading-relaxed">
              Check where your Email ID, Phone Number, Government ID, Social Accounts, Photos, or Videos are breached & exposed online. Detect impersonation, identity theft risks, leaked credentials, and AI-generated deepfakes. Get a detailed exposure report in minutes.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={`${APP_URL}/signup`}
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold transition shadow-[0_12px_40px_-12px_rgba(37,99,235,0.55)]"
              >
                Get Your Breach & Exposure Report
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <div className="flex flex-col gap-0.5 text-xs">
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold"><CheckCircle2 className="w-3.5 h-3.5" /> Free Account Signup</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold"><CheckCircle2 className="w-3.5 h-3.5" /> No Credit Card Required</span>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-slate-500 mb-4">
                We find breach &amp; exposure of:
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                {[
                  { Icon: Mail, label: "Email ID Breach", tone: "text-blue-600" },
                  { Icon: Phone, label: "Phone Number Leak", tone: "text-emerald-600" },
                  { Icon: BadgeCheck, label: "Govt ID Exposure", tone: "text-amber-600" },
                  { Icon: AtSign, label: "Social Account Duplicate", tone: "text-fuchsia-600" },
                  { Icon: Camera, label: "Photo Duplicate", tone: "text-rose-600" },
                  { Icon: Video, label: "Deepfake / AI Fake Video", tone: "text-violet-600" },
                  { Icon: Fingerprint, label: "User Identity Breach", tone: "text-cyan-600" },
                ].map(({ Icon, label, tone }, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <Icon className={`w-5 h-5 ${tone} flex-shrink-0`} strokeWidth={1.75} />
                    <span className="text-sm font-semibold text-slate-800">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <Clock className="w-3.5 h-3.5" /> Report in 2 minutes
                </span>
                <span className="text-slate-300">·</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> No monthly subscription
                </span>
                <span className="text-slate-300">·</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Very cheap &amp; simple
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — compact preview card */}
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={() => setOpen(true)}
              data-testid="hero-report-preview"
              className="relative w-full text-left group"
            >
              <div className="absolute -inset-5 bg-gradient-to-br from-blue-300/30 to-purple-300/20 blur-3xl rounded-full pointer-events-none" />
              <div className="relative glass-strong rounded-2xl p-5 shadow-2xl shadow-blue-900/10 transition group-hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-display font-bold text-slate-900 text-sm leading-tight">Track The Breach</div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-blue-600/80">Digital Identity Breach Detection Engine</div>
                    </div>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-[9px] font-bold uppercase tracking-wider text-rose-700">Critical</div>
                </div>

                <div className="space-y-2">
                  {MODULES.map((m, i) => {
                    const t = TONE_MAP[m.tone];
                    return (
                      <div key={i} className={`flex items-center gap-3 p-2.5 rounded-xl border ${m.emphasis ? "bg-blue-50/70 border-blue-200" : "bg-white border-slate-200/70"}`}>
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${t.icon} flex items-center justify-center flex-shrink-0 shadow`}>
                          <m.Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">{m.label}</div>
                          <div className={`text-sm font-semibold ${m.emphasis ? "text-blue-700" : "text-slate-900"} truncate`}>{m.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center justify-between px-3 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold group-hover:from-blue-500 group-hover:to-indigo-500 transition">
                  <span>Open full sample report</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {open && <SampleReportModal onClose={() => setOpen(false)} />}
    </section>
  );
}

function SampleReportModal({ onClose }) {
  return (
    <div data-testid="sample-report-modal" className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center shadow">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-display font-bold text-slate-900">Target: abcd@gmail.com</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-500">Enterprise Exposure Intelligence Report</div>
            </div>
          </div>
          <button onClick={onClose} data-testid="modal-close" className="w-9 h-9 rounded-full border border-slate-200 hover:border-rose-300 hover:bg-rose-50 flex items-center justify-center text-slate-500 hover:text-rose-600 transition">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Executive summary */}
        <div className="p-6">
          <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-4 md:border-r md:border-white/10 md:pr-6">
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-400">Identity Exposure Risk Index</div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-mono text-6xl font-extrabold text-rose-500">95</span>
                  <span className="text-slate-500">/100</span>
                </div>
                <span className="mt-3 inline-block px-3 py-1 rounded-md bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider">Critical Risk</span>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-xl font-bold">Executive Summary</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  This report details the exposure of the email address <strong className="text-white">abcd@gmail.com</strong>, which has been compromised in several major data breaches including <strong className="text-white">Exploit.In, Collection #1, Dunzo, Adobe and Citoday</strong>.
                </p>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  The critical risk score indicates a severe threat to the account holder, with multiple instances of plaintext credential exposure and public data availability. Immediate remediation actions are recommended.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                    <div className="text-[10px] uppercase text-slate-400">Total Findings</div>
                    <div className="mt-1 font-mono text-2xl font-bold">29</div>
                  </div>
                  <div className="rounded-lg bg-rose-500/15 border border-rose-500/30 p-3">
                    <div className="text-[10px] uppercase text-rose-300">Critical</div>
                    <div className="mt-1 font-mono text-2xl font-bold text-rose-400">7</div>
                  </div>
                  <div className="rounded-lg bg-amber-500/15 border border-amber-500/30 p-3">
                    <div className="text-[10px] uppercase text-amber-300">High</div>
                    <div className="mt-1 font-mono text-2xl font-bold text-amber-400">22</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Findings */}
          <h4 className="mt-8 mb-4 text-xs font-mono uppercase tracking-[0.2em] text-slate-700">Exposure Findings (Top 7)</h4>
          <div className="space-y-2">
            {FINDINGS.map((f, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 hover:border-blue-300 transition">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0">
                    <Database className="w-4 h-4 text-rose-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div>
                        <div className="font-display font-bold text-slate-900">{f.name}</div>
                        <div className="text-xs text-slate-500">{f.meta}</div>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${f.sev === "CRITICAL RISK" ? "bg-rose-50 border border-rose-200 text-rose-700" : "bg-amber-50 border border-amber-200 text-amber-700"}`}>{f.sev}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {f.tags.map((t, j) => (
                        <span key={j} className="px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] text-blue-700 font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between flex-wrap gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="inline-flex items-center gap-2 text-xs text-slate-600">
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              This is a sample generated from real breach intelligence.
            </div>
            <a href={`${APP_URL}/signup`} data-testid="modal-cta" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold transition shadow">
              Start My Real Scan Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
