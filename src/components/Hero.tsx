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
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 animate-fade-up">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Transforming Videos. Elevating Brands
            </span>
          </h1>
          
          {/* Stats - Responsive layout */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm sm:text-base text-muted-foreground">
            <span className="font-semibold">4+ years</span>
            <span className="hidden sm:inline text-muted-foreground/50">|</span>
            <span className="font-semibold">230+ Clients</span>
            <span className="hidden sm:inline text-muted-foreground/50">|</span>
            <span className="font-semibold">4357+ Videos</span>
          </div>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            We help creators, coaches & businesses turn raw footage into scroll-stopping content
that drives real growth.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center items-center pt-4 sm:pt-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-950 text-white transition-all group rounded-full px-6 sm:px-8 py-5 sm:py-7 shadow-lg text-sm sm:text-base"
              onClick={() => setIsContactModalOpen(true)}
            >
              <span className="hidden sm:inline">Book Your Free Strategy Call</span>
              <span className="sm:hidden">Book Free Call</span>
              <Calendar className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="mt-12 sm:mt-16 lg:mt-20 space-y-4 sm:space-y-6">
          <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider px-4">
            Our Performance Marketing Services are Certified by
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10">
            <div className="flex items-center gap-1 sm:gap-2 text-muted-foreground">
              <span className="text-base sm:text-lg font-bold">Meta</span>
              <span className="text-xs sm:text-sm">Business Partner</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 text-muted-foreground">
              <span className="text-base sm:text-lg font-bold">Shopify</span>
              <span className="text-xs sm:text-sm">Partners</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 text-muted-foreground">
              <span className="text-base sm:text-lg font-bold">Google</span>
              <span className="text-xs sm:text-sm">Partner</span>
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
