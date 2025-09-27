import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Sparkles, Video, Clock, Users, Eye } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: Video,
    title: "No time to record videos yourself?",
    description: "We'll build an AI version of you that looks, speaks, and performs just like the real you."
  },
  {
    icon: Clock,
    title: "Forget the stress of expensive and time-consuming ad shoots.",
    description: "Now, get AI-powered video ads created in just a few minutes."
  },
  {
    icon: Users,
    title: "Skip endless back-and-forth with influencers or actors.",
    description: "Your personalized AI creator is always ready to deliver."
  },
  {
    icon: Eye,
    title: "Want engaging video ads that grab attention?",
    description: "Our AI avatars are designed to connect and convert."
  },
  {
    icon: Sparkles,
    title: "Not comfortable showing your face?",
    description: "Choose from hundreds of ready-to-use AI presenters for your product or service ads."
  }
];

const AICreators = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              AI-POWERED CREATION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Creators</span>
          </h2>
        </motion.div>

        <Card className="bg-gradient-to-br from-background via-background to-primary/5 border-border/50 backdrop-blur-sm p-8 md:p-12">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    → {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-12 text-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Create Your AI Creator
            </a>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
};

export default AICreators;