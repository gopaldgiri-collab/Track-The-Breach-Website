import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Activity, ShieldCheck, AlertTriangle, Eye, Brain, Database, Bell } from "lucide-react";

const TIMELINE = [
  { week: "W1", exposures: 8, score: 41 },
  { week: "W2", exposures: 12, score: 48 },
  { week: "W3", exposures: 9, score: 44 },
  { week: "W4", exposures: 21, score: 62 },
  { week: "W5", exposures: 17, score: 67 },
  { week: "W6", exposures: 14, score: 64 },
  { week: "W7", exposures: 25, score: 73 },
  { week: "W8", exposures: 19, score: 70 },
];

const SOURCES = [
  { label: "Dark Web Markets", pct: 38, color: "bg-rose-500" },
  { label: "Credential Brokers", pct: 24, color: "bg-amber-500" },
  { label: "Paste Sites", pct: 18, color: "bg-cyan-500" },
  { label: "Telegram & Discord", pct: 12, color: "bg-fuchsia-500" },
  { label: "Public Disclosures", pct: 8, color: "bg-emerald-500" },
];

const ACCOUNTS = [
  { acc: "primary@you.com", risk: 84, sev: "Critical" },
  { acc: "+91 98••• ••42", risk: 67, sev: "High" },
  { acc: "@you.handle (x.com)", risk: 53, sev: "Medium" },
  { acc: "Aadhaar ****-3271", risk: 91, sev: "Critical" },
];

const ALERTS = [
  { t: "Stealer log mentioning primary email", sev: "Critical", time: "2m ago" },
  { t: "Impersonator on Instagram detected", sev: "Medium", time: "14m ago" },
  { t: "SIM swap risk elevated · Carrier Z", sev: "High", time: "39m ago" },
  { t: "Photo found on NSFW directory", sev: "High", time: "1h ago" },
];

const RECOMMENDATIONS = [
  "Rotate credentials on 6 services using exposed passwords",
  "Enable SIM-PIN with your carrier — guidance opened in panel",
  "File DMCA takedown on instagram.com/imposter — auto-prepared",
  "Aadhaar masking advised; tap to view step-by-step guide",
];

const sevPill = (sev) => sev === "Critical" ? "bg-rose-50 border border-rose-200 text-rose-700" : sev === "High" ? "bg-amber-50 border border-amber-200 text-amber-700" : "bg-cyan-50 border border-cyan-200 text-cyan-700";

