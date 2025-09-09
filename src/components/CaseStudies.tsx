import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, ShoppingCart, Percent } from "lucide-react";

const caseStudies = [
  {
    icon: TrendingUp,
    metric: "4Cr+ Revenue Generated",
    title: "Askin Astrology worked his astrological wonders with Adymize's enchanting services",
    color: "primary",
  },
  {
    icon: Users,
    metric: "Generated 12,000+ Quality Leads",
    title: "Arjun Deshpande, the brain behind Generic Aadhaar, teamed up with Adymize for a dynamic duo of innovation",
    color: "secondary",
  },
  {
    icon: ShoppingCart,
    metric: "Sold Course to 10,000+ People",
    title: "Naman Deshmukh effortlessly launched his course to stardom with Adymize's magic touch",
    color: "accent",
  },
  {
    icon: Percent,
    metric: "10x Return on eCommerce",
    title: "Astro Arun Pandit soared to success, growing their e-commerce brand with Adymize's magic",
    color: "primary",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">
            Success Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real brands. See how we've helped businesses achieve extraordinary growth.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 lg:p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-${study.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <study.icon className={`h-6 w-6 text-${study.color}`} />
                  </div>
                  <div className="space-y-3">
                    <Badge 
                      variant="outline" 
                      className="border-primary/50 text-primary"
                    >
                      {study.metric}
                    </Badge>
                    <p className="text-foreground/90 leading-relaxed">
                      {study.title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-display font-semibold text-center text-foreground">
            Our Clients
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-12 px-6">
                  {[...Array(8)].map((_, index) => (
                    <div
                      key={index}
                      className="w-32 h-16 bg-muted/50 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-muted-foreground text-sm font-medium">
                        Client {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;