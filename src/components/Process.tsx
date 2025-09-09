import { Card } from "@/components/ui/card";
import { Target, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Target,
    number: "01",
    title: "Plan Your Growth",
    description: "Dream big, strategize with us, and turn plans into profits.",
  },
  {
    icon: Rocket,
    number: "02",
    title: "Handover the project",
    description: "We're your project navigators, turning plans into reality. Smooth sailing guaranteed.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Count the profit",
    description: "Sit back, relax, and let the profits set sail. Your success story starts with us!",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-light" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">
            ONBOARDING • ONBOARDING • ONBOARDING
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            How it starts?
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              <Card className="relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group h-full">
                <div className="p-8 space-y-4">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-gradient-light flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Visual Enhancement */}
        <div className="mt-16 relative h-64 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-2xl font-display font-semibold text-foreground">
              Ready to transform your business?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;