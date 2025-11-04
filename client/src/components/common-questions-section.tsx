import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CommonQuestionsSection() {
  const faqs = [
    {
      question: "How much do your expert sessions cost?",
      answer: "Our pricing varies based on the type of service and your family's specific needs. Contact us for a personalized quote and to learn about our flexible payment options."
    },
    {
      question: "Are sessions virtual?",
      answer: "Yes, all our sessions are conducted virtually for your convenience. This allows you to connect with our expert team from the comfort of your home, making it easier to fit into your busy schedule."
    },
    {
      question: "What ages do you support?",
      answer: "We support families with children of all ages, from pregnancy through the teen years. Our multidisciplinary team is equipped to address developmental needs across every stage of childhood."
    },
    {
      question: "When will I see the effect?",
      answer: "Many families report seeing positive changes within the first few weeks. Our 12-week care plans are designed with weekly goals to ensure measurable progress throughout your journey with us."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-testid="text-common-questions-headline"
          >
            Common Questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-2xl px-6 bg-warm/10"
                data-testid={`accordion-item-${index}`}
              >
                <AccordionTrigger 
                  className="text-left text-lg sm:text-xl font-semibold text-charcoal hover:no-underline py-6"
                  data-testid={`accordion-trigger-${index}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-sm sm:text-base text-charcoal/70 pb-6"
                  data-testid={`accordion-content-${index}`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[hsl(340,100%,60%)] to-[hsl(30,100%,60%)] hover:opacity-90 text-white px-8 py-6 text-lg rounded-full shadow-lg"
            data-testid="button-get-started-faq"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
