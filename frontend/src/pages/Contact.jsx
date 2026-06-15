import { useState } from "react";
import PageHero from "../components/PageHero";
import { Mail, Clock, MapPin, ArrowRight, MessageSquare, Building2, Newspaper, TrendingUp, ShieldCheck, Handshake } from "lucide-react";
import { toast } from "sonner";

const REASONS = [
  { Icon: MessageSquare, label: "Support", desc: "Existing customers, account help.", email: "support@trackthebreach.com", color: "from-blue-500 to-indigo-500" },
  { Icon: TrendingUp, label: "Sales", desc: "Volume pricing & buying conversations.", email: "sales@trackthebreach.com", color: "from-emerald-500 to-green-500" },
  { Icon: Handshake, label: "Partnerships", desc: "Resellers, MSSPs, integrators.", email: "partners@trackthebreach.com", color: "from-cyan-500 to-blue-500" },
  { Icon: Building2, label: "Enterprise", desc: "RFPs, security questionnaires, procurement.", email: "enterprise@trackthebreach.com", color: "from-purple-500 to-fuchsia-500" },
  { Icon: ShieldCheck, label: "Investors", desc: "Fundraising, diligence, IR.", email: "investors@trackthebreach.com", color: "from-orange-500 to-amber-500" },
  { Icon: Newspaper, label: "Media & Press", desc: "Interviews, commentary, press kit.", email: "press@trackthebreach.com", color: "from-rose-500 to-pink-500" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", reason: "Sales", message: "" });
  const [submitting, setSubmitting] = useState(false);
const onSubmit = async (e) => {
e.preventDefault();
setSubmitting(true);

try {
const backendUrl =
process.env.REACT_APP_BACKEND_URL ||
window.location.origin;

const res = await fetch(
  `${backendUrl}/api/contact`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }
);

const data = await res.json();

console.log("Contact API Response:", data);

if (res.ok && data.ok) {
  toast.success(
    data.message ||
      "Thanks — our team will reply within 4 business hours."
  );

  setForm({
    name: "",
    email: "",
    company: "",
    reason: "Sales",
    message: "",
  });
} else {
  toast.error(
    data.message ||
      "Something went wrong. Please try again."
  );
}

} catch (err) {
console.error("Contact Form Error:", err);

toast.error(
  "Unable to connect. Please email hello@trackthebreach.com directly."
);

} finally {
setSubmitting(false);
}
};

  return (
    <div data-testid="contact-page">
      <PageHero eyebrow="CONTACT" title="Let's secure your identity together." subtitle="Whether you're an individual, a Fortune 500 CISO, an investor, or a journalist — we'd love to hear from you." icon="MessageSquare" />

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-7 glass-strong rounded-2xl p-8" data-testid="contact-form">
            <h2 className="font-display text-2xl font-bold text-slate-900">Send us a message</h2>
            <p className="text-sm text-slate-600 mt-1">We respond within 4 business hours.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Full name" required>
                <input
                  data-testid="contact-name"
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </Field>
              <Field label="Work email" required>
                <input
                  data-testid="contact-email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </Field>
              <Field label="Company">
                <input
                  data-testid="contact-company"
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </Field>
              <Field label="Reason">
                <select
                  data-testid="contact-reason"
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
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
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </Field>
            <button
              type="submit"
              disabled={submitting}
              data-testid="contact-submit"
              className="mt-2 group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-60 disabled:cursor-wait text-white font-semibold transition shadow-[0_12px_40px_-12px_rgba(37,99,235,0.55)]"
            >
              {submitting ? "Sending…" : "Send message"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
            <p className="mt-4 text-xs text-slate-500">By submitting, you agree to our privacy policy. We never share contact data with third parties.</p>
          </form>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-4">
            <div className="card-elev rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">Direct lines</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 text-blue-600" />
                  <div>
                    <div className="text-slate-800">hello@trackthebreach.com</div>
                    <div className="text-xs text-slate-500">General inquiries</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 text-blue-600" />
                  <div>
                    <div className="text-slate-800">Sales · Mon–Fri · 09:00–18:00 PT</div>
                    <div className="text-xs text-slate-500">Or chat with us live below ↓</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-blue-600" />
                  <div>
                    <div className="text-slate-800">Global HQ · Pune, Bengaluru, India</div>
                    <div className="text-xs text-slate-500">Satellites: NYC · London · Singapore</div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              data-testid="contact-book-demo"
              className="block rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 hover:shadow-[0_20px_60px_-20px_rgba(37,99,235,0.55)] transition"
            >
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-blue-100">For Enterprise & Investors</div>
              <h3 className="font-display text-xl font-bold text-white mt-2">Book a 30-minute demo</h3>
              <p className="text-sm text-blue-100 mt-2">Live walkthrough of the platform, security architecture, and SLAs.</p>
              <div className="mt-4 inline-flex items-center gap-2 text-white text-sm font-semibold">
                Schedule now <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            <div className="card-elev rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">Response times</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center justify-between"><span>Critical security incident</span><span className="font-mono text-emerald-600">≤ 15 min</span></li>
                <li className="flex items-center justify-between"><span>Sales & partnerships</span><span className="font-mono text-blue-600">≤ 4 hrs</span></li>
                <li className="flex items-center justify-between"><span>Press & investors</span><span className="font-mono text-cyan-600">≤ 1 day</span></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 border-y border-slate-200/70 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600/80">Direct inboxes</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Skip the form. Reach the right team.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {REASONS.map((r, i) => (
              <a key={r.email} href={`mailto:${r.email}`} data-testid={`contact-reason-${i}`} className="group card-elev rounded-2xl p-5 hover:-translate-y-1 transition flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${r.color} flex items-center justify-center flex-shrink-0 shadow`}>
                  <r.Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-display font-semibold text-slate-900">{r.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{r.desc}</div>
                  <div className="mt-2 text-xs font-mono text-blue-600 group-hover:underline underline-offset-4">{r.email}</div>
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
      <span className="block text-xs font-mono uppercase tracking-[0.15em] text-slate-600 mb-1.5">
        {label}{required && <span className="text-rose-500 ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
