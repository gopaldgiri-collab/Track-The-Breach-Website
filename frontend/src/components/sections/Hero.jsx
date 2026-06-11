import { ArrowRight, Play, ShieldCheck, Activity, AlertTriangle, Database, Mail, Phone, Globe, Sparkles, TrendingUp } from "lucide-react";
import { APP_URL } from "../../data/content";

const FEED = [
  { src: "Dark Web · pasted_combo_2026_02", sev: "Critical", color: "text-rose-400 bg-rose-400/10 border-rose-400/30", icon: AlertTriangle, time: "00:12" },
  { src: "Telegram · @leakz_market_in", sev: "High", color: "text-amber-400 bg-amber-400/10 border-amber-400/30", icon: Database, time: "00:47" },
  { src: "Twitter · impersonator detected", sev: "Medium", color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30", icon: Sparkles, time: "01:23" },
  { src: "Paste Site · stealer_logs_v4", sev: "High", color: "text-amber-400 bg-amber-400/10 border-amber-400/30", icon: Database, time: "01:58" },
  { src: "Tor Market · genesis_marketplace", sev: "Critical", color: "text-rose-400 bg-rose-400/10 border-rose-400/30", icon: AlertTriangle, time: "02:31" },
];

export default function Hero() {
  return (
    <section data-testid="hero-section" className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Background */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-indigo-500/30 text-xs font-mono uppercase tracking-[0.18em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-300">Live · 1,247 exposures detected today</span>
            </div>

            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-[5rem] leading-[1.02] font-extrabold tracking-tighter text-white">
              Know what
              <br />
              the <span className="gradient-text">internet</span>
              <br />
              knows about <span className="text-cyan-300">you.</span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              AI-powered Digital Identity Monitoring and Breach Intelligence — detect exposed emails, phones, social accounts, photos, videos, and identity risks before they become threats.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`${APP_URL}/signup`}
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)]"
              >
                Get Free Exposure Report
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <button
                data-testid="hero-cta-secondary"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 hover:border-cyan-500/60 hover:text-cyan-300 text-white font-medium transition"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {["AV", "MR", "PI", "JL", "SW"].map((i, idx) => (
                  <div key={i} className={`w-9 h-9 rounded-full border-2 border-[#050816] flex items-center justify-center text-[11px] font-bold text-white ${
                    ["bg-indigo-600", "bg-cyan-600", "bg-fuchsia-600", "bg-emerald-600", "bg-amber-600"][idx]
                  }`}>
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-400">
                <span className="text-white font-semibold">4.9/5</span> · trusted by individuals & enterprises in <span className="font-mono text-cyan-300">50+ countries</span>
              </div>
            </div>
          </div>

          {/* Dashboard mock */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 blur-3xl rounded-full" />
              <div className="relative glass-strong rounded-2xl p-5 border border-white/10 shadow-2xl shadow-black/50">
                {/* dashboard header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Identity Intelligence Console · v3.2
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </div>
                </div>

                {/* Risk Score */}
                <div className="grid grid-cols-5 gap-3 mb-4">
                  <div className="col-span-2 rounded-xl bg-gradient-to-br from-indigo-600/30 to-rose-600/20 border border-indigo-500/30 p-4">
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-indigo-300">Risk Score</div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span data-testid="risk-score-value" className="font-mono text-5xl font-bold text-white">73</span>
                      <span className="text-xs text-rose-300 font-mono">HIGH</span>
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[73%] bg-gradient-to-r from-indigo-500 via-amber-400 to-rose-500" />
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-400">
                      <TrendingUp className="w-3 h-3 text-rose-400" />
                      +12 this week
                    </div>
                  </div>
                  <Stat icon={Mail} label="Email leaks" value="14" color="text-rose-300" />
                  <Stat icon={Phone} label="Phone exposures" value="6" color="text-amber-300" />
                  <Stat icon={Globe} label="Dark-web hits" value="23" color="text-cyan-300" />
                </div>

                {/* Threat Intelligence Feed */}
                <div className="rounded-xl bg-[#0B1226]/80 border border-white/5 p-4 scan-line">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-slate-300">
                      <Activity className="w-3.5 h-3.5 text-cyan-400" />
                      Threat Intelligence Feed
                    </div>
                    <div className="text-[10px] font-mono text-slate-500">last 3 min</div>
                  </div>
                  <div className="space-y-1.5">
                    {FEED.map((f, i) => (
                      <div
                        key={i}
                        data-testid={`hero-feed-row-${i}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition"
                      >
                        <f.icon className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-mono text-slate-300 truncate">{f.src}</div>
                        </div>
                        <div className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${f.color}`}>
                          {f.sev}
                        </div>
                        <div className="font-mono text-[10px] text-slate-500 tabular-nums">{f.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Monitoring status footer */}
                <div className="mt-4 flex items-center justify-between rounded-xl bg-emerald-500/5 border border-emerald-500/20 px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-emerald-200">Continuous Monitoring · 7 modules active</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-300">99.99% uptime</span>
                </div>
              </div>

              {/* Floating chips */}
              <div className="hidden xl:flex absolute -left-12 -top-4 glass rounded-xl px-3 py-2 items-center gap-2 animate-float shadow-xl">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[11px] font-mono text-slate-300">New leak · CFO@bank.com</span>
              </div>
              <div className="hidden xl:flex absolute -right-8 -bottom-3 glass rounded-xl px-3 py-2 items-center gap-2 animate-float shadow-xl" style={{ animationDelay: "1s" }}>
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span className="text-[11px] font-mono text-slate-300">Deepfake match · 0.94</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value, color }) {
  return (
    <div className="rounded-xl bg-[#0B1226]/80 border border-white/5 p-3">
      <Icon className={`w-3.5 h-3.5 ${color} mb-1.5`} />
      <div className="font-mono text-2xl font-bold text-white tabular-nums">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">{label}</div>
    </div>
  );
}
