import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TherapistCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const therapists = [
    {
      name: "Dr. Amy Reale",
      title: "Clinical School Psychologist", 
      experience: "27 years experience",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Dr. Chelsea Chew",
      title: "Educational Psychologist",
      experience: "27 years experience", 
      image: "https://images.unsplash.com/photo-1594824278171-187f5086b962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Dr. Alicia Pon",
      title: "Child Psychotherapist",
      experience: "25 years experience",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Dr. Davy Guo", 
      title: "Counseling Psychologist",
      experience: "15 years experience",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Dr. Belinda Teo",
      title: "Clinical Psychologist",
      experience: "17 years experience",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Dr. Clare Ong",
      title: "Consulting Psychologist",
      experience: "33 years experience",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Dr. Maria Santos",
      title: "Family Therapist",
      experience: "29 years experience",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Dr. James Wilson",
      title: "Child Development Specialist",
      experience: "22 years experience",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
    }
  ];

  const totalSlides = Math.ceil(therapists.length / 4);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="therapists" className="py-16 lg:py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            And 100+ elite psychologists and therapists in your area
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Our carefully selected team of professionals brings decades of experience in family support and mental health.
          </p>
        </div>

        {/* Therapist Carousel Container */}
        <div className="relative" data-testid="therapist-carousel-container">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${totalSlides * 100}%`
              }}
              data-testid="therapist-carousel"
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className="w-full flex"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  {therapists.slice(slideIndex * 4, (slideIndex + 1) * 4).map((therapist, index) => (
                    <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-4">
                      <div 
                        className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                        data-testid={`card-therapist-${slideIndex * 4 + index}`}
                      >
                        <img
                          src={therapist.image}
                          alt={`${therapist.name} - Professional therapist headshot`}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                          data-testid={`img-therapist-${slideIndex * 4 + index}`}
                        />
                        <h3 className="text-xl font-bold text-primary mb-1" data-testid={`text-therapist-name-${slideIndex * 4 + index}`}>
                          {therapist.name}
                        </h3>
                        <p className="text-secondary font-semibold mb-2" data-testid={`text-therapist-title-${slideIndex * 4 + index}`}>
                          {therapist.title}
                        </p>
                        <p className="text-sm text-charcoal mb-4" data-testid={`text-therapist-experience-${slideIndex * 4 + index}`}>
                          {therapist.experience}
                        </p>
                        <Button
                          className="bg-secondary text-white hover:bg-secondary/90 w-full"
                          data-testid={`button-therapist-info-${slideIndex * 4 + index}`}
                        >
                          More Information
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline" 
              onClick={prevSlide}
              className="border-primary text-primary hover:bg-primary hover:text-white"
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={nextSlide}
              className="bg-primary text-white hover:bg-primary/90"
              data-testid="button-carousel-next"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6" data-testid="carousel-indicators">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-secondary' : 'bg-gray-300'
                }`}
                data-testid={`indicator-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
