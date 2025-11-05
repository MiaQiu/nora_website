import { useLocation, Link } from "wouter";

interface FooterProps {
  hideCTA?: boolean;
}

export default function Footer({ hideCTA = false }: FooterProps) {
  const [, setLocation] = useLocation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigateToConsultation = () => {
    setLocation('/consultation');
  };

  return (
    <>
      {/* Contact/CTA Section */}
      {!hideCTA && (
      <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Ready to support your family's journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Join thousands of families who have found expert support and guidance through Nora. 
            Start your personalized care journey today.
          </p>
          {/* <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-80">
            Contact us at: <a href="mailto:info@askfellow.ai" className="text-secondary hover:text-white transition duration-300 underline">info@askfellow.ai</a> or book a free consultation through the button below.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={navigateToConsultation}
              className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl"
              data-testid="button-book-session-footer"
            >
              Get Started
            </button>
            {/* <button 
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-primary transition duration-300 font-semibold text-sm sm:text-base"
              data-testid="button-learn-more-services"
            >
              Learn More About Our Services
            </button> */}
          </div>
        </div>
      </section>
      )}

      {/* Footer */}
            <footer className="bg-charcoal text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4" data-testid="text-footer-brand">Nora</h3>
            <p className="text-gray-400 leading-relaxed" data-testid="text-footer-description">
              Expert support for all working parents, wherever they are along their journey.
            </p>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4" data-testid="text-footer-services-title">Services</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/postpartum-care" className="hover:text-white transition duration-300" data-testid="link-postpartum-care">Postpartum Care</Link></li>
                <li><Link href="/return-to-work" className="hover:text-white transition duration-300" data-testid="link-return-work">Return to Work</Link></li>
                <li><Link href="/education-academic" className="hover:text-white transition duration-300" data-testid="link-education-academic">Education & Academic Guidance</Link></li>
              </ul>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/parenting-skills" className="hover:text-white transition duration-300" data-testid="link-parenting-skills">Parenting Skills & Child Development</Link></li>
                <li><Link href="/special-complex-care" className="hover:text-white transition duration-300" data-testid="link-special-care">Special & Complex Care Navigation</Link></li>
                <li><Link href="/emotional-wellbeing" className="hover:text-white transition duration-300" data-testid="link-emotional-wellbeing">Emotional & Relationship Wellbeing</Link></li>
              </ul>
            </div>
          </div>
            {/* <div>
              <h4 className="font-semibold mb-4" data-testid="text-footer-company-title">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition duration-300" data-testid="link-about">About Us</a></li>
                <li><a href="#" className="hover:text-white transition duration-300" data-testid="link-team">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition duration-300" data-testid="link-careers">Careers</a></li>
                <li><a href="#" className="hover:text-white transition duration-300" data-testid="link-contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" data-testid="text-footer-connect-title">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition duration-300" data-testid="link-privacy">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition duration-300" data-testid="link-terms">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition duration-300" data-testid="link-support">Support</a></li>
              </ul>
            </div> */}
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8">
            {/* Privacy & Confidentiality Statement */}
            {/* <div className="text-center mb-6">
              <div className="bg-primary/10 rounded-lg p-4 max-w-2xl mx-auto">
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                  🔒 Your Privacy is Our Priority
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">All conversations are completely confidential.</strong><br />
                  Your discussions with our specialists are protected by strict privacy protocols 
                  and professional confidentiality standards.
                </p>
              </div>
            </div>
             */}
      
            
            {/* Copyright */}
            <div className="text-center text-gray-400">
              <p data-testid="text-copyright">
                &copy; 2025 Nora. All rights reserved.
                <span className="text-gray-600 mx-2">•</span>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition duration-300" data-testid="link-privacy-policy">
                  Privacy Policy
                </Link>
                <span className="text-gray-600 mx-2">•</span>
                <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition duration-300" data-testid="link-terms-conditions">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
