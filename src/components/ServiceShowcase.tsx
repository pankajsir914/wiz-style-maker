import { TrendingUp, DollarSign } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Strategic Marketing",
    description: "Ready to give your brand the spotlight it deserves? Dive into our Paid Ads extravaganza and let your message shine in the digital universe!",
    campaigns: ["Facebook Ads", "Google Ads"],
    tags: ["ADS", "ADS", "ADS"],
    stats: {
      orders: "41,338",
      revenue: "$392,615",
    },
    chartColor: "from-cyan-400 to-blue-500",
  },
  {
    title: "Social Media Growth",
    description: "Transform your social presence into a powerhouse of engagement. We craft viral-worthy content that turns followers into loyal brand advocates!",
    campaigns: ["Instagram Growth", "LinkedIn Outreach"],
    tags: ["SOCIAL", "GROWTH", "VIRAL"],
    stats: {
      orders: "28,492",
      revenue: "$284,320",
    },
    chartColor: "from-purple-400 to-pink-500",
  },
  {
    title: "SEO Excellence",
    description: "Climb to the top of search results and stay there. Our SEO wizardry ensures your brand gets discovered by the right audience at the right time!",
    campaigns: ["Technical SEO", "Content Strategy"],
    tags: ["SEO", "RANK", "TOP"],
    stats: {
      orders: "35,729",
      revenue: "$458,910",
    },
    chartColor: "from-green-400 to-emerald-500",
  },
];

const ServiceShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="service-showcase" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50" />
      
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 ${
              activeIndex === index
                ? 'w-2 h-2 bg-primary'
                : 'w-1.5 h-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            } rounded-full`}
            aria-label={`View service ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: 3D Card with Browser Mockup */}
            <div className="relative">
              {/* 3D Card Container */}
              <div className="relative transform hover:rotate-1 transition-transform duration-500">
                {/* Background Card Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl transform rotate-3 blur-xl" />
                
                {/* Browser Mockup */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/20 overflow-hidden">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/20">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                  </div>
                  
                  {/* Chart Content */}
                  <div className="p-6 h-64 relative overflow-hidden bg-gradient-to-br from-background to-muted/20">
                    {/* Animated Chart */}
                    <svg className="w-full h-full" viewBox="0 0 400 200">
                      <defs>
                        <linearGradient id={`gradient-${activeIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" className="text-cyan-400" stopColor="currentColor" />
                          <stop offset="100%" className="text-blue-500" stopColor="currentColor" />
                        </linearGradient>
                      </defs>
                      <path
                        d={`M 20,${150 - activeIndex * 20} Q 100,${100 + activeIndex * 10} 180,${120 - activeIndex * 15} T 380,${90 + activeIndex * 20}`}
                        stroke={`url(#gradient-${activeIndex})`}
                        strokeWidth="3"
                        fill="none"
                        className="animate-pulse"
                      />
                      {/* Grid Lines */}
                      {[0, 1, 2, 3].map((i) => (
                        <line
                          key={i}
                          x1="20"
                          y1={50 + i * 40}
                          x2="380"
                          y2={50 + i * 40}
                          stroke="currentColor"
                          strokeOpacity="0.1"
                          className="text-foreground"
                        />
                      ))}
                    </svg>
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-sm font-medium text-foreground">{activeService.stats.orders}</span>
                        <span className="text-xs text-muted-foreground">Ref Orders</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-sm font-medium text-foreground">{activeService.stats.revenue}</span>
                        <span className="text-xs text-muted-foreground">Revenue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Service Details */}
            <div className="space-y-6">
              {/* Tags */}
              <div className="flex gap-2">
                {activeService.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {activeService.title}
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {activeService.description}
              </p>

              {/* Campaign Badges */}
              <div className="flex flex-wrap gap-3">
                {activeService.campaigns.map((campaign, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary/5 transition-colors"
                  >
                    {campaign}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all transform hover:scale-105">
                <span>Get Started</span>
                <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Service Selector (Mobile) */}
        <div className="flex justify-center gap-2 mt-12 lg:hidden">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 ${
                activeIndex === index
                  ? 'w-8 h-2 bg-primary'
                  : 'w-2 h-2 bg-muted-foreground/30'
              } rounded-full`}
              aria-label={`View service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;