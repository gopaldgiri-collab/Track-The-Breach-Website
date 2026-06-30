import Hero from "../components/sections/Hero";
import WhatYoullReceive from "../components/sections/WhatYoullReceive";
import WhoWeAre from "../components/sections/WhoWeAre";
import ThreatLandscape from "../components/sections/ThreatLandscape";
import TrustStats from "../components/sections/TrustStats";
import HowAIWorks from "../components/sections/HowAIWorks";
import WhatWeMonitor from "../components/sections/WhatWeMonitor";
import UserJourney from "../components/sections/UserJourney";
import SampleReport from "../components/sections/SampleReport";
import WhyUpgrade from "../components/sections/WhyUpgrade";
import JivaAI from "../components/sections/JivaAI";
import WhoNeedsTTB from "../components/sections/WhoNeedsTTB";
import ComparisonTable from "../components/sections/ComparisonTable";
import TrustSection from "../components/sections/TrustSection";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import FinalScanCTA from "../components/sections/FinalScanCTA";

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* 1. Hero */}
      <Hero />
      {/* 2. What You'll Receive — set expectations early */}
      <WhatYoullReceive />
      {/* 3. Who We Are */}
      <WhoWeAre />
      {/* 4. The Problem — why digital identity matters */}
      <ThreatLandscape />
      {/* 5. Trust stats (proof of scale) */}
      <TrustStats />
      {/* 6. How Our AI Works */}
      <HowAIWorks />
      {/* 7. What We Scan */}
      <WhatWeMonitor />
      {/* 8. User Journey — 7 steps */}
      <UserJourney />
      {/* 9. Sample Report */}
      <SampleReport />
      {/* 10. Why upgrade */}
      <WhyUpgrade />
      {/* 11. Pricing comparison (short) */}
      <ComparisonTable variant="short" />
      {/* 12. Jiva AI */}
      <JivaAI />
      {/* 13. Who needs TTB */}
      <WhoNeedsTTB />
      {/* 14. Trust pillars */}
      <TrustSection />
      {/* 15. Testimonials */}
      <Testimonials />
      {/* 16. FAQ */}
      <FAQ limit={10} />
      {/* 17. Final FREE Scan CTA before footer */}
      <FinalScanCTA />
    </div>
  );
}
