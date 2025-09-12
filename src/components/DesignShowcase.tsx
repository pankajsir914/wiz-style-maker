import { useState } from "react";
import { Palette, Share2, Megaphone, Video, ArrowRight } from "lucide-react";

const designCategories = [
  {
    id: "social",
    label: "Social Media",
    icon: Share2,
    title: "Social Media Excellence",
    description: "Scroll-stopping content that makes your brand unforgettable across all social platforms.",
    features: [
      "Instagram Stories & Reels",
      "LinkedIn Carousel Posts",
      "Twitter/X Visual Threads",
      "Facebook Cover Designs"
    ],
    examples: ["Brand storytelling", "Product launches", "Community engagement", "Viral campaigns"]
  },
  {
    id: "ads",
    label: "Ads",
    icon: Megaphone,
    title: "Ad Creatives That Convert",
    description: "Performance-driven designs that turn viewers into customers with compelling visuals.",
    features: [
      "Display Banner Ads",
      "Google Ads Graphics",
      "Facebook Ad Creatives",
      "Retargeting Campaigns"
    ],
    examples: ["A/B tested designs", "Conversion optimization", "Brand consistency", "ROI focused"]
  },
  {
    id: "videos",
    label: "Videos",
    icon: Video,
    title: "Video Content Magic",
    description: "Dynamic video content that tells your story and captivates audiences from start to finish.",
    features: [
      "Motion Graphics",
      "Product Demos",
      "Explainer Videos",
      "Brand Story Films"
    ],
    examples: ["Animation sequences", "Video editing", "Sound design", "3D visualization"]
  }
];

const DesignShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("social");
  const currentCategory = designCategories.find(cat => cat.id === activeCategory) || designCategories[0];

  return (
    <section id="design-showcase" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Tag */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 px-4 py-2 rounded-full uppercase tracking-wider">
              <Palette className="w-3 h-3" />
              DESIGN • DESIGN • DESIGN
            </span>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Eye-catchy Designs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We craft visuals that speak to your ideal customers. Ready for an extraordinary brand transformation?
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {designCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background border border-border hover:bg-muted'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Category Details */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                  <currentCategory.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground">
                  {currentCategory.title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {currentCategory.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {currentCategory.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all transform hover:scale-105">
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right: Visual Examples Grid */}
            <div className="grid grid-cols-2 gap-4">
              {currentCategory.examples.map((example, index) => (
                <div
                  key={index}
                  className="group relative h-32 rounded-xl bg-gradient-to-br from-purple-100/50 to-pink-100/50 backdrop-blur-sm border border-border/20 flex items-center justify-center p-4 hover:scale-105 transition-all cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                    {example}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Designs Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">48h</div>
              <div className="text-sm text-muted-foreground">Turnaround Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;