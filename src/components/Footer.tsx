import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-dark pt-20 pb-8">
      {/* Contact Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Send a message.
          </h2>
          <p className="text-lg text-muted-foreground">
            We're here to answer any question you may have.
          </p>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 space-y-2 hover:border-primary/50 transition-colors">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider">
                Careers
              </h3>
              <p className="text-muted-foreground">
                Would you like to join our growing team?
              </p>
              <a 
                href="mailto:Hr@adymize.com" 
                className="inline-flex items-center text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Hr@adymize.com
              </a>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 space-y-2 hover:border-primary/50 transition-colors">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider">
                Feedbacks
              </h3>
              <p className="text-muted-foreground">
                Have a project in mind?
              </p>
              <a 
                href="mailto:Hi@adymize.com" 
                className="inline-flex items-center text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Hi@adymize.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-light rounded-lg p-8 mt-12">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Subscribe to our newsletter
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/50 border-border/50 focus:border-primary/50"
              />
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-border/50">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
              Adymize
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 Adymize. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;