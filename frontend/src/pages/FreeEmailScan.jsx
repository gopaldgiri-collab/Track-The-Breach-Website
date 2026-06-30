import { Link } from "react-router-dom";
import { APP_URL } from "../data/content";
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, Lock, Brain, Database, Clock, Sparkles, FileText, Activity, AlertTriangle } from "lucide-react";
import FAQ from "../components/sections/FAQ";
import TrustSection from "../components/sections/TrustSection";
import HowAIWorks from "../components/sections/HowAIWorks";
import ComparisonTable from "../components/sections/ComparisonTable";
import FinalScanCTA from "../components/sections/FinalScanCTA";
import SEO from "../components/SEO";

const BENEFITS = [
  { Icon: ShieldCheck, t: "Instant Digital Identity Score", d: "A simple 0–100 number telling you how exposed your identity is right now." },
  { Icon: Brain, t: "AI Security Summary", d: "A human-readable summary of the most important risks tied to your email." },
  { Icon: Database, t: "Breach Preview", d: "See how many breaches your email appears in — across 1.6B+ records." },
  { Icon: Clock, t: "Results in under 2 minutes", d: "No long forms, no waiting. Scan finishes while you grab coffee." },
  { Icon: Lock, t: "Privacy-first", d: "Your email is hashed in your browser. We never see it in plaintext." },
  { Icon: Sparkles, t: "No credit card", d: "Truly free. No payment details required at sign-up. Ever." },
];

const STEPS = [
  { n: "01", t: "Create your free account", d: "Email or SSO — 30 seconds, no credit card." },
  { n: "02", t: "Verify your email", d: "A quick verification protects your dashboard." },
  { n: "03", t: "Run your FREE scan", d: "We sweep breach databases, dark web, threat feeds." },
  { n: "04", t: "Get your AI report", d: "Score, summary and exposed breach count — instantly." },
];

export default function FreeEmailScan() {
  return (
    <div data-testid="free-email-scan-page">
      <SEO
        title="Free Email Breach Checker | AI Digital Identity Scan | Track The Breach"
        description="Check if your email has been exposed in data breaches. Get a free AI-powered Digital Identity Report and discover where your information is exposed online."
      />
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-20">
        <div className="absolute inset-0 grid-bg-light radial-fade opacity-60" />
        <div className="absolute -top-32 left-1/4 w-[700px] h-[700px] bg-blue-400/25 rounded-full blur-3xl pointer-events-none" />
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-emerald-200 text-xs font-mono uppercase tracking-[0.18em] text-emerald-700">
              <CheckCircle2 className="w-3 h-3" /> 100% Free · No Credit Card
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-bold tracking-tight text-slate-900">
              Run a <span className="gradient-text">Free Email ID Breach Scan</span> in under 2 minutes.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Find out instantly if your email is leaked on the dark web. Get your <strong className="text-slate-900">Digital Identity Score</strong>, an AI Security Summary and a preview of every breach tied to your identity — powered by Track The Breach AI.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href={`${APP_URL}/signup`} data-testid="free-scan-cta-hero" className="group inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-base font-semibold transition shadow-[0_12px_40px_-12px_rgba(37,99,235,0.55)]">
                Start Scanning — Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <Link to="/sample-report" data-testid="free-scan-sample" className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:border-blue-500 hover:text-blue-600 text-slate-900 text-base font-semibold transition">
                View Sample Report
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold"><CheckCircle2 className="w-3.5 h-3.5" /> Free Email ID Scan</span>
              <span className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold"><CheckCircle2 className="w-3.5 h-3.5" /> AI Powered</span>
              <span className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold"><Clock className="w-3.5 h-3.5" /> 2-minute results</span>
              <span className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold"><Lock className="w-3.5 h-3.5" /> Privacy-first</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-200/70">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">What you'll get</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">A full preview — for free.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {BENEFITS.map(({ Icon, t, d }, i) => (
              <div key={i} data-testid={`free-scan-benefit-${i}`} className="card-elev rounded-2xl p-5 bg-white">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-display font-semibold text-slate-900">{t}</div>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600">How it works</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Four steps. Zero friction.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((s, i) => (
              <div key={i} className="card-elev rounded-2xl p-5">
                <div className="font-mono text-3xl font-extrabold gradient-text">{s.n}</div>
                <div className="mt-3 font-display font-semibold text-slate-900">{s.t}</div>
                <p className="mt-1.5 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW AI WORKS reuse */}
      <HowAIWorks />

      {/* SAMPLE REPORT PREVIEW */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-300">What you'll see</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">A taste of your full Executive Report.</h2>
              <p className="mt-5 text-slate-300 leading-relaxed">
                Your free scan returns a Digital Identity Score, AI Security Summary and breach count. Upgrade to Starter ($1.99 / ₹149, one-time) to unlock the full timeline, exposed data fields, dark-web intelligence and a downloadable Executive PDF.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`${APP_URL}/signup`} data-testid="free-scan-cta-bottom" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-semibold transition">
                  Start Scanning Free <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/sample-report" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white text-sm font-semibold transition">
                  View Sample Report
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-rose-500 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-white" /></div>
                    <div>
                      <div className="font-display font-bold">Target: you@example.com</div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400">Executive Exposure Report</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 text-[10px] font-bold uppercase">Critical</span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <Card label="Identity Score" value="82" color="text-rose-400" />
                  <Card label="Total Findings" value="29" color="text-white" />
                  <Card label="Critical" value="7" color="text-rose-400" />
                </div>
                <div className="mt-5 space-y-2">
                  {["Exploit.In · Late 2016 · 593M records", "Collection #1 · Jan 2019 · 773M records", "Adobe · Oct 2013 · 153M records"].map((l, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <Database className="w-4 h-4 text-rose-400" />
                      <span className="text-sm">{l}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
                  <FileText className="w-3.5 h-3.5" /> Full PDF unlocked with Starter ($1.99 / ₹149)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON SHORT */}
      <ComparisonTable variant="short" />

      {/* TRUST */}
      <TrustSection />

      {/* FAQ */}
      <FAQ limit={8} />

      {/* FINAL CTA */}
      <FinalScanCTA />
    </div>
  );
}

function Card({ label, value, color }) {
  return (
    <div className="rounded-lg bg-white/5 border border-white/10 p-3">
      <div className="text-[10px] uppercase text-slate-400">{label}</div>
      <div className={`mt-1 font-mono text-2xl font-bold ${color}`}>{value}</div>
    </div>
  );
}
