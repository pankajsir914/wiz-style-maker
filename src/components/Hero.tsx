import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 bg-gradient-to-br from-background via-accent/5 to-background">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-secondary opacity-10 rounded-full blur-3xl animate-float animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-light rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-10 animate-fade-up">
          {/* Headline */}
          <h1 className="text-[length:var(--font-h1)] font-display font-bold leading-tight">
            <span className="text-foreground">Optimize Your Ads</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              For More Profit.
            </span>
          </h1>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-[length:var(--font-body-sm)] sm:text-[length:var(--font-body)]">
            <span className="text-muted-foreground px-3 sm:px-4 py-1.5 sm:py-2 bg-muted/30 rounded-full">3+ years</span>
            <span className="text-muted-foreground px-3 sm:px-4 py-1.5 sm:py-2 bg-muted/30 rounded-full">50+ Brands</span>
            <span className="text-muted-foreground px-3 sm:px-4 py-1.5 sm:py-2 bg-muted/30 rounded-full">35+ Crore Ad spent</span>
          </div>
          
          {/* Subtitle */}
          <p className="text-[length:var(--font-body-lg)] text-foreground/80 max-w-3xl mx-auto leading-relaxed px-4">
            A dedicated team of specialists, delivering remarkable work
            to our clients worldwide!
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity group min-w-[240px] rounded-full px-8 py-7"
              onClick={() => setIsContactModalOpen(true)}
            >
              Book a Strategy Call
              <Calendar className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10 min-w-[240px] group rounded-full px-8 py-7"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
          {/* Partner Logos */}
          <div className="mt-20 space-y-6">
            <p className="text-[length:var(--font-body-sm)] text-muted-foreground uppercase tracking-wider">Our Performance Marketing Services are Certified by</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-12 opacity-70">
              <div className="text-[length:var(--font-body)] sm:text-[length:var(--font-body-lg)] font-bold text-muted-foreground px-4 sm:px-6 py-2 sm:py-3 bg-muted/20 rounded-2xl">Meta</div>
              <div className="text-[length:var(--font-body)] sm:text-[length:var(--font-body-lg)] font-bold text-muted-foreground px-4 sm:px-6 py-2 sm:py-3 bg-muted/20 rounded-2xl">Shopify</div>
              <div className="text-[length:var(--font-body)] sm:text-[length:var(--font-body-lg)] font-bold text-muted-foreground px-4 sm:px-6 py-2 sm:py-3 bg-muted/20 rounded-2xl">Google</div>
              <div className="text-[length:var(--font-body)] sm:text-[length:var(--font-body-lg)] font-bold text-muted-foreground px-4 sm:px-6 py-2 sm:py-3 bg-muted/20 rounded-2xl">Partner</div>
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