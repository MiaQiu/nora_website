import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Brain, Activity, Star, Clock, MessageCircle, Calendar, Users } from "lucide-react";
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
    name: "Dr. Sarah Tan",
    title: "Neurodivergence & Learning Differences Specialist",
    experience: "18 years experience",
    image: "/images/specialists/dr-sarah-tan.jpg",
    about: "Neurodivergence & Learning Differences Specialists provide comprehensive support for children with ADHD, autism, dyslexia, and other learning differences. They help families understand neurodivergent needs and advocate within Singapore's education system.",
    languages: ["English", "Mandarin", "Hokkien"],
    specialties: ["ADHD assessment and management", "Autism spectrum support", "Dyslexia intervention", "School accommodation planning", "Strength-based coaching", "Family advocacy training"],
    cancellationPolicy: "72-hour notice required for diagnostic assessments",
    rating: 4.9,
    reviewCount: 178
  },
  {
    name: "Dr. Rachel Lim",
    title: "Child Development & Early Intervention Specialist",
    experience: "23 years experience",
    image: "/images/specialists/dr-rachel-lim.jpg",
    about: "Child Development & Early Intervention Specialists assess developmental milestones and provide early screening for neurodivergence. They work with families to identify potential delays and create intervention strategies.",
    languages: ["English", "Mandarin", "Hokkien", "Teochew"],
    specialties: ["Developmental assessments", "Autism spectrum screening", "Speech delay intervention", "Motor skills development", "School readiness evaluation", "EIPIC navigation"],
    cancellationPolicy: "48-hour notice required for comprehensive assessments",
    rating: 4.8,
    reviewCount: 89
  }
];

export default function SpecialComplexCare() {
  const [selectedCategory, setSelectedCategory] = useState<SubCategory | null>(null);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subCategories = [
    {
      id: "depression",
      title: "Depression",
      description: "Comprehensive support for children and families dealing with depression and mood disorders.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      topics: ["Depression assessment", "Treatment planning", "Family support", "School collaboration", "Crisis intervention", "Recovery strategies"],
      matchedSpecialists: ["Dr. Sarah Tan", "Dr. Rachel Lim"]
    },
    {
      id: "depression-adhd",
      title: "Depression/ADHD",
      description: "Specialized support for children with co-occurring depression and ADHD challenges.",
      icon: Activity,
      color: "from-purple-500 to-indigo-500",
      topics: ["Dual diagnosis support", "ADHD management", "Depression treatment", "Behavioral strategies", "Academic support", "Family therapy"],
      matchedSpecialists: ["Dr. Sarah Tan"]
    },
    {
      id: "anxiety",
      title: "Anxiety",
      description: "Expert guidance for managing anxiety disorders in children and adolescents.",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      topics: ["Anxiety assessment", "Coping strategies", "Exposure therapy", "School anxiety support", "Social anxiety help", "Family coping skills"],
      matchedSpecialists: ["Dr. Sarah Tan", "Dr. Rachel Lim"]
    },
    {
      id: "autism",
      title: "Autism",
      description: "Comprehensive autism spectrum support and early intervention strategies.",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      topics: ["Autism assessment", "Early intervention", "Behavioral support", "Communication strategies", "School integration", "Family education"],
      matchedSpecialists: ["Dr. Sarah Tan", "Dr. Rachel Lim"]
    },
    {
      id: "dyslexia",
      title: "Dyslexia",
      description: "Specialized support for children with dyslexia and reading difficulties.",
      icon: Brain,
      color: "from-teal-500 to-blue-500",
      topics: ["Dyslexia assessment", "Reading intervention", "Academic accommodations", "Learning strategies", "School advocacy", "Parent support"],
      matchedSpecialists: ["Dr. Sarah Tan"]
    },
    {
      id: "ocd",
      title: "OCD",
      description: "Expert support for children with Obsessive-Compulsive Disorder and related challenges.",
      icon: Brain,
      color: "from-pink-500 to-rose-500",
      topics: ["OCD assessment", "Exposure therapy", "Family support", "School accommodations", "Coping strategies", "Treatment planning"],
      matchedSpecialists: ["Dr. Sarah Tan"]
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
        title="Special & Complex Care Navigation - Expert Support | AskFellow"
        description="Expert guidance for neurodivergence, physical and mental health conditions including depression, ADHD, anxiety, autism, dyslexia, and OCD. Get comprehensive care coordination and support."
        keywords="special care, complex care, neurodivergence, depression, ADHD, anxiety, autism, dyslexia, OCD, mental health, developmental support"
        canonical="https://askfellow.com/special-complex-care"
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
                      <Brain className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">Specialized Care</span>
                    </motion.div>
                    
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                      <span className="text-gradient-primary">Special & Complex Care</span>{" "}
                      <span className="text-charcoal">Navigation</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
                      Expert guidance for families managing <span className="font-semibold text-secondary">neurodivergence, physical and mental health conditions</span> with comprehensive care coordination.
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
                      Need Specialized Care Support?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                      Every child's needs are unique. Connect with our expert specialists for personalized care 
                      tailored to your family's specific challenges and goals.
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