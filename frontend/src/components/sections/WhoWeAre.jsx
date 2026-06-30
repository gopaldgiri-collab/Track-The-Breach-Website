import { ShieldCheck, Brain, Network, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { APP_URL } from "../../data/content";

export default function WhoWeAre() {
  return (
    <section data-testid="who-we-are-section" className="relative py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Who we are</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              You have a digital identity — <span className="gradient-text">most of it is already exposed.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
              A single person today carries <strong className="text-slate-900">3–5 emails, 2–3 phone numbers, multiple social accounts, government IDs, photos and videos</strong> — scattered across hundreds of websites, data brokers and dark-web markets. Traditional breach checkers only look at one piece. <strong className="text-slate-900">Track The Breach is built for the whole picture.</strong>
            </p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              We use AI to discover, understand and protect your complete digital identity — <em>before</em> cybercriminals exploit it.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href={`${APP_URL}/signup`} data-testid="who-we-are-cta" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold transition shadow">
                Start FREE Email Scan <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/sample-report" data-testid="who-we-are-sample" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:border-blue-500 hover:text-blue-600 text-slate-900 text-sm font-semibold transition">
                View Sample Report
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {[
              { Icon: AlertTriangle, t: "The problem", d: "Your data is on hundreds of websites you've never heard of.", c: "from-rose-500 to-pink-500" },
              { Icon: Brain, t: "What we do", d: "AI scans breach DBs, the dark web, public records & social media.", c: "from-blue-500 to-indigo-500" },
              { Icon: Network, t: "How we're different", d: "We unify every identifier into one Digital Identity Graph.", c: "from-purple-500 to-fuchsia-500" },
              { Icon: ShieldCheck, t: "What you get", d: "A Risk Score, an Executive Report and AI actions you can take now.", c: "from-emerald-500 to-green-500" },
            ].map(({ Icon, t, d, c }, i) => (
              <div key={i} className="card-elev rounded-2xl p-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c} flex items-center justify-center shadow mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-display font-semibold text-slate-900 text-sm">{t}</div>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
