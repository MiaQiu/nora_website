import { motion } from "framer-motion";
import { Heart, Users, TrendingUp, Globe } from "lucide-react";

export default function FamilyChallengesSection() {
  const challenges = [
    {
      icon: Heart,
      title: "Tough Behaviors",
      items: [
        "Tantrums and outbursts",
        "Aggression and anger",
        "Hyperactivity and trouble focusing",
        "Sleep or routine issues"
      ],
      color: "from-pink-100 to-pink-50"
    },
    {
      icon: TrendingUp,
      title: "Worries",
      items: [
        "Fears and social anxiety",
        "School avoidance or stress",
        "Self-esteem and confidence"
      ],
      color: "from-purple-100 to-purple-50"
    },
    {
      icon: Users,
      title: "Relationships",
      items: [
        "Family or co-parent friction",
        "Sibling rivalry",
        "Social skills and breakups",
        "Sexuality and gender"
      ],
      color: "from-blue-100 to-blue-50"
    },
    {
      icon: Globe,
      title: "Families in Transition",
      items: [
        "Education coaching",
        "Social & emotional adjustment",
        "Culture integration"
      ],
      color: "from-green-100 to-green-50"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-testid="text-challenges-headline"
          >
            Does this happen in your family too?
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-charcoal/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whatever is going on, we can help your family.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={index}
                className={`rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${challenge.color} border border-gray-100 hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                data-testid={`card-challenge-${index}`}
              >
                <div className="flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/80 mb-4">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-charcoal" data-testid={`text-challenge-title-${index}`}>
                    {challenge.title}
                  </h3>
                  
                  <ul className="space-y-2 flex-grow">
                    {challenge.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm text-charcoal/80"
                        data-testid={`text-challenge-item-${index}-${itemIndex}`}
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
