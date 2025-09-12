import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
                  WEBSITE • WEBSITE • WEBSITE
                </span>
              </Badge>

              {/* Main Heading */}
              <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Web Development
                </span>
              </h2>

              {/* Description text */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your digital presence with cutting-edge web solutions tailored to your business needs.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full"
                >
                  Website Development
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full"
                >
                  Landing Pages
                </Button>
              </div>
            </div>

            {/* Right side - Browser mockup */}
            <div className="relative">
              {/* Browser frame with rounded corners */}
              <div className="bg-gray-900 rounded-2xl p-3 shadow-xl">
                {/* Browser header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 ml-4">
                    <div className="bg-gray-800 rounded-lg px-3 py-1 text-xs text-gray-400">
                      www.yourwebsite.com
                    </div>
                  </div>
                </div>

                {/* Browser content with gradient background */}
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg aspect-[16/10] relative overflow-hidden">
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm">
                    <div className="h-full flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-2xl font-bold mb-2">Your Website Here</h3>
                        <p className="text-white/80">Modern, Fast, Responsive</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
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