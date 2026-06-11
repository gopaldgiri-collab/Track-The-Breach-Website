import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS, BLOG_BODIES } from "../data/content";
import { Clock, ArrowLeft, ArrowRight, Share2, BookOpen, CheckCircle2 } from "lucide-react";
import FinalCTA from "../components/sections/FinalCTA";

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const body = post && BLOG_BODIES[slug];

  if (!post) {
    return (
      <div className="container mx-auto py-32 text-center" data-testid="blogpost-not-found">
        <h1 className="font-display text-4xl text-slate-900">Article not found</h1>
        <p className="mt-3 text-slate-600">We&apos;re still preparing this story.</p>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-blue-600">
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>
      </div>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.tag === post.tag).slice(0, 3);
  const fallback = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const recommended = related.length ? related : fallback;

  // JSON-LD Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: body?.author || "Track The Breach" },
    publisher: {
      "@type": "Organization",
      name: "Track The Breach",
      logo: { "@type": "ImageObject", url: "https://customer-assets.emergentagent.com/job_threat-monitor-83/artifacts/jdbmqmpe_Logo_1-removebg-preview.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": typeof window !== "undefined" ? window.location.href : "" },
  };

  return (
    <div data-testid={`blogpost-${slug}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-16">
        <div className="absolute inset-0 grid-bg-light radial-fade opacity-40" />
        <div className="absolute -top-32 left-1/3 w-[600px] h-[500px] bg-blue-300/20 rounded-full blur-3xl" />

        <div className="relative container mx-auto">
          <Link to="/blog" data-testid="back-to-blog" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> All articles
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-blue-200 mb-6">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600">{post.category}</span>
            </div>

            <h1 data-testid="blogpost-title" className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08]">
              {post.title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">{post.excerpt}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="font-mono text-xs">{post.date}</span>
              <span className="inline-flex items-center gap-1.5 text-xs"><Clock className="w-3.5 h-3.5" /> {post.reading}</span>
              {body?.author && (
                <span className="inline-flex items-center gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {body.author}
                </span>
              )}
              <button className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs hover:border-blue-300 hover:text-blue-600 transition" data-testid="blogpost-share">
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <article className="lg:col-span-8" data-testid="blogpost-body">
              <div className="prose prose-slate max-w-none">
                {(body?.blocks || [{ type: "p", text: post.excerpt }]).map((block, i) => {
                  if (block.type === "lead") {
                    return <p key={i} className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed mb-8 pb-8 border-b border-slate-200">{block.text}</p>;
                  }
                  if (block.type === "h2") {
                    return <h2 key={i} className="font-display text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mt-12 mb-4">{block.text}</h2>;
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={i} className="my-6 space-y-3">
                        {block.items.map((it, j) => (
                          <li key={j} className="flex items-start gap-3 text-base text-slate-700">
                            <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i} className="text-base text-slate-700 leading-[1.8] my-5">{block.text}</p>;
                })}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-4">
                <div className="card-elev rounded-2xl p-6">
                  <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600/80 mb-3">Get the next briefing</div>
                  <h3 className="font-display text-lg font-semibold text-slate-900 leading-snug">Weekly threat intelligence in your inbox.</h3>
                  <p className="mt-2 text-sm text-slate-600">Curated by our research team. No spam, no ads.</p>
                  <Link to="/contact" data-testid="blogpost-subscribe" className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold w-full justify-center transition shadow">
                    Subscribe <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="card-elev rounded-2xl p-6">
                  <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600/80 mb-4">In this article</div>
                  <ul className="space-y-2 text-sm">
                    {(body?.blocks || []).filter((b) => b.type === "h2").map((b, i) => (
                      <li key={i} className="text-slate-700 hover:text-blue-600 transition">
                        <a href={`#${b.text.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}>{b.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      {recommended.length > 0 && (
        <section className="py-20 border-y border-slate-200/70 bg-white/60 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Continue reading</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-10">Related articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recommended.map((p, i) => (
                <Link key={i} to={`/blog/${p.slug}`} data-testid={`related-${i}`} className="group card-elev rounded-2xl p-6 hover:-translate-y-1 transition flex flex-col">
                  <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-600/80">{p.category}</div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-slate-900 leading-snug group-hover:text-blue-600 transition">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 flex-1 line-clamp-3">{p.excerpt}</p>
                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono">{p.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {p.reading}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </div>
  );
}
