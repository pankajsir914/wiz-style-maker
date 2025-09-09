import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Patel",
    role: "CEO, TechStart",
    content: "Adymize transformed our digital presence completely. Our ROI increased by 300% in just 3 months!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director, FashionHub",
    content: "The team's creativity and strategic approach helped us reach our target audience effectively.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Founder, EdTech Pro",
    content: "Professional, responsive, and results-driven. Couldn't ask for a better marketing partner.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-light" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">
            REVIEWS • REVIEWS • REVIEWS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Hear from them
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 space-y-4">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/30" />
                
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground/90 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Testimonials Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden group animate-fade-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                  </div>
                  <p className="text-sm text-muted-foreground">Video Testimonial {index}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;