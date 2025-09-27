import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Play, Pause, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

// Import client logos
import clientLogo1 from "@/assets/1.png";
import clientLogo2 from "@/assets/2.png";
import clientLogo3 from "@/assets/3.png";
import clientLogo4 from "@/assets/4.png";
import clientLogo5 from "@/assets/5.png";
import clientLogo6 from "@/assets/6.png";
import clientLogo7 from "@/assets/7.png";
import clientLogo8 from "@/assets/8.png";
import clientLogo9 from "@/assets/9.png";
import clientLogo10 from "@/assets/10.png";
import clientLogo11 from "@/assets/11.png";
import clientLogo12 from "@/assets/12.png";
import clientLogo13 from "@/assets/13.png";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO @ TechStart",
    image: "https://i.pravatar.cc/150?img=1",
    quote: "Working with Editorzhub.com has been transformative! Our ROI increased by 250% in just 3 months.",
    rating: 5,
    bgColor: "from-purple-100 to-pink-100",
    video: true,
  },
  {
    name: "Michael Chen",
    role: "Founder @ StyleHub",
    image: "https://i.pravatar.cc/150?img=2",
    quote: "The best marketing investment we've made. Their strategic approach delivered exceptional results.",
    rating: 5,
    bgColor: "from-blue-100 to-purple-100",
  },
  {
    name: "Emma Wilson",
    role: "Marketing Director @ FoodDelight",
    image: "https://i.pravatar.cc/150?img=3",
    quote: "Incredible team! They understood our vision and exceeded all expectations with their campaigns.",
    rating: 5,
    bgColor: "from-pink-100 to-orange-100",
  },
];

const clientLogos = [
  { name: "TechCorp", logo: clientLogo1 },
  { name: "RetailPro", logo: clientLogo2 },
  { name: "FinanceHub", logo: clientLogo3 },
  { name: "HealthCare Plus", logo: clientLogo4 },
  { name: "EduLearn", logo: clientLogo5 },
];

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref, controls } = useScrollAnimation();

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/40"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
        >
          <Card className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border-0 p-4 sm:p-6 lg:p-12">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={controls}
              variants={fadeInUp}
              className="text-center mb-8 sm:mb-12"
            >
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block text-xs sm:text-sm font-medium text-primary tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full mb-4"
              >
                TESTIMONIALS
              </motion.span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                  What Our Clients Say
                </span>
              </h2>
              <motion.div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-3xl"
                  >
                    {i === 1 ? "❤️" : "✨"}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Testimonials Grid */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} opacity-10 rounded-2xl`} />
                  <Card className="relative bg-white/90 backdrop-blur-sm border-0 p-4 sm:p-6 h-full">
                    {/* Avatar and Info */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative"
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                        />
                        {testimonial.video && (
                          <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setPlayingVideo(playingVideo === index ? null : index)}
                            className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {playingVideo === index ? (
                              <Pause className="h-6 w-6 text-white" />
                            ) : (
                              <Play className="h-6 w-6 text-white" />
                            )}
                          </motion.button>
                        )}
                      </motion.div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, rotate: -180 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        >
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-sm sm:text-base text-muted-foreground italic">"{testimonial.quote}"</p>

                    {/* Video Progress Bar */}
                    {testimonial.video && playingVideo === index && (
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 5 }}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-primary origin-left"
                      />
                    )}
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Client Logos */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              {/* Section Header */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={controls}
                transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                className="text-center mb-10 sm:mb-12"
              >
                <div className="inline-flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-20"
                  />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                    Trusted by Industry Leaders
                  </h3>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 bg-gradient-to-r from-purple-600 to-primary rounded-full opacity-20"
                  />
                </div>
                <p className="text-sm text-muted-foreground">Powering success for top brands worldwide</p>
              </motion.div>
              
              {/* 3D Marquee Container */}
              <div className="relative h-24 sm:h-32 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-50/50 via-pink-50/30 to-blue-50/40 backdrop-blur-sm">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
                
                {/* Marquee Track */}
                <motion.div 
                  animate={{ x: [0, -1500] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    },
                  }}
                  className="absolute inset-y-0 flex items-center gap-8 sm:gap-16"
                >
                  {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ 
                        scale: 1.15,
                        rotateY: 15,
                        z: 50,
                      }}
                      initial={{ rotateX: -15 }}
                      className="flex-shrink-0 group perspective-1000"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="relative px-4 sm:px-6 py-3 sm:py-4 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white/50 transform transition-all duration-300 group-hover:shadow-2xl group-hover:bg-white">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Logo Image */}
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className="relative h-10 sm:h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        
                        {/* Floating Badge */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: -5 }}
                          className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-purple-600 text-white text-xs px-2 py-0.5 rounded-full shadow-lg"
                        >
                          Partner
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Stats Row */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto"
              >
                {[
                  { value: "500+", label: "Happy Clients" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-3 bg-white/50 backdrop-blur-sm rounded-lg"
                  >
                    <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
