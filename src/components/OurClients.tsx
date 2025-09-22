import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const clients = [
  {
    name: "Sarah Johnson",
    company: "YouTube Creator",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJ",
    metric: "2.3M",
    metricLabel: "Subscribers Gained",
    description: "Transformed her raw vlogs into cinematic content that boosted watch time by 350% and grew her channel from 50K to 2.3M subscribers in just 18 months.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    gradient: "from-red-500 to-pink-600",
    icon: TrendingUp,
    tags: ["Video Editing", "YouTube Growth"],
    stats: [
      { label: "Watch Time", value: "+350%" },
      { label: "Engagement", value: "+420%" },
      { label: "Revenue", value: "+600%" }
    ]
  },
  {
    name: "FitLife Coaching",
    company: "Online Fitness Business",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=FitLife",
    metric: "5x",
    metricLabel: "Course Sales Increase",
    description: "Professional video editing for their online courses led to 5x increase in sales and 90% course completion rates, establishing them as industry leaders.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    gradient: "from-purple-500 to-blue-600",
    icon: Users,
    tags: ["Course Creation", "E-learning"],
    stats: [
      { label: "Completion", value: "90%" },
      { label: "Students", value: "10K+" },
      { label: "Growth", value: "5x" }
    ]
  },
  {
    name: "Digital Marketing Agency",
    company: "Social Media Agency",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DigiAgency",
    metric: "400%",
    metricLabel: "Client Engagement Boost",
    description: "Our short-form content editing helped their clients achieve 400% higher engagement rates across Instagram Reels, YouTube Shorts, and TikTok.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    gradient: "from-teal-500 to-green-600",
    icon: Target,
    tags: ["Short-form", "Social Media"],
    stats: [
      { label: "Reach", value: "50M+" },
      { label: "Engagement", value: "+400%" },
      { label: "Conversions", value: "+250%" }
    ]
  },
  {
    name: "MindfulLife Podcast",
    company: "Podcast Production",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MindfulPod",
    metric: "Top 10",
    metricLabel: "Podcast Rankings",
    description: "Expert audio editing and video podcast production helped them reach Top 10 in their category with over 5 million downloads per month.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    gradient: "from-indigo-500 to-purple-600",
    icon: Zap,
    tags: ["Podcast", "Audio Production"],
    stats: [
      { label: "Downloads", value: "5M/mo" },
      { label: "Ranking", value: "Top 10" },
      { label: "Episodes", value: "200+" }
    ]
  },
];

const OurClients = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const currentClient = clients[activeIndex];

  return (
    <section 
      ref={sectionRef}
      id="clients" 
      className="relative"
      style={{ height: isMobile ? `${150 * clients.length}vh` : `${100 * clients.length}vh` }}
    >
      <div 
        className={`${isSticky ? 'fixed top-0' : 'absolute'} left-0 right-0 h-screen w-full transition-all duration-300`}
        style={{
          bottom: isSticky ? 'auto' : '0',
        }}
      >
        {/* Dark Header */}
        <div className="absolute top-0 left-0 right-0 bg-background z-10 border-b border-border/20">
          <div className="container mx-auto px-4 py-3 md:py-4">
            <Badge variant="outline" className="mb-2 text-xs md:text-sm">Success Stories</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Our <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Clients</span>
            </h2>
          </div>
        </div>

        {/* Main Content Area - Responsive Layout */}
        <div className="h-full pt-20 md:pt-24 flex flex-col md:flex-row">
          {/* Left Side - Gradient Background with Images */}
          <div className="w-full md:w-1/2 h-[40vh] md:h-full relative overflow-hidden">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 bg-gradient-to-br ${client.gradient}`}
                initial={false}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 1.1,
                }}
                transition={{ duration: 0.7 }}
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
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <motion.div 
                    initial={false}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      scale: activeIndex === index ? 1 : 0.9,
                      y: activeIndex === index ? 0 : 20
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 lg:p-8 max-w-xs md:max-w-md border border-white/20">
                      <client.icon className="h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12 text-white mb-3" />
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                        {client.metric}
                      </h3>
                      <p className="text-sm md:text-base lg:text-lg text-white/80">
                        {client.metricLabel}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Stats - Desktop Only */}
                {!isMobile && (
                  <div className="absolute top-8 right-8 flex flex-col gap-3">
                    {client.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={false}
                        animate={{
                          x: activeIndex === index ? 0 : 50,
                          opacity: activeIndex === index ? 1 : 0,
                        }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20"
                      >
                        <div className="text-white/70 text-xs">{stat.label}</div>
                        <div className="text-white font-bold">{stat.value}</div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div ref={contentRef} className="w-full md:w-1/2 bg-card relative flex-1 md:flex-initial">
            <div className="h-full flex items-center justify-center p-6 md:p-8 lg:p-12">
              <div className="w-full max-w-lg">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      y: activeIndex === index ? 0 : 20,
                      display: activeIndex === index ? 'block' : 'none'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Client Header */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <Avatar className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 border-2 border-primary/20">
                        <AvatarImage src={client.avatar} alt={client.name} />
                        <AvatarFallback>{client.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">
                          {client.name}
                        </h3>
                        <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
                          {client.company}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      {client.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs md:text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Main Card */}
                    <Card className="bg-background/50 backdrop-blur-sm border-border/30 p-4 md:p-6 mb-4 md:mb-6">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-br ${client.gradient} shrink-0`}>
                          <client.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                            {client.metric}
                          </p>
                          <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
                            {client.metricLabel}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {client.description}
                      </p>
                    </Card>

                    {/* Mobile Stats */}
                    {isMobile && (
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {client.stats.map((stat, idx) => (
                          <Card key={idx} className="p-2 text-center bg-background/30">
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                            <div className="text-sm font-bold text-foreground">{stat.value}</div>
                          </Card>
                        ))}
                      </div>
                    )}

                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-1.5 md:h-2 overflow-hidden">
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${client.gradient}`}
                        initial={false}
                        animate={{
                          width: activeIndex === index ? '100%' : '0%',
                        }}
                        transition={{
                          duration: 0.7,
                          delay: activeIndex === index ? 0.2 : 0,
                        }}
                      />
                    </div>

                    {/* Progress Dots */}
                    <div className="flex items-center justify-center gap-2 mt-4 md:mt-6">
                      {clients.map((_, idx) => (
                        <div
                          key={idx}
                          className={`transition-all duration-300 ${
                            idx === activeIndex 
                              ? 'w-8 h-2 bg-primary rounded-full' 
                              : 'w-2 h-2 bg-muted rounded-full'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
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