import Hero from "../components/sections/Hero";
import TrustStats from "../components/sections/TrustStats";
import ThreatLandscape from "../components/sections/ThreatLandscape";
import WhatWeMonitor from "../components/sections/WhatWeMonitor";
import HowItWorks from "../components/sections/HowItWorks";
import PlatformDashboard from "../components/sections/PlatformDashboard";
import SampleReport from "../components/sections/SampleReport";
import WhyUs from "../components/sections/WhyUs";
import SolutionsGrid from "../components/sections/SolutionsGrid";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";

export default function Home() {
  return (
    <div data-testid="home-page">
      <Hero />
      <TrustStats />
      <ThreatLandscape />
      <WhatWeMonitor />
      <HowItWorks />
      <PlatformDashboard />
      <SampleReport />
      <WhyUs />
      <SolutionsGrid />
      <Testimonials />
      <FAQ limit={10} />
      <FinalCTA />
    </div>
  );
}
