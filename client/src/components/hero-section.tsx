import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Timeline stages with corresponding specialists
const timelineStages = [
  {
    id: 1,
    stage: "Pregnancy",
    period: "0-9 months",
    specialist: {
      name: "Dr. Priya Sharma",
      title: "Perinatal & Postpartum Specialist",
      image: "/images/specialists/dr-priya-sharma.jpg",
      specialties: ["Prenatal care", "Birth preparation", "Maternal mental health"]
    },
    profilePosition: "bottom"
  },
  {
    id: 2,
    stage: "Newborn",
    period: "0-12 months",
    specialist: {
      name: "Dr. Ahmad Hassan",
      title: "Pediatric Sleep & Nutrition Consultant",
      image: "/images/specialists/dr-ahmad-hassan.jpg",
      specialties: ["Sleep training", "Feeding guidance", "Growth monitoring"]
    },
    profilePosition: "top"
  },
  {
    id: 3,
    stage: "Toddler",
    period: "1-3 years",
    specialist: {
      name: "Dr. Rachel Lim",
      title: "Child Development & Early Intervention Specialist",
      image: "/images/specialists/dr-rachel-lim.jpg",
      specialties: ["Developmental milestones", "Early intervention", "Speech development"]
    },
    profilePosition: "bottom"
  },
  {
    id: 4,
    stage: "School Age",
    period: "4-12 years",
    specialist: {
      name: "Dr. Catherine Wong",
      title: "Educational Psychology & School Support Specialist",
      image: "/images/specialists/dr-catherine-wong.jpg",
      specialties: ["School readiness", "Learning support", "Academic guidance"]
    },
    profilePosition: "top"
  },
  {
    id: 5,
    stage: "Teen",
    period: "13-18 years",
    specialist: {
      name: "Dr. Amelia Kumar",
      title: "Adolescent Mental Health & Emotional Wellness Coach",
      image: "/images/specialists/dr-amelia-kumar.jpg",
      specialties: ["Teen mental health", "Emotional support", "Identity development"]
    },
    profilePosition: "bottom"
  },
  {
    id: 6,
    stage: "Young Adult",
    period: "18+ years",
    specialist: {
      name: "Dr. Janet Loh",
      title: "Education & Academic Guidance Specialist",
      image: "/images/specialists/dr-janet-loh.jpg",
      specialties: ["Parent wellness", "Empty nest support", "Family transitions"]
    },
    profilePosition: "top"
  }
];

