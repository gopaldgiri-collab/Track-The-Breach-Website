import PageHero from "../components/PageHero";
import {
  Shield,
  FileSearch,
  Globe,
  Lock,
  AlertTriangle,
  BarChart3
} from "lucide-react";

export default function TransparencyReport() {
  return (
    <div>
      <PageHero
        eyebrow="TRANSPARENCY REPORT"
        title="Transparency Report"
        subtitle="Our commitment to openness regarding security requests, platform abuse, privacy protection, and responsible governance."
        icon="BarChart3"
      />

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Our Commitment
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Track The Breach believes transparency builds trust.
              This report outlines how we handle government requests,
              security incidents, abuse reports, privacy requests,
              and platform governance activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

            <div className="rounded-2xl border p-6 bg-white">
              <FileSearch className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-lg">0</h3>
              <p className="text-slate-600 text-sm mt-2">
                Government Data Requests
              </p>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Shield className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-lg">0</h3>
              <p className="text-slate-600 text-sm mt-2">
                Confirmed Data Breaches
              </p>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <AlertTriangle className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-bold text-lg">0</h3>
              <p className="text-slate-600 text-sm mt-2">
                Major Security Incidents
              </p>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Lock className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-lg">100%</h3>
              <p className="text-slate-600 text-sm mt-2">
                Encryption Coverage
              </p>
            </div>

          </div>

          <div className="rounded-2xl border bg-white p-8 mb-8">
            <h2 className="text-2xl font-bold">
              Government Requests
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We review all government and legal requests carefully.
              Information is disclosed only when legally required and
              after appropriate verification procedures.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Category</th>
                    <th className="text-left py-3">Requests</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="py-3">Government Requests</td>
                    <td className="py-3">0</td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">Court Orders</td>
                    <td className="py-3">0</td>
                  </tr>

                  <tr>
                    <td className="py-3">Emergency Requests</td>
                    <td className="py-3">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-8 mb-8">
            <h2 className="text-2xl font-bold">
              Security Incidents
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We maintain a structured incident response process.
              Material incidents affecting customer data or platform
              security will be disclosed according to applicable laws
              and contractual obligations.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-8 mb-8">
            <h2 className="text-2xl font-bold">
              Privacy Requests
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Users may submit requests regarding access, correction,
              deletion, restriction, or portability of personal data.
              Requests are handled according to GDPR, DPDP, and other
              applicable privacy regulations.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-8">
            <Globe className="w-8 h-8 text-blue-600 mb-4" />

            <h2 className="text-2xl font-bold">
              Annual Publication
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              This transparency report is reviewed and updated
              periodically to reflect current operational,
              security, and compliance activities.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
