
import PageHero from "../components/PageHero";
import {
  Shield,
  Globe,
  UserCheck,
  Lock,
  Database,
  Mail
} from "lucide-react";

export default function GDPRCompliance() {
  return (
    <div>
      <PageHero
        eyebrow="COMPLIANCE"
        title="GDPR Compliance"
        subtitle="Track The Breach's commitment to protecting personal data and complying with the European Union General Data Protection Regulation (GDPR)."
        icon="Shield"
      />

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="mb-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Our GDPR Commitment
            </h2>

            <p className="mt-3 text-slate-700 leading-relaxed">
              Track The Breach is committed to protecting the privacy,
              confidentiality, and integrity of personal information processed
              within the European Economic Area (EEA), United Kingdom, and
              other jurisdictions that recognize GDPR principles.
            </p>

            <div className="mt-4 text-sm text-slate-600">
              Last Updated: June 2026
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl border p-6 bg-white">
              <Globe className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold">
                GDPR Overview
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                GDPR establishes strict standards for collecting,
                processing, storing, and protecting personal data.
                It gives individuals greater control over how
                organizations use their information.
              </p>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Database className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold">
                Legal Basis For Processing
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• User consent</li>
                <li>• Contract performance</li>
                <li>• Legal obligations</li>
                <li>• Legitimate interests</li>
                <li>• Fraud prevention</li>
                <li>• Security monitoring</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <UserCheck className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold">
                Data Subject Rights
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Right to Access</li>
                <li>• Right to Rectification</li>
                <li>• Right to Erasure</li>
                <li>• Right to Restrict Processing</li>
                <li>• Right to Data Portability</li>
                <li>• Right to Object</li>
                <li>• Rights Related to Automated Decisions</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Lock className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold">
                Security Measures
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Encryption at rest and in transit</li>
                <li>• Role-based access controls</li>
                <li>• Audit logging</li>
                <li>• Continuous monitoring</li>
                <li>• Incident response procedures</li>
                <li>• Secure infrastructure controls</li>
              </ul>
            </div>

          </div>

          <div className="mt-10 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold">
              International Data Transfers
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              When personal data is transferred outside the European
              Economic Area, Track The Breach applies appropriate safeguards,
              including Standard Contractual Clauses (SCCs), contractual
              commitments, and technical controls designed to ensure GDPR
              compliance and adequate protection.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold">
              Data Retention
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Personal data is retained only as long as necessary to
              provide services, fulfill contractual obligations,
              maintain platform security, resolve disputes,
              and comply with legal requirements.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold">
              Breach Notification
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              In the event of a personal data breach affecting GDPR-covered
              information, Track The Breach follows documented incident
              response procedures and notifies relevant authorities and
              affected individuals where legally required.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <Mail className="w-8 h-8 mb-4" />

            <h2 className="text-2xl font-bold">
              Data Protection Contact
            </h2>

            <p className="mt-3 text-blue-100">
              GDPR-related requests, data subject inquiries,
              or privacy concerns may be directed to:
            </p>

            <p className="mt-4 font-semibold">
              privacy@trackthebreach.com
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
