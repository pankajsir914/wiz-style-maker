import { useState } from "react";

// Import partner logos
import metaLogo from "@/assets/meta-removebg-preview.png";
import shopifyLogo from "@/assets/shopify-logo.svg";
import googleLogo from "@/assets/google-removebg-preview.png";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import ContactModal from "./ContactModal";
import { motion } from "framer-motion";
import TypewriterText from './TypewriterText';
import CounterAnimation from './CounterAnimation';
import MagneticButton from './MagneticButton';
import { useParallax } from '@/hooks/useParallax';

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const parallaxOffset = useParallax({ speed: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-8 sm:pb-12">
      {/* Animated gradient background with parallax */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ y: parallaxOffset }}
        className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-50/30 to-blue-100/40"
      />
      
      <motion.div 
        animate={floatingAnimation}
        style={{ y: parallaxOffset * 0.5 }}
        className="absolute top-0 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
        style={{ y: parallaxOffset * 0.8 }}
        className="absolute bottom-0 right-1/4 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-gradient-to-tl from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto px-4 sm:px-8 lg:px-12 text-center"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Headline with Typewriter */}
          <motion.h1 
            variants={itemVariants}
            className="text-[length:var(--font-h1)] font-display font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              <TypewriterText text="Transforming Videos. Elevating Brands" speed={60} />
            </span>
          </motion.h1>
          
          {/* Stats with Counter Animation */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-4 text-[length:var(--font-body-sm)] sm:text-[length:var(--font-body)] text-muted-foreground"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="font-semibold"
            >
              <CounterAnimation end={4} suffix="+" /> years
            </motion.span>
            <span className="text-muted-foreground/50">|</span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="font-semibold"
            >
              <CounterAnimation end={237} suffix="+" /> Clients
            </motion.span>
            <span className="text-muted-foreground/50">|</span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="font-semibold"
            >
              <CounterAnimation end={4357} suffix="+" /> Videos Edited
            </motion.span>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-[length:var(--font-body)] sm:text-[length:var(--font-body-lg)] text-foreground/70 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4"
          >
            We help creators, coaches & businesses turn raw footage into scroll-stopping content
            that drives real growth.
          </motion.p>
          
          {/* CTA Button with Magnetic Effect */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center pt-4 sm:pt-6"
          >
            <MagneticButton
              className="bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-950 text-white transition-all group w-full sm:min-w-[240px] sm:w-auto rounded-full px-6 sm:px-8 py-4 sm:py-6 shadow-lg text-sm sm:text-base"
              onClick={() => setIsContactModalOpen(true)}
              strength={0.3}
            >
              Book Your Free Strategy Call
              <Calendar className="inline-block ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5 group-hover:rotate-12 transition-transform" />
            </MagneticButton>
          </motion.div>
        </div>
        
        {/* Partner Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-12 sm:mt-20 space-y-4 sm:space-y-6"
        >
          <p className="text-[10px] sm:text-[length:var(--font-body-sm)] text-muted-foreground uppercase tracking-wider px-2">
            Our Performance Marketing Services are Certified by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10 lg:gap-14">
            {[
              { name: "Meta", logo: metaLogo },
              { name: "Shopify", logo: shopifyLogo },
              { name: "Google", logo: googleLogo },
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-10 sm:h-16 md:h-20 w-auto object-contain drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
