import PageHero from "../components/PageHero";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";

export default function FAQPage() {
  return (
    <div data-testid="faq-page">
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        subtitle="Twenty of the most common questions we hear from individuals, enterprises, and investors — answered in plain English."
        icon="MessageSquare"
      />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
