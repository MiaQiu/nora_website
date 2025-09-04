import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";

export default function Employer() {
  const features = [
    {
      id: "content",
      title: "Curated Content & Resources",
      description: "Localized library, expert-led webinars, and personalized tips tailored to each family’s journey.",
      bullets: ["Localized Library", "Expert-Led Webinars", "Personalized Tips"],
      image: "/images/employer/curated-content.png",
      imageAlt: "Curated Content & Resources screenshot"
    },
    {
      id: "network",
      title: "On-Demand Expert Network",
      description: "Direct 1:1 access to 20+ types of specialists—from pregnancy through teenage years.",
      bullets: ["Direct 1:1 Consultations", "Access to 20+ types of specialists", "Support from pregnancy to teenager years"],
      image: "/images/employer/on-demand-support.png",
      imageAlt: "On-Demand Expert Network screenshot"
    },
    {
      id: "ai",
      title: "Proactive AI Assistant",
      description: "Personalized pathways, smart check-ins, and 24/7 triage to keep families on track.",
      bullets: ["Personalized Pathways", "Smart Check-ins", "24/7 Triage"],
      image: "/images/employer/ai-assistant.png",
      imageAlt: "Proactive AI Assistant chat screenshot"
    }
  ];

  const [activeId, setActiveId] = useState<string>(features[0].id);
  const active = features.find(f => f.id === activeId)!;

  return (
    <>
      <SEOHead
        title="Employer Solutions - Support for Working Parents | AskFellow"
        description="AskFellow helps employers support working parents with an AI-powered, human-centered platform from pregnancy through teenage years. Improve productivity, retention, and wellbeing."
        keywords="employer benefits, working parents support, family benefits, caregiver support, parenting benefits, employee wellbeing"
        canonical="https://askfellow.com/employer"
      />
      <div className="min-h-screen bg-gradient-warm">
        <Navigation />
        <main role="main">
          {/* Hero Section */}
          <section className="py-16 sm:py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  {/* <motion.div
                    className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    🚀 Trusted by Forward-Thinking Companies
                  </motion.div> */}
                  <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Support Your <span className="text-gradient-primary">Working Parents</span> Through Every Stage
                  </motion.h1>
                  <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal/80 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Transform employee wellbeing with <span className="font-semibold text-secondary">personalized parenting support</span> that reduces stress, increases productivity, and builds loyalty.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.3 }}
                  >
                    <Link href="/demo-request">
                      <Button size="lg" className="bg-gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                        Book a Demo
                      </Button>
                    </Link>
                    {/* <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 hover:bg-primary/5">
                      View Case Studies
                    </Button> */}
                  </motion.div>
                </div>
                <motion.div 
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <img
                    src="/images/employer/family2.webp"
                    alt="Happy working parents with family"
                    className="w-full max-w-[350px] h-auto rounded-3xl shadow-2xl"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.style.display = 'none';
                      t.parentElement!.innerHTML = '<div class="w-full max-w-[350px] h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center"><div class="text-center text-gray-500"><div class="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4"></div><p class="font-medium">Family Image</p></div></div>';
                    }}
                  />
                </motion.div>
              </div>
              
              {/* Statistics Section - moved below hero */}
              <motion.div 
                className="mt-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-center mb-8 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">The Hidden Cost of Unsupported Parents</h3>
                  <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">Understanding the real impact on your workforce and bottom line</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto px-4">
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-2">32</div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">hours per week</div>
                    <p className="text-gray-500 text-xs sm:text-sm">Unseen mental load burden</p>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-2">48%</div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">of parents</div>
                    <p className="text-gray-500 text-xs sm:text-sm">Feel completely overwhelmed daily</p>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-2">$3.8T</div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">economic value</div>
                    <p className="text-gray-500 text-xs sm:text-sm">Of unpaid parental mental labor</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Value Proposition Section */}
          <section className="py-20 sm:py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                {/* <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  💡 The AskFellow Solution
                </motion.div> */}
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Turn Parenting Challenges Into <span className="text-gradient-primary">Workplace Advantages</span>
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  When you provide comprehensive parenting support, your employees become more focused, loyal, and productive. AskFellow delivers expert guidance exactly when families need it most.
                </motion.p>
              </div>

              {/* Enhanced Tab bar */}
              <div className="relative mb-8 sm:mb-12 px-4">
                <div className="flex gap-1 sm:gap-2 md:gap-3 p-2 bg-gray-100 rounded-2xl justify-center">
                  {features.map((f) => {
                    const isActive = f.id === activeId;
                    return (
                      <motion.button
                        key={f.id}
                        onClick={() => setActiveId(f.id)}
                        className={`flex-1 px-2 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-semibold rounded-xl transition-all duration-300 text-center ${isActive ? 'bg-white text-primary shadow-lg scale-105' : 'text-gray-600 hover:text-primary hover:bg-white/50'}`}
                        aria-selected={isActive}
                        role="tab"
                        whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="block sm:hidden">
                          {f.id === 'content' ? 'Content' : f.id === 'network' ? 'Experts' : 'AI Assistant'}
                        </span>
                        <span className="hidden sm:block">
                          {f.title}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Active content */}
              <motion.div 
                key={activeId}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Left: description */}
                <div className="lg:col-span-7 xl:col-span-7 px-4 lg:px-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gradient-primary">{active.title}</h3>
                  <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{active.description}</p>
                  <div className="space-y-4">
                    {active.bullets.map((b, index) => (
                      <motion.div 
                        key={b}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium text-sm sm:text-base md:text-lg">{b}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Right: screenshot */}
                <div className="lg:col-span-5 xl:col-span-5 flex lg:justify-end px-4 lg:px-0">
                  <motion.div 
                    className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-2xl max-w-[280px] sm:max-w-[320px] xl:max-w-[350px] w-full mx-auto"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={active.image}
                      alt={active.imageAlt}
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.style.display = 'none';
                        t.parentElement!.innerHTML = '<div class="p-8 text-center text-gray-500 bg-gradient-to-br from-primary/5 to-secondary/5"><div class="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4"></div><p class="font-medium">Feature Preview</p></div>';
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ROI Section */}
          <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                {/* <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  📊 Proven Results
                </motion.div> */}
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  The Business Impact of <span className="text-gradient-primary">Supported Parents</span>
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Companies that invest in comprehensive parent support see measurable improvements across key business metrics.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16 max-w-5xl mx-auto px-4">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-3">90%</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-2">Return to Work Rate</div>
                  <p className="text-sm sm:text-base text-gray-600">Of employees return to work with comprehensive parent support vs 57% national average</p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-3">94%</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-2">Higher Satisfaction</div>
                  <p className="text-sm sm:text-base text-gray-600">Of companies report higher employee satisfaction with family-friendly arrangements</p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-3">425%</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-2">Return on Investment</div>
                  <p className="text-sm sm:text-base text-gray-600">Childcare benefits deliver returns up to 425% of their cost for companies</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Ready to Transform Your Workplace?
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Join forward-thinking companies who are investing in their employees' whole-life success. Let's build a workplace where parents thrive.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/demo-request">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-xl">
                    Schedule Your Demo
                  </Button>
                </Link>
                {/* <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 text-lg font-bold">
                  Download ROI Guide
                </Button> */}
              </motion.div>
            </div>
          </section>
        </main>
        <Footer hideCTA />
      </div>
    </>
  );
} 