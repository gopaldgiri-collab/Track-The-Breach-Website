import { useState } from "react";
import PageHero from "../components/PageHero";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Building2, Newspaper, TrendingUp, ShieldCheck, Handshake } from "lucide-react";
import { toast } from "sonner";

const REASONS = [
  { Icon: MessageSquare, label: "Support", desc: "Existing customers, account help.", email: "support@trackthebreach.com" },
  { Icon: TrendingUp, label: "Sales", desc: "Volume pricing & buying conversations.", email: "sales@trackthebreach.com" },
  { Icon: Handshake, label: "Partnerships", desc: "Resellers, MSSPs, integrators.", email: "partners@trackthebreach.com" },
  { Icon: Building2, label: "Enterprise", desc: "RFPs, security questionnaires, procurement.", email: "enterprise@trackthebreach.com" },
  { Icon: ShieldCheck, label: "Investors", desc: "Fundraising, diligence, IR.", email: "investors@trackthebreach.com" },
  { Icon: Newspaper, label: "Media & Press", desc: "Interviews, commentary, press kit.", email: "press@trackthebreach.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", reason: "Sales", message: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks — our team will reply within 4 business hours.");
    setForm({ name: "", email: "", company: "", reason: "Sales", message: "" });
  };

  return (
    <div data-testid="contact-page">
      <PageHero eyebrow="CONTACT" title="Let's secure your identity together." subtitle="Whether you're an individual, a Fortune 500 CISO, an investor, or a journalist — we'd love to hear from you." icon="MessageSquare" />

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-7 glass-strong rounded-2xl p-8" data-testid="contact-form">
            <h2 className="font-display text-2xl font-bold text-white">Send us a message</h2>
            <p className="text-sm text-slate-400 mt-1">We respond within 4 business hours.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Full name" required>
                <input
                  data-testid="contact-name"
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#0B1226] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                />
              </Field>
              <Field label="Work email" required>
                <input
                  data-testid="contact-email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#0B1226] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                />
              </Field>
              <Field label="Company">
                <input
                  data-testid="contact-company"
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-[#0B1226] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                />
              </Field>
              <Field label="Reason">
                <select
                  data-testid="contact-reason"
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  className="w-full bg-[#0B1226] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                >
                  {REASONS.map((r) => <option key={r.label}>{r.label}</option>)}
                </select>
              </Field>
            </div>
            <Field label="How can we help?" required>
              <textarea
                data-testid="contact-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#0B1226] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
              />
            </Field>
            <button
              type="submit"
              data-testid="contact-submit"
              className="mt-2 group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition shadow-[0_0_40px_rgba(79,70,229,0.4)]"
            >
              Send message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
            <p className="mt-4 text-xs text-slate-500">By submitting, you agree to our privacy policy. We never share contact data with third parties.</p>
          </form>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-[#0F172A] border border-white/5 p-6">
              <h3 className="font-display text-lg font-semibold text-white mb-4">Direct lines</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 text-indigo-300" />
                  <div>
                    <div className="text-slate-200">hello@trackthebreach.com</div>
                    <div className="text-xs text-slate-500">General inquiries</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 text-indigo-300" />
                  <div>
                    <div className="text-slate-200">+1 (415) 555-0142</div>
                    <div className="text-xs text-slate-500">Sales · Mon–Fri · 09:00–18:00 PT</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-indigo-300" />
                  <div>
                    <div className="text-slate-200">Global HQ · Bengaluru, India</div>
                    <div className="text-xs text-slate-500">Satellites: NYC · London · Singapore</div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              data-testid="contact-book-demo"
              className="block rounded-2xl bg-gradient-to-br from-indigo-600/30 to-cyan-500/10 border border-indigo-500/30 p-6 hover:border-indigo-400/50 transition"
            >
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-cyan-300/80">For Enterprise & Investors</div>
              <h3 className="font-display text-xl font-bold text-white mt-2">Book a 30-minute demo</h3>
              <p className="text-sm text-slate-300 mt-2">Live walkthrough of the platform, security architecture, and SLAs.</p>
              <div className="mt-4 inline-flex items-center gap-2 text-cyan-300 text-sm font-semibold">
                Schedule now <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            <div className="rounded-2xl bg-[#0F172A] border border-white/5 p-6">
              <h3 className="font-display text-lg font-semibold text-white mb-4">Response times</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center justify-between"><span>Critical security incident</span><span className="font-mono text-emerald-300">≤ 15 min</span></li>
                <li className="flex items-center justify-between"><span>Sales & partnerships</span><span className="font-mono text-cyan-300">≤ 4 hrs</span></li>
                <li className="flex items-center justify-between"><span>Press & investors</span><span className="font-mono text-cyan-300">≤ 1 day</span></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Reason grid */}
      <section className="py-20 border-y border-white/5 bg-gradient-to-b from-transparent via-[#070b1c] to-transparent">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-300/80">Direct inboxes</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">Skip the form. Reach the right team.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {REASONS.map((r, i) => (
              <a key={r.email} href={`mailto:${r.email}`} data-testid={`contact-reason-${i}`} className="group rounded-2xl bg-[#0B1226] border border-white/5 p-5 hover:border-cyan-500/30 transition flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                  <r.Icon className="w-4 h-4 text-indigo-300" />
                </div>
                <div className="flex-1">
                  <div className="font-display font-semibold text-white">{r.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{r.desc}</div>
                  <div className="mt-2 text-xs font-mono text-cyan-300 group-hover:underline underline-offset-4">{r.email}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block col-span-full md:col-span-1 mt-4 md:mt-0">
      <span className="block text-xs font-mono uppercase tracking-[0.15em] text-slate-400 mb-1.5">
        {label}{required && <span className="text-rose-400 ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
