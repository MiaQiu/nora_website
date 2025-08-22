import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SpecialistModal from "@/components/specialist-modal";
import { motion } from "framer-motion";

export default function TherapistCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const specialists = [
    {
      name: "Ms. Priya Sharma",
      title: "Return to Work Coach",
      experience: "Prepare the transition back to their careers after maternity leave",
      image: "/images/specialists/dr-priya-sharma.jpg",
      about: "Return to Work Coaches help parents navigate the transition back to their careers after maternity leave or career breaks. They provide strategies for work-life integration, managing mom guilt, career re-entry planning, and building confidence in professional settings. Dr. Sharma understands the unique challenges facing working mothers in Singapore's competitive job market.",
      workExperience: [
        "MOM Singapore - Women's Career Development Programme",
        "Singapore Management University - Executive Coaching",
        "Professional Women's Network Singapore"
      ],
      education: [
        "MBBS - National University of Singapore",
        "M.Ed in Career Development - National Institute of Education",
        "Certificate in Executive Coaching - Singapore Coaching Institute"
      ],
      languages: ["English", "Mandarin", "Tamil", "Hindi", "Malay"],
      specialties: ["Career re-entry planning", "Work-life integration strategies", "Professional confidence building", "Networking and job search", "Salary negotiation", "Managing career guilt"],
      cancellationPolicy: "24-hour notice required; flexible scheduling for working parents"
    },
    {
      name: "Dr. Rachel Lim",
      title: "Parenting Coach",
      experience: "Navigate the challenges of raising children with mental health issues",
      image: "/images/specialists/dr-rachel-lim.jpg",
      about: "Parenting Coaches specializing in mental health support help families navigate the challenges of raising children with anxiety, depression, or other mental health conditions. They provide evidence-based strategies, crisis management skills, and emotional support for both parents and children. Dr. Lim focuses on building resilient family systems while addressing mental health needs.",
      workExperience: [
        "Institute of Mental Health Singapore - Family Support Services",
        "Singapore Association for Mental Health - Parent Training",
        "Child Guidance Clinic - Family Therapy Department"
      ],
      education: [
        "Ph.D. in Clinical Psychology - National University of Singapore",
        "M.A. in Family Therapy - Eastern Virginia Medical School",
        "Certificate in Child Mental Health - Singapore Psychological Society"
      ],
      languages: ["English", "Mandarin", "Hokkien", "Teochew"],
      specialties: ["Supporting anxious children", "Depression management strategies", "Crisis intervention skills", "Family communication techniques", "Building emotional resilience", "Coordinating with mental health professionals"],
      cancellationPolicy: "24-hour notice required; emergency support available for crisis situations"
    },
    {
      name: "Mr. Ahmad Hassan",
      title: "Parent Navigator",
      experience: "Father of 10 years old son with ADHD",
      image: "/images/specialists/dr-ahmad-hassan.jpg",
      about: "Parent Navigators for special needs children help families understand and access services for children with ADHD, Autism Spectrum Disorder, and other developmental differences. They provide guidance on therapeutic interventions, educational support, and advocacy strategies. Dr. Hassan specializes in connecting families with Singapore's support networks and resources.",
      workExperience: [
        "Autism Resource Centre Singapore - Family Navigation Services",
        "SPARK (Society for the Physically Disabled) - Early Intervention",
        "Ministry of Education - Special Educational Needs Division"
      ],
      education: [
        "M.Ed in Special Education - National Institute of Education",
        "B.A. (Hons) in Psychology - National University of Singapore",
        "Certificate in Applied Behavior Analysis - Behavior Analyst Certification Board"
      ],
      languages: ["English", "Malay", "Arabic", "Mandarin"],
      specialties: ["ADHD management strategies", "Autism spectrum support", "IEP development and advocacy", "Therapeutic service coordination", "Sensory processing support", "School accommodation planning"],
      cancellationPolicy: "48-hour notice required for comprehensive planning sessions"
    },
    {
      name: "Ms. Catherine Wong",
      title: "Parenting Coach",
      experience: "Education & Academic Planning - PSLE, DSA, University",
      image: "/images/specialists/dr-catherine-wong.jpg",
      about: "Educational Parenting Coaches guide families through Singapore's complex education system, from primary school selection through university planning. They provide strategic academic planning, PSLE preparation support, DSA application guidance, and long-term educational pathway mapping. Dr. Wong has extensive experience with MOE policies and academic excellence strategies.",
      workExperience: [
        "Ministry of Education Singapore - Academic Planning Division",
        "Raffles Institution - Academic Counselling Department",
        "Singapore Examinations and Assessment Board - Consultant"
      ],
      education: [
        "Ph.D. in Educational Psychology - National Institute of Education",
        "M.Ed in Educational Leadership - NIE Singapore",
        "Certificate in Academic Coaching - Singapore Coaching Association"
      ],
      languages: ["English", "Mandarin", "Cantonese", "Malay"],
      specialties: ["PSLE strategic planning", "DSA application strategy", "Secondary school selection", "University pathway planning", "Academic stress management", "Parent-child study dynamics"],
      cancellationPolicy: "48-hour notice required; priority booking during application seasons"
    },
  {
    name: "Dr. Sarah Tan",
    title: "Neurodivergence & Learning Differences Specialist",
    experience: "18 years experience",
    image: "/images/specialists/dr-sarah-tan.jpg",
    about: "Neurodivergence & Learning Differences Specialists provide comprehensive support for children with ADHD, autism, dyslexia, and other learning differences. They help families understand neurodivergent needs and advocate within Singapore's education system. Dr. Tan specializes in strength-based approaches to neurodiversity.",
    workExperience: [
      "Institute of Mental Health Singapore - Child & Adolescent Unit",
      "Autism Resource Centre Singapore",
      "Dyslexia Association of Singapore"
    ],
    education: [
      "Ph.D. in Clinical Psychology - National University of Singapore",
      "M.Psych in Neuropsychology - University of Melbourne",
      "Certificate in ADHD Clinical Services - CHADD International"
    ],
    languages: ["English", "Mandarin", "Hokkien"],
    specialties: ["ADHD assessment and management", "Autism spectrum support", "Dyslexia intervention", "School accommodation planning", "Strength-based coaching", "Family advocacy training"],
    cancellationPolicy: "72-hour notice required for diagnostic assessments"
  },
  {
    name: "Dr. Marcus Chen",
    title: "Digital Wellness & Family Communication Coach",
    experience: "12 years experience",
    image: "/images/specialists/dr-marcus-chen.jpg",
    about: "Digital Wellness & Family Communication Coaches help families navigate technology use and strengthen relationships in the digital age. They provide strategies for healthy screen time, online safety, and maintaining family connection. Dr. Chen understands the unique digital landscape facing Singapore families.",
    workExperience: [
      "Singapore Children's Society - Cyber Wellness Programme",
      "Touch Cyber Wellness Centre",
      "National University of Singapore - Digital Life Lab"
    ],
    education: [
      "Ph.D. in Cyberpsychology - Nanyang Technological University",
      "M.A. in Counselling Psychology - James Cook University Singapore",
      "B.Comp (Hons) in Information Systems - NUS"
    ],
    languages: ["English", "Mandarin", "Cantonese"],
    specialties: ["Screen time management", "Online safety education", "Digital parenting strategies", "Family communication improvement", "Cyberbullying prevention", "Tech-life balance"],
    cancellationPolicy: "24-hour notice required; virtual sessions available"
  },
  {
    name: "Dr. Amelia Kumar",
    title: "Adolescent Mental Health & Emotional Wellness Coach",
    experience: "20 years experience",
    image: "/images/specialists/dr-amelia-kumar.jpg",
    about: "Adolescent Mental Health & Emotional Wellness Coaches specialize in supporting teenagers through emotional challenges, anxiety, and depression. They work with both teens and parents to navigate this critical developmental stage. Dr. Kumar focuses on culturally appropriate interventions for Singapore's multicultural families.",
    workExperience: [
      "Institute of Mental Health Singapore - CHAT Programme",
      "Singapore General Hospital Adolescent Medicine",
      "Samaritans of Singapore - Youth Services"
    ],
    education: [
      "MBBS - National University of Singapore",
      "M.Med in Psychiatry - NUS",
      "Certificate in Adolescent Mental Health - Royal College of Psychiatrists"
    ],
    languages: ["English", "Tamil", "Hindi", "Mandarin", "Malay"],
    specialties: ["Teen anxiety and depression", "Self-esteem building", "Peer pressure navigation", "Academic stress management", "Body image concerns", "Suicide prevention"],
    cancellationPolicy: "24-hour notice required; crisis intervention available"
  },
  {
    name: "Dr. Janet Loh",
    title: "Parent Self-Care & Family Wellness Specialist",
    experience: "24 years experience",
    image: "/images/specialists/dr-janet-loh.jpg",
    about: "Parent Self-Care & Family Wellness Specialists focus on supporting parents' mental health, stress management, and overall wellbeing throughout their parenting journey. They address burnout, menopause, and help parents maintain their identity while caring for children. Dr. Loh specializes in holistic family wellness approaches.",
    workExperience: [
      "Singapore Women's Health Initiative",
      "Parkway Medical Centre Psychology Department",
      "Centre for Family Medicine - Parent Wellness Programme"
    ],
    education: [
      "Ph.D. in Health Psychology - National University of Singapore",
      "M.Psych in Clinical Psychology - University of Melbourne",
      "Certificate in Women's Health - Singapore Medical Association"
    ],
    languages: ["English", "Mandarin", "Hokkien", "Cantonese"],
    specialties: ["Parent burnout prevention", "Stress management techniques", "Menopause support", "Work-life balance", "Mindfulness training", "Relationship maintenance during parenting"],
    cancellationPolicy: "24-hour notice required; wellness retreats available"
  }
];

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

  const openSpecialistModal = (therapist: any) => {
    setSelectedSpecialist(therapist);
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
                      key={index} 
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
                          <span className="font-medium text-gradient-secondary">
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
