import { CheckCircle2, ArrowRight, ShieldCheck, Brain, Mail, FileText, Activity, Lock, Sparkles, Database } from "lucide-react";
import { APP_URL } from "../../data/content";
import { Link } from "react-router-dom";

const ITEMS = [
  { Icon: ShieldCheck, t: "Digital Identity Score", d: "A simple 0–100 number telling you how exposed your identity is." },
  { Icon: Brain, t: "AI Risk Assessment", d: "AI-written analysis of your most important risks — in plain English." },
  { Icon: Mail, t: "Email Breach Detection", d: "We check your email against 1.6B+ breach records and dark-web feeds." },
  { Icon: Database, t: "Exposure Summary", d: "A clear count of where your data has surfaced across the internet." },
  { Icon: Activity, t: "Breach Timeline (Preview)", d: "A chronological view of when and where your data leaked." },
  { Icon: ShieldCheck, t: "Security Recommendations", d: "Step-by-step actions you can take right now — no jargon." },
  { Icon: FileText, t: "Executive Report Preview", d: "A taste of the full report you'll get with paid plans." },
  { Icon: Sparkles, t: "Upgrade options", d: "Unlock complete intelligence whenever you're ready — from $1.99." },
];

export default function WhatYoullReceive() {
  return (
    <section data-testid="what-youll-receive-section" className="relative py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">What you'll receive</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            After one free scan, <span className="gradient-text">here's what shows up in your dashboard.</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">Set expectations before sign-up. No surprises, no upsell traps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {ITEMS.map(({ Icon, t, d }, i) => (
            <div key={i} data-testid={`receive-item-${i}`} className="card-elev rounded-2xl p-5 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-display font-semibold text-slate-900 text-sm">{t}</div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href={`${APP_URL}/signup`} data-testid="receive-cta" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold transition shadow-[0_12px_40px_-12px_rgba(37,99,235,0.55)]">
            Start FREE Email Scan <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/sample-report" data-testid="receive-sample" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:border-blue-500 hover:text-blue-600 text-slate-900 font-semibold transition">
            View Sample Report
          </Link>
        </div>
      </div>
    </section>
  );
}
