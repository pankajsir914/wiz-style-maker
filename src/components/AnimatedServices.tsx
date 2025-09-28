import { 
  Video, 
  Film, 
  Sparkles, 
  Palette, 
  Headphones, 
  Image,
  Phone,
  CircleDot
} from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Video,
    title: "Short Form Content",
    description: "YouTube Shorts, Instagram Reels, TikTok videos - we create thumb-stopping content that keeps viewers hooked from the first frame.",
  },
  {
    icon: Film,
    title: "Long Form Editing",
    description: "YouTube videos, podcasts, documentaries - professional editing that maintains viewer retention throughout your content.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Animated intros, lower thirds, transitions - eye-catching graphics that elevate your production value instantly.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Professional color correction and grading - we transform raw footage into cinematic masterpieces with perfect mood and tone.",
  },
  {
    icon: Headphones,
    title: "Sound Design",
    description: "Audio mixing, sound effects, background music - crystal clear audio that enhances your story and keeps viewers engaged.",
  },
  {
    icon: Image,
    title: "Thumbnail Design",
    description: "Eye-catching thumbnails optimized for maximum CTR - because great content deserves to be clicked and watched.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, controls } = useScrollAnimation();

  const scrollToSection = (index: number) => {
    setActiveIndex(index);
    const element = document.getElementById(`service-${index}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-purple-100/30 to-blue-100/40"
      />

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border-0 p-3 sm:p-6 lg:p-12">
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={controls}
              variants={fadeInUp}
              className="text-center mb-6 sm:mb-12 lg:mb-16"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <span className="text-xs sm:text-sm font-medium text-primary tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
                  NEW!
                </span>
              </motion.div>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent mb-2 sm:mb-4">
                Our Services
              </h2>
            </motion.div>
            
            {/* Services Grid */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto mb-6 sm:mb-12 lg:mb-16"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  id={`service-${index}`}
                  variants={staggerItem}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="flex gap-3 sm:gap-4">
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <service.icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-lg md:text-xl font-display font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
              >
                <span className="text-sm sm:text-base font-medium">Want to discuss</span>
                <span className="text-sm sm:text-base font-semibold underline underline-offset-4">Let's Schedule a Call</span>
                <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              </motion.a>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;