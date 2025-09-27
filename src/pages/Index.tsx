import Header from "@/components/Header";
import Hero from "@/components/AnimatedHero";
import VideoShowcase from "@/components/VideoShowcase";
import Services from "@/components/AnimatedServices";
import ServiceShowcase from "@/components/ServiceShowcase";
import DesignShowcase from "@/components/DesignShowcase";
import AutomationShowcase from "@/components/AutomationShowcase";
import SEOShowcase from "@/components/SEOShowcase";
import OurClients from "@/components/OurClients";
import OnboardingProcess from "@/components/OnboardingProcess";

import Testimonials from "@/components/AnimatedTestimonials";
import FAQ from "@/components/AnimatedFAQ";
import Contact from "@/components/AnimatedContact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VideoShowcase />
        <Services />
        <ServiceShowcase />
        <DesignShowcase />
        <AutomationShowcase />
        <SEOShowcase />
        <OurClients />
        <OnboardingProcess />
        
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
};

export default Index;
