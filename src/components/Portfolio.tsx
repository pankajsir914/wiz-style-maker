import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ShoppingBag, Heart, Sparkles, Brain, Home, Shirt } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Askin Astrology",
      category: "Spiritual & Wellness",
      icon: Sparkles,
      metrics: "3.5x ROAS | 250% Growth",
      description: "Scaled astrology consultation platform with targeted Meta ads",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Generic Aadhaar",
      category: "Government Services",
      icon: Brain,
      metrics: "2.8x ROAS | 180% Growth",
      description: "Digital transformation campaign for Aadhaar services",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Fashion Store",
      category: "E-commerce",
      icon: Shirt,
      metrics: "4.2x ROAS | 300% Growth",
      description: "Complete e-commerce marketing strategy for fashion brand",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Health & Wellness",
      category: "Healthcare",
      icon: Heart,
      metrics: "3.0x ROAS | 220% Growth",
      description: "Performance marketing for health supplements brand",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      title: "Real Estate Project",
      category: "Real Estate",
      icon: Home,
      metrics: "5.5x ROAS | 400% Leads",
      description: "Lead generation campaign for premium real estate",
      color: "from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "D2C Beauty Brand",
      category: "Beauty & Cosmetics",
      icon: ShoppingBag,
      metrics: "3.8x ROAS | 280% Growth",
      description: "Omnichannel marketing for beauty products",
      color: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-foreground">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover how we've helped brands achieve exceptional growth through strategic performance marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <project.icon className="h-10 w-10 text-primary" />
                  <ArrowUpRight className="h-5 w-5 text-foreground/50 group-hover:text-primary transition-colors" />
                </div>
                <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-3">{project.description}</p>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-sm font-semibold text-primary">{project.metrics}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-4">Want to see more success stories?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Let's discuss your project
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;