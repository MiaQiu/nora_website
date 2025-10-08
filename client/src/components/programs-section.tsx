import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function ProgramsSection() {
  const programs = [
    {
      name: "Maternity and New Born Care",
      subtitle: "Give Your Baby the Best Start",
      price: 399,
      currency: "SGD",
      duration: "6 months program",
      features: [
        "Unlimited text support for lactation, sleep, child development, parenting coach and return to work support",
        "4 video calls with expert",
        "Courses on early brain development and bonding activities"
      ]
    },
    {
      name: "Parenting the Pre-Teen",
      subtitle: "Building a Foundation for the Future (Suitable for 9-13 year old kids)",
      price: 1999,
      currency: "SGD",
      duration: "1 year program",
      features: [
        "1 day family bonding camp with kids supported by coaches",
        "Personalized quarterly review and coaching sessions",
        "Strategic Education Planning",
        "Unlimited text support with experts"
      ]
    },
    {
      name: "The Reconnection Project",
      subtitle: "Rebuilding Your Bond with Your Teen & Young Adult",
      price: 1999,
      currency: "SGD",
      duration: "1 year program",
      features: [
        "1 day family bonding camp supported by coaches",
        "Personalized quarterly review and coaching sessions",
        "Strategic Education Planning",
        "Unlimited text support with experts"
      ]
    },
    {
      name: "Neurodivergent Care Navigation",
      subtitle: "Specialized support for children with unique needs",
      price: 499,
      currency: "SGD",
      duration: "6 months program",
      features: [
        "Dedicated Care Navigator (Fellow Parent)",
        "Unlimited texting support with care navigator, children development expert and parent coach",
        "2 hour calls with experts"
      ]
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
            data-testid="text-programs-headline"
          >
            Parenting Programs
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-charcoal/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tailored programs designed for every stage of your parenting journey
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="rounded-3xl p-6 sm:p-8 border-2 border-warm/50 bg-white hover:border-secondary/50 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              data-testid={`card-program-${index}`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-charcoal" data-testid={`text-program-name-${index}`}>
                    {program.name}
                  </h3>
                  {program.subtitle && (
                    <p className="text-sm text-charcoal/60 mb-4" data-testid={`text-program-subtitle-${index}`}>
                      {program.subtitle}
                    </p>
                  )}

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-gradient-primary" data-testid={`text-program-price-${index}`}>
                      {program.price}
                    </span>
                    <span className="text-base sm:text-lg text-charcoal/70">
                      {program.currency}
                    </span>
                  </div>

                  <p className="text-sm text-charcoal/60 mt-2" data-testid={`text-program-duration-${index}`}>
                    {program.duration}
                  </p>
                </div>

                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3"
                      data-testid={`text-program-feature-${index}-${featureIndex}`}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                      </div>
                      <span className="text-sm text-charcoal/80 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* <Link href="/beta-waitlist">
                  <motion.button
                    className="w-full px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 bg-white text-charcoal border-2 border-charcoal/20 hover:border-secondary/50 hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-testid={`button-program-learn-more-${index}`}
                  >
                    Join Beta Waitlist
                  </motion.button>
                </Link> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
