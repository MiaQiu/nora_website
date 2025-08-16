import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SpecialistModal from "@/components/specialist-modal";

export default function TherapistCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const therapists = [
    {
      name: "Dr. Amy Reale",
      title: "Clinical School Psychologist", 
      experience: "27 years experience",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      about: "Clinical School Psychologists provide comprehensive psychological services within educational settings. They assess learning disabilities, behavioral challenges, and emotional difficulties that may impact academic performance. Dr. Reale specializes in creating individualized intervention plans and collaborating with educators and families.",
      workExperience: [
        "Northwest Ohio Center for Educational Psychology",
        "Cincinnati Children's Hospital Psychology Department",
        "Hamilton County Board of Education"
      ],
      education: [
        "Ph.D. in School Psychology - University of Cincinnati",
        "M.A. in Educational Psychology - Miami University",
        "B.S. in Psychology - The Ohio State University"
      ],
      languages: ["English", "Spanish"],
      specialties: ["Learning disabilities", "ADHD assessment", "Behavioral interventions", "Academic accommodations", "IEP development", "Social-emotional learning"],
      cancellationPolicy: "24-hour notice required for cancellations to avoid charges"
    },
    {
      name: "Dr. Chelsea Chew",
      title: "Educational Psychologist",
      experience: "27 years experience", 
      image: "https://images.unsplash.com/photo-1594824278171-187f5086b962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      about: "Educational Psychologists focus on how people learn and develop throughout their lives. They study cognitive processes, motivation, and educational effectiveness to help optimize learning experiences. Dr. Chew works with students, families, and educators to address learning challenges.",
      workExperience: [
        "Stanford University Learning Sciences Institute",
        "Palo Alto Unified School District",
        "Bay Area Educational Consulting"
      ],
      education: [
        "Ph.D. in Educational Psychology - Stanford University",
        "M.Ed. in Special Education - UC Berkeley",
        "B.A. in Cognitive Science - UCLA"
      ],
      languages: ["English", "Mandarin", "Cantonese"],
      specialties: ["Cognitive assessment", "Learning strategies", "Giftedness evaluation", "Educational planning", "Study skills training", "Academic motivation"],
      cancellationPolicy: "48-hour notice required for assessment appointments"
    },
    {
      name: "Dr. Alicia Pon",
      title: "Child Psychotherapist",
      experience: "25 years experience",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      about: "Child Psychotherapists provide specialized mental health treatment for children and adolescents. They use evidence-based therapeutic approaches to help young people overcome emotional, behavioral, and developmental challenges. Dr. Pon creates safe, supportive environments for healing and growth.",
      workExperience: [
        "Children's Hospital of Philadelphia Psychology Department",
        "Main Line Health Child & Adolescent Services",
        "Private Practice - Center for Child Wellness"
      ],
      education: [
        "Psy.D. in Clinical Psychology - Widener University",
        "M.A. in Developmental Psychology - Temple University",
        "B.A. in Psychology - University of Pennsylvania"
      ],
      languages: ["English", "French"],
      specialties: ["Anxiety disorders", "Depression in children", "Trauma therapy", "Play therapy", "Family counseling", "Autism spectrum support"],
      cancellationPolicy: "24-hour notice required; same-day cancellations are charged"
    },
    {
      name: "Dr. Davy Guo", 
      title: "Counseling Psychologist",
      experience: "15 years experience",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      about: "Counseling Psychologists help individuals navigate life transitions, relationship challenges, and personal growth. They provide therapy and counseling services that promote emotional well-being and resilience. Dr. Guo specializes in culturally responsive approaches to mental health care.",
      workExperience: [
        "Asian Community Mental Health Services",
        "University of California Counseling Center",
        "Multicultural Family Therapy Institute"
      ],
      education: [
        "Ph.D. in Counseling Psychology - UC Santa Barbara",
        "M.S. in Marriage and Family Therapy - Alliant International",
        "B.A. in Psychology - UC Davis"
      ],
      languages: ["English", "Mandarin", "Korean"],
      specialties: ["Cultural identity issues", "Intergenerational trauma", "Couples therapy", "Career counseling", "Stress management", "Cross-cultural adjustment"],
      cancellationPolicy: "24-hour cancellation policy with flexible rescheduling options"
    },
    {
      name: "Dr. Belinda Teo",
      title: "Clinical Psychologist",
      experience: "17 years experience",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      about: "Clinical Psychologists diagnose and treat mental health disorders using evidence-based therapeutic interventions. They conduct psychological assessments and provide individual, group, and family therapy. Dr. Teo specializes in cognitive-behavioral approaches and trauma-informed care.",
      workExperience: [
        "Singapore General Hospital Psychology Department",
        "Institute of Mental Health Singapore",
        "Raffles Hospital Counseling Services"
      ],
      education: [
        "Ph.D. in Clinical Psychology - National University of Singapore",
        "M.Psych in Clinical Psychology - University of Melbourne",
        "B.Psych (Hons) - Monash University"
      ],
      languages: ["English", "Mandarin", "Malay", "Hokkien"],
      specialties: ["Cognitive behavioral therapy", "Trauma recovery", "Mood disorders", "Personality disorders", "Psychological assessment", "Mindfulness-based interventions"],
      cancellationPolicy: "48-hour notice required for individual sessions"
    },
    {
      name: "Dr. Clare Ong",
      title: "Consulting Psychologist",
      experience: "33 years experience",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      about: "Consulting Psychologists provide expert psychological services to organizations, families, and individuals facing complex challenges. They offer specialized assessments, program development, and strategic interventions. Dr. Ong brings decades of experience in both clinical practice and organizational consulting.",
      workExperience: [
        "Singapore Psychological Society - Past President",
        "Ministry of Education Singapore - Senior Consultant",
        "Private Practice - Ong Psychology Associates"
      ],
      education: [
        "Ph.D. in Psychology - University of London",
        "M.A. in Applied Psychology - National University of Singapore",
        "B.A. (Hons) in Psychology - University of Cambridge"
      ],
      languages: ["English", "Mandarin", "Teochew", "Cantonese"],
      specialties: ["Executive coaching", "Organizational psychology", "Leadership development", "Team dynamics", "Conflict resolution", "Cultural competency training"],
      cancellationPolicy: "72-hour notice required for consulting sessions"
    },
    {
      name: "Dr. Maria Santos",
      title: "Family Therapist",
      experience: "29 years experience",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      about: "Family Therapists work with families to improve communication, resolve conflicts, and strengthen relationships. They address family dynamics, parenting challenges, and life transitions that affect the entire family system. Dr. Santos specializes in culturally responsive family therapy approaches.",
      workExperience: [
        "Latino Family Services Center",
        "Children's Hospital of Los Angeles Family Therapy Unit",
        "USC Family Therapy Training Clinic"
      ],
      education: [
        "Ph.D. in Marriage and Family Therapy - USC",
        "M.S.W. in Clinical Social Work - UCLA",
        "B.A. in Psychology - California State University"
      ],
      languages: ["English", "Spanish", "Portuguese"],
      specialties: ["Bilingual family therapy", "Parenting support", "Adolescent behavioral issues", "Divorce adjustment", "Blended family integration", "Cultural identity development"],
      cancellationPolicy: "24-hour notice required; emergency sessions available"
    },
    {
      name: "Dr. James Wilson",
      title: "Child Development Specialist",
      experience: "22 years experience",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      about: "Child Development Specialists focus on understanding and supporting children's physical, cognitive, social, and emotional growth. They assess developmental milestones, identify delays, and create intervention plans. Dr. Wilson works closely with families to optimize children's developmental outcomes.",
      workExperience: [
        "Boston Children's Hospital Developmental Medicine Center",
        "Harvard Medical School Department of Pediatrics",
        "Early Intervention Program of Massachusetts"
      ],
      education: [
        "Ph.D. in Developmental Psychology - Harvard University",
        "M.Ed. in Special Education - Boston College",
        "B.S. in Child Development - Tufts University"
      ],
      languages: ["English", "French"],
      specialties: ["Early childhood development", "Developmental delays", "Autism spectrum assessment", "Sensory processing issues", "School readiness", "Milestone tracking"],
      cancellationPolicy: "48-hour notice required for developmental assessments"
    },
    {
      name: "Dr. Sarah Chen",
      title: "Adolescent Psychiatrist",
      experience: "18 years experience",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      about: "Adolescent Psychiatrists specialize in diagnosing and treating mental health conditions in teenagers. They understand the unique challenges of adolescent development and provide both therapy and medication management when appropriate. Dr. Chen focuses on evidence-based treatments for teen mental health.",
      workExperience: [
        "Seattle Children's Hospital Psychiatry Department",
        "University of Washington Adolescent Medicine",
        "Northwest Teen Mental Health Center"
      ],
      education: [
        "M.D. in Psychiatry - University of Washington",
        "Residency in Child & Adolescent Psychiatry - Seattle Children's",
        "B.S. in Neuroscience - Stanford University"
      ],
      languages: ["English", "Mandarin", "Spanish"],
      specialties: ["Teen depression", "Anxiety disorders", "ADHD management", "Eating disorders", "Self-harm prevention", "Medication management"],
      cancellationPolicy: "24-hour notice required; emergency consultations available"
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Behavioral Analyst",
      experience: "14 years experience",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      about: "Behavioral Analysts use applied behavior analysis (ABA) to help individuals develop positive behaviors and reduce challenging ones. They work extensively with children on the autism spectrum and those with developmental disabilities. Dr. Rodriguez creates personalized behavior intervention plans.",
      workExperience: [
        "Austin Center for Applied Behavior Analysis",
        "Texas Children's Hospital Developmental Pediatrics",
        "Autism Spectrum Solutions"
      ],
      education: [
        "Ph.D. in Applied Behavior Analysis - University of North Texas",
        "M.S. in Special Education - Texas State University",
        "B.A. in Psychology - University of Texas at Austin"
      ],
      languages: ["English", "Spanish"],
      specialties: ["Applied behavior analysis", "Autism spectrum interventions", "Challenging behaviors", "Social skills training", "Communication development", "Parent coaching"],
      cancellationPolicy: "48-hour notice required for behavior assessments"
    },
    {
      name: "Dr. Jennifer Park",
      title: "Learning Disability Specialist",
      experience: "20 years experience",
      image: "https://images.unsplash.com/photo-1594824278171-187f5086b962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      about: "Learning Disability Specialists assess and support individuals with various learning differences. They conduct comprehensive evaluations to identify specific learning challenges and develop targeted intervention strategies. Dr. Park works with students of all ages to maximize their learning potential.",
      workExperience: [
        "Los Angeles Learning Center",
        "UCLA Neuropsychology Assessment Clinic",
        "California Department of Education Special Services"
      ],
      education: [
        "Ph.D. in Learning Disabilities - UCLA",
        "M.A. in Educational Psychology - USC",
        "B.A. in Cognitive Science - UC San Diego"
      ],
      languages: ["English", "Korean", "Japanese"],
      specialties: ["Dyslexia assessment", "Reading comprehension", "Math learning disabilities", "Executive functioning", "Memory processing", "Accommodation planning"],
      cancellationPolicy: "72-hour notice required for comprehensive evaluations"
    },
    {
      name: "Dr. Robert Thompson",
      title: "Parent Counselor",
      experience: "26 years experience",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      about: "Parent Counselors provide guidance and support to parents navigating the challenges of raising children. They offer practical parenting strategies, help resolve family conflicts, and support parents through difficult transitions. Dr. Thompson specializes in positive parenting approaches.",
      workExperience: [
        "Denver Family Counseling Center",
        "Colorado State University Family Studies",
        "Rocky Mountain Parenting Institute"
      ],
      education: [
        "Ph.D. in Family Therapy - Colorado State University",
        "M.S.W. in Clinical Social Work - University of Denver",
        "B.A. in Human Development - University of Colorado"
      ],
      languages: ["English", "German"],
      specialties: ["Positive discipline", "Parent-child relationships", "Behavioral management", "Family communication", "Divorce adjustment", "Blended family dynamics"],
      cancellationPolicy: "24-hour notice required; flexible rescheduling available"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            And 100+ elite psychologists and therapists in your area
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Our carefully selected team of professionals brings decades of experience in family support and mental health.
          </p>
        </div>

        {/* Therapist Carousel Container */}
        <div className="relative" data-testid="therapist-carousel-container">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            data-testid="button-carousel-next"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-12">
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
                  className="w-full flex flex-shrink-0"
                  style={{ width: '100%' }}
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
