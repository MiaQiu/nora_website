import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Heart, Brain, Users, Clock, MessageCircle, Calendar, Users as UsersIcon } from "lucide-react";
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
  },
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
    name: "Dr. Amelia Kumar",
    title: "Family Therapy & Relationship Counselor",
    experience: "21 years experience",
    image: "/images/specialists/dr-amelia-kumar.jpg",
    about: "Family Therapy & Relationship Counselors help families navigate communication challenges, resolve conflicts, and build stronger, healthier relationships.",
    languages: ["English", "Mandarin", "Tamil", "Malay"],
    specialties: ["Family communication", "Conflict resolution", "Blended family dynamics", "Parent-child relationships", "Marital counseling", "Cultural family issues"],
    cancellationPolicy: "24-hour notice required; family sessions available",
    rating: 4.9,
    reviewCount: 189
  }
];

export default function EmotionalWellbeing() {
  const [selectedCategory, setSelectedCategory] = useState<SubCategory | null>(null);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subCategories = [
    {
      id: "mental-health",
      title: "Mental Health Support",
      description: "Professional support for parental mental health, stress management, and emotional wellbeing.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      topics: ["Anxiety management", "Depression support", "Stress reduction", "Mindfulness training", "Coping strategies", "Emotional regulation"],
      matchedSpecialists: ["Dr. Janet Loh", "Dr. Priya Sharma"]
    },
    {
      id: "relationship-counseling",
      title: "Relationship & Family Therapy",
      description: "Expert guidance for improving family communication, resolving conflicts, and building stronger relationships.",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      topics: ["Family communication", "Conflict resolution", "Blended family dynamics", "Parent-child relationships", "Marital counseling", "Cultural family issues"],
      matchedSpecialists: ["Dr. Amelia Kumar", "Dr. Janet Loh"]
    },
    {
      id: "work-life-balance",
      title: "Work-Life Balance",
      description: "Strategies for managing career demands while maintaining family harmony and personal wellbeing.",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      topics: ["Time management", "Boundary setting", "Stress management", "Self-care routines", "Career-family integration", "Burnout prevention"],
      matchedSpecialists: ["Dr. Janet Loh", "Dr. Priya Sharma"]
    },
    {
      id: "cultural-wellness",
      title: "Cultural & Identity Wellness",
      description: "Support for families navigating cultural identity, generational differences, and multicultural challenges.",
      icon: Heart,
      color: "from-purple-500 to-indigo-500",
      topics: ["Cultural identity", "Generational differences", "Multicultural families", "Language barriers", "Cultural traditions", "Identity integration"],
      matchedSpecialists: ["Dr. Amelia Kumar", "Dr. Janet Loh"]
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

  const SpecialistCard = ({ specialist, index, category }: { specialist: Specialist, index: number, category: SubCategory }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20"
    >
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
          <img
            src={specialist.image}
            alt={specialist.name}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mx-auto sm:mx-0"
          />
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-charcoal mb-1">{specialist.name}</h3>
            <p className="text-secondary font-medium text-xs sm:text-sm mb-2">{specialist.title}</p>
            <div className="flex items-center justify-center sm:justify-start gap-1 text-xs sm:text-sm text-gray-600">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              {specialist.experience}
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 overflow-hidden text-center sm:text-left" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
          {specialist.about}
        </p>
        
        <div className="mb-4">
          <h4 className="text-xs sm:text-sm font-semibold text-charcoal mb-2 text-center sm:text-left">Key Specialties:</h4>
          <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
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
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Link href={`/book-session?specialist=${encodeURIComponent(specialist.name)}`} className="flex-1">
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium text-xs sm:text-sm">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Book Session
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <SEOHead
        title="Emotional & Relationship Wellbeing - Expert Support for Families | AskFellow"
        description="Professional support for parental mental health, family relationships, work-life balance, and cultural wellness from experienced specialists."
        keywords="emotional wellbeing, family therapy, mental health support, work-life balance, relationship counseling, cultural wellness, family communication"
        canonical="https://askfellow.com/emotional-wellbeing"
      />
      <div className="min-h-screen bg-gradient-warm">
        {/* Header */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <nav className="flex items-center gap-2 sm:gap-4" aria-label="Breadcrumb">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 text-sm sm:text-base">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back to Services</span>
                  <span className="sm:hidden">Back</span>
                </Button>
              </Link>
              {selectedCategory && (
                <>
                  <span className="text-gray-300">/</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSelectedCategory(null)}
                    className="text-primary hover:text-primary/80 text-sm sm:text-base"
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
          <section className="py-8 sm:py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {!selectedCategory ? (
                // Category Selection View
                <>
                  <motion.div 
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-primary/10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="text-xs sm:text-sm font-medium text-primary">Emotional Wellness</span>
                    </motion.div>
                    
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 px-2">
                      <span className="text-gradient-primary">Emotional & Relationship</span>{" "}
                      <span className="text-charcoal">Wellbeing</span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-charcoal max-w-3xl mx-auto leading-relaxed px-4">
                      Professional support for <span className="font-semibold text-secondary">parental mental health, family relationships, and work-life balance</span> from{" "}
                      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                        experienced wellness specialists
                      </span>{" "}
                      who understand your family's unique journey.
                    </p>
                  </motion.div>

                  {/* Sub-categories Grid */}
                  <motion.div 
                    className="space-y-4 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {subCategories.map((category, index) => {
                      const IconComponent = category.icon;
                      const matchedCount = category.matchedSpecialists.length;
                      const isExpanded = selectedCategory ? (selectedCategory as SubCategory).id === category.id : false;
                      
                      return (
                        <motion.article 
                          key={index}
                          variants={itemVariants}
                          className="group cursor-pointer"
                        >
                          <div 
                            className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-transparent hover:border-primary/20"
                            onClick={() => setSelectedCategory(isExpanded ? null : category)}
                          >
                            {/* Collapsible Header */}
                            <div className="p-4 sm:p-6">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 sm:gap-4 flex-1">
                                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                  </div>
                                  
                                  <div className="flex-1 min-w-0">
                                    <h2 className="text-lg sm:text-xl font-bold text-charcoal mb-1 group-hover:text-primary transition-colors duration-300">
                                      {category.title}
                                    </h2>
                                    
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2">
                                      {category.description}
                                    </p>

                                    {/* Specialist Count Badge */}
                                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                      <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                                      {matchedCount} Expert{matchedCount !== 1 ? 's' : ''} Available
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Expand/Collapse Icon */}
                                <div className="flex-shrink-0 ml-4">
                                  <motion.div
                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors duration-200"
                                  >
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </motion.div>
                                </div>
                              </div>
                            </div>

                            {/* Expandable Content */}
                            <motion.div
                              initial={false}
                              animate={{ 
                                height: isExpanded ? "auto" : 0,
                                opacity: isExpanded ? 1 : 0
                              }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100">
                                {/* Topics List */}
                                <div className="pt-4">
                                  <h4 className="text-sm sm:text-base font-semibold text-charcoal mb-3">What we help with:</h4>
                                  <div className="space-y-2 mb-6">
                                    {category.topics.map((topic, topicIndex) => (
                                      <div key={topicIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} flex-shrink-0`} />
                                        <span>{topic}</span>
                                      </div>
                                    ))}
                                  </div>

                                  {/* CTA Button */}
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                  >
                                    <Button 
                                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold text-sm"
                                      size="sm"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedCategory(category);
                                      }}
                                    >
                                      View Specialists →
                                    </Button>
                                  </motion.div>
                                </div>
                              </div>
                            </motion.div>
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
                    className="mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${selectedCategory.color} flex items-center justify-center flex-shrink-0`}>
                        <selectedCategory.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal">{selectedCategory.title}</h1>
                        <p className="text-sm sm:text-base text-gray-600">{selectedCategory.description}</p>
                      </div>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                      <h3 className="font-semibold text-charcoal mb-3 text-sm sm:text-base">What our specialists help with:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCategory.topics.map((topic, idx) => (
                          <span key={idx} className="bg-white/80 text-charcoal px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-gray-200">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Matched Specialists */}
                  <motion.section
                    className="mb-8 sm:mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-6 text-center sm:text-left">
                      Matched Specialists
                    </h2>
                    
                    <div className="space-y-4 sm:space-y-6">
                      {specialists
                        .filter(specialist => selectedCategory.matchedSpecialists.includes(specialist.name))
                        .map((specialist, index) => (
                          <SpecialistCard 
                            key={specialist.name} 
                            specialist={specialist} 
                            index={index}
                            category={selectedCategory}
                          />
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
                      Need Emotional & Relationship Support?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                      Every family's emotional journey is unique. Connect with our expert specialists for personalized support 
                      tailored to your specific wellbeing needs and family dynamics.
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