import AdvisorsSection from "./components/AdvisorsSection";
import Eta from "./components/Eta";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import LandingFooter from "./components/LandingFooter";
import Requirements from "./components/Requirements";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

function LandingPage() {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <AdvisorsSection />
      <HowItWorks />
      <Eta />
      <Requirements />
      <Testimonials />
      <Faq />
      <LandingFooter />
    </div>
  );
}

export default LandingPage;
