import { Button } from "@/components/ui/button";

const SEOShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/20 via-blue-50/20 to-pink-50/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content Section */}
          <div className="w-full lg:w-5/12 space-y-6 animate-fade-up">
            {/* SEO Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium">
              <span>SEO</span>
              <span className="opacity-60">•</span>
              <span>SEO</span>
              <span className="opacity-60">•</span>
              <span>SEO</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Robust SEO
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Elevate your online presence, automate workflows, and define digital brilliance with hassle-free SEO
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white border-gray-200 text-foreground hover:bg-gray-50 rounded-full px-6"
              >
                Social Media
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white border-gray-200 text-foreground hover:bg-gray-50 rounded-full px-6"
              >
                Ads
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white border-gray-200 text-foreground hover:bg-gray-50 rounded-full px-6"
              >
                Videos
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
                  {/* First Website Card */}
                  <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-600 mb-2">YOUR WEBSITE</div>
                      <div className="h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>

                  {/* Second Website Card */}
                  <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-600 mb-2">YOUR WEBSITE</div>
                      <div className="h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/3"></div>
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
      </div>
    </section>
  );
};

export default SEOShowcase;