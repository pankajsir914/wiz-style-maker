import { motion } from "framer-motion";
import { TrendingUp, Users, Video, Sparkles } from "lucide-react";

const UniqueResults = () => {
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

  return (
    <section className="py-20 bg-gradient-to-b from-background via-purple-50/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                What Makes Us Unique
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <p className="text-lg font-semibold text-muted-foreground">
                Results That Speak
              </p>
              <Sparkles className="w-5 h-5 text-purple-500" />
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Number */}
                  <motion.div 
                    className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2"
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
                  <p className="text-foreground font-semibold mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.sublabel}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Message */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-2xl font-display font-semibold text-foreground">
              Let the content do the talking.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UniqueResults;