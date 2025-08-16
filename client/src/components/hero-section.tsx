import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-accent to-white py-8 sm:py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight mb-3 sm:mb-4">
              Your Extended Parenting Village
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-charcoal mb-6 sm:mb-8 leading-relaxed">
              Evidence-based expert support network providing personalized 1:1 guidance across every stage of parenting. Navigate challenges and milestones with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                onClick={() => window.location.href = '/book-session'}
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary/90 font-semibold text-sm sm:text-base"
                data-testid="button-book-session"
              >
                Book Your Session
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary hover:text-white font-semibold text-sm sm:text-base"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative mt-6 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Three generations of women with baby, representing family support"
              className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full h-auto"
              data-testid="img-hero-family"
            />
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-secondary w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium" data-testid="text-support-available">
                  Expert support available 24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
