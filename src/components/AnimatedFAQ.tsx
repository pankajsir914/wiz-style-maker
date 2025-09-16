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
    question: "What services does Editorzhub.com offer?",
    answer: "We provide comprehensive digital marketing services including Meta ads, Google ads, social media management, SEO optimization, creative design, and automation services to help businesses grow their online presence and increase ROI.",
  },
  {
    question: "How quickly can I see results from your marketing campaigns?",
    answer: "While some improvements can be seen within the first few weeks, significant results typically appear within 1-3 months. We focus on sustainable growth strategies that deliver long-term value rather than quick fixes.",
  },
  {
    question: "What makes Editorzhub.com different from other agencies?",
    answer: "Our data-driven approach, combined with 5+ years of experience and 60+ crore ad spend managed, sets us apart. We're certified partners with Meta, Google, and Shopify, ensuring you get the best strategies and support.",
  },
  {
    question: "How do you measure campaign success?",
    answer: "We track multiple KPIs including ROI, conversion rates, engagement metrics, and revenue growth. You'll receive detailed monthly reports with transparent insights into your campaign performance.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer customized pricing based on your specific needs and budget. Our packages are designed to be flexible and scalable, ensuring you get maximum value for your investment. Contact us for a personalized quote.",
  },
  {
    question: "Do you work with small businesses or only large corporations?",
    answer: "We work with businesses of all sizes! From startups to established enterprises, we tailor our strategies to meet your specific goals and budget constraints.",
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