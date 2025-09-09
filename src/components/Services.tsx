import { 
  Megaphone, 
  Users, 
  Search, 
  Palette, 
  Code2, 
  Zap,
  ArrowRight 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Megaphone,
    title: "Strategic Marketing",
    description: "Catapult your brand into the spotlight with our genius strategies – it's like magic, but for marketing.",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Hands-free social success! While you focus on your cat videos, we'll make sure your brand shines across all social platforms.",
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost your online swagger! We'll spruce up your website so Google has no choice but to be your biggest fan.",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Picture-perfect branding and graphics – we make your competitors jealous, and your audience adore you.",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: Code2,
    title: "Technical Solutions",
    description: "From tech wizardry to seamless online experiences, we turn digital hiccups into high-fives for your users.",
    gradient: "from-secondary/20 to-primary/20",
  },
  {
    icon: Zap,
    title: "Automation Services",
    description: "Automagically enhance efficiency! Our automation tricks make your processes smoother than a freshly buttered slide.",
    gradient: "from-accent/20 to-secondary/20",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Our Services
          </h2>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-glow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
              
              <div className="relative p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/50 hover:bg-primary/10 group"
          >
            Want to discuss
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;