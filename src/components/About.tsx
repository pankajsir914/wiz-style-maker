import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Targeted Approach",
      description: "We focus on precision marketing to reach your ideal customers"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Results",
      description: "Every decision backed by analytics and performance metrics"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned professionals with proven track records"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-light" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-foreground">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Adymize</span>
          </h2>
          <p className="text-lg text-foreground/80">
            We are a performance marketing agency that has been transforming businesses 
            through strategic digital marketing for over 3 years. Our mission is to help 
            brands achieve measurable growth through data-driven marketing strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Story</h3>
            <p className="text-foreground/80 mb-4">
              Founded in 2021, Adymize started with a simple vision: to make performance 
              marketing accessible and effective for businesses of all sizes. What began 
              as a small team of passionate marketers has grown into a full-service agency 
              serving over 50 brands across India.
            </p>
            <p className="text-foreground/80">
              Our journey has been marked by continuous learning, innovation, and most 
              importantly, the success of our clients. We've managed over 35 crores in 
              ad spend, delivering exceptional ROI and helping businesses scale to new heights.
            </p>
          </div>
          <div className="bg-gradient-primary rounded-lg p-8 text-center">
            <div className="text-white space-y-4">
              <div>
                <div className="text-4xl font-bold">98%</div>
                <div className="text-sm opacity-90">Client Retention Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold">4.2x</div>
                <div className="text-sm opacity-90">Average ROAS</div>
              </div>
              <div>
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;