import PageHero from "../components/PageHero";
import { Shield, Database, Lock, Eye, UserCheck, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div>
      <PageHero
        eyebrow="LEGAL"
        title="Privacy Policy"
        subtitle="How Track The Breach collects, processes, stores, protects, and manages personal information across our platform and services."
        icon="Shield"
      />

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="mb-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Privacy Commitment
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Track The Breach is committed to protecting personal information,
              maintaining transparency, and following privacy-by-design
              principles across all products and services.
            </p>

            <div className="mt-4 text-sm text-slate-600">
              Last Updated: June 2026
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl border p-6 bg-white">
              <Database className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold">
                Information We Collect
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Full Name</li>
                <li>• Email Address</li>
                <li>• Phone Number</li>
                <li>• Organization Name</li>
                <li>• Account Credentials</li>
                <li>• Social Profile Identifiers</li>
                <li>• Government ID References (where authorized)</li>
                <li>• Public Digital Footprint Information</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Eye className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold">
                Monitoring Information
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Breach intelligence data</li>
                <li>• Dark web monitoring results</li>
                <li>• Identity exposure indicators</li>
                <li>• Digital footprint signals</li>
                <li>• Fraud and impersonation alerts</li>
                <li>• Security incident records</li>
                <li>• Risk intelligence findings</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <UserCheck className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold">
                How We Use Information
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Deliver breach monitoring services</li>
                <li>• Detect identity exposure risks</li>
                <li>• Generate security alerts</li>
                <li>• Improve platform functionality</li>
                <li>• Prevent fraud and abuse</li>
                <li>• Provide customer support</li>
                <li>• Meet legal obligations</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Lock className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold">
                Security Controls
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Encryption in transit</li>
                <li>• Encryption at rest</li>
                <li>• Role-based access controls</li>
                <li>• Security event monitoring</li>
                <li>• Infrastructure hardening</li>
                <li>• Audit logging</li>
                <li>• Continuous security reviews</li>
              </ul>
            </div>

          </div>

          <div className="mt-10 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Data Retention
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Personal information is retained only for as long as necessary
              to provide services, comply with legal obligations, resolve
              disputes, and maintain platform security. Data retention periods
              vary depending on account activity, regulatory requirements,
              and customer agreements.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Your Privacy Rights
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl bg-slate-50 p-4">
                Access Your Data
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                Correct Inaccurate Data
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                Request Data Deletion
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                Withdraw Consent
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                Data Portability Requests
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                Object To Processing
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <Mail className="w-8 h-8 mb-4" />

            <h2 className="text-2xl font-bold">
              Privacy Contact
            </h2>

            <p className="mt-3 text-blue-100">
              Questions about privacy, personal information, or data requests
              can be directed to our privacy team.
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
