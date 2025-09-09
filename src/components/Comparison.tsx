import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const comparisons = [
  {
    feature: "Turnaround Time",
    others: { text: "Longer turnaround time", hasFeature: false },
    adymize: { text: "Faster and quick responses", hasFeature: true },
  },
  {
    feature: "Approach",
    others: { text: "Mediocre methods", hasFeature: false },
    adymize: { text: "Ethical Approach", hasFeature: true },
  },
  {
    feature: "Reporting",
    others: { text: "Lack of timely reporting", hasFeature: false },
    adymize: { text: "Accurate Reporting", hasFeature: true },
  },
  {
    feature: "Support",
    others: { text: "No prompt answers", hasFeature: false },
    adymize: { text: "Precise Resolutions", hasFeature: true },
  },
];

const Comparison = () => {
  return (
    <section id="why" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">
            SPECIAL • SPECIAL • SPECIAL
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            What makes us unique?
          </h2>
          <p className="text-lg text-muted-foreground">
            Adymize V/S Others
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Others Column */}
            <Card className="bg-muted/30 border-border/50 overflow-hidden animate-slide-in">
              <div className="p-6 bg-muted/50 border-b border-border/50">
                <h3 className="text-xl font-display font-semibold text-center text-muted-foreground">
                  OTHERS
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {comparisons.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/20 transition-colors"
                  >
                    <X className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {item.others.text}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Adymize Column */}
            <Card className="bg-gradient-light border-primary/30 overflow-hidden relative animate-slide-in animation-delay-200">
              <div className="absolute inset-0 bg-gradient-primary opacity-5" />
              <div className="relative">
                <div className="p-6 bg-primary/10 border-b border-primary/30">
                  <h3 className="text-xl font-display font-semibold text-center text-primary">
                    ADYMIZE
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {comparisons.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">
                        {item.adymize.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have a question?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Chat with our experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
