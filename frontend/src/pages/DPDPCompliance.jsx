import LegalPage from "@/components/legal/LegalPage";

export default function DPDPCompliance() {
const sections = [
{
title: "Our Commitment to DPDP Compliance",
content: (
<> <p>
Track The Breach is committed to protecting personal data and complying with India's Digital Personal Data Protection Act (DPDP Act). </p> <p>
We implement privacy-by-design principles and maintain safeguards to ensure lawful, fair, and transparent processing of personal data. </p>
</>
)
},
{
title: "Personal Data We Process",
content: (
<> <ul className="list-disc pl-6"> <li>Email addresses</li> <li>Phone numbers</li> <li>Social media account identifiers</li> <li>Digital identity exposure indicators</li> <li>Customer support communications</li> <li>Account and subscription information</li> </ul>
</>
)
},
{
title: "Purpose of Processing",
content: (
<> <ul className="list-disc pl-6"> <li>Provide breach monitoring services</li> <li>Detect identity exposure risks</li> <li>Generate security alerts</li> <li>Improve cybersecurity intelligence</li> <li>Deliver customer support</li> <li>Meet legal and regulatory obligations</li> </ul>
</>
)
},
{
title: "Consent Management",
content: (
<> <p>
Where required by law, Track The Breach obtains valid consent before processing personal data. </p> <p>
Users may withdraw consent at any time subject to legal and contractual requirements. </p>
</>
)
},
{
title: "Rights of Data Principals",
content: (
<> <ul className="list-disc pl-6"> <li>Right to access information</li> <li>Right to correction and updates</li> <li>Right to erase personal data</li> <li>Right to grievance redressal</li> <li>Right to nominate another person</li> </ul>
</>
)
},
{
title: "Data Security",
content: (
<> <p>
We maintain technical and organizational safeguards including encryption, access controls, monitoring, audit logging, and incident response procedures. </p>
</>
)
},
{
title: "Data Retention",
content: (
<> <p>
Personal data is retained only for as long as required to provide services, comply with legal obligations, and protect users against security threats. </p>
</>
)
},
{
title: "Contact Information",
content: (
<> <p>Privacy Team: [privacy@trackthebreach.com](mailto:privacy@trackthebreach.com)</p> <p>Support Team: [hello@trackthebreach.com](mailto:hello@trackthebreach.com)</p> <p>Last Updated: June 2026</p>
</>
)
}
];

return ( <LegalPage
   eyebrow="COMPLIANCE"
   title="DPDP Compliance"
   subtitle="Track The Breach's commitment to India's Digital Personal Data Protection Act (DPDP Act) and responsible data governance."
   sections={sections}
 />
);
}
