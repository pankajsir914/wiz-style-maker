import { Card } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "Founder & CEO",
      description: "3+ years of experience in performance marketing",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "arjun@adymize.com"
      }
    },
    {
      name: "Priya Patel",
      role: "Head of Strategy",
      description: "Expert in Meta & Google Ads with 5+ years experience",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "priya@adymize.com"
      }
    },
    {
      name: "Rahul Kumar",
      role: "Creative Director",
      description: "Leading creative campaigns for 50+ brands",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rahul@adymize.com"
      }
    },
    {
      name: "Sneha Gupta",
      role: "Performance Manager",
      description: "Data-driven marketer optimizing ROI for clients",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sneha@adymize.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-foreground">
            Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Passionate experts dedicated to driving your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card 
              key={member.name} 
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full bg-white/10 p-2"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-foreground/70 mb-4">{member.description}</p>
                <div className="flex justify-center gap-3">
                  <a 
                    href={member.social.linkedin} 
                    className="text-foreground/50 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="text-foreground/50 hover:text-primary transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="text-foreground/50 hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;