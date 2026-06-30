import { useState } from "react";
import { TESTIMONIALS } from "../../data/content";
import { Quote, Star, ChevronDown, ChevronUp } from "lucide-react";

const AVATARS = ["bg-blue-600", "bg-cyan-600", "bg-fuchsia-600", "bg-emerald-600", "bg-orange-500", "bg-purple-600"];
const INITIAL_COUNT = 6;

export default function Testimonials() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? TESTIMONIALS : TESTIMONIALS.slice(0, INITIAL_COUNT);
  const hasMore = TESTIMONIALS.length > INITIAL_COUNT;

  return (
    <section data-testid="testimonials-section" className="relative py-28 border-y border-slate-200/70 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-14 items-end">
          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Testimonials</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Trusted by individuals, creators, and families <span className="gradient-text">worldwide.</span>
            </h2>
          </div>
          <div className="md:text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-amber-300">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />)}
              <span className="text-xs font-mono ml-1 text-amber-700">4.9 / 5 · 2,400+ reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((t, i) => (
            <div
              key={i}
              data-testid={`testimonial-${i}`}
              className="group card-elev rounded-2xl p-6 hover:-translate-y-1 transition"
            >
              <Quote className="w-6 h-6 text-blue-500/60 mb-4" />
              <p className="text-sm text-slate-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-slate-200">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white ${AVATARS[i % AVATARS.length]}`}>{t.initials}</div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              data-testid="testimonials-toggle"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white hover:border-blue-500 hover:text-blue-600 text-slate-900 text-sm font-semibold transition shadow-sm"
            >
              {expanded ? (
                <>
                  Show less
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition" />
                </>
              ) : (
                <>
                  Show more reviews ({TESTIMONIALS.length - INITIAL_COUNT} more)
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
