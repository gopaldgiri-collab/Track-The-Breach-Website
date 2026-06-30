import { WHO_NEEDS_TTB } from "../../data/content";
import * as Icons from "lucide-react";
import { APP_URL } from "../../data/content";
import { ArrowRight } from "lucide-react";

const TONES = [
  "from-blue-500 to-indigo-500",
  "from-cyan-500 to-sky-500",
  "from-emerald-500 to-green-500",
  "from-rose-500 to-pink-500",
  "from-fuchsia-500 to-purple-500",
  "from-amber-500 to-orange-500",
  "from-slate-700 to-slate-900",
  "from-violet-500 to-purple-500",
  "from-teal-500 to-cyan-500",
];

export default function WhoNeedsTTB() {
  return (
    <section data-testid="who-needs-section" className="relative py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Who needs Track The Breach</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            If you have a phone or an email, <span className="gradient-text">you're a target.</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">Built for every level of digital identity risk — from students to enterprises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHO_NEEDS_TTB.map((w, i) => {
            const Icon = Icons[w.icon] || Icons.User;
            return (
              <div key={i} data-testid={`who-needs-${i}`} className="card-elev rounded-2xl p-5 hover:-translate-y-1 transition">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${TONES[i % TONES.length]} flex items-center justify-center shadow mb-4`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900">{w.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{w.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a href={`${APP_URL}/signup`} data-testid="who-needs-cta" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold transition shadow">
            Check My Exposure <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
