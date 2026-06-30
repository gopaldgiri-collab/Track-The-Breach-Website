import { ArrowRight, ShieldCheck, Mail, Phone, AtSign, BadgeCheck, Camera, CheckCircle2, Search, Clock, Video, Fingerprint, Star, Quote } from "lucide-react";
import { APP_URL, TESTIMONIALS } from "../../data/content";

const TONE_GRADIENTS = [
  "from-blue-500 to-indigo-500",
  "from-purple-500 to-fuchsia-500",
  "from-cyan-500 to-sky-500",
  "from-emerald-500 to-green-500",
  "from-rose-500 to-pink-500",
  "from-amber-500 to-orange-500",
];

export default function Hero() {
  // Duplicate testimonials for seamless looping marquee
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

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
              Check The Exposure &amp; Breaches Of Your <span className="gradient-text">Personal Information</span> Over The Internet.
            </h1>

            <p className="mt-6 text-base md:text-base text-slate-600 max-w-xl leading-relaxed">
              Track The Breach uses AI to analyze billions of breach records, threat intelligence sources, and public data to reveal where your <strong className="text-slate-900">email ID, phone number, social accounts, photos and digital identity</strong> are exposed online.
              <span className="block mt-2 text-slate-800 font-semibold">Protect yourself from hackers — we are here to help you.</span>
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`${APP_URL}/signup`}
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold transition shadow-[0_12px_40px_-12px_rgba(37,99,235,0.55)]"
              >
                Check Your Email Breach &amp; Exposure — Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold"><CheckCircle2 className="w-3.5 h-3.5" /> Free Email ID Scan</span>
              <span className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold"><CheckCircle2 className="w-3.5 h-3.5" /> No Credit Card</span>
              <span className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold"><CheckCircle2 className="w-3.5 h-3.5" /> AI Powered</span>
              <span className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold"><Clock className="w-3.5 h-3.5" /> Results in under 2 minutes</span>
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
            </div>
          </div>

          {/* RIGHT — sliding testimonials carousel */}
          <div className="lg:col-span-5" data-testid="hero-testimonials">
            <div className="relative">
              <div className="absolute -inset-5 bg-gradient-to-br from-blue-300/30 to-purple-300/20 blur-3xl rounded-full pointer-events-none" />

              <div className="relative">
                {/* Header label */}
                <div className="flex items-center justify-between mb-4 px-1">
                  <div className="inline-flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className={`w-7 h-7 rounded-full bg-gradient-to-br ${TONE_GRADIENTS[i % TONE_GRADIENTS.length]} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shadow`}>
                          {TESTIMONIALS[i].initials}
                        </div>
                      ))}
                    </div>
                    <div className="leading-tight">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                        <span className="ml-1 text-xs font-bold text-slate-900">4.9 / 5</span>
                      </div>
                      <div className="text-[11px] text-slate-600">Trusted by individuals &amp; security teams worldwide</div>
                    </div>
                  </div>
                </div>

                {/* Marquee window */}
                <div className="relative h-[520px] overflow-hidden rounded-3xl glass-strong shadow-2xl shadow-blue-900/10 px-4 py-4">
                  {/* Top + bottom fade masks */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />

                  <div className="marquee-vertical flex flex-col gap-3">
                    {loop.map((t, i) => (
                      <TestimonialCard key={i} t={t} gradient={TONE_GRADIENTS[i % TONE_GRADIENTS.length]} />
                    ))}
                  </div>
                </div>

                {/* Below the carousel — trust strip */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <Pill k="1.6B+" v="Records analyzed" />
                  <Pill k="2,000+" v="Data sources" />
                  <Pill k="50+" v="Countries" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, gradient }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200/80 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow text-white text-[11px] font-bold`}>
            {t.initials}
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-slate-900 text-sm">{t.name}</div>
            <div className="text-[10px] text-slate-500">{t.role}</div>
          </div>
        </div>
        <Quote className="w-4 h-4 text-blue-300" />
      </div>
      <div className="flex items-center gap-0.5 text-amber-500 mb-2">
        {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
      </div>
      <p className="text-[13px] text-slate-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
    </div>
  );
}

function Pill({ k, v }) {
  return (
    <div className="rounded-xl bg-white border border-slate-200 px-3 py-2">
      <div className="font-mono text-base font-extrabold text-slate-900 leading-none">{k}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">{v}</div>
    </div>
  );
}
