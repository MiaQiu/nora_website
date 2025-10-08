import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      originalPrice: 120,
      price: 60,
      discount: "50% OFF",
      currency: "SGD",
      period: "per month",
      features: [
        "Unlimited messaging",
        "Urgent care available 24/7",
        "Discounted rate for video calls"
      ],
      featured: false
    },
    {
      name: "Premium",
      originalPrice: 1080,
      price: 399,
      discount: "60% OFF",
      currency: "SGD",
      period: "for 6 months",
      features: [
        "Unlimited messaging",
        "4 expert calls included",
        "Urgent care available 24/7",
        "Priority support"
      ],
      featured: true
    },
    {
      name: "Expert Call",
      price: 90,
      currency: "SGD",
      features: [
        "30 mins call with experts",
        "Personalized guidance",
        "Follow-up support"
      ],
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-warm/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-testid="text-pricing-headline"
          >
            Choose Your Support Plan
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-charcoal/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Select the perfect plan for your parenting journey. All plans include access to our expert team.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl p-6 sm:p-8 border-2 transition-all ${
                plan.featured
                  ? 'border-primary bg-white shadow-2xl md:scale-105'
                  : 'border-warm/50 bg-white hover:border-secondary/50 hover:shadow-xl'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: plan.featured ? 0 : -5 }}
              data-testid={`card-pricing-${index}`}
            >
              {plan.discount && (
                <div
                  className="absolute -top-3 right-8 bg-gradient-primary text-white px-4 py-1 text-xs font-bold rounded-full shadow-lg"
                  data-testid={`badge-discount-${index}`}
                >
                  {plan.discount}
                </div>
              )}

              {plan.featured && (
                <div
                  className="absolute -top-3 left-8 bg-secondary text-white px-4 py-1 text-xs font-bold rounded-full shadow-lg"
                  data-testid="badge-featured"
                >
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-charcoal" data-testid={`text-plan-name-${index}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-gradient-primary" data-testid={`text-price-${index}`}>
                      {plan.price}
                    </span>
                    <span className="text-base sm:text-lg text-charcoal/70">
                      {plan.currency}
                    </span>
                  </div>
                  {plan.period && (
                    <p className="text-sm text-charcoal/60 mt-1" data-testid={`text-period-${index}`}>
                      {plan.period}
                    </p>
                  )}
                  {plan.originalPrice && (
                    <p className="text-sm text-charcoal/50 line-through mt-1" data-testid={`text-original-price-${index}`}>
                      {plan.originalPrice} {plan.currency}
                    </p>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3"
                      data-testid={`text-feature-${index}-${featureIndex}`}
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

                <Link href="/beta-waitlist">
                  <motion.button
                    className={`w-full px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                      plan.featured
                        ? 'bg-gradient-primary text-white hover:shadow-lg glow-primary'
                        : 'bg-white text-charcoal border-2 border-charcoal/20 hover:border-secondary/50 hover:shadow-lg'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-testid={`button-select-plan-${index}`}
                  >
                    Join the Beta Waitlist
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 sm:mt-16 text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-base sm:text-lg font-semibold text-charcoal" data-testid="text-guarantee-headline">
            Don't love it within 14 days? It's on us.
          </p>
          <p className="text-sm text-charcoal/70" data-testid="text-guarantee-subheadline">
            14 Day Money-Back Guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
