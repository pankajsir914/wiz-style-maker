import { Sparkles, Palette, Wand2 } from "lucide-react";
import { Card } from "@/components/ui/card";

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
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-400 to-purple-600 rounded-3xl p-8 lg:p-12">
                  {/* Video preview mockup */}
                  <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl">
                    <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 rounded-lg aspect-video relative overflow-hidden">
                      {/* Animated elements preview */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mb-4 relative">
                            <div className="absolute inset-0 bg-white/20 blur-xl animate-pulse"></div>
                            <h3 className="text-3xl font-bold text-white relative z-10">MOTION</h3>
                          </div>
                          <div className="flex justify-center gap-3">
                            <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-lg flex items-center justify-center animate-float">
                              <Sparkles className="h-8 w-8 text-white" />
                            </div>
                            <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-lg flex items-center justify-center animate-float animation-delay-200">
                              <Palette className="h-8 w-8 text-white" />
                            </div>
                            <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-lg flex items-center justify-center animate-float animation-delay-400">
                              <Wand2 className="h-8 w-8 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Timeline indicator */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-white">00:00</span>
                          <div className="flex-1 bg-gray-700 rounded-full h-1.5">
                            <div className="h-full w-2/3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                          </div>
                          <span className="text-xs text-white">00:15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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