import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Multi-color gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-50/30 to-blue-100/40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-bl from-pink-300/20 to-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-blue-300/15 to-pink-300/15 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-up">
          {/* Headline */}
          <h1 className="text-[length:var(--font-h1)] font-display font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Transforming Videos. Elevating Brands
            </span>
            <br />
{/*             <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative inline-block">
              For More Profit
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
            </span> */}
          </h1>
          
          {/* Stats - Single line with separators */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[length:var(--font-body)] text-muted-foreground">
            <span className="font-semibold">4+ years</span>
            <span className="text-muted-foreground/50">|</span>
            <span className="font-semibold">230+ Clients</span>
            <span className="text-muted-foreground/50">|</span>
            <span className="font-semibold">4357+ Videos Edited</span>
          </div>
          
          {/* Subtitle */}
          <p className="text-[length:var(--font-body-lg)] text-foreground/70 max-w-3xl mx-auto leading-relaxed px-4">
            A dedicated team of specialists, delivering remarkable work
            to our clients worldwide!
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-950 text-white transition-all group min-w-[240px] rounded-full px-8 py-7 shadow-lg"
              onClick={() => setIsContactModalOpen(true)}
            >
              Book a Strategy Call
              <Calendar className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="mt-20 space-y-6">
          <p className="text-[length:var(--font-body-sm)] text-muted-foreground uppercase tracking-wider">
            Our Performance Marketing Services are Certified by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-14">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-[length:var(--font-body-lg)] font-bold">Meta</span>
              <span className="text-[length:var(--font-body)]">Business Partner</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-[length:var(--font-body-lg)] font-bold">Shopify</span>
              <span className="text-[length:var(--font-body)]">Partners</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-[length:var(--font-body-lg)] font-bold">Google</span>
              <span className="text-[length:var(--font-body)]">Partner</span>
            </div>
          </div>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
