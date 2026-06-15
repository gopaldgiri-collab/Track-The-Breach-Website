import PageHero from "../components/PageHero";
import { Database, Globe, Server, Shield } from "lucide-react";

const SUBPROCESSORS = [
  {
    name: "Amazon Web Services (AWS)",
    service: "Cloud Infrastructure Hosting",
    location: "Global Regions",
  },
  {
    name: "MongoDB",
    service: "Database Services",
    location: "Global",
  },
  {
    name: "Google Workspace",
    service: "Email & Collaboration",
    location: "Global",
  },
  {
    name: "Cloudflare",
    service: "CDN, DNS & DDoS Protection",
    location: "Global",
  },
];

export default function Subprocessors() {
  return (
    <div>
      <PageHero
        eyebrow="TRUST CENTER"
        title="Subprocessors"
        subtitle="Transparency regarding third-party service providers that may process customer information on behalf of Track The Breach."
        icon="Database"
      />

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-10">
            <h2 className="text-xl font-bold">
              Subprocessor Transparency
            </h2>

            <p className="mt-3 text-slate-700">
              We carefully select trusted vendors to support our
              infrastructure, operations, monitoring, and customer
              services. Each provider is evaluated based on security,
              privacy, compliance, and operational requirements.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border bg-white">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4">Provider</th>
                  <th className="text-left p-4">Service</th>
                  <th className="text-left p-4">Region</th>
                </tr>
              </thead>

              <tbody>
                {SUBPROCESSORS.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t"
                  >
                    <td className="p-4 font-medium">
                      {item.name}
                    </td>

                    <td className="p-4">
                      {item.service}
                    </td>

                    <td className="p-4">
                      {item.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="rounded-2xl border p-6">
              <Shield className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-lg">
                Vendor Reviews
              </h3>
              <p className="mt-2 text-slate-600">
                Security and privacy reviews are conducted before onboarding critical vendors.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <Globe className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-lg">
                Global Operations
              </h3>
              <p className="mt-2 text-slate-600">
                Regional hosting and processing options may be available depending on subscription tier.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <Server className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-lg">
                Continuous Monitoring
              </h3>
              <p className="mt-2 text-slate-600">
                Third-party providers are reviewed periodically for security and compliance alignment.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
