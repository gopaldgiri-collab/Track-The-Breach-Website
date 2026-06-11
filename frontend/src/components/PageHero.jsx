import * as Icons from "lucide-react";

export default function PageHero({ eyebrow, title, subtitle, icon = "Sparkles", children }) {
  const Icon = Icons[icon] || Icons.Sparkles;
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-16 md:pb-24">
      <div className="absolute inset-0 grid-bg-light radial-fade opacity-50" />
      <div className="absolute -top-32 left-1/4 w-[700px] h-[600px] bg-blue-300/25 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl" />
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-blue-200 mb-6">
            <Icon className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600">{eyebrow}</span>
          </div>
          <h1
            data-testid="page-hero-title"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900 leading-[1.05]"
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
