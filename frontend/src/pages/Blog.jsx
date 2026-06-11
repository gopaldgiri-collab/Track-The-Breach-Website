import PageHero from "../components/PageHero";
import { BLOG_POSTS } from "../data/content";
import { ArrowRight, Search, Clock } from "lucide-react";
import { useState } from "react";

const CATEGORIES = ["All", "Threat Intelligence", "AI Threats", "Fraud Prevention", "Dark Web", "Privacy", "Case Studies", "Identity Theft", "Scams", "Data Breaches"];

export default function Blog() {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");
  const posts = BLOG_POSTS.filter((p) => (active === "All" || p.category === active) && (q === "" || p.title.toLowerCase().includes(q.toLowerCase())));
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div data-testid="blog-page">
      <PageHero
        eyebrow="BLOG · LEARN"
        title="Cybersecurity intelligence from the front lines."
        subtitle="Threat reports, deep-dive case studies, AI threat research, and field-tested defense playbooks from the Track The Breach team."
        icon="Sparkles"
      />

      <section className="container mx-auto px-6 lg:px-8 -mt-4 mb-12">
        <div className="glass-strong rounded-2xl p-3 flex flex-col md:flex-row gap-3">
          <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0B1226] border border-white/5">
            <Search className="w-4 h-4 text-slate-500" />
            <input
              data-testid="blog-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles, threats, techniques..."
              className="bg-transparent outline-none text-sm text-white flex-1 placeholder:text-slate-500"
            />
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                data-testid={`blog-cat-${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className={`px-3 py-1.5 rounded-lg text-xs transition ${
                  active === c
                    ? "bg-indigo-600 text-white"
                    : "border border-white/10 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {featured && (
        <section className="container mx-auto px-6 lg:px-8 mb-16">
          <a href={`/blog/${featured.slug}`} data-testid="blog-featured" className="block group relative overflow-hidden rounded-2xl glass-strong p-8 md:p-12 border border-white/10 hover:border-indigo-500/40 transition">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-indigo-500/30 text-xs font-mono uppercase tracking-[0.18em] text-indigo-300">
                Featured · {featured.category}
              </div>
              <h2 className="mt-6 font-display text-3xl md:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">{featured.title}</h2>
              <p className="mt-5 text-base text-slate-300 max-w-2xl">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
                <span className="font-mono">{featured.date}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="w-3 h-3" /> {featured.reading}</span>
                <span className="inline-flex items-center gap-1.5 text-cyan-300 font-semibold ml-auto">Read article <ArrowRight className="w-3.5 h-3.5" /></span>
              </div>
            </div>
          </a>
        </section>
      )}

      <section className="container mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p, i) => (
            <a key={i} href={`/blog/${p.slug}`} data-testid={`blog-post-${i}`} className="group rounded-2xl bg-[#0F172A] border border-white/5 p-6 hover:border-cyan-500/30 transition flex flex-col">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-cyan-300/80">{p.category}</div>
              <h3 className="mt-3 font-display text-lg font-semibold text-white leading-snug group-hover:text-cyan-200 transition">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400 flex-1 line-clamp-3">{p.excerpt}</p>
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono">{p.date}</span>
                <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {p.reading}</span>
              </div>
            </a>
          ))}
        </div>
        {posts.length === 0 && (
          <div className="text-center py-20 text-slate-400" data-testid="blog-empty">No articles match your search.</div>
        )}
      </section>
    </div>
  );
}
