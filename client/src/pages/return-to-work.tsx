import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Briefcase, Star, Clock, MessageCircle, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import ChatWidget from "@/components/chat-widget";
import SEOHead from "@/components/seo-head";

interface Specialist {
  name: string;
  title: string;
  experience: string;
  image: string;
  about: string;
  languages: string[];
  specialties: string[];
  cancellationPolicy: string;
  rating: number;
  reviewCount: number;
}

interface SubCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  topics: string[];
  matchedSpecialists: string[];
}

// Full specialist data
const specialists = [
  {
    name: "Dr. Priya Sharma",
    title: "Perinatal & Postpartum Specialist",
    experience: "19 years experience",
    image: "/images/specialists/dr-priya-sharma.jpg",
    about: "Perinatal & Postpartum Specialists provide comprehensive support throughout pregnancy, birth, and the fourth trimester. They focus on maternal mental health, breastfeeding support, and helping families adjust to parenthood.",
    languages: ["English", "Mandarin", "Tamil", "Hindi", "Malay"],
    specialties: ["Postpartum depression", "Breastfeeding support", "Birth trauma recovery", "Maternal anxiety", "Sleep training guidance", "Return-to-work preparation"],
    cancellationPolicy: "24-hour notice required; emergency support available",
    rating: 4.9,
    reviewCount: 127
  },
  {
    name: "Dr. Janet Loh",
    title: "Parent Self-Care & Family Wellness Specialist",
    experience: "24 years experience",
    image: "/images/specialists/dr-janet-loh.jpg",
    about: "Parent Self-Care & Family Wellness Specialists focus on supporting parents' mental health, stress management, and overall wellbeing throughout their parenting journey.",
    languages: ["English", "Mandarin", "Hokkien", "Cantonese"],
    specialties: ["Parent burnout prevention", "Stress management techniques", "Menopause support", "Work-life balance", "Mindfulness training", "Relationship maintenance during parenting"],
    cancellationPolicy: "24-hour notice required; wellness retreats available",
    rating: 4.8,
    reviewCount: 145
  }
];

