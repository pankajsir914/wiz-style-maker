import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float animation-delay-2000" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight">
            <span className="text-foreground">Optimize Your Ads</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              For More Profit.
            </span>
          </h1>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
            <span className="text-muted-foreground">3+ years</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">50+ Brands</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">35+ Crore Ad spent</span>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto">
            A dedicated team of specialists, delivering remarkable work
            to our clients worldwide!
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity group min-w-[200px]"
              onClick={() => setIsContactModalOpen(true)}
            >
              Book a Strategy Call
              <Calendar className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10 min-w-[200px] group"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="mt-16 space-y-4">
          <p className="text-sm text-muted-foreground">Our Performance Marketing Services are Certified by</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-2xl font-bold text-muted-foreground">Meta</div>
            <div className="text-2xl font-bold text-muted-foreground">Shopify</div>
            <div className="text-2xl font-bold text-muted-foreground">Google</div>
            <div className="text-2xl font-bold text-muted-foreground">Partner</div>
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