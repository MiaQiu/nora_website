export default function ServicesGrid() {
  const services = [
    {
      title: "Postpartum Care",
      description: "Comprehensive support for new mothers navigating physical recovery, emotional adjustment, and sleep coaching.",
      image: "/images/categories/Postpartum_care.jpg",
      alt: "New mother receiving postpartum care support and guidance"
    },
    {
      title: "Return to Work",
      description: "Guidance and strategies for successfully balancing career responsibilities with family needs.",
      image: "/images/categories/return_to_work.jpg",
      alt: "Father working on laptop while caring for toddler at home"
    },
    {
      title: "Education & Academic Guidance",
      description: "Expert advice on popular education topics for example DSA, PLSE and University planning.",
      image: "/images/categories/academic.jpg",
      alt: "Student receiving academic guidance and educational planning support"
    },
    {
      title: "Parenting Skills & Child Development",
      description: "From toddler play to screentime management to teenage communication - expert guidance for every developmental stage.",
      image: "/images/categories/parenting_skills.jpg",
      alt: "Parent and child engaged in developmental activities and communication"
    },
    {
      title: "Special & Complex Care Navigation",
      description: "Expert guidance for families managing neurodivergence, physical and mental health conditions with comprehensive care coordination.",
      image: "/images/categories/special_care.jpg",
      alt: "Healthcare team providing specialized care navigation support"
    },
    {
      title: "Emotional & Relationship Wellbeing",
      description: "Support for parental mental health and family harmony with expert guidance on emotional wellness and healthy relationships.",
      image: "/images/categories/mental_support.jpg",
      alt: "Family experiencing emotional wellbeing and healthy relationships"
    }
  ];

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Comprehensive Parenting Support Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-charcoal max-w-3xl mx-auto">
            From pregnancy to teen years, get personalized guidance from vetted experts who understand your family's unique journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
              data-testid={`card-service-${index}`}
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-40 sm:h-48 object-cover"
                data-testid={`img-service-${index}`}
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-charcoal text-sm sm:text-sm" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
