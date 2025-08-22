import { motion } from "framer-motion";

export default function HeroSection() {
  const specialists = [
    {
      name: "Dr. Priya Sharma",
      photo: "/images/specialists/dr-priya-sharma.jpg",
      specialty: "Child Development Expert"
    },
    {
      name: "Dr. Rachel Lim",
      photo: "/images/specialists/dr-rachel-lim.jpg",
      specialty: "Postpartum Care Specialist"
    },
    {
      name: "Dr. Ahmad Hassan",
      photo: "/images/specialists/dr-ahmad-hassan.jpg",
      specialty: "Family Therapist"
    },
    {
      name: "Dr. Catherine Wong",
      photo: "/images/specialists/dr-catherine-wong.jpg",
      specialty: "Educational Psychologist"
    },
    {
      name: "Dr. Sarah Tan",
      photo: "/images/specialists/dr-sarah-tan.jpg",
      specialty: "Mental Health Counselor"
    },
    {
      name: "Dr. Marcus Chen",
      photo: "/images/specialists/dr-marcus-chen.jpg",
      specialty: "Behavioral Specialist"
    },
    {
      name: "Dr. Amelia Kumar",
      photo: "/images/specialists/dr-amelia-kumar.jpg",
      specialty: "Parenting Coach"
    },
    {
      name: "Dr. Janet Loh",
      photo: "/images/specialists/dr-janet-loh.jpg",
      specialty: "Family Wellness Expert"
    }
  ];

  // Triple the array for perfect seamless looping
  const duplicatedSpecialists = [...specialists, ...specialists, ...specialists];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-warm to-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient-primary">Expert</span>{" "}
              <span className="text-charcoal">Parenting</span>{" "}
              <span className="text-gradient-secondary">Support</span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-charcoal mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect with <span className="font-semibold text-secondary">vetted specialists</span> for{" "}
              <span className="font-semibold text-primary">personalized 1:1 guidance</span> across every stage of your parenting journey.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Session
              </motion.button>
              <motion.button
                className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-primary">100+</div>
                <div className="text-sm text-charcoal">Expert Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-secondary">95%</div>
                <div className="text-sm text-charcoal">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-primary">24/7</div>
                <div className="text-sm text-charcoal">Support Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Specialist Photos Grid with Upward Scrolling Animation */}
          <motion.div
            className="relative h-96 lg:h-[600px] w-full max-w-lg mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Container with mask for smooth scrolling effect */}
            <div className="relative h-full overflow-hidden rounded-2xl">
              {/* Scrolling container */}
              <motion.div
                className="absolute inset-0 grid grid-cols-2 gap-4 content-start"
                animate={{
                  y: [0, -(288 + 16) * specialists.length]
                }}
                transition={{
                  duration: 20, // Adjust this value to change speed
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  height: `${(288 + 16) * duplicatedSpecialists.length}px`
                }}
              >
                {duplicatedSpecialists.map((specialist, index) => (
                  <motion.div
                    key={`${specialist.name}-${index}`}
                    className="relative group h-72 w-full"
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-full w-full rounded-xl overflow-hidden shadow-lg border-2 border-white/20 hover:border-secondary/50 transition-all duration-300 bg-white">
                      <img
                        src={specialist.photo}
                        alt={specialist.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback for missing images
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                              <div class="text-center p-4">
                                <div class="w-16 h-16 bg-primary/30 rounded-full mx-auto mb-3"></div>
                                <div class="text-sm font-medium text-charcoal/70 mb-1">${specialist.name.split(' ')[1]}</div>
                                <div class="text-xs text-charcoal/60">${specialist.specialty}</div>
                              </div>
                            </div>
                          `;
                        }}
                      />
                      
                      {/* Always visible specialist info overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white text-lg font-semibold mb-2 leading-tight">
                            {specialist.name}
                          </h3>
                          <p className="text-white/90 text-sm leading-tight">
                            {specialist.specialty}
                          </p>
                        </div>
                      </div>

                      {/* Enhanced hover effect */}
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Gradient masks for smooth fade effect */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}