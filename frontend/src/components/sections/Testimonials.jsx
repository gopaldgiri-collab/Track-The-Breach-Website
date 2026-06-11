import { TESTIMONIALS } from "../../data/content";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section data-testid="testimonials-section" className="relative py-28 border-y border-white/5 bg-gradient-to-b from-transparent via-[#070b1c] to-transparent">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-14 items-end">
          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-300/80">Testimonials</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              Trusted by CISOs, creators, and families.
            </h2>
          </div>
          <div className="md:text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-amber-500/30">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
              <span className="text-xs font-mono ml-1 text-amber-300">4.9 / 5 · 2,400+ reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              data-testid={`testimonial-${i}`}
              className="group rounded-2xl bg-[#0F172A] border border-white/5 p-6 hover:border-indigo-500/30 transition"
            >
              <Quote className="w-6 h-6 text-indigo-400/60 mb-4" />
              <p className="text-sm text-slate-200 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                  ["bg-indigo-600", "bg-cyan-600", "bg-fuchsia-600", "bg-emerald-600", "bg-amber-600", "bg-rose-600"][i % 6]
                }`}>{t.initials}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
