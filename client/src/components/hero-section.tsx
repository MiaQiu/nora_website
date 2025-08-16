import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-accent to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              An expert support system for every working family
            </h1>
            <p className="text-xl text-charcoal mb-8 leading-relaxed">
              ParentPro offers the only global, proactive care model that supports 
              all stages of family life. Members receive expert support and guidance, 
              resulting in improved mental health and increased productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.location.href = '/book-session'}
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 font-semibold"
                data-testid="button-book-session"
              >
                Book Your Session
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white font-semibold"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Three generations of women with baby, representing family support"
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero-family"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-secondary w-3 h-3 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium" data-testid="text-support-available">
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
