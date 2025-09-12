import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StatsCounter from "@/components/StatsCounter";
import Services from "@/components/Services";
import ServiceShowcase from "@/components/ServiceShowcase";
import DesignShowcase from "@/components/DesignShowcase";
import AutomationShowcase from "@/components/AutomationShowcase";
import SEOShowcase from "@/components/SEOShowcase";
import Portfolio from "@/components/Portfolio";
import OurClients from "@/components/OurClients";
import OnboardingProcess from "@/components/OnboardingProcess";
import Team from "@/components/Team";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <StatsCounter />
        <Services />
        <ServiceShowcase />
        <DesignShowcase />
        <AutomationShowcase />
        <SEOShowcase />
        <Portfolio />
        <OurClients />
        <OnboardingProcess />
        <Team />
        <Comparison />
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
