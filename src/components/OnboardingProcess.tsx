import { Card } from "@/components/ui/card";

const OnboardingProcess = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-pink-50/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Large Card Container */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 lg:p-12">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                <span>ONBOARDING</span>
                <span className="opacity-60">•</span>
                <span>ONBOARDING</span>
                <span className="opacity-60">•</span>
                <span>ONBOARDING</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                How it starts?
              </span>
            </h2>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Steps */}
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-4 animate-fade-in">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">1</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Upload Your Raw Footage</h3>
                    <p className="text-muted-foreground">
                      Simple cloud-based upload system. Share your footage via Google Drive, Dropbox, or WeTransfer.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 animate-fade-in animation-delay-200">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">2</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">We Edit Your Content</h3>
                    <p className="text-muted-foreground">
                      Professional editing with your style guide. 24-48 hour turnaround with unlimited revisions.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 animate-fade-in animation-delay-400">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">3</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Receive & Publish</h3>
                    <p className="text-muted-foreground">
                      Get edited videos ready for all platforms. YouTube, Instagram, TikTok - optimized for each.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Analytics Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-medium text-muted-foreground">Daily Payments</span>
                    <div className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded">
                      Publish
                    </div>
                  </div>

                  {/* Average Display */}
                  <div className="mb-8">
                    <div className="px-4 py-2 bg-gray-900 text-white rounded-lg inline-flex items-center gap-2">
                      <span className="text-xs opacity-80">Avg:</span>
                      <span className="text-lg font-bold">3K</span>
                      <span className="text-xs opacity-80">Date: Jul 18</span>
                    </div>
                  </div>

                  {/* Bar Chart */}
                  <div className="flex items-end justify-between gap-3 h-32">
                    <div className="flex-1 bg-gradient-to-t from-purple-400 to-purple-300 rounded-t-lg animate-scale-in" style={{ height: '45%' }}></div>
                    <div className="flex-1 bg-gradient-to-t from-purple-400 to-purple-300 rounded-t-lg animate-scale-in animation-delay-100" style={{ height: '60%' }}></div>
                    <div className="flex-1 bg-gradient-to-t from-purple-400 to-purple-300 rounded-t-lg animate-scale-in animation-delay-200" style={{ height: '80%' }}></div>
                    <div className="flex-1 bg-gradient-to-t from-purple-400 to-purple-300 rounded-t-lg animate-scale-in animation-delay-300" style={{ height: '55%' }}></div>
                    <div className="flex-1 bg-gradient-to-t from-purple-400 to-purple-300 rounded-t-lg animate-scale-in animation-delay-400" style={{ height: '90%' }}></div>
                    <div className="flex-1 bg-gradient-to-t from-purple-400 to-purple-300 rounded-t-lg animate-scale-in animation-delay-500" style={{ height: '70%' }}></div>
                  </div>

                  {/* X-axis labels */}
                  <div className="flex justify-between mt-3 text-xs text-muted-foreground">
                    <span>20</span>
                    <span>30</span>
                    <span>35</span>
                    <span>40</span>
                    <span>45</span>
                    <span>50+</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OnboardingProcess;