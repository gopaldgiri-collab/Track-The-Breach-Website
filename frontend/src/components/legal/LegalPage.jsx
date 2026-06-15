export default function LegalPage({
  title,
  eyebrow,
  subtitle,
  sections
}) {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-cyan-50 to-purple-100" />

        <div className="relative container mx-auto px-6 lg:px-8 py-24">
          <div className="inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-xs font-mono uppercase tracking-[0.25em] text-blue-600">
            {eyebrow}
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-slate-900">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-slate-600">
            {subtitle}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {section.title}
                </h2>

                <div className="space-y-4 text-slate-700 leading-8">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
