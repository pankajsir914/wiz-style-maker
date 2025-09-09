import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StatsCounter from "@/components/StatsCounter";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
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
        <Portfolio />
        <CaseStudies />
        <Process />
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
