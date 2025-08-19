import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/images/animate_logo.gif" 
              alt="AskFellow Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-primary">AskFellow</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-charcoal hover:text-primary transition duration-300"
                data-testid="nav-services"
              >
                Services
              </button>
             
              <button
                onClick={() => scrollToSection('therapists')}
                className="text-charcoal hover:text-primary transition duration-300"
                data-testid="nav-therapists"
              >
                Experts
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-charcoal hover:text-primary transition duration-300"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button 
              className="bg-primary text-white hover:bg-primary/90 text-sm sm:text-base px-3 sm:px-4 py-2"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-charcoal" />
              ) : (
                <Menu className="h-6 w-6 text-charcoal" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-charcoal hover:text-primary transition duration-300"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block px-3 py-2 text-charcoal hover:text-primary transition duration-300"
                data-testid="mobile-nav-how-it-works"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection('therapists')}
                className="block px-3 py-2 text-charcoal hover:text-primary transition duration-300"
                data-testid="mobile-nav-therapists"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-charcoal hover:text-primary transition duration-300"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
