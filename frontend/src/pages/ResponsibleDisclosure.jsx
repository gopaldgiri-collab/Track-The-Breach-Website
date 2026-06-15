import LegalPage from "@/components/legal/LegalPage";

export default function ResponsibleDisclosure() {
const sections = [
{
title: "Our Commitment",
content: (
<> <p>
Security is a core part of Track The Breach's mission. We appreciate
security researchers, ethical hackers, customers, and community
members who help identify vulnerabilities and security weaknesses. </p>

      <p>
        This Responsible Disclosure Policy explains how to report
        vulnerabilities, what to expect from us, and how we work together to
        improve platform security.
      </p>
    </>
  )
},

{
  title: "Reporting a Vulnerability",
  content: (
    <>
      <p>
        If you believe you have discovered a security vulnerability
        affecting Track The Breach systems, applications, infrastructure,
        APIs, or services, please report it responsibly.
      </p>

      <p>
        Security reports should be submitted to:
      </p>

      <p>
        <strong>security@trackthebreach.com</strong>
      </p>
    </>
  )
},

{
  title: "Information to Include",
  content: (
    <>
      <ul className="list-disc pl-6">
        <li>Detailed description of the vulnerability</li>
        <li>Affected URL, system, feature, or API</li>
        <li>Steps required to reproduce the issue</li>
        <li>Proof-of-concept screenshots if applicable</li>
        <li>Potential impact assessment</li>
        <li>Suggested remediation if available</li>
        <li>Your contact information</li>
      </ul>
    </>
  )
},

{
  title: "Researcher Guidelines",
  content: (
    <>
      <ul className="list-disc pl-6">
        <li>Act in good faith.</li>
        <li>Protect customer privacy.</li>
        <li>Avoid service disruption.</li>
        <li>Do not access unauthorized data.</li>
        <li>Do not modify customer information.</li>
        <li>Do not perform denial-of-service testing.</li>
        <li>Do not publicly disclose vulnerabilities before remediation.</li>
      </ul>
    </>
  )
},

{
  title: "Safe Harbor",
  content: (
    <>
      <p>
        Track The Breach supports responsible security research and will not
        initiate legal action against researchers who:
      </p>

      <ul className="list-disc pl-6">
        <li>Act in good faith.</li>
        <li>Follow this policy.</li>
        <li>Report findings responsibly.</li>
        <li>Do not harm customers or systems.</li>
        <li>Provide reasonable time for remediation.</li>
      </ul>

      <p>
        Activities conducted outside the scope of this policy may not
        qualify for Safe Harbor protections.
      </p>
    </>
  )
},

{
  title: "Response Timeline",
  content: (
    <>
      <ul className="list-disc pl-6">
        <li>Acknowledgement within 72 hours.</li>
        <li>Initial triage as quickly as possible.</li>
        <li>Status updates during investigation.</li>
        <li>Remediation communication when appropriate.</li>
      </ul>
    </>
  )
},

{
  title: "Severity Classification",
  content: (
    <>
      <h4 className="font-bold text-slate-900">Critical</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Remote code execution</li>
        <li>Authentication bypass</li>
        <li>Mass data exposure</li>
      </ul>

      <h4 className="font-bold text-slate-900">High</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Account compromise</li>
        <li>Sensitive data exposure</li>
        <li>Authorization bypass</li>
      </ul>

      <h4 className="font-bold text-slate-900">Medium</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Session management weaknesses</li>
        <li>Security misconfigurations</li>
      </ul>

      <h4 className="font-bold text-slate-900">Low</h4>
      <ul className="list-disc pl-6">
        <li>Minor security weaknesses</li>
        <li>Best-practice recommendations</li>
      </ul>
    </>
  )
},

{
  title: "Out-of-Scope Issues",
  content: (
    <>
      <ul className="list-disc pl-6">
        <li>Social engineering attacks</li>
        <li>Physical security issues</li>
        <li>Denial-of-service testing</li>
        <li>Spam-related reports</li>
        <li>Third-party service vulnerabilities</li>
        <li>Rate-limit findings without demonstrated impact</li>
      </ul>
    </>
  )
},

{
  title: "Bug Bounty Program",
  content: (
    <>
      <p>
        Track The Breach may offer bug bounty rewards for qualifying
        vulnerabilities at its sole discretion.
      </p>

      <ul className="list-disc pl-6">
        <li>Severity of the issue</li>
        <li>Quality of the report</li>
        <li>Originality of the finding</li>
        <li>Potential customer impact</li>
        <li>Ease of exploitation</li>
      </ul>
    </>
  )
},

{
  title: "Security Program",
  content: (
    <>
      <ul className="list-disc pl-6">
        <li>Continuous monitoring</li>
        <li>Infrastructure hardening</li>
        <li>Encryption in transit and at rest</li>
        <li>Access controls</li>
        <li>Audit logging</li>
        <li>Vulnerability management</li>
        <li>Incident response procedures</li>
      </ul>
    </>
  )
},

{
  title: "Contact Security Team",
  content: (
    <>
      <p>Security Team: security@trackthebreach.com</p>
      <p>Support Team: hello@trackthebreach.com</p>
      <p>Track The Breach — Pune & Bengaluru, India</p>
      <p>Last Updated: June 2026</p>
    </>
  )
}

];

return ( <LegalPage
   eyebrow="SECURITY"
   title="Responsible Disclosure Policy"
   subtitle="Track The Breach welcomes security researchers and responsible vulnerability reporting to help improve the security of our platform and services."
   sections={sections}
 />
);
}
