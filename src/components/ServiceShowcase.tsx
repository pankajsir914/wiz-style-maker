const ServiceShowcase = () => {
  return (
    <section id="service-showcase" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 via-purple-50/20 to-blue-50/40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Browser Mockup with Gradient Design */}
            <div className="relative">
              {/* Browser Container */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 max-w-md mx-auto">
                    <div className="bg-gray-100 rounded-md h-7 px-3 flex items-center">
                      <span className="text-xs text-gray-500">yourwebsite.com</span>
                    </div>
                  </div>
                </div>
                
                {/* Browser Content - Gradient Design */}
                <div className="relative h-80 bg-gradient-to-br from-pink-100/50 via-purple-50 to-pink-100/50">
                  {/* Gradient Overlay Effects */}
                  <div className="absolute inset-0">
                    {/* Cyan Center Gradient */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-200/60 to-cyan-100/40 rounded-full blur-2xl" />
                    
                    {/* Purple Accent */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-purple-300/20 rounded-full blur-xl" />
                    
                    {/* Blue Accent */}
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-blue-300/20 rounded-full blur-xl" />
                    
                    {/* Pink Edge Gradients */}
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-pink-200/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-pink-200/40 to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              {/* Purple Badge */}
              <div className="inline-flex items-center px-4 py-1.5 bg-purple-600 text-white rounded-full text-xs font-bold tracking-wider">
                WEB • WEB • WEB
              </div>

              {/* Title */}
              <h2 className="text-4xl lg:text-5xl font-display font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Web Development
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                From tech wizardry to seamless online experiences – enter the world of Technical Solutions. We transform digital hiccups into high-fives for your users.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition-colors">
                  Website Development
                </button>
                <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition-colors">
                  Landing Pages
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;