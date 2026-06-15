import PageHero from "../components/PageHero";

export default function ResponsibleDisclosure() {
  return (
    <div>
      <PageHero
        eyebrow="SECURITY"
        title="Responsible Disclosure Policy"
        subtitle="Track The Breach welcomes security researchers and responsible vulnerability reporting to help improve the security of our platform and services."
      />

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="prose prose-slate max-w-none">

            <h2>Our Commitment</h2>

            <p>
              Security is a core part of Track The Breach's mission.
              We appreciate the efforts of security researchers,
              ethical hackers, customers, and community members who
              help identify vulnerabilities and security weaknesses.
            </p>

            <p>
              This Responsible Disclosure Policy explains how to
              report vulnerabilities, what to expect from us, and
              how we work together to improve platform security.
            </p>

            <h2>Reporting a Vulnerability</h2>

            <p>
              If you believe you have discovered a security
              vulnerability affecting Track The Breach systems,
              applications, infrastructure, APIs, or services,
              please report it responsibly.
            </p>

            <p>
              Security reports should be submitted to:
            </p>

            <p>
              <strong>security@trackthebreach.com</strong>
            </p>

            <h2>Information to Include</h2>

            <p>
              To help our security team investigate efficiently,
              please include:
            </p>

            <ul>
              <li>Detailed description of the vulnerability</li>
              <li>Affected URL, system, feature, or API</li>
              <li>Steps required to reproduce the issue</li>
              <li>Proof-of-concept screenshots if applicable</li>
              <li>Potential impact assessment</li>
              <li>Suggested remediation if available</li>
              <li>Your contact information</li>
            </ul>

            <h2>What We Ask Researchers To Do</h2>

            <ul>
              <li>Act in good faith.</li>
              <li>Protect customer privacy.</li>
              <li>Avoid disruption of services.</li>
              <li>Avoid accessing data that does not belong to you.</li>
              <li>Do not modify customer information.</li>
              <li>Do not perform denial-of-service testing.</li>
              <li>Do not publicly disclose vulnerabilities before remediation.</li>
            </ul>

            <h2>Safe Harbor</h2>

            <p>
              Track The Breach supports responsible security research.
            </p>

            <p>
              We will not initiate legal action against researchers
              who:
            </p>

            <ul>
              <li>Act in good faith.</li>
              <li>Follow this policy.</li>
              <li>Report findings responsibly.</li>
              <li>Do not harm customers or systems.</li>
              <li>Provide reasonable time for remediation.</li>
            </ul>

            <p>
              Activities conducted outside the scope of this policy
              may not qualify for Safe Harbor protections.
            </p>

            <h2>Response Timeline</h2>

            <p>
              Our security team aims to:
            </p>

            <ul>
              <li>Acknowledge reports within 72 hours.</li>
              <li>Begin triage as quickly as possible.</li>
              <li>Provide status updates during investigation.</li>
              <li>Communicate remediation progress when appropriate.</li>
            </ul>

            <p>
              Actual timelines may vary depending on vulnerability
              complexity and severity.
            </p>

            <h2>Vulnerability Severity Levels</h2>

            <h3>Critical</h3>

            <ul>
              <li>Remote code execution</li>
              <li>Authentication bypass</li>
              <li>Mass data exposure</li>
              <li>Privilege escalation affecting multiple users</li>
            </ul>

            <h3>High</h3>

            <ul>
              <li>Account compromise</li>
              <li>Sensitive data exposure</li>
              <li>Authorization bypass</li>
              <li>Critical API vulnerabilities</li>
            </ul>

            <h3>Medium</h3>

            <ul>
              <li>Limited information disclosure</li>
              <li>Session management weaknesses</li>
              <li>Security misconfigurations</li>
            </ul>

            <h3>Low</h3>

            <ul>
              <li>Minor security weaknesses</li>
              <li>Best-practice recommendations</li>
              <li>Low-impact information disclosure</li>
            </ul>

            <h2>Out-of-Scope Issues</h2>

            <p>
              The following are generally considered out of scope:
            </p>

            <ul>
              <li>Social engineering attacks.</li>
              <li>Physical security issues.</li>
              <li>Denial-of-service testing.</li>
              <li>Spam-related reports.</li>
              <li>Third-party service vulnerabilities.</li>
              <li>Issues requiring unrealistic user interaction.</li>
              <li>Rate-limit findings without demonstrated impact.</li>
            </ul>

            <h2>Bug Bounty Program</h2>

            <p>
              Track The Breach may offer bug bounty rewards for
              qualifying vulnerabilities at its sole discretion.
            </p>

            <p>
              Reward eligibility may depend on:
            </p>

            <ul>
              <li>Severity of the issue</li>
              <li>Quality of the report</li>
              <li>Originality of the finding</li>
              <li>Potential customer impact</li>
              <li>Ease of exploitation</li>
            </ul>

            <p>
              Reward decisions are determined by the Track The
              Breach Security Team.
            </p>

            <h2>Security Program</h2>

            <p>
              Our security program includes:
            </p>

            <ul>
              <li>Continuous monitoring</li>
              <li>Infrastructure hardening</li>
              <li>Encryption in transit</li>
              <li>Encryption at rest</li>
              <li>Access controls</li>
              <li>Audit logging</li>
              <li>Vulnerability management</li>
              <li>Incident response procedures</li>
              <li>Security awareness initiatives</li>
            </ul>

            <h2>Recognition</h2>

            <p>
              We appreciate researchers who help improve the
              security of our platform.
            </p>

            <p>
              With permission, Track The Breach may publicly
              acknowledge researchers who responsibly disclose
              validated vulnerabilities.
            </p>

            <h2>Contact Security Team</h2>

            <p>
              Security Team: security@trackthebreach.com
            </p>

            <p>
              General Support: hello@trackthebreach.com
            </p>

            <p>
              Track The Breach<br />
              Pune & Bengaluru, India
            </p>

            <p>
              Last Updated: June 2026
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