export default function PlatformDashboard() {
  return (
    <section data-testid="platform-dashboard-section" className="relative py-28 border-y border-slate-200/70 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-14 items-end">
          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Platform dashboard</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              One console. Every signal. Every threat.
            </h2>
          </div>
          <p className="text-base text-slate-600 md:text-right">
            Risk-scored. Source-attributed. AI-prioritized. Built for humans, not analysts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Risk Score */}
          <div className="lg:col-span-4 glass-strong rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600/80">Identity Risk Score</div>
                <ShieldCheck className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex items-baseline gap-3">
                <div data-testid="dashboard-risk-score" className="font-mono text-7xl font-bold text-slate-900 tabular-nums tracking-tighter">73</div>
                <div className="flex flex-col">
                  <span className="text-rose-600 text-sm font-semibold">HIGH</span>
                  <span className="text-xs text-slate-500">/100</span>
                </div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full w-[73%] bg-gradient-to-r from-blue-500 via-amber-500 to-rose-500" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <Mini label="Severity" value="HIGH" tone="text-rose-600" />
                <Mini label="7-day Δ" value="+12" tone="text-amber-600" />
                <Mini label="Confidence" value="0.94" tone="text-emerald-600" />
              </div>
              <div className="mt-6 text-xs text-slate-600 leading-relaxed">
                Score factors recency, source credibility, severity, and corroboration across <span className="font-mono text-blue-600">2,037</span> live feeds.
              </div>
            </div>
          </div>

          {/* Exposure Timeline chart */}
          <div className="lg:col-span-8 glass-strong rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600/80">Exposure Timeline</div>
                <h3 className="mt-1 font-display text-lg font-semibold text-slate-900">8-week trajectory</h3>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500" /> Exposures</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-500" /> Risk Score</span>
              </div>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={TIMELINE} margin={{ top: 10, right: 6, bottom: 0, left: -20 }}>
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#A855F7" stopOpacity={0.45} />
                      <stop offset="100%" stopColor="#A855F7" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(15,23,42,0.08)" vertical={false} />
                  <XAxis dataKey="week" stroke="#64748B" tick={{ fontSize: 11, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
                  <YAxis stroke="#64748B" tick={{ fontSize: 11, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: "rgba(255,255,255,0.98)", border: "1px solid rgba(15,23,42,0.1)", borderRadius: 12, color: "#0F172A", fontSize: 12, boxShadow: "0 10px 30px -10px rgba(15,23,42,0.15)" }}
                    labelStyle={{ color: "#64748B" }}
                  />
                  <Area type="monotone" dataKey="exposures" stroke="#3B82F6" strokeWidth={2.5} fill="url(#grad1)" />
                  <Area type="monotone" dataKey="score" stroke="#A855F7" strokeWidth={2.5} fill="url(#grad2)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Breach Sources */}
          <div className="lg:col-span-5 glass-strong rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600/80">Breach Sources</div>
              <Database className="w-4 h-4 text-blue-600" />
            </div>
            <div className="space-y-3">
              {SOURCES.map((s, i) => (
                <div key={s.label} data-testid={`dashboard-source-${i}`}>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-700">{s.label}</span>
                    <span className="font-mono text-slate-500 tabular-nums">{s.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                    <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Linked Accounts */}
          <div className="lg:col-span-7 glass-strong rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600/80">Linked Identities</div>
              <Eye className="w-4 h-4 text-blue-600" />
            </div>
            <div className="space-y-2">
              {ACCOUNTS.map((a, i) => (
                <div key={a.acc} data-testid={`dashboard-account-${i}`} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-xs text-slate-700 truncate">{a.acc}</div>
                  </div>
                  <div className="w-32 hidden sm:block">
                    <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div className={`h-full ${a.risk > 80 ? "bg-rose-500" : a.risk > 60 ? "bg-amber-500" : "bg-cyan-500"}`} style={{ width: `${a.risk}%` }} />
                    </div>
                  </div>
                  <div className="font-mono text-sm tabular-nums text-slate-900">{a.risk}</div>
                  <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${sevPill(a.sev)}`}>{a.sev}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Threat Alerts */}
          <div className="lg:col-span-7 glass-strong rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600/80">Threat Alerts</div>
              <Bell className="w-4 h-4 text-blue-600" />
            </div>
            <div className="space-y-2">
              {ALERTS.map((al, i) => (
                <div key={i} data-testid={`dashboard-alert-${i}`} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <AlertTriangle className={`w-4 h-4 ${al.sev === "Critical" ? "text-rose-500" : al.sev === "High" ? "text-amber-500" : "text-cyan-500"}`} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-slate-800 truncate">{al.t}</div>
                  </div>
                  <span className="hidden md:block font-mono text-[10px] text-slate-500">{al.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monitoring + AI rec */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="glass-strong rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600/80">Monitoring Status</div>
                <Activity className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { label: "Email", on: true },
                  { label: "Phone", on: true },
                  { label: "Social", on: true },
                  { label: "Gov ID", on: true },
                  { label: "Photo", on: true },
                  { label: "Video", on: false },
                  { label: "Dark Web", on: true },
                  { label: "Digital Footprint", on: true },
                ].map((m) => (
                  <div key={m.label} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-slate-700">{m.label}</span>
                    <span className={`flex items-center gap-1.5 font-mono text-[10px] uppercase ${m.on ? "text-emerald-600" : "text-slate-400"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${m.on ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`} />
                      {m.on ? "On" : "Off"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-strong rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600/80">AI Recommendations</div>
                <Brain className="w-4 h-4 text-fuchsia-600" />
              </div>
              <ul className="space-y-2.5">
                {RECOMMENDATIONS.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fuchsia-500 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mini({ label, value, tone }) {
  return (
    <div className="rounded-lg bg-slate-50 border border-slate-200 py-2">
      <div className="text-[10px] uppercase tracking-wider text-slate-500">{label}</div>
      <div className={`font-mono text-sm font-bold ${tone}`}>{value}</div>
    </div>
  );
}
