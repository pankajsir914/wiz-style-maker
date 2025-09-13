import { 
  TrendingUp, 
  Users, 
  Search, 
  Palette, 
  Code2, 
  Zap,
  Phone,
  CircleDot
} from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: TrendingUp,
    title: "Strategic Marketing",
    description: "Catapult your brand into the spotlight with our genius strategies – it's like magic, but for marketing.",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Hands-free social success! While you focus on your cat videos, we'll make sure your brand shines across all social platforms.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Boost your online swagger! We'll spruce up your website so Google has no choice but to be your biggest fan.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Picture-perfect branding and graphics – we make your competitors jealous, and your audience adore you.",
  },
  {
    icon: Code2,
    title: "Technical Solutions",
    description: "From tech wizardry to seamless online experiences, we turn digital hiccups into high-fives for your users.",
  },
  {
    icon: Zap,
    title: "Automation Services",
    description: "Automagically enhance efficiency! Our automation tricks make your processes smoother than a freshly buttered slide.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSection = (index: number) => {
    setActiveIndex(index);
    const element = document.getElementById(`service-${index}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-purple-100/30 to-blue-100/40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Card className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border-0 p-8 lg:p-12">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-primary tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
                NEW!
              </span>
            </div>
            <h2 className="text-[length:var(--font-h2)] font-display font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                className="group relative animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[length:var(--font-h4)] font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[length:var(--font-body)] text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <span className="text-[length:var(--font-body)] font-medium">Want to discuss</span>
              <span className="text-[length:var(--font-body)] font-semibold underline underline-offset-4">Let's Schedule a Call</span>
              <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Services;