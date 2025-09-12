import { Heart, MessageCircle, Share2 } from "lucide-react";

const DesignShowcase = () => {
  return (
    <section id="design-showcase" className="py-20 relative overflow-hidden">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-white to-pink-50/30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Phone mockup with gradient background */}
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-400 to-purple-600 rounded-[3rem] p-8 lg:p-12">
                {/* Phone mockup */}
                <div className="bg-white rounded-[2.5rem] p-4 shadow-2xl max-w-sm mx-auto">
                  {/* Phone screen content */}
                  <div className="bg-gray-50 rounded-[2rem] p-6 space-y-4">
                    {/* Post 1 */}
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full" />
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Cargo Jeans Store</p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg h-48 mb-3 flex items-center justify-center">
                        <p className="text-2xl font-bold text-gray-700">CARGO</p>
                      </div>
                      <div className="flex items-center justify-between text-gray-600">
                        <button className="flex items-center gap-1 text-sm hover:text-pink-500 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span>234</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm hover:text-blue-500 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span>45</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm hover:text-purple-500 transition-colors">
                          <Share2 className="w-4 h-4" />
                          <span>12</span>
                        </button>
                      </div>
                    </div>

                    {/* Post 2 */}
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Denim Collection</p>
                          <p className="text-xs text-gray-500">5 hours ago</p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg h-32 mb-3 flex items-center justify-center">
                        <p className="text-xl font-bold text-gray-700">JEANS</p>
                      </div>
                      <div className="flex items-center justify-between text-gray-600">
                        <button className="flex items-center gap-1 text-sm hover:text-pink-500 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span>567</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm hover:text-blue-500 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span>89</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm hover:text-purple-500 transition-colors">
                          <Share2 className="w-4 h-4" />
                          <span>34</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:pl-8">
              {/* Purple badge */}
              <div className="flex justify-start mb-6">
                <span className="inline-block text-xs font-semibold text-purple-700 bg-purple-100 px-4 py-2 rounded-full uppercase tracking-wider">
                  SOCIAL • SOCIAL • SOCIAL
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600 bg-clip-text text-transparent">
                  Social Media
                </span>
              </h2>

              {/* Description text */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Elevate your brand with eye-catching social media posts that drive engagement and conversions. We create content that resonates with your audience and builds lasting connections.
              </p>

              {/* Ad platform buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Facebook Ads
                </button>
                <button className="px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Google Ads
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;