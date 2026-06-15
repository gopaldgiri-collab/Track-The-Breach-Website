import PageHero from "../components/PageHero";
import {
  Shield,
  AlertTriangle,
  Ban,
  Globe,
  Scale,
  CheckCircle
} from "lucide-react";

export default function AcceptableUsePolicy() {
  return (
    <div>
      <PageHero
        eyebrow="ACCEPTABLE USE POLICY"
        title="Acceptable Use Policy"
        subtitle="Rules and guidelines for using Track The Breach services responsibly, legally, and ethically."
        icon="Shield"
      />

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
            <h2 className="text-2xl font-bold">
              Purpose
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Track The Breach is designed to help individuals,
              professionals, and organizations understand and
              protect their digital identity. Users must use the
              platform only for lawful and authorized purposes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl border p-6 bg-white">
              <CheckCircle className="w-8 h-8 text-green-600 mb-4" />

              <h3 className="text-xl font-bold">
                Permitted Uses
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Monitoring your own digital identity</li>
                <li>• Monitoring assets you own</li>
                <li>• Brand protection activities</li>
                <li>• Security research with authorization</li>
                <li>• Compliance and risk management</li>
                <li>• Threat intelligence analysis</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Ban className="w-8 h-8 text-red-600 mb-4" />

              <h3 className="text-xl font-bold">
                Prohibited Uses
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Illegal surveillance</li>
                <li>• Harassment or stalking</li>
                <li>• Identity theft activities</li>
                <li>• Unauthorized investigations</li>
                <li>• Cybercrime activities</li>
                <li>• Fraudulent activity</li>
              </ul>
            </div>

          </div>

          <div className="mt-10 rounded-2xl border bg-white p-8">
            <AlertTriangle className="w-8 h-8 text-orange-600 mb-4" />

            <h2 className="text-2xl font-bold">
              Abuse Prevention
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Users may not attempt to misuse the platform,
              bypass security controls, overload systems,
              scrape data without authorization, or interfere
              with service availability.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-8">
            <Globe className="w-8 h-8 text-blue-600 mb-4" />

            <h2 className="text-2xl font-bold">
              International Compliance
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Users are responsible for complying with applicable
              laws, regulations, privacy requirements, and
              cybersecurity obligations in their jurisdiction.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-8">
            <Scale className="w-8 h-8 text-purple-600 mb-4" />

            <h2 className="text-2xl font-bold">
              Enforcement
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Violations of this policy may result in account
              suspension, termination, investigation, reporting
              to authorities, or legal action where appropriate.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
