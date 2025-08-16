export default function ServicesGrid() {
  const services = [
    {
      title: "Postpartum Care",
      description: "Comprehensive support for new mothers navigating physical recovery, emotional adjustment, and sleep coaching.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "New mother receiving postpartum care support and guidance"
    },
    {
      title: "Return to Work",
      description: "Guidance and strategies for successfully balancing career responsibilities with family needs.",
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Father working on laptop while caring for toddler at home"
    },
    {
      title: "Education & Academic Guidance",
      description: "Expert advice on popular education topics for example DSA, PLSE and University planning.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Student receiving academic guidance and educational planning support"
    },
    {
      title: "Parenting Skills & Child Development",
      description: "From toddler play to screentime management to teenage communication - expert guidance for every developmental stage.",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Parent and child engaged in developmental activities and communication"
    },
    {
      title: "Special & Complex Care Navigation",
      description: "Expert guidance for families managing neurodivergence, physical and mental health conditions with comprehensive care coordination.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Healthcare team providing specialized care navigation support"
    },
    {
      title: "Neurodivergence Support",
      description: "Specialized resources and strategies for supporting neurodivergent family members.",
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Multi-racial family cooking together in kitchen showing inclusive support"
    },
    {
      title: "Inclusive Support",
      description: "Culturally sensitive guidance that honors diverse family structures and backgrounds.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Happy diverse family playing together in park"
    },
    {
      title: "Special Health Care Needs",
      description: "Expert coordination for families managing complex health and medical requirements.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Healthcare professional consulting with parents and child"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Comprehensive Parenting Support Services
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            From pregnancy to teen years, get personalized guidance from vetted experts who understand your family's unique journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
              data-testid={`card-service-${index}`}
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-48 object-cover"
                data-testid={`img-service-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-charcoal text-sm" data-testid={`text-service-description-${index}`}>
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
