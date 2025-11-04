import { motion } from "framer-motion";
import { Users, User, FileText } from "lucide-react";
import familyPhoto from "@assets/Happy_Asian_family_photo.png";

export default function WhyChooseNoraSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-testid="text-why-choose-headline"
          >
            Why choose Nora
          </motion.h2>
        </div>

        <div className="space-y-6">
          {/* First feature - 2 column layout with image */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="section-why-0"
          >
            {/* Text Card */}
            <div className="bg-[#fef9e7] rounded-3xl p-8 lg:p-10 flex flex-col h-full min-h-[320px]">
              <Users className="w-10 h-10 mb-6 text-charcoal" />
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4" data-testid="text-why-title-0">
                Whole-family care
              </h3>
              <p className="text-base sm:text-lg text-charcoal mb-4" data-testid="text-why-headline-0">
                We work with the whole family — not just the child.
              </p>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed" data-testid="text-why-description-0">
                Our integrated model brings together counselors, parent coaches, and education planners to ensure that every family member grows together. By addressing both the child's challenges and the family's dynamics, we create lasting emotional change that starts at home.
              </p>
            </div>

            {/* Image - same size as card */}
            <div className="rounded-3xl overflow-hidden h-full min-h-[320px]">
              <img 
                src={familyPhoto} 
                alt="Happy family"
                className="w-full h-full object-cover"
                data-testid="img-why-0"
              />
            </div>
          </motion.div>

          {/* Second and Third features - side by side on laptop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Second feature */}
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-testid="section-why-1"
            >
              <div className="bg-[#f3e5f5] rounded-3xl p-8 lg:p-10 h-full min-h-[400px] flex flex-col">
                <User className="w-10 h-10 mb-6 text-charcoal" />
                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4" data-testid="text-why-title-1">
                  Results-Driven, Structured Care
                </h3>
                <p className="text-base sm:text-lg text-charcoal mb-4" data-testid="text-why-headline-1">
                  Personalized support, measurable progress.
                </p>
                <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed" data-testid="text-why-description-1">
                  Every Nora program follows a 12 week care plan with weekly goals, designed for visible outcomes. Families receive tailored guidance and progress tracking from our multidisciplinary team — ensuring real improvements in emotional regulation, family connection, and school engagement.
                </p>
              </div>
            </motion.div>

            {/* Third feature */}
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-testid="section-why-2"
            >
              <div className="bg-[#e8eaf6] rounded-3xl p-8 lg:p-10 h-full min-h-[400px] flex flex-col">
                <FileText className="w-10 h-10 mb-6 text-charcoal" />
                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4" data-testid="text-why-title-2">
                  Multidisciplinary and Coordinated Expertise
                </h3>
                <p className="text-base sm:text-lg text-charcoal mb-4" data-testid="text-why-headline-2">
                  A team that works as one for your family.
                </p>
                <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed" data-testid="text-why-description-2">
                  Our counselors, parent coaches, and education planners collaborate closely to deliver cohesive, end-to-end support. This coordinated model ensures every aspect of a child's wellbeing — emotional, behavioral, and educational — is aligned for long-term growth and stability.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
