import { Download, FileText, ShieldAlert, CheckCircle2, AlertTriangle, ListChecks } from "lucide-react";

const EVIDENCE = [
  { source: "stealer_logs_2026_q1.txt", line: "primary@you.com:H4ll0!P@ss · IP 102.45.10.x · TS 2026-02-08", sev: "Critical" },
  { source: "telegram://@combo_leaks_in", line: "+91 98... 42 · OTP-stripper kit · Distribution: 12.4k", sev: "High" },
  { source: "tor://genesis-market/listing/3711", line: "Session cookies · 14 services · Active uploads: 2026-02-11", sev: "Critical" },
];

const ANALYSIS = [
  { label: "Credential reuse", value: "6 services", tone: "rose" },
  { label: "Phishing kit hit", value: "1 active", tone: "amber" },
  { label: "Dark-web mentions", value: "23", tone: "rose" },
  { label: "Public footprint", value: "147 links", tone: "cyan" },
];

const REC = [
  "Rotate compromised passwords on 6 services (auto-list in PDF)",
  "Enable hardware MFA on 3 high-value accounts",
  "File SIM-PIN with carrier — pre-filled letter included",
  "Submit removal request to 4 people-finder brokers (auto-prepared)",
];

export default function SampleReport() {
  return (
    <section data-testid="sample-report-section" className="relative py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300/90">Sample report</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Every finding. Every source. Every recommendation.
            </h2>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">
              We package your exposure intelligence into a court-ready, hash-stamped PDF with evidence chains. Share it with legal, HR, your bank, or your IR team — they'll know exactly what to do.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Hash-stamped evidence chain for legal use",
                "AI-written narrative tailored to your audience",
                "Prioritized remediation with auto-prepared templates",
                "Source attribution for every finding",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <button
              data-testid="sample-report-download"
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 hover:border-cyan-500/60 hover:text-cyan-300 text-white font-medium transition"
            >
              <Download className="w-4 h-4" />
              Download sample PDF
            </button>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 blur-3xl rounded-full" />
              <div className="relative glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                {/* Header strip */}
                <div className="px-6 py-5 border-b border-white/5 bg-[#0B1226]/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-display font-semibold text-white">Identity Exposure Report</div>
                      <div className="text-[10px] font-mono text-slate-500">REPORT-2026-02-12-7K3X · CONFIDENTIAL</div>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-[10px] font-bold uppercase tracking-wider text-rose-300">
                    HIGH RISK
                  </div>
                </div>

                {/* Evidence section */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-[0.18em] text-slate-300">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                    1. Exposure Evidence
                  </div>
                  <div className="space-y-2">
                    {EVIDENCE.map((e, i) => (
                      <div key={i} className="rounded-xl bg-[#080F1F] border border-white/5 p-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-[11px] text-cyan-300/90">{e.source}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${e.sev === "Critical" ? "bg-rose-500/15 text-rose-300" : "bg-amber-500/15 text-amber-300"}`}>{e.sev}</span>
                        </div>
                        <div className="font-mono text-[11px] text-slate-400 break-all">{e.line}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="col-span-2 md:col-span-4 flex items-center gap-2 mb-1 text-xs font-mono uppercase tracking-[0.18em] text-slate-300">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      2. Risk Analysis
                    </div>
                    {ANALYSIS.map((a) => (
                      <div key={a.label} className="rounded-xl bg-[#080F1F] border border-white/5 p-3">
                        <div className="text-[10px] uppercase tracking-wider text-slate-500">{a.label}</div>
                        <div className={`mt-1 font-mono text-sm font-bold ${a.tone === "rose" ? "text-rose-300" : a.tone === "amber" ? "text-amber-300" : "text-cyan-300"}`}>{a.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-[0.18em] text-slate-300">
                      <ListChecks className="w-3.5 h-3.5 text-emerald-400" />
                      3. Recommended Actions
                    </div>
                    <ul className="space-y-2">
                      {REC.map((r, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <span className="mt-1 font-mono text-[10px] text-emerald-400 tabular-nums">0{i+1}</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 py-3 border-t border-white/5 bg-[#080F1F] flex items-center justify-between">
                  <div className="font-mono text-[10px] text-slate-500">SHA-256: 9f4ab2…c81e · Track The Breach</div>
                  <div className="font-mono text-[10px] text-slate-500">Page 1 of 14</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
