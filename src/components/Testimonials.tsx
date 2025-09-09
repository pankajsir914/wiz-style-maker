import { useState } from "react";
import { Play, Volume2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Kawan Dobani",
    role: "CEO",
    company: "Adymize",
    quote: "Their approach effortlessly launched our course to stardom with Adymize's magic touch",
    rating: "10,000+ PEOPLE",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bgColor: "from-orange-400 to-orange-500"
  },
  {
    id: 2,
    name: "Rahul Taneja",
    role: "Founder",
    company: "Magic Touch",
    quote: "We partnered his troupe's hit wonders with lymphage magic touch",
    rating: "11 GENERATES",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bgColor: "from-blue-400 to-blue-500"
  },
];

const clientLogos = [
  { name: "Australia", logo: "🇦🇺 AUSTRALIA" },
  { name: "Haldirams", logo: "🍔 Haldirams" },
  { name: "Sparsh", logo: "💎 SPARSH" },
  { name: "MyNiwa", logo: "🌿 MYNIWA" },
  { name: "Shubh", logo: "🎯 Shubh" },
  { name: "Tech", logo: "💻 Tech" },
  { name: "Naamya", logo: "NAAMYA" },
  { name: "Lakmé Salon", logo: "LAKMÉ SALON" },
  { name: "Satyarthi", logo: "Satyarthi" },
  { name: "Generic", logo: "Generic आयुष" },
  { name: "Charming", logo: "🌺 charming" },
];

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-purple-50 via-white to-pink-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              REVIEWS • REVIEWS • REVIEWS
            </span>
          </div>
        </div>

        {/* Title with emoji */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="inline-block mr-3">🧔‍♂️</span>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hear from them
          </span>
        </h2>

        {/* Video Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${testimonial.bgColor} p-0.5 animate-fade-in hover:scale-[1.02] transition-transform duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-white/95 via-purple-50/95 to-pink-50/95 rounded-3xl p-6">
                {/* Top section with avatar and info */}
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-32 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-2 font-semibold">
                      "TO {testimonial.rating}"
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="bg-white/60 backdrop-blur rounded-2xl p-3">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setPlayingVideo(playingVideo === testimonial.id ? null : testimonial.id)}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105"
                    >
                      <Play className="h-4 w-4 text-gray-700 ml-0.5" />
                    </button>
                    
                    {/* Progress Bar */}
                    <div className="flex-1">
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-[10000ms] ease-linear ${
                            playingVideo === testimonial.id ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Volume */}
                    <button className="p-2 hover:bg-white/50 rounded-lg transition-colors">
                      <Volume2 className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Company Logo */}
                <div className="absolute bottom-4 right-4 text-xs font-bold text-gray-600/50">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {clientLogos.slice(0, 6).map((client, index) => (
              <div
                key={client.name}
                className="flex justify-center items-center h-16 opacity-70 hover:opacity-100 transition-opacity animate-fade-in cursor-pointer"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <span className="text-lg font-semibold text-gray-700">{client.logo}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center mt-8">
            {clientLogos.slice(6).map((client, index) => (
              <div
                key={client.name}
                className="flex justify-center items-center h-16 opacity-70 hover:opacity-100 transition-opacity animate-fade-in cursor-pointer"
                style={{ animationDelay: `${(index + 8) * 100}ms` }}
              >
                <span className="text-lg font-semibold text-gray-700">{client.logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 z-40">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const sections = ['hero', 'about', 'services', 'portfolio', 'testimonials'];
                const element = document.getElementById(sections[index]);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === 4 ? 'bg-purple-600 w-2 h-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Navigate to section ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;