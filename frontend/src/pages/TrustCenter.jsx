
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileText,
  Lock,
  AlertTriangle,
  Activity,
  Globe2,
  Server,
  ArrowRight
} from "lucide-react";

const COMPLIANCE = [
  {
    Icon: ShieldCheck,
    t: "SOC 2 Type II",
    d: "Security controls designed around industry best practices for confidentiality, integrity, and availability.",
    color: "from-emerald-500 to-green-500"
  },
  {
    Icon: FileText,
    t: "ISO/IEC 27001",
    d: "Information security governance aligned with globally recognized security management principles.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    Icon: Globe2,
    t: "GDPR & DPDP",
    d: "Privacy-first framework supporting international and regional data protection requirements.",
    color: "from-purple-500 to-fuchsia-500"
  },
  {
    Icon: Lock,
    t: "Enterprise Privacy",
    d: "Strong encryption, access controls, and secure handling of personal information.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    Icon: Server,
    t: "Data Residency",
    d: "Regional infrastructure and deployment flexibility for enterprise customers.",
    color: "from-orange-500 to-amber-500"
  },
  {
    Icon: AlertTriangle,
    t: "Responsible Disclosure",
    d: "Dedicated security reporting process and coordinated vulnerability disclosure program.",
    color: "from-rose-500 to-pink-500"
  }
];

const POLICIES = [
  {
    title: "Privacy Policy",
    description: "Learn how Track The Breach collects, uses, protects, and manages personal data.",
    link: "/privacy-policy"
  },
  {
    title: "Terms of Service",
    description: "Review the terms governing access and use of the Track The Breach platform.",
    link: "/terms-of-service"
  },
  {
    title: "GDPR Compliance",
    description: "Understand our approach to GDPR compliance and data subject rights.",
    link: "/gdpr-compliance"
  },
  {
    title: "DPDP Compliance",
    description: "India Digital Personal Data Protection Act compliance and user protections.",
    link: "/dpdp-compliance"
  },
  {
    title: "Security Overview",
    description: "Detailed overview of platform security architecture, controls, and safeguards.",
    link: "/security"
  },
  {
    title: "Data Processing Addendum",
    description: "Enterprise DPA for organizations processing customer data through our platform.",
    link: "/data-processing-addendum"
  },
  {
    title: "Responsible Disclosure",
    description: "Report vulnerabilities responsibly and learn about our security reporting process.",
    link: "/responsible-disclosure"
  }
];

export default function TrustCenter() {
  return (
    <div data-testid="trust-page">
      <PageHero
        eyebrow="TRUST CENTER"
        title="Security, privacy and compliance at Track The Breach"
        subtitle="Transparency is a core part of our platform. Explore our security practices, privacy commitments, compliance resources, and legal documentation."
        icon="ShieldCheck"
      />

      {/* Compliance Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600">
              Security Framework
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900">
              Built on security-first principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPLIANCE.map(({ Icon, t, d, color }, i) => (
              <div
                key={i}
                className="card-elev rounded-2xl p-6 hover:-translate-y-1 transition"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow mb-4`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="font-display text-lg font-semibold text-slate-900">
                  {t}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 border-y border-slate-200 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600">
              Policies & Documentation
            </div>

            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900">
              Trust & Compliance Resources
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Access our legal documents, privacy commitments, security practices,
              and compliance resources in one centralized location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {POLICIES.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className="card-elev rounded-2xl p-6 hover:-translate-y-1 transition group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Status & Security Contact */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="md:col-span-2 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 shadow-xl">
            <Activity className="w-6 h-6 text-emerald-300 mb-4" />

            <h3 className="font-display text-2xl font-bold">
              Platform Status
            </h3>

            <p className="mt-3 text-blue-100">
              Monitor service availability, maintenance notifications,
              and security incidents through our status page.
            </p>

            <a
              href="https://status.trackthebreach.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-5 items-center gap-2 text-white underline"
            >
              View Status Page
            </a>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
              All Systems Operational
            </div>
          </div>

          <a
            href="mailto:security@trackthebreach.com"
            className="card-elev rounded-2xl p-6 hover:-translate-y-1 transition"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow mb-4">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>

            <h3 className="font-display text-lg font-semibold text-slate-900">
              Report a Security Issue
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Found a vulnerability or security concern? Contact our security team
              directly for responsible disclosure.
            </p>

            <div className="mt-4 text-blue-600 font-medium">
              security@trackthebreach.com
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
