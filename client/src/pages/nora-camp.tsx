import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Globe, Heart, Lightbulb, Star, Users } from "lucide-react";

export default function NoraCamp() {
  const programs = [
    {
      title: "Half-Day Camps",
      description: "Perfect for busy families, our half-day camps offer 4 hours of engaging parent-child activities designed to strengthen your bond through play, collaboration, and meaningful conversations.",
      features: [
        "Weekend availability",
        "Age-appropriate activities",
        "Expert-led bonding exercises",
        "Take-home activity kits"
      ],
      icon: Calendar,
      gradient: "from-pink-100 to-pink-50"
    },
    {
      title: "Overseas Adventure Camps",
      description: "Create lasting memories with our immersive 3-5 day overseas camps. Experience new cultures together while participating in specially designed activities that bring families closer.",
      features: [
        "Curated destinations",
        "All-inclusive packages",
        "Cultural experiences",
        "Professional family guides"
      ],
      icon: Globe,
      gradient: "from-purple-100 to-purple-50"
    }
  ];

  const benefits = [
    {
      title: "Strengthen Bonds",
      description: "Build deeper connections through shared experiences and quality time together",
      icon: Heart,
      gradient: "from-pink-400 to-pink-500"
    },
    {
      title: "Create Memories",
      description: "Make unforgettable moments that your family will cherish for years to come",
      icon: Star,
      gradient: "from-orange-400 to-orange-500"
    },
    {
      title: "Expert Guidance",
      description: "Learn proven techniques from child development specialists to improve family dynamics",
      icon: Users,
      gradient: "from-purple-400 to-purple-500"
    },
    {
      title: "Fun & Learning",
      description: "Engage in activities that are both entertaining and educational for all ages",
      icon: Lightbulb,
      gradient: "from-blue-400 to-blue-500"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Choose Your Camp",
      description: "Select between our half-day local camps or multi-day overseas adventures based on your family's schedule and interests."
    },
    {
      number: "2",
      title: "Book Your Spot",
      description: "Complete our simple enrollment form and secure your family's place. Early bird discounts available for advance bookings."
    },
    {
      number: "3",
      title: "Create Memories Together",
      description: "Join us for an unforgettable experience filled with laughter, learning, and meaningful moments that strengthen your family bond."
    }
  ];

  return (
    <>
      <SEOHead
        title="Nora Camp - Strengthen Family Bonds Through Adventure | Nora"
        description="Join Nora Camp for unforgettable parent-child experiences. Half-day local camps and overseas adventures designed to strengthen family bonds through play and meaningful connection."
        keywords="family camp, parent-child bonding, family adventures, overseas family camps, family activities"
        canonical="https://askfellow.com/nora-camp"
      />
      <div className="min-h-screen bg-gradient-warm">
        <Navigation />
        <main role="main">
          {/* Hero Section */}
          <section className="py-16 sm:py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <span className="text-gradient-primary">Nora Camp</span>
                </motion.h1>
                <motion.p
                  className="text-base sm:text-lg md:text-xl text-charcoal/80 mb-6 sm:mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Unforgettable parent-child experiences that strengthen family bonds through adventure, play, and meaningful connection
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link href="/beta-waitlist">
                    <Button
                      size="lg"
                      className="bg-gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                      data-testid="button-explore-camps"
                    >
                      Explore Our Camps
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Camp Programs Section */}
          <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12 sm:mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Our Camp Programs
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.title}
                    className={`relative bg-gradient-to-br ${program.gradient} rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-white/80 p-3 rounded-xl">
                        <program.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-charcoal flex-1">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-charcoal/80 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <ul className="space-y-3">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-charcoal/80 font-medium text-sm sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Nora Camp Section */}
          <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12 sm:mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Why <span className="text-gradient-primary">Nora Camp</span>?
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mx-auto mb-4`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-charcoal/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12 sm:mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Getting Started is Easy
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="relative text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-primary flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                        <span className="text-2xl sm:text-3xl font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-xs">
                        {step.description}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-r from-primary to-secondary text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Ready to Strengthen Your Family Bond?
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Join hundreds of families who have transformed their relationships through Nora Camp experiences.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/beta-waitlist">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                    data-testid="button-enroll-family"
                  >
                    Enroll Your Family Today
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer hideCTA />
      </div>
    </>
  );
}
