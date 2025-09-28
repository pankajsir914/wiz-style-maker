import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import fitnessReelImage from "@/assets/fitness-reel-case-study.png";
import challengeReelImage from "@/assets/challenge-reel-case-study.png";

const clients = [
  {
    name: "Ejaz - Content Creator",
    company: "YouTube Creator",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=EjazCreator",
    metric: "2.3M",
    metricLabel: "Subscribers Gained",
    description: "Transformed her raw vlogs into cinematic content that boosted watch time by 350% and grew her channel from 50K to 2.3M subscribers in just 18 months.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    videoId: "HRITOj34S38", // User's YouTube Shorts video
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
    name: "FITNESS MOTIVATION REEL",
    company: "Instagram Creator",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=FitnessReel",
    metric: "129K+",
    metricLabel: "Views",
    description: "One notable accomplishment involved editing a trending reel for a client seeking to make a splash in the digital realm. Drawing on my expertise and keen understanding of current trends, I crafted a dynamic and captivating reel that perfectly resonated with the audience. Upon its swift upload to the client's Instagram page, the reel went viral in a matter of minutes, amassing an unprecedented number of views and engagement. The client's satisfaction was evident, solidifying my reputation as a video editor capable of delivering exceptional results and exceeding expectations.",
    image: fitnessReelImage,
    videoId: null,
    gradient: "from-purple-500 to-blue-600",
    icon: Users,
    tags: ["Instagram Reels", "Viral Content"],
    stats: [
      { label: "Followers", value: "Increased" },
      { label: "Growth", value: "Viral" },
      { label: "Engagement", value: "Increased" }
    ]
  },
  {
    name: "CHALLENGE REEL",
    company: "Viral Content Creator",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ChallengeReel",
    metric: "7.4M+",
    metricLabel: "Views",
    description: "During a much-needed vacation in Rishikesh, we decided to shoot a video near a waterfall with our drone. We expertly captured that breathtaking moment. Upon returning, we edited the footage, ensuring it conveyed the same message we wanted. When the video was shared on the client's Instagram account, it quickly became a sensation, garnering a staggering 7.4 million views. People started recreating the challenge. The engagement was extraordinary, drawing in an enthusiastic audience and boosting the account's followers by an impressive 50k+.",
    image: challengeReelImage,
    videoId: null,
    gradient: "from-teal-500 to-green-600",
    icon: Target,
    tags: ["Viral Challenge", "Drone Footage"],
    stats: [
      { label: "Followers", value: "+50K" },
      { label: "Growth", value: "Viral" },
      { label: "Engagement", value: "Massive" }
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
          {/* Left Side - Video/Image Showcase */}
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
                
                {/* Video or Image */}
                {client.videoId ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <iframe
                      src={`https://www.youtube.com/embed/${client.videoId}?autoplay=1&mute=1&loop=1&playlist=${client.videoId}&enablejsapi=1&origin=${window.location.origin}`}
                      title={client.name}
                      className={`w-full h-full transition-all duration-700 ${
                        activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                      }`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={client.image}
                    alt={client.name}
                    className={`absolute inset-0 w-full h-full object-cover mix-blend-overlay transition-all duration-700 ${
                      activeIndex === index ? 'opacity-70 scale-100' : 'opacity-0 scale-110'
                    }`}
                  />
                )}
                
                {/* Floating Elements - Only show when not video */}
                {!client.videoId && (
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