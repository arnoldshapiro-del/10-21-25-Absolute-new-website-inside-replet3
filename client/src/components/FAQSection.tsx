import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What Services Do We Offer?",
    answer: "Our integrative psychiatric practice offers a comprehensive suite of services designed to support your mental health and overall well-being. This includes medication management, psychotherapy, and a variety of holistic techniques. We specialize in outpatient treatment of many psychiatric disorders in children, families, and adults, with a heavy emphasis on patient education."
  },
  {
    question: "What to Expect During Your Initial Consultation?",
    answer: "Your initial consultation is the first step towards holistic healing. Dr. Shapiro and his team use a unique three-part evaluation system to best treat patients. In this safe, non-judgmental space, you are encouraged to share your concerns and aspirations. Our approach means we consider all facets of your well-being and employ practical, evidence-based strategies to facilitate your growth and healing."
  },
  {
    question: "How Do We Ensure Client Confidentiality?",
    answer: "Client confidentiality is a cornerstone of our practice. As a board-certified psychiatrist with over 30 years of experience and affiliations to prestigious institutions, Dr. Shapiro upholds the highest ethical and legal standards of confidentiality to ensure you feel secure and supported throughout your therapeutic journey."
  },
  {
    question: "Are Our Services Suitable for Individuals at All Stages of Life?",
    answer: "Yes, our services cater to individuals at various stages of their lives. Dr. Shapiro has extensive experience working with children, adolescents, and adults. Our unique approach to psychiatry is adaptable, allowing us to customize treatments and techniques to meet your individual needs and aspirations, whether you are navigating childhood challenges, adolescent transitions, or adult life circumstances."
  },
  {
    question: "What About Insurance and Payment Options?",
    answer: "We accept various insurance plans and offer different payment options. Visa and MasterCard are honored. For detailed information about insurance coverage and payment plans, please contact our office team at one of our locations: Cincinnati at 513-794-8777 or Fort Wright at 859-341-7453."
  }
];

export function FAQSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 shadow-soft"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}