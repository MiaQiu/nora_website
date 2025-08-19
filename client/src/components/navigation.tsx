import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-white/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img 
              src="/images/animate_logo.gif" 
              alt="AskFellow Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <h1 className="text-xl sm:text-2xl font-bold text-gradient-primary">AskFellow</h1>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <motion.button
                onClick={() => scrollToSection('services')}
                className="text-charcoal hover:text-primary transition-all duration-300 font-medium relative"
                data-testid="nav-services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative">
                  Services
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-secondary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.button>
             
              <motion.button
                onClick={() => scrollToSection('therapists')}
                className="text-charcoal hover:text-primary transition-all duration-300 font-medium relative"
                data-testid="nav-therapists"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative">
                  Experts
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-secondary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="text-charcoal hover:text-primary transition-all duration-300 font-medium relative"
                data-testid="nav-contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative">
                  Contact
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-secondary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary/25 text-sm sm:text-base px-3 sm:px-4 py-2 glow-primary transition-all duration-300"
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            </motion.div>
            
            <motion.button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-charcoal" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-charcoal" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden backdrop-blur-glass border-t border-white/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <motion.button
                  onClick={() => scrollToSection('services')}
                  className="block px-3 py-2 text-charcoal hover:text-primary transition-all duration-300 font-medium w-full text-left hover:bg-accent/50 rounded-lg"
                  data-testid="mobile-nav-services"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Services
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('how-it-works')}
                  className="block px-3 py-2 text-charcoal hover:text-primary transition-all duration-300 font-medium w-full text-left hover:bg-accent/50 rounded-lg"
                  data-testid="mobile-nav-how-it-works"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  How it Works
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('therapists')}
                  className="block px-3 py-2 text-charcoal hover:text-primary transition-all duration-300 font-medium w-full text-left hover:bg-accent/50 rounded-lg"
                  data-testid="mobile-nav-therapists"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Team
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="block px-3 py-2 text-charcoal hover:text-primary transition-all duration-300 font-medium w-full text-left hover:bg-accent/50 rounded-lg"
                  data-testid="mobile-nav-contact"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
