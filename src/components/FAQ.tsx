import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { useState } from "react";

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
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <section id="faqs" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary mb-2 flex items-center justify-center gap-4 animate-fade-in">
              Need Help?
              <span className="text-5xl animate-[bounce_2s_ease-in-out_infinite]">🧑‍💼</span>
            </h2>
          </div>

          {/* FAQ Accordion - Clean Minimal Design */}
          <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/30 animate-fade-up">
            <Accordion 
              type="single" 
              collapsible 
              value={openItem}
              onValueChange={setOpenItem}
              className="space-y-2"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/20 last:border-0 group transition-all duration-300 data-[state=open]:bg-muted/20 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline group-hover:text-primary transition-colors [&[data-state=open]>div>svg]:rotate-45">
                    <div className="flex items-center justify-between w-full pr-4">
                      <span className="text-base sm:text-lg font-medium text-foreground/90 leading-relaxed">
                        {faq.question}
                      </span>
                      <Plus className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 flex-shrink-0 ml-4" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pr-12 animate-fade-in">
                    <p className="leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Animated Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full bg-primary/30 animate-pulse`}
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;