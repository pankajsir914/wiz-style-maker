import { Check, Minus } from "lucide-react";
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
    <section id="why" className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border-0 p-8 lg:p-12">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              SPECIAL • SPECIAL • SPECIAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                What makes us unique?
              </span>
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              Adymize V/S Others
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Others Column */}
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg overflow-hidden animate-slide-in">
                <div className="p-6 bg-gray-50 border-b">
                  <h3 className="text-lg font-semibold text-center text-gray-600">
                    OTHERS
                  </h3>
                </div>
                <div className="p-8 space-y-6">
                  {comparisons.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Minus className="h-4 w-4 text-gray-400" />
                      </div>
                      <span className="text-gray-600">
                        {item.others.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Adymize Column */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative animate-slide-in animation-delay-200">
                <div className="p-6 bg-primary/10 border-b border-primary/20">
                  <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                    ADYMIZE
                  </span>
                </div>
                <div className="p-8 space-y-6">
                  {comparisons.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-gray-800 font-medium">
                        {item.adymize.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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
        </Card>
      </div>
    </section>
  );
};

export default Comparison;