function AnimatedTimeline() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentOffset, setCurrentOffset] = useState(80); // Start with Newborn (second stage)
  const animationRef = useRef<number>();
  const lastTimeRef = useRef(0);
  
  const STAGE_WIDTH = 250;
  const ANIMATION_SPEED = 40;
  const TOTAL_WIDTH = timelineStages.length * STAGE_WIDTH;

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animate = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;
      const deltaOffset = (deltaTime / 1000) * ANIMATION_SPEED;

      setCurrentOffset(prevOffset => {
        const newOffset = prevOffset + deltaOffset;
        return newOffset >= TOTAL_WIDTH ? 0 : newOffset;
      });

      lastTimeRef.current = currentTime;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, TOTAL_WIDTH]);

  useEffect(() => {
    lastTimeRef.current = 0;
  }, [isPlaying]);

  const centerStageIndex = Math.floor(currentOffset / STAGE_WIDTH) % timelineStages.length;
  const duplicatedStages = [...timelineStages, ...timelineStages];

  return (
    // FIXED: Contained timeline with proper overflow control
    <div className="relative w-full py-20 px-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl overflow-hidden">
      
      {/* Timeline Title */}
      {/* <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
         Guide through every stage of parenting
        </h2>
      </div> */}
      
      {/* Play/Pause Control */}
      {/* <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 z-30 text-sm bg-white px-4 py-2 rounded-full hover:bg-gray-50 transition-all shadow-lg font-medium border border-gray-200"
      >
        {isPlaying ? "⏸️ Pause" : "▶️ Play"}
      </button> */}

      {/* Timeline Container - PROPERLY CONTAINED */}
      <div className="relative h-96 flex items-center overflow-hidden" style={{ paddingLeft: `${STAGE_WIDTH / 2}px` }}>
        
        {/* Horizontal Timeline Line - CONTAINED */}
        <div className="absolute left-8 right-8 h-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 z-5"></div>
        
        {/* Moving Timeline Content - CONTAINED */}
        <div 
          className="flex items-center relative"
          style={{
            transform: `translateX(${-currentOffset}px)`,
            width: `${duplicatedStages.length * STAGE_WIDTH}px`
          }}
        >
          {duplicatedStages.map((stage, index) => {
            const stagePosition = index * STAGE_WIDTH;
            const viewportCenter = currentOffset;
            const distanceFromCenter = Math.abs(stagePosition - viewportCenter);
            const isActive = distanceFromCenter < STAGE_WIDTH * 0.6;
            const isCentered = distanceFromCenter < STAGE_WIDTH * 0.3;
            
            return (
              <div
                key={`${stage.id}-${Math.floor(index / timelineStages.length)}`}
                className="relative flex flex-col items-center justify-center"
                style={{ 
                  width: `${STAGE_WIDTH}px`,
                  minWidth: `${STAGE_WIDTH}px`,
                  height: '100%'
                }}
              >
                
                {/* Top Specialist Profile - REDUCED SIZE */}
                {stage.profilePosition === "top" && (
                  <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      className="w-64"
                      animate={{ 
                        // opacity: isActive ? 1 : 0.3,
                        y: isCentered ? 0 : 10,
                        scale: isCentered ? 1 : 0.95
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-200">
                        <div className="flex items-start space-x-3">
                          <img
                            src={stage.specialist.image}
                            alt={stage.specialist.name}
                            className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-white flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-charcoal text-sm mb-1 leading-tight">
                              {stage.specialist.name}
                            </h4>
                            <p className="text-xs text-charcoal/70 mb-2 leading-relaxed">
                              {stage.specialist.title}
                            </p>
                          </div>
                        </div>
                        {/* Down Arrow */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-200 shadow-sm"></div>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Stage Labels - Position based on profile position */}
                {stage.profilePosition === "bottom" && (
                  <motion.div
                    className="absolute -top-12 left-1/3 transform -translate-x-1/2 text-center"
                    animate={{ 
                      y: isCentered ? 0 : 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-base font-bold text-charcoal mb-1">
                      {stage.stage}
                    </h3>
                    <p className="text-sm text-charcoal/80 font-medium">
                      {stage.period}
                    </p>
                  </motion.div>
                )}

                {/* Timeline Point - Position based on profile position */}
                <motion.div
                  className={`relative flex items-center justify-center z-10 ${
                    stage.profilePosition === "bottom" ? "mt-8" : ""
                  }`}
                  animate={{
                    scale: isCentered ? 1.3 : isActive ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300 z-10 ${
                    isCentered ? 'bg-primary' : isActive ? 'bg-secondary' : 'bg-muted-foreground'
                  }`}>
                    {isCentered && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                    )}
                  </div>
                </motion.div>

                {/* Stage Labels - For top profile position */}
                {stage.profilePosition === "top" && (
                  <motion.div
                    className="mt-8 text-center"
                    animate={{ 
                      y: isCentered ? 0 : 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-base font-bold text-charcoal mb-1">
                      {stage.stage}
                    </h3>
                    <p className="text-sm text-charcoal/80 font-medium">
                      {stage.period}
                    </p>
                  </motion.div>
                )}

                {/* Bottom Specialist Profile - REDUCED SIZE */}
                {stage.profilePosition === "bottom" && (
                  <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      className="w-64"
                      animate={{ 
                        // opacity: isActive ? 1 : 0.3,
                        y: isCentered ? 0 : -10,
                        scale: isCentered ? 1 : 0.95
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-200">
                        {/* Up Arrow */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200 shadow-sm"></div>
                        
                        <div className="flex items-start space-x-3">
                          <img
                            src={stage.specialist.image}
                            alt={stage.specialist.name}
                            className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-white flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-charcoal text-sm mb-1 leading-tight">
                              {stage.specialist.name}
                            </h4>
                            <p className="text-xs text-charcoal/70 mb-3 leading-relaxed">
                              {stage.specialist.title}
                            </p>
                            {/* <Button
                              size="sm"
                              className="w-full bg-primary hover:bg-primary/90 text-white text-xs py-2 rounded-lg transition-all duration-300"
                            >
                              Connect with Expert
                            </Button> */}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
        
      </div>

      {/* Current Stage Indicator */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200">
          <span className="text-sm font-semibold text-charcoal">
            {timelineStages[centerStageIndex].stage} • {timelineStages[centerStageIndex].period}
          </span>
        </div>
      </div> */}
    </div>
  );
}

export default function HeroSection() {
  const [, setLocation] = useLocation();

  const navigateToBookSession = () => {
    setLocation('/book-session');
  };

  return (
    <section className="bg-gradient-to-br from-accent via-white to-accent/50 py-8 sm:py-12 lg:py-24 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-secondary rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Extended{" "}
              <span className="text-gradient-primary">
                Parenting Village
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-charcoal mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="font-semibold text-secondary">Evidence-based expert support</span> network providing{" "}
              <span className="text-gradient-primary font-semibold">
                personalized 1:1 guidance
              </span>{" "}
              across every stage of parenting. Navigate challenges and milestones with confidence.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={navigateToBookSession}
                  className="bg-gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:shadow-lg glow-primary font-semibold text-sm sm:text-base transition-all duration-300"
                  data-testid="button-book-session"
                >
                  Book Your Session
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <Button
                  variant="outline"
                  className="border-2 border-secondary text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-secondary hover:text-white font-semibold text-sm sm:text-base transition-all duration-300"
                  data-testid="button-learn-more"
                >
                  Learn More
                </Button> */}
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Timeline */}
          <motion.div 
            className="relative mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AnimatedTimeline />
          </motion.div>
        </div>
      </div>
    </section>
  );
}