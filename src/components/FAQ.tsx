import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Why should I choose Adymize over other agencies?",
    answer: "Choosing Adymize means choosing a results-driven, client-focused, and technologically advanced digital marketing partner. With a proven track record, personalized strategies, and a commitment to transparent communication, we are confident in our ability to elevate your online presence and drive sustainable business growth.",
  },
  {
    question: "What sets Adymize apart from the competition?",
    answer: "Adymize stands out in the crowded digital advertising landscape by offering a potent combination of advanced technology, customization options, data-driven insights, and a proven track record.",
  },
  {
    question: "How can Adymize guarantee accurate reporting?",
    answer: "Adymize's commitment to accuracy is upheld through advanced technology, real-time validation, transparency, a knowledgeable team, and a rigorous quality control process. By choosing Adymize, clients can trust that their reporting is reliable and reflects the most accurate and current data available.",
  },
  {
    question: "What services does Adymize offer?",
    answer: "We offer comprehensive digital marketing services including Strategic Marketing, Social Media Management, SEO, Creative Design, Technical Solutions, and Automation Services. Each service is tailored to meet your specific business goals.",
  },
  {
    question: "How quickly can I see results?",
    answer: "While results vary depending on your industry and goals, most clients see initial improvements within 2-4 weeks, with significant results typically visible within 2-3 months of implementing our strategies.",
  },
];

const FAQ = () => {
  return (
    <section id="faqs" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
              <HelpCircle className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Need Help?
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>

          {/* FAQ Accordion */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 animate-fade-up">
            <Accordion type="single" collapsible className="p-6">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/50"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;