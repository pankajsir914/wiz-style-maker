import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { ref, controls } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // WhatsApp number - Replace with your WhatsApp number (with country code, without + or spaces)
  const WHATSAPP_NUMBER = "916267406719"; // Your WhatsApp number with India country code

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    // Format the message for WhatsApp
    const whatsappMessage = `
New Contact Form Submission
------------------------
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
Date: ${new Date().toLocaleString()}
    `.trim();

    // Create WhatsApp URL - using wa.me for web compatibility
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    try {
      // Create a temporary anchor element and click it
      const link = document.createElement('a');
      link.href = whatsappURL;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Opening WhatsApp!",
        description: "Your message has been prepared. Please send it on WhatsApp.",
      });

      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      
      // Fallback: Show the WhatsApp link for manual copy
      toast({
        title: "Click to open WhatsApp",
        description: (
          <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="underline">
            Click here to send via WhatsApp
          </a>
        ) as any,
      });
      setIsSubmitting(false);
    }
  };

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
          <Card className="relative rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-purple-200/50 p-8 lg:p-12 overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-20 blur-xl -z-10" />
            <div className="absolute inset-[1px] rounded-3xl bg-white/95 -z-10" />
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
                { icon: Phone, title: "Call Us", info: "+91 7770995275", i: 0 },
                { icon: Mail, title: "Email Us", info: "hello@editorzhub.com", i: 1 },
                { icon: MapPin, title: "Visit Us", info: "Mumbai, India", i: 2 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={item.i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={controls}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="p-6 text-center bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md border border-purple-100/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                      className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
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
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white/80 backdrop-blur-sm border border-purple-300 focus:border-purple-500 transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-white/80 backdrop-blur-sm border border-purple-300 focus:border-purple-500 transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Input 
                  placeholder="Subject" 
                  className="bg-white/80 backdrop-blur-sm border border-purple-300 focus:border-purple-500 transition-colors"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Textarea 
                  placeholder="Your Message" 
                  rows={5} 
                  className="bg-white/80 backdrop-blur-sm border border-purple-300 focus:border-purple-500 transition-colors"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </motion.div>
              <motion.div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-950 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Send to WhatsApp"}
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