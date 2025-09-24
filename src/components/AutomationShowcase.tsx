import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Upload, Zap, Download } from "lucide-react";
import { motion } from "framer-motion";
import workflowAutomation from "@/assets/workflow-automation.jpg";

const AutomationShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/30 via-pink-50/20 to-blue-50/30">
      <div className="container mx-auto px-4">
        <Card className="rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border-0 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <Badge className="bg-purple-100 text-purple-600 border-purple-200 px-3 py-1.5 rounded-full">
                <span className="text-xs font-medium tracking-wider">
                  WORKFLOW • WORKFLOW • WORKFLOW
                </span>
              </Badge>
              
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Workflow Automation
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-md">
                Streamlined editing workflow from upload to delivery. Fast turnaround times without compromising quality.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="outline" 
                  className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full"
                >
                  Cloud Storage
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full"
                >
                  Auto-Export
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full"
                >
                  Multi-Platform
                </Button>
              </div>
            </div>

            {/* Right Visual - Animated Workflow Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Workflow Image */}
                <motion.img 
                  src={workflowAutomation}
                  alt="Automated workflow dashboard"
                  className="w-full h-full object-cover rounded-2xl"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                
                {/* Animated Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-transparent"
                  animate={{ 
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                {/* Floating Action Buttons */}
                <motion.div 
                  className="absolute bottom-6 left-6 right-6 flex justify-between items-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <motion.div 
                    className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-3 flex items-center gap-2"
                    animate={{ 
                      y: [-5, 5, -5],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Upload className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Upload</span>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-3 flex items-center gap-2"
                    animate={{ 
                      y: [5, -5, 5],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <Zap className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Process</span>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-3 flex items-center gap-2"
                    animate={{ 
                      y: [-5, 5, -5],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  >
                    <Download className="h-5 w-5 text-white" />
                    <span className="text-white font-medium">Deliver</span>
                  </motion.div>
                </motion.div>
                
                {/* Progress Indicator */}
                <motion.div 
                  className="absolute top-6 left-6 right-6"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AutomationShowcase;