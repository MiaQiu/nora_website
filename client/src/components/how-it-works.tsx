import { Users, Lightbulb, Route, CalendarCheck, Heart } from "lucide-react";

export default function HowItWorks() {
  const features = [
    {
      icon: Users,
      title: "Always-on connection to real human support & resources",
      description: "Connect with experienced professionals who understand your unique family situation."
    },
    {
      icon: Lightbulb,
      title: "Evidence-based content & personalized tips",
      description: "Receive research-backed advice tailored to your family's specific needs and circumstances."
    },
    {
      icon: Route,
      title: "Curated pathways tailored to unique needs",
      description: "Follow personalized support journeys designed for your family's current life stage."
    },
    {
      icon: CalendarCheck,
      title: "Access to workshops & small group classes",
      description: "Join interactive sessions with other families facing similar challenges."
    },
    {
      icon: Heart,
      title: "Connection to parenting & caregiving communities",
      description: "Build meaningful relationships with other parents and caregivers in your area."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            24/7 Personalized Digital Experience for Working Families
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Our comprehensive support system provides expert guidance whenever you need it most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4" data-testid={`feature-${index}`}>
                  <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                    <p className="text-charcoal" data-testid={`text-feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile App Mockup */}
          <div className="relative" data-testid="mobile-app-mockup">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white max-w-sm mx-auto">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm">9:41</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-white rounded-full"></div>
                  <div className="w-4 h-2 bg-white rounded-full opacity-50"></div>
                  <div className="w-4 h-2 bg-white rounded-full opacity-30"></div>
                </div>
                <div className="flex space-x-1 text-sm">
                  <span>●●●</span>
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-6" data-testid="text-welcome-message">
                Welcome to ParentCompass, Margaret
              </h3>
              
              <div className="bg-white rounded-xl p-4 text-charcoal mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
                    alt="Professional female therapist headshot"
                    className="w-12 h-12 rounded-full object-cover"
                    data-testid="img-therapist-allison"
                  />
                  <div>
                    <h4 className="font-semibold" data-testid="text-therapist-name">Allison C.</h4>
                    <p className="text-sm text-gray-600" data-testid="text-therapist-title">Licensed Family Therapist</p>
                  </div>
                </div>
                <p className="text-sm mb-3" data-testid="text-therapist-description">
                  Connect with me for expert 1:1 advice and learn how I can support you through your caregiving journey.
                </p>
                <button 
                  className="w-full bg-primary text-white py-2 rounded-lg text-sm font-semibold"
                  data-testid="button-schedule-welcome-call"
                >
                  Schedule a Welcome Call
                </button>
              </div>
              
              <div className="bg-amber-100 rounded-xl p-4 text-charcoal">
                <div className="flex items-center space-x-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span className="font-semibold text-sm" data-testid="text-tips-label">TIPS</span>
                </div>
                <p className="text-sm" data-testid="text-tip-content">
                  Decision-Making During Labor: Connect with me for...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
