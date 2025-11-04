import { motion } from "framer-motion";
import familyImage from "@assets/stock_images/happy_asian_family_t_b82ab640.jpg";
import counselingImage from "@assets/stock_images/family_counseling_th_8323dfc9.jpg";
import teamImage from "@assets/stock_images/diverse_team_of_prof_47901511.jpg";

export default function WhyChooseNoraSection() {
  const features = [
    {
      image: familyImage,
      title: "Whole-family care",
      headline: "We work with the whole family — not just the child.",
      description: "Our integrated model brings together counselors, parent coaches, and education planners to ensure that every family member grows together. By addressing both the child's challenges and the family's dynamics, we create lasting emotional change that starts at home."
    },
    {
      image: counselingImage,
      title: "Results-Driven, Structured Care",
      headline: "Personalized support, measurable progress.",
      description: "Every Nora program follows a 12 week care plan with weekly goals, designed for visible outcomes. Families receive tailored guidance and progress tracking from our multidisciplinary team — ensuring real improvements in emotional regulation, family connection, and school engagement."
    },
    {
      image: teamImage,
      title: "Multidisciplinary and Coordinated Expertise",
      headline: "A team that works as one for your family.",
      description: "Our counselors, parent coaches, and education planners collaborate closely to deliver cohesive, end-to-end support. This coordinated model ensures every aspect of a child's wellbeing — emotional, behavioral, and educational — is aligned for long-term growth and stability."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-warm/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-testid="text-why-choose-headline"
          >
            Why choose Nora
          </motion.h2>
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`section-why-${index}`}
              >
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal" data-testid={`text-why-title-${index}`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg font-semibold text-charcoal/90" data-testid={`text-why-headline-${index}`}>
                    {feature.headline}
                  </p>
                  
                  <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed" data-testid={`text-why-description-${index}`}>
                    {feature.description}
                  </p>
                </div>

                {/* Image */}
                <motion.div
                  className="flex-1 w-full max-w-md lg:max-w-none"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      data-testid={`img-why-${index}`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
