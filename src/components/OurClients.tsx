import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const clients = [
  {
    name: "TechCorp Solutions",
    company: "Enterprise Software",
    metric: "$2.5M",
    metricLabel: "Revenue Generated",
    description: "Transformed their digital presence with a comprehensive redesign that increased user engagement by 150% and doubled their conversion rates within 6 months.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    gradient: "from-blue-500 to-purple-600",
    icon: TrendingUp,
  },
  {
    name: "Global Retail Inc",
    company: "E-commerce Platform",
    metric: "3.5x",
    metricLabel: "ROI Increase",
    description: "Built a scalable e-commerce platform that handles millions of transactions daily, resulting in 3.5x ROI and 200% increase in customer retention.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    gradient: "from-purple-500 to-pink-600",
    icon: Users,
  },
  {
    name: "HealthTech Innovations",
    company: "Healthcare SaaS",
    metric: "85%",
    metricLabel: "Cost Reduction",
    description: "Developed a revolutionary healthcare management system that reduced operational costs by 85% while improving patient care quality metrics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    gradient: "from-teal-500 to-blue-600",
    icon: Target,
  },
  {
    name: "FinanceFlow",
    company: "Financial Services",
    metric: "10M+",
    metricLabel: "Active Users",
    description: "Created a cutting-edge fintech application that now serves over 10 million active users, processing billions in transactions annually.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    gradient: "from-indigo-500 to-purple-600",
    icon: Zap,
  },
];

const OurClients = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Check if section is in viewport
      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        setIsSticky(true);
        
        // Calculate scroll progress within the sticky section
        const scrolled = Math.abs(rect.top);
        const maxScroll = sectionHeight - viewportHeight;
        const progress = Math.min(scrolled / maxScroll, 1);
        
        setScrollProgress(progress);
        
        // Calculate which client should be active
        const index = Math.min(
          Math.floor(progress * clients.length),
          clients.length - 1
        );
        setActiveIndex(index);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="clients" 
      className="relative"
      style={{ height: `${100 * clients.length}vh` }}
    >
      <div 
        className={`${isSticky ? 'fixed top-0' : 'absolute'} left-0 right-0 h-screen w-full transition-all duration-300`}
        style={{
          bottom: isSticky ? 'auto' : '0',
        }}
      >
        {/* Dark Header */}
        <div className="absolute top-0 left-0 right-0 bg-background z-10 border-b border-border/20">
          <div className="container mx-auto px-4 py-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              Our Clients
            </h2>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="h-full pt-16 flex">
          {/* Left Side - Gradient Background with Images */}
          <div className="w-1/2 relative overflow-hidden">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-gradient-to-br ${client.gradient} transition-all duration-700`}
                style={{
                  opacity: activeIndex === index ? 1 : 0,
                  transform: `scale(${activeIndex === index ? 1 : 1.1})`,
                }}
              >
                <div className="absolute inset-0 bg-black/20" />
                <img
                  src={client.image}
                  alt={client.name}
                  className={`absolute inset-0 w-full h-full object-cover mix-blend-overlay transition-all duration-700 ${
                    activeIndex === index ? 'opacity-70 scale-100' : 'opacity-0 scale-110'
                  }`}
                />
                
                {/* Floating Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className={`transition-all duration-700 ${
                      activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-md animate-float">
                      <client.icon className="h-12 w-12 text-white mb-4" />
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {client.metric}
                      </h3>
                      <p className="text-white/80">
                        {client.metricLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div ref={contentRef} className="w-1/2 bg-card relative">
            <div className="h-full flex items-center justify-center p-12">
              <div className="max-w-lg">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute'
                    }`}
                  >
                    <div className="mb-6">
                      <h3 className="text-4xl font-display font-bold text-foreground mb-2">
                        {client.name}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {client.company}
                      </p>
                    </div>
                    
                    <Card className="bg-background/50 backdrop-blur-sm border-border/30 p-6 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${client.gradient}`}>
                          <client.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-foreground">
                            {client.metric}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {client.metricLabel}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {client.description}
                      </p>
                    </Card>

                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${client.gradient} transition-all duration-700`}
                        style={{
                          width: activeIndex === index ? '100%' : '0%',
                          transitionDelay: activeIndex === index ? '200ms' : '0ms',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const scrollTarget = (index / (clients.length - 1)) * 
                      (sectionRef.current!.offsetHeight - window.innerHeight);
                    window.scrollTo({
                      top: sectionRef.current!.offsetTop + scrollTarget,
                      behavior: 'smooth'
                    });
                  }}
                  className="group relative"
                >
                  <div 
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                  {activeIndex === index && (
                    <div className="absolute inset-0 -m-1">
                      <div className="w-5 h-5 rounded-full border-2 border-primary animate-ping" />
                    </div>
                  )}
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {clients[index].name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;