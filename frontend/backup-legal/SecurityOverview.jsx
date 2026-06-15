import PageHero from "../components/PageHero";
import {
  Shield,
  Lock,
  Server,
  Activity,
  Database,
  KeyRound,
  Mail
} from "lucide-react";

export default function SecurityOverview() {
  return (
    <div>
      <PageHero
        eyebrow="SECURITY"
        title="Security Overview"
        subtitle="Security is built into every layer of Track The Breach, from infrastructure and encryption to monitoring, access control, and incident response."
        icon="Shield"
      />

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="mb-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Security First Approach
            </h2>

            <p className="mt-3 text-slate-700 leading-relaxed">
              Track The Breach is designed with a security-first architecture.
              We continuously monitor infrastructure, protect customer data,
              and implement multiple layers of defense to reduce cyber risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl border p-6 bg-white">
              <Lock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold">
                Data Encryption
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• TLS encryption for data in transit</li>
                <li>• Encryption at rest</li>
                <li>• Secure key management</li>
                <li>• Secure credential storage</li>
                <li>• Industry-standard cryptography</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <KeyRound className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold">
                Access Control
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Role-based access control</li>
                <li>• Least privilege access</li>
                <li>• Multi-factor authentication</li>
                <li>• Administrative audit trails</li>
                <li>• Access review procedures</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Activity className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold">
                Continuous Monitoring
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Security event monitoring</li>
                <li>• Infrastructure monitoring</li>
                <li>• Threat intelligence analysis</li>
                <li>• Anomaly detection</li>
                <li>• Security alerting systems</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <Server className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold">
                Infrastructure Security
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Hardened cloud infrastructure</li>
                <li>• Secure network architecture</li>
                <li>• Firewall protection</li>
                <li>• DDoS mitigation</li>
                <li>• Regular security reviews</li>
              </ul>
            </div>

          </div>

          <div className="mt-10 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold">
              Vulnerability Management
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We continuously evaluate security risks through vulnerability
              assessments, code reviews, infrastructure reviews, monitoring,
              and responsible disclosure programs. Security findings are
              prioritized and remediated according to risk severity.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold">
              Incident Response
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Track The Breach maintains documented incident response
              procedures covering identification, containment,
              investigation, remediation, recovery, and customer
              communication when required.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-8">
            <h2 className="text-2xl font-bold">
              Business Continuity
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Backup procedures, disaster recovery processes,
              monitoring systems, and operational controls help
              maintain service availability and resilience.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <Mail className="w-8 h-8 mb-4" />

            <h2 className="text-2xl font-bold">
              Security Contact
            </h2>

            <p className="mt-3 text-blue-100">
              Security questions, enterprise security reviews,
              and compliance requests can be directed to:
            </p>

            <p className="mt-4 font-semibold">
              security@trackthebreach.com
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
