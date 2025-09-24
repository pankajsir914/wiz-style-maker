import { Sparkles, Palette, Wand2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import motionGraphicsWorkspace from "@/assets/motion-graphics-workspace.jpg";

const DesignShowcase = () => {
  return (
    <section id="design-showcase" className="py-20 relative overflow-hidden">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-white to-pink-50/30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Card className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border-0 p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Motion Graphics showcase */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div 
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated background image */}
                  <motion.img 
                    src={motionGraphicsWorkspace}
                    alt="Motion graphics workspace"
                    className="w-full h-full object-cover rounded-3xl"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Animated overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-pink-600/30 to-transparent"
                    animate={{ 
                      opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  {/* Floating elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="flex gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center"
                        animate={{ 
                          y: [-10, 10, -10],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Sparkles className="h-8 w-8 text-white" />
                      </motion.div>
                      <motion.div 
                        className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center"
                        animate={{ 
                          y: [10, -10, 10],
                          rotate: [0, -5, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      >
                        <Palette className="h-8 w-8 text-white" />
                      </motion.div>
                      <motion.div 
                        className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center"
                        animate={{ 
                          y: [-10, 10, -10],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }}
                      >
                        <Wand2 className="h-8 w-8 text-white" />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right side - Content */}
              <div className="lg:pl-8">
                {/* Badge */}
                <div className="flex justify-start mb-6">
                  <span className="inline-block text-xs font-semibold text-purple-700 bg-purple-100 px-4 py-2 rounded-full uppercase tracking-wider">
                    GRAPHICS • GRAPHICS • GRAPHICS
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600 bg-clip-text text-transparent">
                    Motion Graphics
                  </span>
                </h2>

                {/* Description text */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Eye-catching animations, dynamic transitions, and stunning visual effects that make your videos stand out and keep viewers watching till the end.
                </p>

                {/* Service buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    Animated Intros
                  </button>
                  <button className="px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    Visual Effects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DesignShowcase;