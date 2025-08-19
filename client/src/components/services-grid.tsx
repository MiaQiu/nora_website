import { motion } from "framer-motion";
import { Link } from "wouter";

export default function ServicesGrid() {
  const services = [
    {
      title: "Postpartum Care",
      description: "Comprehensive support for new mothers navigating physical recovery, emotional adjustment, and sleep coaching.",
      image: "/images/categories/Postpartum_care.jpg",
      alt: "New mother receiving postpartum care support and guidance",
      highlight: "Physical & Emotional Recovery"
    },
    {
      title: "Return to Work",
      description: "Guidance and strategies for successfully balancing career responsibilities with family needs.",
      image: "/images/categories/return_to_work.jpg",
      alt: "Father working on laptop while caring for toddler at home",
      highlight: "Work-Life Balance"
    },
    {
      title: "Education & Academic Guidance",
      description: "Expert advice on popular education topics for example DSA, PLSE and University planning.",
      image: "/images/categories/academic.jpg",
      alt: "Student receiving academic guidance and educational planning support",
      highlight: "Academic Excellence"
    },
    {
      title: "Parenting Skills & Child Development",
      description: "From toddler play to screentime management to teenage communication - expert guidance for every developmental stage.",
      image: "/images/categories/parenting_skills.jpg",
      alt: "Parent and child engaged in developmental activities and communication",
      highlight: "Every Developmental Stage"
    },
    {
      title: "Special & Complex Care Navigation",
      description: "Expert guidance for families managing neurodivergence, physical and mental health conditions with comprehensive care coordination.",
      image: "/images/categories/special_care.jpg",
      alt: "Healthcare team providing specialized care navigation support",
      highlight: "Specialized Support"
    },
    {
      title: "Emotional & Relationship Wellbeing",
      description: "Support for parental mental health and family harmony with expert guidance on emotional wellness and healthy relationships.",
      image: "/images/categories/mental_support.jpg",
      alt: "Family experiencing emotional wellbeing and healthy relationships",
      highlight: "Mental Health & Harmony"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-24 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4">
            <span className="text-gradient-primary">Comprehensive Parenting</span>{" "}
            <span className="text-charcoal">Support Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-charcoal max-w-3xl mx-auto">
            From <span className="font-semibold text-secondary">pregnancy to teen years</span>, get{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
              personalized guidance
            </span>{" "}
            from vetted experts who understand your family's unique journey.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => {
            const isParentingSkills = service.title === "Parenting Skills & Child Development";
            
            const cardContent = (
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift group-hover:glow-secondary border border-transparent hover:border-secondary/20">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    data-testid={`img-service-${index}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating highlight badge */}
                  <motion.div 
                    className="absolute bottom-3 left-3 backdrop-blur-glass px-2 py-1 rounded-lg border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-xs font-semibold text-gradient-secondary">
                      {service.highlight}
                    </span>
                  </motion.div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <motion.h3 
                    className="text-lg sm:text-xl font-semibold text-primary mb-2 group-hover:text-gradient-primary transition-all duration-300" 
                    data-testid={`text-service-title-${index}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-charcoal text-sm sm:text-sm leading-relaxed" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                  
                  {/* Learn more button appears on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 group-hover:opacity-100 opacity-0"
                  >
                    <motion.button
                      className="text-secondary hover:text-primary font-semibold text-sm transition-colors duration-200 flex items-center gap-1"
                      whileHover={{ x: 5 }}
                    >
                      Learn More →
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            );

            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group"
                data-testid={`card-service-${index}`}
              >
                {isParentingSkills ? (
                  <Link href="/parenting-skills">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Trust indicators */}
        <motion.div 
          className="mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-1">100+</div>
              <div className="text-sm text-charcoal">Expert Specialists</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gradient-secondary mb-1">24/7</div>
              <div className="text-sm text-charcoal">Support Available</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-1">95%</div>
              <div className="text-sm text-charcoal">Satisfaction Rate</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
