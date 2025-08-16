import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SpecialistModal from "@/components/specialist-modal";

export default function TherapistCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const specialists = [
  {
    name: "Dr. Priya Sharma",
    title: "Perinatal & Postpartum Specialist",
    experience: "19 years experience",
    image: "/images/specialists/dr-priya-sharma.jpg",
    about: "Perinatal & Postpartum Specialists provide comprehensive support throughout pregnancy, birth, and the fourth trimester. They focus on maternal mental health, breastfeeding support, and helping families adjust to parenthood. Dr. Sharma combines medical expertise with culturally sensitive approaches for Singapore's diverse population.",
    workExperience: [
      "KK Women's and Children's Hospital Maternal Mental Health Unit",
      "Singapore General Hospital Perinatal Psychology",
      "Thomson Medical Centre Lactation Services"
    ],
    education: [
      "MBBS - National University of Singapore",
      "M.Med in Obstetrics & Gynaecology - NUS",
      "Diploma in Lactation Management - International Board"
    ],
    languages: ["English", "Mandarin", "Tamil", "Hindi", "Malay"],
    specialties: ["Postpartum depression", "Breastfeeding support", "Birth trauma recovery", "Maternal anxiety", "Sleep training guidance", "Return-to-work preparation"],
    cancellationPolicy: "24-hour notice required; emergency support available"
  },
  {
    name: "Dr. Rachel Lim",
    title: "Child Development & Early Intervention Specialist",
    experience: "23 years experience",
    image: "/images/specialists/dr-rachel-lim.jpg",
    about: "Child Development & Early Intervention Specialists assess developmental milestones and provide early screening for neurodivergence. They work with families to identify potential delays and create intervention strategies. Dr. Lim specializes in supporting Singapore families navigate the Early Intervention Programme.",
    workExperience: [
      "Child Development Unit, National University Hospital",
      "Early Intervention Programme for Infants & Children (EIPIC)",
      "Singapore Association for Early Childhood Development"
    ],
    education: [
      "Ph.D. in Developmental Psychology - National University of Singapore",
      "M.A. in Special Education - NIE Singapore",
      "B.Psych (Hons) - University of Melbourne"
    ],
    languages: ["English", "Mandarin", "Hokkien", "Teochew"],
    specialties: ["Developmental assessments", "Autism spectrum screening", "Speech delay intervention", "Motor skills development", "School readiness evaluation", "EIPIC navigation"],
    cancellationPolicy: "48-hour notice required for comprehensive assessments"
  },
  {
    name: "Dr. Ahmad Hassan",
    title: "Pediatric Sleep & Nutrition Consultant",
    experience: "16 years experience",
    image: "/images/specialists/dr-ahmad-hassan.jpg",
    about: "Pediatric Sleep & Nutrition Consultants help families establish healthy routines from infancy through childhood. They address feeding difficulties, sleep challenges, and create sustainable wellness habits. Dr. Hassan understands the unique challenges of Singapore's climate and cultural food practices.",
    workExperience: [
      "Mount Elizabeth Hospital Pediatric Sleep Clinic",
      "Singapore Institute for Clinical Sciences",
      "Private Practice - Healthy Kids Singapore"
    ],
    education: [
      "MBBS - National University of Singapore",
      "M.Med in Paediatrics - NUS",
      "Certificate in Pediatric Sleep Medicine - Singapore Sleep Society"
    ],
    languages: ["English", "Malay", "Arabic", "Mandarin"],
    specialties: ["Infant sleep training", "Childhood nutrition planning", "Feeding difficulties", "Healthy routine establishment", "Weight management", "Cultural food adaptation"],
    cancellationPolicy: "24-hour notice required; flexible scheduling for urgent concerns"
  },
  {
    name: "Dr. Catherine Wong",
    title: "Educational Psychology & School Support Specialist",
    experience: "21 years experience",
    image: "/images/specialists/dr-catherine-wong.jpg",
    about: "Educational Psychology & School Support Specialists guide families through Singapore's education system, from primary school selection to PSLE preparation. They provide academic support strategies and help navigate special educational needs. Dr. Wong has extensive experience with MOE policies and school placement.",
    workExperience: [
      "Ministry of Education Singapore - Special Educational Needs Division",
      "Raffles Institution Counselling Department",
      "Singapore Psychological Society - Education Committee"
    ],
    education: [
      "Ph.D. in Educational Psychology - National Institute of Education",
      "M.Ed in Special Needs - NIE Singapore",
      "B.A. (Hons) in Psychology - National University of Singapore"
    ],
    languages: ["English", "Mandarin", "Cantonese", "Malay"],
    specialties: ["Primary school selection", "PSLE preparation strategies", "Learning difficulties support", "DSA application guidance", "Academic coaching", "MOE system navigation"],
    cancellationPolicy: "48-hour notice required; priority booking during school application periods"
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

  // Auto-scroll functionality removed per user request

  return (
    <section id="therapists" className="py-16 lg:py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            And 100+ elite psychologists and therapists in your area
          </h2> */}
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-secondary mb-6">
            Get matched with our carefully selected team of professionals
          </h1>
          <p className="text-lg sm:text-xl text-charcoal max-w-3xl mx-auto">
          10-minute complimentary consultation to ensure the right fit. 
          </p>
        </div>

        {/* Therapist Carousel Container */}
        <div className="relative" data-testid="therapist-carousel-container">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 sm:p-2 hover:bg-gray-50 transition-colors"
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 sm:p-2 hover:bg-gray-50 transition-colors"
            data-testid="button-carousel-next"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-4 sm:mx-8 lg:mx-12">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
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
                    <div key={index} className={`px-2 sm:px-4 flex-shrink-0 ${itemsPerSlide === 1 ? 'w-full' : itemsPerSlide === 2 ? 'w-1/2' : 'w-1/4'}`}>
                      <div 
                        className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                        data-testid={`card-therapist-${slideIndex * 4 + index}`}
                      >
                        <img
                          src={therapist.image}
                          alt={`${therapist.name} - Professional therapist headshot`}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                          data-testid={`img-therapist-${slideIndex * 4 + index}`}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face";
                          }}
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
                          onClick={() => openSpecialistModal(therapist)}
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
