import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const clients = [
  {
    name: "Sarah Johnson",
    company: "YouTube Creator",
    metric: "2.3M",
    metricLabel: "Subscribers Gained",
    description: "Transformed her raw vlogs into cinematic content that boosted watch time by 350% and grew her channel from 50K to 2.3M subscribers in just 18 months.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    gradient: "from-red-500 to-pink-600",
    icon: TrendingUp,
  },
  {
    name: "FitLife Coaching",
    company: "Online Fitness Business",
    metric: "5x",
    metricLabel: "Course Sales Increase",
    description: "Professional video editing for their online courses led to 5x increase in sales and 90% course completion rates, establishing them as industry leaders.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    gradient: "from-purple-500 to-blue-600",
    icon: Users,
  },
  {
    name: "Digital Marketing Agency",
    company: "Social Media Agency",
    metric: "400%",
    metricLabel: "Client Engagement Boost",
    description: "Our short-form content editing helped their clients achieve 400% higher engagement rates across Instagram Reels, YouTube Shorts, and TikTok.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    gradient: "from-teal-500 to-green-600",
    icon: Target,
  },
  {
    name: "MindfulLife Podcast",
    company: "Podcast Production",
    metric: "Top 10",
    metricLabel: "Podcast Rankings",
    description: "Expert audio editing and video podcast production helped them reach Top 10 in their category with over 5 million downloads per month.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
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
            <h2 className="text-[length:var(--font-h3)] font-display font-bold text-foreground">
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
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 max-w-md animate-float">
                      <client.icon className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-white mb-4" />
                      <h3 className="text-[length:var(--font-h3)] font-bold text-white mb-2">
                        {client.metric}
                      </h3>
                      <p className="text-[length:var(--font-body)] text-white/80">
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
                      <h3 className="text-[length:var(--font-h2)] font-display font-bold text-foreground mb-2">
                        {client.name}
                      </h3>
                      <p className="text-[length:var(--font-body-lg)] text-muted-foreground">
                        {client.company}
                      </p>
                    </div>
                    
                    <Card className="bg-background/50 backdrop-blur-sm border-border/30 p-6 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${client.gradient}`}>
                          <client.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-[length:var(--font-h3)] font-bold text-foreground">
                            {client.metric}
                          </p>
                          <p className="text-[length:var(--font-body)] text-muted-foreground">
                            {client.metricLabel}
                          </p>
                        </div>
                      </div>
                      <p className="text-[length:var(--font-body)] text-muted-foreground leading-relaxed">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;