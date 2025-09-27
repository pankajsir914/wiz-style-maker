import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";

const OnboardingProcess = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-pink-50/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Large Card Container */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 lg:p-12">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                <span>SIMPLE PROCESS</span>
                <span className="opacity-60">•</span>
                <span>PREMIUM RESULTS</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                How it starts?
              </span>
            </h2>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Steps */}
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-4 animate-fade-in">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">1</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Upload Your Raw Footage</h3>
                    <p className="text-muted-foreground">
                      Send us your unedited clips, podcast recordings, vlog footage — anything.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 animate-fade-in animation-delay-200">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">2</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">We Craft Your Visual Identity</h3>
                    <p className="text-muted-foreground">
                      Our editors align each video to your brand tone, niche, and target audience.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 animate-fade-in animation-delay-400">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">3</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Delivery & Revisions</h3>
                    <p className="text-muted-foreground">
                      You receive platform-optimized content, ready for Instagram, YouTube, Shorts & more. Revisions? Always included.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Analytics Visual */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Dashboard Image */}
                  <motion.img 
                    src={analyticsDashboard}
                    alt="Analytics dashboard showing video performance"
                    className="w-full h-full object-cover rounded-2xl"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  
                  {/* Overlay with animated stats */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-600/40 to-transparent p-6 flex flex-col justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <motion.div 
                      className="space-y-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      {/* Animated Stats */}
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2"
                          animate={{ 
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          <span className="text-white text-sm font-medium">Views</span>
                          <p className="text-white text-xl font-bold">2.4M</p>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2"
                          animate={{ 
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.5
                          }}
                        >
                          <span className="text-white text-sm font-medium">Growth</span>
                          <p className="text-white text-xl font-bold">+42%</p>
                        </motion.div>
                      </div>
                      
                      {/* Progress bars */}
                      <div className="space-y-2">
                        <motion.div 
                          className="h-2 bg-white/20 rounded-full overflow-hidden"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 0.8, duration: 0.6 }}
                        >
                          <motion.div 
                            className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                            initial={{ width: 0 }}
                            animate={{ width: "75%" }}
                            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                          />
                        </motion.div>
                        <motion.div 
                          className="h-2 bg-white/20 rounded-full overflow-hidden"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 0.9, duration: 0.6 }}
                        >
                          <motion.div 
                            className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                            initial={{ width: 0 }}
                            animate={{ width: "90%" }}
                            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
              </motion.div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OnboardingProcess;