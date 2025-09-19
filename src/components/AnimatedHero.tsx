import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import ContactModal from "./ContactModal";
import { motion } from "framer-motion";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Animated gradient background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-50/30 to-blue-100/40"
      />
      
      <motion.div 
        animate={floatingAnimation}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-bl from-pink-300/20 to-purple-300/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1.5 } }}
        className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-blue-300/15 to-pink-300/15 rounded-full blur-3xl"
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-[length:var(--font-h1)] font-display font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Transforming Videos. Elevating Brands
            </span>
          </motion.h1>
          
          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[length:var(--font-body)] text-muted-foreground"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="font-semibold"
            >
              4+ years
            </motion.span>
            <span className="text-muted-foreground/50">|</span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="font-semibold"
            >
              237+ Clients
            </motion.span>
            <span className="text-muted-foreground/50">|</span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="font-semibold"
            >
              4357+ Videos Edited
            </motion.span>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-[length:var(--font-body-lg)] text-foreground/70 max-w-3xl mx-auto leading-relaxed px-4"
          >
            We help creators, coaches & businesses turn raw footage into scroll-stopping content
            that drives real growth.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center pt-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-950 text-white transition-all group min-w-[240px] rounded-full px-8 py-7 shadow-lg"
                onClick={() => setIsContactModalOpen(true)}
              >
                Book Your Free Strategy Call
                <Calendar className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Partner Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-20 space-y-6"
        >
          <p className="text-[length:var(--font-body-sm)] text-muted-foreground uppercase tracking-wider">
            Our Performance Marketing Services are Certified by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-14">
            {[
              { name: "Meta", type: "Business Partner" },
              { name: "Shopify", type: "Partners" },
              { name: "Google", type: "Partner" },
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <span className="text-[length:var(--font-body-lg)] font-bold">{partner.name}</span>
                <span className="text-[length:var(--font-body)]">{partner.type}</span>
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