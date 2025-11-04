import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Tell us about your family",
      description: "Complete our intake questionnaire so we can get to know your needs to match you with the best care."
    },
    {
      number: "2",
      title: "Book your intake session",
      description: "Book a session with your matched parenting navigator to get on a free 20 mins call to set your family goal and create care plan."
    },
    {
      number: "3",
      title: "Start Care",
      description: "Download our family and kid apps to connect with your expert teams and build strong family relationship through activities."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-warm/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-testid="text-how-it-works-headline"
          >
            How it works
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`section-step-${index}`}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[hsl(340,100%,60%)] to-[hsl(30,100%,60%)] text-white text-3xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4" data-testid={`text-step-title-${index}`}>
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed" data-testid={`text-step-description-${index}`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[hsl(340,100%,60%)] to-[hsl(30,100%,60%)] hover:opacity-90 text-white px-8 py-6 text-lg rounded-full shadow-lg"
            data-testid="button-get-started-how-it-works"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
