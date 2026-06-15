import LegalPage from "@/components/legal/LegalPage";

export default function TermsOfService() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: (
        <>
          <p>
            By accessing or using Track The Breach, you agree to be bound
            by these Terms of Service and all applicable laws and regulations.
          </p>

          <p>
            If you do not agree with any portion of these terms,
            you should discontinue use of the platform immediately.
          </p>
        </>
      )
    },

    {
      title: "About Track The Breach",
      content: (
        <>
          <p>
            Track The Breach is an AI-powered Digital Identity Protection
            and Breach Intelligence platform helping individuals,
            professionals, families, businesses and enterprises monitor
            digital exposure risks.
          </p>
        </>
      )
    },

    {
      title: "User Accounts",
      content: (
        <>
          <ul className="list-disc pl-6">
            <li>Provide accurate information.</li>
            <li>Keep login credentials secure.</li>
            <li>Notify us of unauthorized access.</li>
            <li>Comply with applicable laws.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <LegalPage
      eyebrow="LEGAL"
      title="Terms of Service"
      subtitle="Terms governing the use of Track The Breach products, services, website, and platform."
      sections={sections}
    />
  );
}
