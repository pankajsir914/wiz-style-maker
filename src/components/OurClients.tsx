import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    tags: ["Video Editing", "YouTube Growth", "Content Strategy"],
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
    tags: ["Course Creation", "Fitness Content", "E-learning"],
    stats: [
      { label: "Completion Rate", value: "90%" },
      { label: "Student Count", value: "10K+" },
      { label: "Revenue Growth", value: "5x" }
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
    tags: ["Short-form Content", "Social Media", "Viral Marketing"],
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
    tags: ["Podcast Editing", "Audio Production", "Video Podcasts"],
    stats: [
      { label: "Downloads", value: "5M/mo" },
      { label: "Ranking", value: "Top 10" },
      { label: "Episodes", value: "200+" }
    ]
  },
];

const OurClients = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % clients.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % clients.length);
  };

  const currentClient = clients[activeIndex];

  return (
    <section id="clients" className="py-12 md:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <Badge variant="outline" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Clients Who <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Transformed</span> Their Business
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. See how we've helped businesses and creators achieve extraordinary growth.
          </p>
        </motion.div>

        {/* Main Content - Mobile Stacked, Desktop Side by Side */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          {/* Left Side - Visual Display */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 bg-gradient-to-br ${currentClient.gradient}`}
                >
                  <img
                    src={currentClient.image}
                    alt={currentClient.name}
                    className="w-full h-full object-cover mix-blend-overlay opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  
                  {/* Floating Metric Card */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-auto"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20">
                      <currentClient.icon className="h-8 w-8 md:h-10 md:w-10 text-white mb-3" />
                      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                        {currentClient.metric}
                      </div>
                      <div className="text-sm md:text-base text-white/80">
                        {currentClient.metricLabel}
                      </div>
                    </div>
                  </motion.div>

                  {/* Stats Overlay - Hidden on Mobile */}
                  <div className="hidden md:flex absolute top-8 right-8 flex-col gap-3">
                    {currentClient.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20"
                      >
                        <div className="text-white/70 text-xs">{stat.label}</div>
                        <div className="text-white font-bold">{stat.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicators - Mobile */}
            <div className="flex items-center justify-center gap-2 mt-4 lg:hidden">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-muted hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to client ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Client Info Header */}
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-12 w-12 md:h-14 md:w-14 border-2 border-primary/20">
                    <AvatarImage src={currentClient.avatar} alt={currentClient.name} />
                    <AvatarFallback>{currentClient.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {currentClient.name}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {currentClient.company}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentClient.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="text-xs md:text-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Success Story Card */}
                <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50 mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-br ${currentClient.gradient} shrink-0`}>
                      <currentClient.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                        {currentClient.metric}
                      </div>
                      <div className="text-sm md:text-base text-muted-foreground">
                        {currentClient.metricLabel}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {currentClient.description}
                  </p>
                </Card>

                {/* Mobile Stats - Visible only on mobile */}
                <div className="grid grid-cols-3 gap-3 mb-6 lg:hidden">
                  {currentClient.stats.map((stat, index) => (
                    <Card key={index} className="p-3 text-center bg-card/50">
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                      <div className="text-lg font-bold text-foreground">{stat.value}</div>
                    </Card>
                  ))}
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handlePrevious}
                      className="h-10 w-10 md:h-12 md:w-12"
                    >
                      <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleNext}
                      className="h-10 w-10 md:h-12 md:w-12"
                    >
                      <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="h-10 w-10 md:h-12 md:w-12"
                    >
                      <Play className={`h-4 w-4 md:h-5 md:w-5 ${isAutoPlaying ? 'text-primary' : ''}`} />
                    </Button>
                  </div>

                  {/* Desktop Progress Indicators */}
                  <div className="hidden lg:flex items-center gap-2">
                    {clients.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveIndex(index);
                          setIsAutoPlaying(false);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeIndex 
                            ? 'w-8 bg-primary' 
                            : 'w-2 bg-muted hover:bg-muted-foreground/50'
                        }`}
                        aria-label={`Go to client ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;