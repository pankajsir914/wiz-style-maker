import { Check, Minus, TrendingUp, Users, Video, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const comparisons = [
  {
    feature: "Turnaround Time",
    others: { text: "5-7 days delivery", hasFeature: false },
    editorzhub: { text: "24-48 hour delivery", hasFeature: true },
  },
  {
    feature: "Quality",
    others: { text: "Freelancer quality varies", hasFeature: false },
    editorzhub: { text: "Professional editors only", hasFeature: true },
  },
  {
    feature: "Revisions",
    others: { text: "Limited revisions", hasFeature: false },
    editorzhub: { text: "Unlimited revisions", hasFeature: true },
  },
  {
    feature: "Platform Optimization",
    others: { text: "Single format export", hasFeature: false },
    editorzhub: { text: "Multi-platform exports", hasFeature: true },
  },
];

const stats = [
  {
    icon: TrendingUp,
    number: "5x",
    label: "Increase in reel views",
    sublabel: "within 30 days"
  },
  {
    icon: Users,
    number: "100K+",
    label: "Monthly reach achieved",
    sublabel: "from just 10K"
  },
  {
    icon: Video,
    number: "4,500+",
    label: "Short-form edits delivered",
    sublabel: "across 20+ niches"
  }
];

const Comparison = () => {
  return (
    <section id="why" className="py-10 sm:py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border-0 p-4 sm:p-8 lg:p-12">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-16 animate-fade-in">
            <span className="inline-block px-3 sm:px-4 py-1 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
              SPECIAL • SPECIAL • SPECIAL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                What makes us unique?
              </span>
            </h2>
            
            {/* Results That Speak Section */}
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-purple-500" />
              <p className="text-sm sm:text-lg font-semibold text-muted-foreground">
                Results That Speak
              </p>
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-purple-500" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/90 backdrop-blur-sm border border-purple-200/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
                  {/* Icon */}
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <stat.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  
                  {/* Number */}
                  <motion.div 
                    className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: 0.3 + index * 0.1 
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  {/* Label */}
                  <p className="text-foreground font-semibold mb-1 text-xs sm:text-sm">
                    {stat.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {stat.sublabel}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Let the content do the talking */}
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-base sm:text-xl font-display font-semibold text-foreground">
              Let the content do the talking.
            </p>
          </motion.div>

          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8 sm:mb-12"></div>

          {/* Comparison Header */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-base sm:text-lg text-gray-700 font-medium">
              Editorzhub.com V/S Others
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Others Column */}
              <div className="bg-white/90 backdrop-blur rounded-xl sm:rounded-2xl shadow-lg overflow-hidden animate-slide-in">
                <div className="p-4 sm:p-6 bg-gray-50 border-b">
                  <h3 className="text-sm sm:text-lg font-semibold text-center text-gray-600">
                    OTHERS
                  </h3>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                  {comparisons.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 sm:space-x-4"
                    >
                      <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Minus className="h-3 sm:h-4 w-3 sm:w-4 text-gray-400" />
                      </div>
                      <span className="text-xs sm:text-base text-gray-600">
                        {item.others.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editorzhub Column */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden relative animate-slide-in animation-delay-200">
                <div className="p-4 sm:p-6 bg-primary/10 border-b border-primary/20">
                  <span className="inline-block px-3 sm:px-4 py-1 bg-primary text-white text-xs sm:text-sm font-semibold rounded-full">
                    EDITORZHUB
                  </span>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                  {comparisons.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 sm:space-x-4"
                    >
                      <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 sm:h-4 w-3 sm:w-4 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-xs sm:text-base text-gray-800 font-medium">
                        {item.editorzhub.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-12 text-center">
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Still have a question?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-sm sm:text-base text-primary hover:text-primary/80 font-medium transition-colors"
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