export default function ReturnToWork() {
  const [selectedCategory, setSelectedCategory] = useState<SubCategory | null>(null);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subCategories = [
    {
      id: "return-to-work",
      title: "Return to Work",
      description: "Comprehensive guidance for successfully balancing career responsibilities with family needs.",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
      topics: ["Career transition planning", "Work-life balance strategies", "Professional development", "Return-to-work confidence", "Time management", "Stress management"],
      matchedSpecialists: ["Dr. Priya Sharma", "Dr. Janet Loh"]
    }
  ];

  const getMatchedSpecialists = (specialistNames: string[]) => {
    return specialists.filter(specialist => specialistNames.includes(specialist.name));
  };

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

  const SpecialistCard = ({ specialist }: { specialist: Specialist }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20"
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={specialist.image}
            alt={specialist.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-charcoal mb-1">{specialist.name}</h3>
            <p className="text-secondary font-medium text-sm mb-2">{specialist.title}</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-charcoal">{specialist.rating}</span>
              </div>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-sm text-gray-600">{specialist.reviewCount} reviews</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              {specialist.experience}
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
          {specialist.about}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-charcoal mb-2">Key Specialties:</h4>
          <div className="flex flex-wrap gap-1">
            {specialist.specialties.slice(0, 3).map((specialty: string, idx: number) => (
              <span key={idx} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                {specialty}
              </span>
            ))}
            {specialist.specialties.length > 3 && (
              <span className="text-xs text-gray-500 px-2 py-1">
                +{specialist.specialties.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={`/book-session?specialist=${encodeURIComponent(specialist.name)}`} className="flex-1">
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              Book Session
            </Button>
          </Link>
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <SEOHead
        title="Return to Work - Career Transition Support | AskFellow"
        description="Expert guidance for successfully balancing career responsibilities with family needs. Get personalized support for your return-to-work journey."
        keywords="return to work, career transition, work-life balance, professional development, family career balance, postpartum career support"
        canonical="https://askfellow.com/return-to-work"
      />
      <div className="min-h-screen bg-gradient-warm">
        {/* Header */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-4" aria-label="Breadcrumb">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </Button>
              </Link>
              {selectedCategory && (
                <>
                  <span className="text-gray-300">/</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSelectedCategory(null)}
                    className="text-primary hover:text-primary/80"
                  >
                    {selectedCategory.title}
                  </Button>
                </>
              )}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main role="main">
          <section className="py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {!selectedCategory ? (
                // Category Selection View
                <>
                  <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">Career Excellence</span>
                    </motion.div>
                    
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                      <span className="text-gradient-primary">Return to Work</span>{" "}
                      <span className="text-charcoal">& Career Support</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
                      Expert guidance for successfully <span className="font-semibold text-secondary">balancing career responsibilities with family needs</span> during your return-to-work journey.
                    </p>
                  </motion.div>

                  {/* Sub-categories Grid */}
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {subCategories.map((category, index) => {
                      const IconComponent = category.icon;
                      const matchedCount = category.matchedSpecialists.length;
                      
                      return (
                        <motion.article 
                          key={index}
                          variants={itemVariants}
                          whileHover={{ 
                            y: -8,
                            transition: { duration: 0.3 }
                          }}
                          className="group cursor-pointer"
                          onClick={() => setSelectedCategory(category)}
                        >
                          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-transparent hover:border-primary/20 h-full">
                            {/* Icon Header */}
                            <div className="relative p-6 pb-4">
                              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <IconComponent className="w-8 h-8 text-white" />
                              </div>
                              
                              <h2 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors duration-300">
                                {category.title}
                              </h2>
                              
                              <p className="text-gray-600 leading-relaxed mb-4">
                                {category.description}
                              </p>

                              {/* Specialist Count Badge */}
                              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                                <Users className="w-4 h-4" />
                                {matchedCount} Expert{matchedCount !== 1 ? 's' : ''} Available
                              </div>
                            </div>

                            {/* Topics List */}
                            <div className="px-6 pb-6">
                              <div className="space-y-2 mb-6">
                                {category.topics.map((topic, topicIndex) => (
                                  <div key={topicIndex} className="flex items-center gap-2 text-sm text-gray-500">
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                                    {topic}
                                  </div>
                                ))}
                              </div>

                              {/* CTA Button */}
                              <motion.div
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                whileHover={{ scale: 1.02 }}
                              >
                                <Button 
                                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold"
                                  size="sm"
                                >
                                  View Specialists →
                                </Button>
                              </motion.div>
                            </div>
                          </div>
                        </motion.article>
                      );
                    })}
                  </motion.div>
                </>
              ) : (
                // Specialist Results View
                <>
                  <motion.div 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedCategory.color} flex items-center justify-center`}>
                        <selectedCategory.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal">{selectedCategory.title}</h1>
                        <p className="text-gray-600">{selectedCategory.description}</p>
                      </div>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="font-semibold text-charcoal mb-3">What our specialists help with:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCategory.topics.map((topic, idx) => (
                          <span key={idx} className="bg-white/80 text-charcoal px-3 py-1 rounded-full text-sm border border-gray-200">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Matched Specialists */}
                  <motion.section
                    className="mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h2 className="text-xl font-bold text-charcoal mb-6">
                      Recommended Specialists ({getMatchedSpecialists(selectedCategory.matchedSpecialists).length})
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {getMatchedSpecialists(selectedCategory.matchedSpecialists).map((specialist, idx) => (
                        <SpecialistCard key={idx} specialist={specialist} />
                      ))}
                    </div>
                  </motion.section>
                </>
              )}

              {/* Bottom CTA Section - Only show when no category selected */}
              {!selectedCategory && (
                <motion.section 
                  className="mt-16 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-primary/10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                      Ready to Navigate Your Career Return?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                      Every career transition is unique. Connect with our expert specialists for personalized guidance 
                      tailored to your specific return-to-work challenges and goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/book-session">
                        <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8">
                          Book a Session
                        </Button>
                      </Link>
                      <Link href="/request">
                        <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                          Request Consultation
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.section>
              )}
            </div>
          </section>
        </main>
        <ChatWidget />
      </div>
    </>
  );
} 