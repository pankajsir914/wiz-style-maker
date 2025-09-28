import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CTASection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-12 px-4 md:py-20 md:px-12 lg:px-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              ease: 'easeOut'
            }
          },
        }}
        className="max-w-4xl mx-auto"
      >
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-purple-600 border-0 p-8 md:p-12 lg:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.6))]" />
          
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { delay: 0.2 }
              },
            }}
            className="relative z-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">
              Ready to Scale Your Brand with{' '}
              <span className="block mt-1 md:mt-2">Better Videos?</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-10 max-w-2xl mx-auto px-2">
              Let's craft edits your audience won't scroll past.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-primary rounded-full font-semibold text-sm md:text-base hover:bg-white/90 transition-all hover:scale-105 shadow-xl w-full sm:w-auto justify-center"
              >
                Book Free Discovery Call
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex flex-col sm:flex-row items-center gap-2 text-white w-full sm:w-auto">
                <span className="text-white/80 text-sm hidden sm:inline">or</span>
                <a
                  href="https://instagram.com/editorzhub_com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium text-sm md:text-base hover:bg-white/20 transition-all border border-white/20 w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="w-4 md:w-5 h-4 md:h-5" />
                  DM us @editorzhub_com
                </a>
              </div>
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
};

export default CTASection;