import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function DemoRequest() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    title: "",
    phone: "",
    employeeCount: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <SEOHead
          title="Demo Request Submitted - AskFellow"
          description="Thank you for your interest in AskFellow's employer solutions. We'll be in touch soon to schedule your demo."
        />
        <div className="min-h-screen bg-gradient-warm">
          <Navigation />
          <main role="main" className="py-20">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-3xl p-12 shadow-2xl">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
                  <p className="text-lg text-gray-600 mb-6">
                    We've received your demo request and will be in touch within 24 hours to schedule your personalized demonstration.
                  </p>
                  <p className="text-gray-500 mb-8">
                    In the meantime, feel free to explore our solutions or contact us directly at{" "}
                    <a href="mailto:hello@askfellow.com" className="text-primary hover:underline">
                      hello@askfellow.com
                    </a>
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/employer'}
                    className="bg-gradient-primary text-white px-8 py-3"
                  >
                    Back to Employer Solutions
                  </Button>
                </div>
              </motion.div>
            </div>
          </main>
          <Footer hideCTA />
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Schedule Your Demo - AskFellow Employer Solutions"
        description="Request a personalized demo of AskFellow's comprehensive parenting support platform for employers. See how we can help your working parents thrive."
        keywords="demo request, employer demo, parenting support demo, working parents platform"
        canonical="https://askfellow.com/demo-request"
      />
      <div className="min-h-screen bg-gradient-warm">
        <Navigation />
        <main role="main" className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Schedule Your <span className="text-gradient-primary">Demo</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  See how AskFellow can transform your workplace by supporting working parents through every stage of their journey.
                </p>
              </div>

              <motion.div 
                className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Your role"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="employeeCount" className="block text-sm font-semibold text-gray-700 mb-2">
                        Number of Employees *
                      </label>
                      <select
                        id="employeeCount"
                        name="employeeCount"
                        required
                        value={formData.employeeCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select range</option>
                        <option value="1-50">1-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1,000 employees</option>
                        <option value="1000+">1,000+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about your needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="What challenges are your working parents facing? What specific support are you looking to provide?"
                    />
                  </div>

                  <motion.div 
                    className="pt-6"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Schedule My Demo"}
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-500">
                    Have questions? Email us directly at{" "}
                    <a href="mailto:hello@askfellow.com" className="text-primary hover:underline">
                      hello@askfellow.com
                    </a>{" "}
                    or call{" "}
                    <a href="tel:+1234567890" className="text-primary hover:underline">
                      (123) 456-7890
                    </a>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
        <Footer hideCTA />
      </div>
    </>
  );
}