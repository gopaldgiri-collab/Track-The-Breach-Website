import PageHero from "../components/PageHero";
import FinalCTA from "../components/sections/FinalCTA";
import { Globe2, Brain, Award, Heart, Sparkles, Target } from "lucide-react";

const TEAM_STATS = [
  { v: "50+", l: "Cybersecurity veterans" },
  { v: "20+", l: "AI / ML researchers" },
  { v: "5", l: "Global offices" },
  { v: "12+", l: "Languages spoken" },
];

const VALUES = [
  { Icon: Target, t: "Mission-first", d: "We obsess over the human at the other end of every alert.", color: "from-blue-500 to-indigo-500" },
  { Icon: Brain, t: "AI-native", d: "We treat AI as our core technical capability, not a feature.", color: "from-purple-500 to-fuchsia-500" },
  { Icon: Heart, t: "Customer empathy", d: "Identity attacks are personal — our product treats them that way.", color: "from-rose-500 to-pink-500" },
  { Icon: Sparkles, t: "Bias to ship", d: "We ship every week. Iteration beats theorizing every time.", color: "from-cyan-500 to-blue-500" },
  { Icon: Globe2, t: "Globally minded", d: "Identity threats cross borders. So does our team and our product.", color: "from-emerald-500 to-green-500" },
  { Icon: Award, t: "Privacy as principle", d: "We never sell data and we never will. Zero-knowledge by design.", color: "from-orange-500 to-amber-500" },
];

const LEADERS = [
  { name: "Gopal Giri", role: "Co-founder & CEO", bg: "from-blue-500 to-indigo-500", initials: "GG" },
  { name: "Divya Bharti", role: "Co-founder & CTO", bg: "from-fuchsia-500 to-rose-500", initials: "DB" },
];

export default function About() {
  return (
    <div data-testid="about-page">
      <PageHero
        eyebrow="ABOUT US"
        title="We're building the operating system for personal cybersecurity."
        subtitle="Track The Breach exists to give every human the tools, intelligence, and confidence to defend their digital identity — the way Fortune 500 enterprises defend theirs."
        icon="Building2"
      />

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600">Our story</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">From three breach victims to a global identity defense platform.</h2>
            <div className="mt-6 space-y-5 text-base text-slate-700 leading-relaxed">
              <p>We founded Track The Breach after each of us experienced an identity attack — a SIM swap, a deepfake, an executive impersonation campaign. The tools that existed in 2023 were built for SOC analysts, not humans. They were slow, noisy, and gated by enterprise sales cycles.</p>
              <p>So we built what we wished existed: a single platform that surfaces every exposure across every identifier, scored by AI, prioritized by severity, and remediated with one click. Today we protect identities in 50+ countries — from individual creators to Fortune 500 boards.</p>
              <p>We are still just getting started.</p>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {TEAM_STATS.map((s, i) => (
              <div key={i} className="card-elev rounded-2xl p-5">
                <div className="font-mono text-3xl font-bold text-slate-900 tabular-nums">{s.v}</div>
                <div className="text-xs text-slate-600 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-slate-200/70 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Values</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">What we believe — non-negotiably.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {VALUES.map(({ Icon, t, d, color }, i) => (
              <div key={i} className="card-elev rounded-2xl p-6">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-semibold text-slate-900">{t}</h3>
                <p className="mt-2 text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Leadership</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">The team building this.</h2>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {LEADERS.map((p, i) => (
              <div key={i} className="card-elev rounded-2xl p-6 text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${p.bg} mx-auto flex items-center justify-center font-bold text-white text-xl shadow-lg`}>{p.initials}</div>
                <div className="mt-4 font-display font-semibold text-slate-900">{p.name}</div>
                <div className="text-xs text-slate-500 mt-1">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
