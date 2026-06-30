import LegalPage from "@/components/legal/LegalPage";

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p>
            These Terms of Service ("Terms") constitute a legally binding
            agreement between you ("you", "your", or "User") and Track The
            Breach ("we", "us", "our", or the "Company") governing your
            access to and use of the Track The Breach website, mobile
            applications, dashboards, APIs and all related products and
            services (collectively, the "Services").
          </p>
          <p>
            By creating an account, visiting our website, running a scan,
            purchasing credits, or otherwise using any part of the Services,
            you confirm that you have read, understood, and agreed to be
            bound by these Terms and our Privacy Policy. If you are using
            the Services on behalf of an organization, you represent that
            you have authority to bind that organization to these Terms.
          </p>
          <p>
            If you do not agree with any portion of these Terms, you must
            immediately discontinue use of the Services.
          </p>
        </>
      )
    },
    {
      title: "2. About Track The Breach",
      content: (
        <>
          <p>
            Track The Breach is an AI-powered Digital Identity Intelligence
            and Cybersecurity platform. We help individuals, families,
            professionals, businesses, and enterprises discover, understand
            and protect their digital identity exposure by aggregating
            signals from breach databases, threat intelligence feeds, the
            dark web, public records, social media, data brokers and
            archived internet sources.
          </p>
          <p>
            Our outputs include the Digital Identity Score, Risk Score,
            AI-written summaries, exposure findings, breach timelines,
            provider intelligence, executive PDF reports and (on selected
            plans) continuous monitoring and managed remediation.
          </p>
        </>
      )
    },
    {
      title: "3. Eligibility",
      content: (
        <>
          <p>You may use the Services only if you:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>are at least 18 years of age (or the age of majority in your jurisdiction);</li>
            <li>have the legal capacity to enter into a binding contract;</li>
            <li>are not barred from receiving the Services under applicable laws (including sanctions and export-control laws);</li>
            <li>provide accurate, current and complete information during registration and keep it up to date.</li>
          </ul>
          <p>
            Use of the Services on behalf of minors must be performed by a
            parent or legal guardian. Family plans may include monitoring
            for minor dependents subject to applicable privacy laws.
          </p>
        </>
      )
    },
    {
      title: "4. User Accounts and Security",
      content: (
        <>
          <p>To access most Services, you must create an account. You agree to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>provide accurate and complete information;</li>
            <li>keep your login credentials confidential and secure;</li>
            <li>enable multi-factor authentication where available;</li>
            <li>be solely responsible for all activity that occurs under your account;</li>
            <li>notify us immediately at <span className="font-mono">security@trackthebreach.com</span> if you suspect any unauthorized access or compromise.</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that show
            signs of fraud, abuse or violation of these Terms.
          </p>
        </>
      )
    },
    {
      title: "5. Identifiers You Submit",
      content: (
        <>
          <p>
            To run scans you may submit identifiers such as email addresses,
            phone numbers, social media handles, photographs, videos,
            government identification numbers, or other personal information
            (each, an "Identifier"). You represent and warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>you own the Identifier or have explicit consent from the lawful owner to submit it for scanning;</li>
            <li>your submission complies with all applicable privacy, data-protection and surveillance laws;</li>
            <li>you will not submit Identifiers belonging to third parties for the purpose of stalking, harassment, doxing, defamation, or unlawful investigation.</li>
          </ul>
          <p>
            We may refuse, suspend or terminate scans we reasonably believe
            violate these requirements. Identifiers are processed using
            privacy-preserving techniques wherever feasible (including
            hashing prior to submission to upstream providers).
          </p>
        </>
      )
    },
    {
      title: "6. Free Scan and Paid Plans",
      content: (
        <>
          <p>
            Track The Breach offers a Free tier that includes a Free Email
            ID Scan and limited preview output (Digital Identity Score, AI
            Security Summary, Risk Score and Email Breach Count). Paid
            plans (Starter, Professional, Business, Enterprise and Full
            Secure) unlock additional capabilities described on our Pricing
            page.
          </p>
          <p>
            All paid plans are sold as one-time credit packs. Credits are
            consumed when you initiate a scan (per the per-scan rate
            published on the Pricing page) and otherwise remain on your
            account without expiry. Credit balances are non-transferable
            and have no cash value. Promotional credits may carry
            additional terms and expiry rules disclosed at the time of
            issue.
          </p>
        </>
      )
    },
    {
      title: "7. Billing, Taxes and Refunds",
      content: (
        <>
          <p>
            Payments are processed through secure third-party processors
            (such as Razorpay, Stripe, or others as displayed at checkout).
            By submitting payment, you authorize us and our processor to
            charge the payment method for the amounts displayed plus any
            applicable taxes, fees, and currency conversions.
          </p>
          <p>
            Prices are shown in USD and INR and may change from time to
            time. Tax obligations (GST, VAT, sales tax) are your
            responsibility unless explicitly itemized at checkout.
          </p>
          <p>
            We offer a 30-day satisfaction policy: if you are not satisfied,
            contact <span className="font-mono">support@trackthebreach.com</span> within 30 days
            of purchase and we will refund unused credits at our discretion.
            Used credits, custom services (Full Secure concierge,
            takedowns, and similar managed services) and Free tier usage
            are non-refundable.
          </p>
        </>
      )
    },
    {
      title: "8. Acceptable Use",
      content: (
        <>
          <p>You agree not to, and will not allow any third party to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>use the Services to stalk, harass, defraud, harm or surveil any individual without proper legal authority;</li>
            <li>scan Identifiers you do not own or have authorization to investigate;</li>
            <li>reverse-engineer, decompile or attempt to discover the source code or underlying models of the Services;</li>
            <li>use the Services to violate intellectual property, privacy or data-protection rights of any person;</li>
            <li>attempt to bypass rate limits, usage caps, paywalls, or access controls;</li>
            <li>use the Services in connection with weapons, illegal surveillance, or activities prohibited by sanctions or export laws;</li>
            <li>resell, sublicense, or commercially redistribute Services or output without a written reseller agreement;</li>
            <li>upload malware, perform denial-of-service attacks, or probe the Services for vulnerabilities outside our Responsible Disclosure program.</li>
          </ul>
          <p>
            Violation of this section may result in immediate suspension,
            termination, forfeiture of unused credits, and reporting to law
            enforcement where appropriate.
          </p>
        </>
      )
    },
    {
      title: "9. Privacy and Data Protection",
      content: (
        <>
          <p>
            Our handling of personal data is described in our Privacy
            Policy, GDPR Compliance page and DPDP Compliance page, each of
            which is incorporated into these Terms by reference. We follow
            zero-knowledge principles wherever feasible — Identifiers are
            hashed in your browser before transmission whenever the upstream
            architecture permits.
          </p>
          <p>
            Enterprise customers may sign a Data Processing Addendum (DPA)
            and select data-residency options (EU, India, UAE, Singapore)
            available on Business and Enterprise plans.
          </p>
        </>
      )
    },
    {
      title: "10. Intellectual Property",
      content: (
        <>
          <p>
            The Services, including the Track The Breach name, logo,
            "Jiva AI" assistant, dashboards, reports, scoring models,
            algorithms, data graphs and underlying software, are owned by
            the Company and protected by intellectual-property laws.
          </p>
          <p>
            We grant you a limited, non-exclusive, non-transferable,
            revocable license to access and use the Services for your own
            personal or internal business purposes during your subscription.
            All other rights are reserved.
          </p>
          <p>
            Outputs we generate from your Identifiers (such as your
            Executive Report) may be used by you for any lawful internal
            purpose. You may not redistribute aggregated data or reverse
            engineer the underlying intelligence sources.
          </p>
        </>
      )
    },
    {
      title: "11. AI-Generated Output",
      content: (
        <>
          <p>
            Track The Breach uses artificial intelligence (including
            machine learning, language models and detection models) to
            generate scores, summaries, recommendations and reports
            (collectively, "AI Output"). AI Output is provided for
            informational purposes only. While we work hard to make our AI
            accurate and useful, AI Output may contain inaccuracies,
            omissions or false positives.
          </p>
          <p>
            You are responsible for independently verifying AI Output
            before relying on it for legal, financial, employment, medical
            or other consequential decisions. We do not provide legal,
            financial or professional advice.
          </p>
        </>
      )
    },
    {
      title: "12. Third-Party Sources and Services",
      content: (
        <>
          <p>
            The Services aggregate data from third-party sources, including
            public breach disclosures, paste sites, dark-web markets,
            social-media platforms, search engines and threat-intelligence
            feeds. We do not control these sources and make no warranty
            regarding the completeness, accuracy or legality of their
            content.
          </p>
          <p>
            The Services may also link to or integrate with third-party
            products (e.g., payment processors, SIEM tools, identity
            providers). Your use of those third-party services is governed
            by their respective terms and privacy policies.
          </p>
        </>
      )
    },
    {
      title: "13. Disclaimers",
      content: (
        <>
          <p className="uppercase text-xs tracking-wider font-semibold text-slate-500">
            Read this section carefully.
          </p>
          <p>
            The Services are provided on an "AS IS" and "AS AVAILABLE"
            basis without warranties of any kind, express or implied,
            including warranties of merchantability, fitness for a
            particular purpose, non-infringement and accuracy. We do not
            guarantee that the Services will detect every exposure, prevent
            every breach, or be uninterrupted or error-free.
          </p>
          <p>
            Track The Breach is a defensive intelligence and risk-reduction
            tool — it is not a substitute for legal counsel, professional
            cybersecurity incident response, or law-enforcement intervention.
          </p>
        </>
      )
    },
    {
      title: "14. Limitation of Liability",
      content: (
        <>
          <p>
            To the maximum extent permitted by applicable law, in no event
            will the Company, its affiliates, officers, employees, agents,
            or licensors be liable for any indirect, incidental, special,
            consequential, exemplary or punitive damages, including loss of
            profits, data, business, goodwill, or substitute services,
            arising out of or in connection with the Services.
          </p>
          <p>
            Our total cumulative liability arising out of or relating to
            these Terms or the Services is limited to the greater of (a)
            the amount you paid us in the twelve (12) months immediately
            preceding the event giving rise to liability, and (b) one
            hundred US dollars (USD 100).
          </p>
        </>
      )
    },
    {
      title: "15. Indemnification",
      content: (
        <>
          <p>
            You agree to defend, indemnify and hold harmless the Company
            and its affiliates, officers, directors, employees and agents
            from and against any claims, liabilities, damages, losses, and
            expenses (including reasonable attorneys' fees) arising out of
            or in any way connected with:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>your access to or use of the Services;</li>
            <li>your submission of Identifiers without proper authorization;</li>
            <li>your violation of these Terms or any applicable law;</li>
            <li>your violation of any third-party right, including privacy or intellectual property rights.</li>
          </ul>
        </>
      )
    },
    {
      title: "16. Suspension and Termination",
      content: (
        <>
          <p>
            We may suspend or terminate your access to the Services, or any
            portion of them, at any time without notice if we reasonably
            believe you have violated these Terms, abused the Services,
            engaged in fraudulent or illegal activity, or if continued
            service would expose us to legal or security risk.
          </p>
          <p>
            You may terminate your account at any time by writing to{" "}
            <span className="font-mono">support@trackthebreach.com</span>.
            Termination does not entitle you to a refund of used credits.
            Sections of these Terms that by their nature should survive
            termination will survive (including IP, disclaimers, limitation
            of liability, indemnification and governing law).
          </p>
        </>
      )
    },
    {
      title: "17. Modifications to the Services and Terms",
      content: (
        <>
          <p>
            We may update, modify, suspend or discontinue any part of the
            Services at any time with reasonable notice where commercially
            feasible. We may also update these Terms from time to time. We
            will notify you of material changes via email or in-product
            notice; continued use of the Services after the effective date
            of revised Terms constitutes your acceptance of the changes.
          </p>
        </>
      )
    },
    {
      title: "18. Governing Law and Jurisdiction",
      content: (
        <>
          <p>
            These Terms are governed by and construed in accordance with
            the laws of India, without regard to its conflict-of-laws
            provisions. Subject to the arbitration clause below, the courts
            located in Bengaluru, Karnataka shall have exclusive
            jurisdiction over any disputes arising out of or relating to
            these Terms or the Services.
          </p>
          <p>
            Any dispute, controversy or claim arising out of or relating to
            these Terms shall be referred to and finally resolved by
            binding arbitration administered under the Arbitration and
            Conciliation Act, 1996. The seat and venue of arbitration shall
            be Bengaluru, India, and the language of arbitration shall be
            English.
          </p>
        </>
      )
    },
    {
      title: "19. Compliance, Sanctions and Export",
      content: (
        <>
          <p>
            You may not use the Services if you are located in, or are a
            national or resident of, any jurisdiction subject to
            comprehensive sanctions, or if you appear on any government
            denied-party or restricted-party list. You agree to comply with
            all applicable import, re-import, sanctions, anti-boycott,
            export and re-export control laws.
          </p>
        </>
      )
    },
    {
      title: "20. Miscellaneous",
      content: (
        <>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Entire Agreement.</strong> These Terms, together with the Privacy Policy, GDPR Compliance, DPDP Compliance, Acceptable Use Policy, Responsible Disclosure policy and any order forms, constitute the entire agreement between you and the Company.</li>
            <li><strong>Severability.</strong> If any provision is held unenforceable, the remaining provisions will continue in full force and effect.</li>
            <li><strong>No Waiver.</strong> Our failure to enforce any right or provision is not a waiver.</li>
            <li><strong>Assignment.</strong> You may not assign these Terms without our prior written consent. We may assign these Terms to an affiliate or in connection with a merger, acquisition, or sale of assets.</li>
            <li><strong>Force Majeure.</strong> We are not liable for any delay or failure caused by events beyond our reasonable control.</li>
            <li><strong>Notices.</strong> Legal notices to us may be sent to <span className="font-mono">legal@trackthebreach.com</span>.</li>
          </ul>
        </>
      )
    },
    {
      title: "21. Contact Us",
      content: (
        <>
          <p>
            Questions about these Terms or the Services? Reach us at:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>General support: <span className="font-mono">support@trackthebreach.com</span></li>
            <li>Legal: <span className="font-mono">legal@trackthebreach.com</span></li>
            <li>Privacy / Data Protection: <span className="font-mono">privacy@trackthebreach.com</span></li>
            <li>Security disclosures: <span className="font-mono">security@trackthebreach.com</span></li>
          </ul>
          <p className="text-sm text-slate-500 mt-4">
            Effective Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </>
      )
    }
  ];

  return (
    <LegalPage
      eyebrow="LEGAL"
      title="Terms of Service"
      subtitle="The terms governing your use of Track The Breach products, services, website, dashboards, APIs and platform. Please read them carefully."
      sections={sections}
    />
  );
}
