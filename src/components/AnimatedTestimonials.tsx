import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Play, Pause, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

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
  { name: "Meta", logo: "META" },
  { name: "Google", logo: "GOOGLE" },
  { name: "Shopify", logo: "SHOPIFY" },
  { name: "Amazon", logo: "AMAZON" },
  { name: "Microsoft", logo: "MICROSOFT" },
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
          <Card className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border-0 p-8 lg:p-12">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={controls}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block text-sm font-medium text-primary tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full mb-4"
              >
                TESTIMONIALS
              </motion.span>
              <h2 className="text-[length:var(--font-h2)] font-display font-bold mb-4">
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
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
                  <Card className="relative bg-white/90 backdrop-blur-sm border-0 p-6 h-full">
                    {/* Avatar and Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative"
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
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
                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>

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
              className="space-y-8"
            >
              <h3 className="text-center text-[length:var(--font-h4)] font-display font-semibold text-foreground mb-8">
                Trusted by Leading Brands
              </h3>
              
              {/* Marquee Container */}
              <div className="relative overflow-hidden">
                <motion.div 
                  animate={{ x: [0, -1000] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                  className="flex gap-12 whitespace-nowrap"
                >
                  {[...clientLogos, ...clientLogos].map((client, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center px-8 py-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm"
                    >
                      <span className="text-lg font-bold text-muted-foreground">{client.logo}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;