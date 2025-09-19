import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Upload, Zap, Download } from "lucide-react";

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

            {/* Right Visual - Laptop Mockup */}
            <div className="relative">
              {/* Laptop Frame */}
              <div className="relative bg-gray-900 rounded-t-2xl p-2">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Screen Content */}
                <div className="bg-white rounded-lg p-8 min-h-[400px] relative overflow-hidden">
                  {/* Cyan Gradient Background Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full blur-3xl opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-50"></div>
                  
                  {/* Workflow Diagram */}
                  <div className="relative z-10 space-y-12">
                    {/* Upload Node */}
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                        <Upload className="h-4 w-4 text-purple-700" />
                        <span className="text-purple-700 font-medium">Upload Raw Footage</span>
                      </div>
                    </div>
                    
                    {/* Connection Lines */}
                    <svg className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-48" style={{ zIndex: 1 }}>
                      <path
                        d="M 128 0 L 128 40 L 64 80"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M 128 0 L 128 40"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M 128 0 L 128 40 L 192 80"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    
                    {/* Action Nodes */}
                    <div className="grid grid-cols-3 gap-8 relative z-10">
                      {/* Edit Video */}
                      <div className="flex justify-center">
                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          <span className="text-sm font-medium">Edit Video</span>
                        </button>
                      </div>
                      
                      {/* Color Grade */}
                      <div className="flex justify-center">
                        <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                          <span className="text-sm font-medium">Color Grade</span>
                        </button>
                      </div>
                      
                      {/* Export & Deliver */}
                      <div className="flex justify-center">
                        <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          <span className="text-sm font-medium">Deliver</span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Additional UI Elements */}
                    <div className="flex justify-center gap-2 mt-8">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Laptop Base */}
              <div className="bg-gray-800 h-4 rounded-b-2xl"></div>
              <div className="bg-gray-700 h-2 mx-8 rounded-b-lg"></div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AutomationShowcase;