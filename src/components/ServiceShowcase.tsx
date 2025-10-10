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
      
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative">
        <Card className="rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border-0 p-4 sm:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div>
              {/* Badge */}
              <div className="flex justify-center">
                <Badge className="mb-3 sm:mb-6 px-2 sm:px-3 py-1 sm:py-1.5 bg-primary/10 text-primary border-primary/20 rounded-full">
                  <span className="text-[10px] sm:text-xs font-medium tracking-wider">
                    EDITING • EDITING • EDITING
                  </span>
                </Badge>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 text-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Video Editing
                </span>
              </h2>

              {/* Description text */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-8 leading-relaxed">
                Professional video editing that transforms your raw footage into compelling content that captures attention and drives engagement.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button 
                  variant="outline" 
                  className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm"
                >
                  YouTube Videos
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm"
                >
                  Social Media Content
                </Button>
              </div>
            </div>

            {/* Right side - Video Player */}
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

                {/* Video element */}
                <motion.video
                  className="w-full aspect-video rounded-lg object-cover"
                  controls
                  loop
                  muted
                  autoPlay
                  playsInline
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServiceShowcase;