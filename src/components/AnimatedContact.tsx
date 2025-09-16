import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, controls } = useScrollAnimation();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-50/40 via-pink-50/30 to-blue-50/40"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
        >
          <Card className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border-0 p-8 lg:p-12">
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={controls}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block text-sm font-medium text-primary tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full mb-4"
              >
                GET IN TOUCH
              </motion.span>
              <h2 className="text-[length:var(--font-h2)] font-display font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                  Let's Start Growing Your Business
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { icon: Phone, title: "Call Us", info: "+91 98765 43210", i: 0 },
                { icon: Mail, title: "Email Us", info: "hello@editorzhub.com", i: 1 },
                { icon: MapPin, title: "Visit Us", info: "Mumbai, India", i: 2 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={item.i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={controls}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="p-6 text-center bg-white/60 backdrop-blur-sm border-0">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <item.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.info}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="mt-12 max-w-2xl mx-auto space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Input placeholder="Your Name" className="bg-white/60 backdrop-blur-sm border-0" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Input type="email" placeholder="Your Email" className="bg-white/60 backdrop-blur-sm border-0" />
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Input placeholder="Subject" className="bg-white/60 backdrop-blur-sm border-0" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Textarea placeholder="Your Message" rows={5} className="bg-white/60 backdrop-blur-sm border-0" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="w-full bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-950 text-white">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;