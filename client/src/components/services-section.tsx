import { useState, useEffect } from "react";
import { MessageSquare, BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const [currentTopicIndex, setCurrentTopicIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  const topics = [
    "Postpartum Care",
    "Return To Work",
    "Early Childhood Development",
    "Parent-Child Relationship",
    "Education Planning",
    "Teenager Mental Wellbeing",
    "Special And Complex Care Navigation"
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Expert Vetted Content: based on your needs",
      description: "Personalized parenting guides based on your learning needs and preference"
    },
    {
      icon: MessageSquare,
      title: "Text or Video Chat directly with experts",
      description: "Get personalized support from our experts via text. Ask any question, big or small, without feeling judged."
    },
    {
      icon: Sparkles,
      title: "Prepare for the future",
      description: "We've got you covered from newborn to teenagers with personalized parenting plans and regular check-ins to raise future ready humans"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentTopicIndex((prev) => (prev + 1) % topics.length);
        setIsAnimating(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [topics.length]);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-testid="text-services-headline"
          >
            Where parents get answers about...
          </motion.h2>

          <div className="pt-8 min-h-[80px] flex items-center justify-center">
            <div
              className={`transition-all duration-300 ${
                isAnimating
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
              }`}
              data-testid="badge-topic-current"
            >
              <span className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-primary text-white font-semibold text-xl sm:text-2xl md:text-3xl shadow-lg">
                {topics[currentTopicIndex]}
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="space-y-4 p-6 sm:p-8 rounded-2xl bg-white border-2 border-warm/50 hover:border-secondary/50 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                data-testid={`card-feature-${index}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-charcoal">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
