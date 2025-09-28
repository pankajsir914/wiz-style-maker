import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What kind of videos do you edit?",
    answer: "We specialize in both short-form (Reels, Shorts, TikTok) and long-form (YouTube videos, podcasts, vlogs). We also create thumbnails, captions, and motion graphics to make your content stand out.",
  },
  {
    question: "How does the process work if I want to get my videos edited?",
    answer: "Super simple: 1. Share your raw footage with us. 2. Our editors craft a style that matches your brand and audience. 3. We deliver platform-ready edits within the promised timeline. 4. Revisions are always included so you're fully satisfied.",
  },
  {
    question: "How much time will it take to get my edited video?",
    answer: "Our standard turnaround time is 48–72 hours depending on the project length. For urgent needs, we also offer express delivery at an additional cost.",
  },
  {
    question: "Can you match my existing brand style or create a new one for me?",
    answer: "Absolutely! We align each video with your brand theme, colors, fonts, and tone of voice. If you don't have a defined style yet, our creative team can help build one for you.",
  },
  {
    question: "What if I need changes after delivery?",
    answer: "No worries! We provide free revisions in all plans. Your satisfaction is our priority, so we'll fine-tune the video until it feels perfect for you.",
  },
];

const FAQ = () => {
  const { ref, controls } = useScrollAnimation();

  const accordionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/40"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
        >
          <Card className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border-0 p-8 lg:p-12">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={controls}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
              >
                <HelpCircle className="h-8 w-8 text-primary" />
              </motion.div>
              <h2 className="text-[length:var(--font-h2)] font-display font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="text-[length:var(--font-body)] text-muted-foreground max-w-2xl mx-auto">
                Got questions? We've got answers. If you don't see what you're looking for, feel free to reach out to us.
              </p>
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
              variants={accordionVariants}
              initial="hidden"
              animate={controls}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariant}
                    custom={index}
                  >
                    <AccordionItem 
                      value={`item-${index}`}
                      className="bg-white/60 backdrop-blur-sm rounded-lg border-0 px-6 overflow-hidden"
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <AccordionTrigger className="text-left hover:text-primary transition-colors py-4">
                          <span className="text-[length:var(--font-body)] font-medium">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                      </motion.div>
                      <AccordionContent className="text-muted-foreground pb-4">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {faq.answer}
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
              className="text-center mt-12"
            >
              <p className="text-[length:var(--font-body)] text-muted-foreground mb-4">
                Still have questions?
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;