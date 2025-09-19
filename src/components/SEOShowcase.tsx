import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Youtube, TrendingUp, Hash } from "lucide-react";

const SEOShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/20 via-blue-50/20 to-pink-50/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <Card className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border-0 p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content Section */}
            <div className="w-full lg:w-5/12 space-y-6 animate-fade-up">
              {/* YouTube Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium">
                <Youtube className="h-4 w-4" />
                <span>YOUTUBE</span>
                <span className="opacity-60">•</span>
                <span>OPTIMIZATION</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                  YouTube SEO
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Optimize your videos for maximum reach. We handle titles, descriptions, tags, and thumbnails to boost your discoverability.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white border-gray-200 text-foreground hover:bg-gray-50 rounded-full px-6"
                >
                  Keyword Research
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white border-gray-200 text-foreground hover:bg-gray-50 rounded-full px-6"
                >
                  Tags & Titles
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white border-gray-200 text-foreground hover:bg-gray-50 rounded-full px-6"
                >
                  Analytics
                </Button>
              </div>
            </div>

            {/* Right Laptop Mockup Section */}
            <div className="w-full lg:w-7/12 relative animate-fade-up animation-delay-200">
              {/* Laptop Container */}
              <div className="relative mx-auto max-w-2xl">
                {/* Laptop Frame */}
                <div className="relative bg-gray-800 rounded-t-2xl px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                {/* Screen Content */}
                <div className="bg-gradient-to-br from-cyan-100 via-blue-50 to-pink-100 rounded-b-lg shadow-2xl p-8">
                  <div className="space-y-6">
                    {/* YouTube Analytics Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
                      <div className="flex items-center gap-3 mb-4">
                        <Youtube className="h-6 w-6 text-red-600" />
                        <span className="text-sm font-semibold text-gray-600">YOUR CHANNEL</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Views</span>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <span className="font-bold text-green-600">+245%</span>
                          </div>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-4/5 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Keywords Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
                      <div className="flex items-center gap-3 mb-4">
                        <Hash className="h-6 w-6 text-purple-600" />
                        <span className="text-sm font-semibold text-gray-600">TOP KEYWORDS</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">video editing</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">tutorial</span>
                        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">how to edit</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">premiere pro</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="bg-gray-700 h-4 rounded-b-xl"></div>
                <div className="bg-gray-600 h-2 w-4/5 mx-auto rounded-b-lg"></div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SEOShowcase;