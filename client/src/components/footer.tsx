export default function Footer() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Contact/CTA Section */}
      <section id="contact" className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to support your family's journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of families who have found expert support and guidance through ParentCompass. 
            Start your personalized care journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/book-session'}
              className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-opacity-90 transition duration-300 font-semibold"
              data-testid="button-book-session-footer"
            >
              Book Your Session
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition duration-300 font-semibold"
              data-testid="button-learn-more-services"
            >
              Learn More About Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" data-testid="text-footer-brand">ParentCompass</h3>
              <p className="text-gray-400" data-testid="text-footer-description">
                Expert support for every working parents, wherever they are along their journey.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" data-testid="text-footer-services-title">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition duration-300" data-testid="link-mental-health">Mental Health Support</a></li>
                <li><a href="#" className="hover:text-white transition duration-300" data-testid="link-return-work">Return to Work</a></li>
                <li><a href="#" className="hover:text-white transition duration-300" data-testid="link-child-development">Child Development</a></li>
                <li><a href="#" className="hover:text-white transition duration-300" data-testid="link-family-planning">Family Planning</a></li>
              </ul>
            </div>
            <div>
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
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p data-testid="text-copyright">&copy; 2025 ParentCompass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
