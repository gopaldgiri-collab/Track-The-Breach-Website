import PageHero from "../components/PageHero";
import {
  Shield,
  Scale,
  FileText,
  Lock,
  Globe,
  AlertTriangle
} from "lucide-react";

export default function LawEnforcementRequests() {
  return (
    <div>
      <PageHero
        eyebrow="LAW ENFORCEMENT REQUESTS"
        title="Law Enforcement Request Policy"
        subtitle="How Track The Breach evaluates, responds to, and protects customer data when receiving government and legal requests."
        icon="Scale"
      />

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
            <h2 className="text-2xl font-bold">
              Our Commitment
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Track The Breach is committed to protecting customer privacy
              and only discloses information when legally required to do so.
              Every request is reviewed for validity, jurisdiction,
              proportionality, and legal authority before any action is taken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl border p-6 bg-white">
              <Scale className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold">
                Legal Review
              </h3>

              <p className="mt-3 text-slate-600">
                All requests undergo legal review to verify authenticity,
                scope, jurisdiction, and applicable legal requirements.
              </p>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Shield className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold">
                Privacy Protection
              </h3>

              <p className="mt-3 text-slate-600">
                We disclose only the minimum information legally required
                and reject requests that are invalid or overbroad.
              </p>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <FileText className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold">
                Documentation
              </h3>

              <p className="mt-3 text-slate-600">
                Requests and responses are documented and retained
                according to legal and compliance requirements.
              </p>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Lock className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold">
                Security Controls
              </h3>

              <p className="mt-3 text-slate-600">
                Access to legal requests is restricted to authorized
                personnel with a legitimate business need.
              </p>
            </div>

          </div>

          <div className="mt-10 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold">
              Types of Requests
            </h2>

            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Court Orders</li>
              <li>• Search Warrants</li>
              <li>• Subpoenas</li>
              <li>• Government Investigations</li>
              <li>• Emergency Disclosure Requests</li>
              <li>• National Security Requests (where legally applicable)</li>
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-8">
            <AlertTriangle className="w-8 h-8 text-red-600 mb-4" />

            <h2 className="text-2xl font-bold">
              Emergency Requests
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              In situations involving imminent threats to life,
              serious physical harm, or public safety,
              emergency requests may be evaluated on an expedited basis.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-8">
            <Globe className="w-8 h-8 text-cyan-600 mb-4" />

            <h2 className="text-2xl font-bold">
              International Requests
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Requests originating outside the jurisdiction in which
              customer data is stored may require additional legal review
              and validation before processing.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold">
              Customer Notification
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Where legally permitted, Track The Breach may notify affected
              customers before disclosing information so they can seek
              legal remedies or challenge the request.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <h2 className="text-2xl font-bold">
              Legal Contact
            </h2>

            <p className="mt-3 text-blue-100">
              Official legal requests should be directed to:
            </p>

            <p className="mt-4 font-semibold">
              legal@trackthebreach.com
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
