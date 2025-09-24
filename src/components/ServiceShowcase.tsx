import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Film, Video } from "lucide-react";
import { motion } from "framer-motion";
import videoEditingInterface from "@/assets/video-editing-interface.jpg";

const ServiceShowcase = () => {
  return (
    <section id="service-showcase" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 via-purple-50/20 to-blue-50/40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Card className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border-0 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              {/* Badge */}
              <Badge className="mb-6 px-3 py-1.5 bg-primary/10 text-primary border-primary/20 rounded-full">
                <span className="text-xs font-medium tracking-wider">
                  EDITING • EDITING • EDITING
                </span>
              </Badge>

              {/* Main Heading */}
              <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Video Editing
                </span>
              </h2>

              {/* Description text */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Professional video editing that transforms your raw footage into compelling content that captures attention and drives engagement.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full"
                >
                  YouTube Videos
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full"
                >
                  Social Media Content
                </Button>
              </div>
            </div>

            {/* Right side - Video Player mockup */}
            <div className="relative">
              {/* Video Player frame */}
              <div className="bg-gray-900 rounded-2xl p-3 shadow-xl">
                {/* Player header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Film className="h-4 w-4 text-gray-400" />
                    <span className="text-xs text-gray-400">project_final_v3.mp4</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Video content */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg aspect-video relative overflow-hidden">
                  {/* Timeline visualization */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <button className="text-white hover:text-gray-300">
                        <Play className="h-6 w-6 fill-current" />
                      </button>
                      <div className="flex-1 bg-gray-700 rounded-full h-2 relative">
                        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-300">02:45 / 08:20</span>
                    </div>
                    {/* Multi-track timeline */}
                    <div className="space-y-1">
                      <div className="h-6 bg-purple-500/30 rounded flex items-center px-2">
                        <Video className="h-3 w-3 text-white mr-2" />
                        <span className="text-[10px] text-white">Video Track</span>
                      </div>
                      <div className="h-6 bg-blue-500/30 rounded flex items-center px-2">
                        <span className="text-[10px] text-white">Audio Track</span>
                      </div>
                      <div className="h-6 bg-green-500/30 rounded flex items-center px-2">
                        <span className="text-[10px] text-white">Effects</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated video editing interface */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.img 
                      src={videoEditingInterface}
                      alt="Professional video editing interface"
                      className="w-full h-full object-cover rounded-lg"
                      animate={{ 
                        scale: [1, 1.02, 1],
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      animate={{ 
                        opacity: [0.5, 0.7, 0.5]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServiceShowcase;