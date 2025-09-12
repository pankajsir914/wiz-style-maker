import { useState } from "react";

const designCategories = [
  { id: "social", label: "Social Media" },
  { id: "ads", label: "Ads" },
  { id: "videos", label: "Videos" }
];

const DesignShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("social");

  return (
    <section id="design-showcase" className="py-20 relative overflow-hidden">
      {/* Light gradient background similar to screenshot */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/20 via-white to-pink-50/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Purple badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-block text-xs font-semibold text-purple-700 bg-purple-100 px-4 py-2 rounded-full uppercase tracking-wider">
              DESIGN • DESIGN • DESIGN
            </span>
          </div>

          {/* Main Heading - Large and gradient */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Eye-catchy Designs
            </span>
          </h2>

          {/* Description text */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            We craft visuals that speak to your ideal customers. Ready for an extraordinary brand transformation?
          </p>

          {/* Category buttons */}
          <div className="flex justify-center gap-6">
            {designCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 rounded-full text-base font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;