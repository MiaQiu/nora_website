import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SpecialistModal from "./SpecialistModal";
import { motion } from "framer-motion";
import { specialists, Specialist } from "@/data/specialists";

export default function TherapistCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const totalSlides = Math.ceil(specialists.length / itemsPerSlide);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // Mobile: 1 card per slide
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // Tablet: 2 cards per slide
      } else {
        setItemsPerSlide(4); // Desktop: 4 cards per slide
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const openSpecialistModal = (specialist: Specialist) => {
    setSelectedSpecialist(specialist);
    setIsModalOpen(true);
  };

  const closeSpecialistModal = () => {
    setIsModalOpen(false);
    setSelectedSpecialist(null);
  };

  return (
    <section id="therapists" className="py-8 sm:py-12 lg:py-24 bg-gradient-to-br from-accent to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-10 right-20 w-20 h-20 bg-gradient-secondary rounded-full blur-xl"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold mb-4 sm:mb-6">
            Get matched with our{" "}
            <span className="text-gradient-secondary">carefully selected team</span>{" "}
            of <span className="text-gradient-primary">professionals</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-charcoal max-w-3xl mx-auto">
            <span className="font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              10-minute complimentary consultation
            </span>{" "}
            to ensure the right fit.
          </p>
        </motion.div>

        {/* Therapist Carousel Container */}
        <motion.div 
          className="relative"
          data-testid="therapist-carousel-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Left Arrow */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 backdrop-blur-glass shadow-lg rounded-full p-1 sm:p-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-secondary/30"
            data-testid="button-carousel-prev"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 backdrop-blur-glass shadow-lg rounded-full p-1 sm:p-2 hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-secondary/30"
            data-testid="button-carousel-next"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </motion.button>

          {/* Carousel */}
          <div className="overflow-hidden mx-2 sm:mx-4 lg:mx-8 xl:mx-12">
            <motion.div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
              data-testid="therapist-carousel"
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className="min-w-full flex"
                >
                  {specialists.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((therapist, index) => (
                    <motion.div 
                      key={therapist.id} 
                      className={`px-2 sm:px-4 flex-shrink-0 ${itemsPerSlide === 1 ? 'w-full' : itemsPerSlide === 2 ? 'w-1/2' : 'w-1/4'}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <motion.div 
                        className="group bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 lg:p-6 text-center transition-all duration-500 hover-lift border border-transparent hover:border-secondary/20 h-full flex flex-col"
                        data-testid={`card-therapist-${slideIndex * itemsPerSlide + index}`}
                        whileHover={{ 
                          y: -8,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                        }}
                      >
                        <motion.div
                          className="relative mb-3 sm:mb-4"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={therapist.image}
                            alt={`${therapist.name} - Professional therapist headshot`}
                            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto object-cover ring-4 ring-transparent group-hover:ring-secondary/20 transition-all duration-300"
                            data-testid={`img-therapist-${slideIndex * itemsPerSlide + index}`}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face";
                            }}
                          />
                          <motion.div
                            className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-secondary rounded-full opacity-0 group-hover:opacity-100"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                        
                        <motion.h3 
                          className="text-sm sm:text-base lg:text-xl font-bold text-primary mb-1 group-hover:text-gradient-primary transition-all duration-300" 
                          data-testid={`text-therapist-name-${slideIndex * itemsPerSlide + index}`}
                          whileHover={{ scale: 1.02 }}
                        >
                          {therapist.name}
                        </motion.h3>
                        
                        <p className="text-xs sm:text-sm lg:text-base text-secondary font-semibold mb-1 sm:mb-2" data-testid={`text-therapist-title-${slideIndex * itemsPerSlide + index}`}>
                          {therapist.title}
                        </p>
                        
                        <p className="text-xs sm:text-sm text-charcoal mb-3 sm:mb-4" data-testid={`text-therapist-experience-${slideIndex * itemsPerSlide + index}`}>
                          <span className="font-medium">
                            {therapist.experience}
                          </span>
                        </p>
                        
                        {/* Spacer to push button to bottom */}
                        <div className="flex-grow" />
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            onClick={() => openSpecialistModal(therapist)}
                            className="bg-gradient-secondary text-white hover:shadow-lg hover:shadow-secondary/25 w-full text-xs sm:text-sm lg:text-base py-2 sm:py-2 lg:py-3 glow-secondary transition-all duration-300"
                            data-testid={`button-therapist-info-${slideIndex * itemsPerSlide + index}`}
                          >
                            More Information
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Indicators */}
          <motion.div 
            className="flex justify-center space-x-2 mt-6"
            data-testid="carousel-indicators"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-gradient-secondary shadow-lg' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
                data-testid={`indicator-${index}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Specialist Modal */}
        <SpecialistModal
          specialist={selectedSpecialist}
          isOpen={isModalOpen}
          onClose={closeSpecialistModal}
        />
      </div>
    </section>
  );
}