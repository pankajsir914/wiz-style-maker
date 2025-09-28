import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Strategy Call Booked!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
    onClose();
  };

  const handleWhatsApp = () => {
    const message = "Hi, I would like to book a strategy call with Adymize.";
    const whatsappUrl = `https://wa.me/917770995275?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-xl border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-[length:var(--font-h3)] font-display">
            Book Your <span className="bg-gradient-primary bg-clip-text text-transparent">Strategy Call</span>
          </DialogTitle>
          <DialogDescription className="text-[length:var(--font-body)] text-foreground/70">
            Get a free consultation with our marketing experts
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="modal-name">Full Name *</Label>
            <Input
              id="modal-name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="bg-background/50"
            />
          </div>
          
          <div>
            <Label htmlFor="modal-email">Email Address *</Label>
            <Input
              id="modal-email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="bg-background/50"
            />
          </div>
          
          <div>
            <Label htmlFor="modal-phone">Phone Number *</Label>
            <Input
              id="modal-phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              className="bg-background/50"
            />
          </div>
          
          <div>
            <Label htmlFor="modal-company">Company Name</Label>
            <Input
              id="modal-company"
              placeholder="Your Company"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="bg-background/50"
            />
          </div>
          
          <div>
            <Label htmlFor="modal-message">Tell us about your project</Label>
            <Textarea
              id="modal-message"
              placeholder="Brief description of your marketing needs..."
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="bg-background/50"
            />
          </div>
          
          <div className="flex gap-3">
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Call
            </Button>
            <Button 
              type="button"
              onClick={handleWhatsApp}
              variant="outline"
              className="flex-1 border-primary/50 hover:bg-primary/10"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;