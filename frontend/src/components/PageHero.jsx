import * as Icons from "lucide-react";

export default function PageHero({ eyebrow, title, subtitle, icon = "Sparkles", children }) {
  const Icon = Icons[icon] || Icons.Sparkles;
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-24">
      <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-indigo-500/30 mb-6">
            <Icon className="w-3.5 h-3.5 text-indigo-300" />
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-indigo-300">{eyebrow}</span>
          </div>
          <h1
            data-testid="page-hero-title"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-[1.05]"
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
