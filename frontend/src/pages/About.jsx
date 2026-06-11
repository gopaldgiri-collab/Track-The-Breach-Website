import PageHero from "../components/PageHero";
import FinalCTA from "../components/sections/FinalCTA";
import { Users, Globe2, Brain, Award, Heart, Sparkles, Building2, Target } from "lucide-react";

const TEAM_STATS = [
  { v: "50+", l: "Cybersecurity veterans" },
  { v: "20+", l: "AI / ML researchers" },
  { v: "5", l: "Global offices" },
  { v: "12+", l: "Languages spoken" },
];

const VALUES = [
  { Icon: Target, t: "Mission-first", d: "We obsess over the human at the other end of every alert." },
  { Icon: Brain, t: "AI-native", d: "We treat AI as our core technical capability, not a feature." },
  { Icon: Heart, t: "Customer empathy", d: "Identity attacks are personal — our product treats them that way." },
  { Icon: Sparkles, t: "Bias to ship", d: "We ship every week. Iteration beats theorizing every time." },
  { Icon: Globe2, t: "Globally minded", d: "Identity threats cross borders. So does our team and our product." },
  { Icon: Award, t: "Privacy as principle", d: "We never sell data and we never will. Zero-knowledge by design." },
];

const LEADERS = [
  { name: "A. Sharma", role: "Co-founder & CEO", bg: "from-indigo-500 to-cyan-500", initials: "AS" },
  { name: "R. Kapoor", role: "Co-founder & CTO", bg: "from-fuchsia-500 to-rose-500", initials: "RK" },
  { name: "M. Chen", role: "Chief Security Officer", bg: "from-emerald-500 to-cyan-500", initials: "MC" },
  { name: "L. Okafor", role: "VP Research", bg: "from-amber-500 to-rose-500", initials: "LO" },
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

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300/80">Our story</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">From three breach victims to a global identity defense platform.</h2>
            <div className="mt-6 space-y-5 text-base text-slate-300 leading-relaxed">
              <p>We founded Track The Breach after each of us experienced an identity attack — a SIM swap, a deepfake, an executive impersonation campaign. The tools that existed in 2023 were built for SOC analysts, not humans. They were slow, noisy, and gated by enterprise sales cycles.</p>
              <p>So we built what we wished existed: a single platform that surfaces every exposure across every identifier, scored by AI, prioritized by severity, and remediated with one click. Today we protect identities in 50+ countries — from individual creators to Fortune 500 boards.</p>
              <p>We are still just getting started.</p>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {TEAM_STATS.map((s, i) => (
              <div key={i} className="rounded-2xl bg-[#0F172A] border border-white/5 p-5">
                <div className="font-mono text-3xl font-bold text-white tabular-nums">{s.v}</div>
                <div className="text-xs text-slate-400 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-y border-white/5 bg-gradient-to-b from-transparent via-[#070b1c] to-transparent">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-300/80">Values</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">What we believe — non-negotiably.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {VALUES.map(({ Icon, t, d }, i) => (
              <div key={i} className="rounded-2xl bg-[#0B1226] border border-white/5 p-6">
                <Icon className="w-5 h-5 text-cyan-300 mb-3" />
                <h3 className="font-display font-semibold text-white">{t}</h3>
                <p className="mt-2 text-sm text-slate-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaders */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-300/80">Leadership</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">The team building this.</h2>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {LEADERS.map((p, i) => (
              <div key={i} className="rounded-2xl bg-[#0F172A] border border-white/5 p-6 text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${p.bg} mx-auto flex items-center justify-center font-bold text-white text-xl`}>{p.initials}</div>
                <div className="mt-4 font-display font-semibold text-white">{p.name}</div>
                <div className="text-xs text-slate-400 mt-1">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
