import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useSpecialists } from "@/hooks/useSpecialists";

export default function HeroSection() {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const allSpecialists = useSpecialists();

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % 2);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  
  // Transform centralized data to hero-section format
  const specialists = allSpecialists.map(specialist => ({
    name: specialist.name,
    photo: specialist.image,
    specialty: specialist.title,
    experience: specialist.experience
  }));

  // Triple the array for perfect seamless looping
  const duplicatedSpecialists = [...specialists, ...specialists, ...specialists];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-warm to-white py-8 lg:py-12">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          
          {/* Left Content - Takes up 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left lg:col-span-3"
          >
            <motion.p
              className="text-sm sm:text-base text-secondary font-medium mb-3 sm:mb-4 tracking-wide uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              MEET NORA
            </motion.p>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Building{" "}
              <span className={`transition-all duration-700 ${
                highlightIndex === 0 
                  ? 'text-gradient-primary' 
                  : 'text-charcoal/20'
              }`}>
                confident kids
              </span>{" "}
              and{" "}
              <span className={`transition-all duration-700 ${
                highlightIndex === 1 
                  ? 'text-gradient-primary' 
                  : 'text-charcoal/20'
              }`}>
                connected families
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-charcoal/70 mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Evidence-based, family-centered care combining child wellbeing, parent–child coaching, and education planning — empowering every child and parent to thrive
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/beta-waitlist">
                  <button
                    className="bg-gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:shadow-lg glow-primary font-semibold text-sm sm:text-base transition-all duration-300"
                    data-testid="button-book-session"
                  >
                    Get Started
                  </button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <Link href="/about">
                  <button
                    className="bg-white text-charcoal border-2 border-charcoal/20 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:shadow-lg hover:border-secondary/50 font-semibold text-sm sm:text-base transition-all duration-300"
                  >
                    Learn More
                  </button>
                </Link> */}
              </motion.div>
            </motion.div>


          </motion.div>

          {/* Right Column - Specialist Photos Grid - Takes up 2 columns */}
          <motion.div
            className="relative h-80 lg:h-[500px] w-full max-w-sm mx-auto lg:col-span-2"
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
                  y: [0, -(224 + 16) * specialists.length]
                }}
                transition={{
                  duration: 50, // Adjust this value to change speed
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  height: `${(224 + 16) * duplicatedSpecialists.length}px`
                }}
              >
                {duplicatedSpecialists.map((specialist, index) => (
                  <motion.div
                    key={`${specialist.name}-${index}`}
                    className="relative group h-56 w-full"
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
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
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
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <h3 className="text-white text-sm font-semibold mb-1 leading-tight">
                            {specialist.name}
                          </h3>
                          <p className="text-white/90 text-xs leading-tight">
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