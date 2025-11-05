import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, ArrowLeft, Loader2, User, Users, Heart } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/seo-head";
import { motion, AnimatePresence } from "framer-motion";

interface ChildInfo {
  age: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  numberOfChildren: string;
  children: ChildInfo[];
  familyNeeds: string[];
  additionalDetails: string;
}

const FAMILY_NEEDS_OPTIONS = [
  { value: "worries-stress", label: "Worries / stress, fears, anxiety 😥", emoji: "😥" },
  { value: "sadness-depression", label: "Sadness / withdrawal, depression 🌧️", emoji: "🌧️" },
  { value: "attention-adhd", label: "Attention / impulsiveness, hyperactivity, inattention, ADHD 👀", emoji: "👀" },
  { value: "anger-behaviors", label: "Anger / tough behaviors, aggression, defiance 😡", emoji: "😡" },
  { value: "addiction", label: "Addiction / screens, video games, vaping, etc. 📱", emoji: "📱" },
  { value: "school-life", label: "School life / behavioral or academic issues, changing schools 🏫", emoji: "🏫" },
  { value: "social-life", label: "Social life / social skills, problems with friends, relationships & breakups 🧑‍🤝‍🧑", emoji: "🧑‍🤝‍🧑" },
  { value: "family-dynamics", label: "Family dynamics / family changes, conflicts, sibling rivalry 👨‍👩‍👧‍👦", emoji: "👨‍👩‍👧‍👦" },
  { value: "identity", label: "Identity / sexuality, gender, racial identities 🤔", emoji: "🤔" },
  { value: "divorce-separation", label: "Divorce or separation 💔", emoji: "💔" },
];

export default function Consultation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    numberOfChildren: "",
    children: [],
    familyNeeds: [],
    additionalDetails: ""
  });

  const totalSteps = 3;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (field === 'numberOfChildren') {
      const count = parseInt(value) || 0;
      const newChildren: ChildInfo[] = Array.from({ length: count }, (_, i) =>
        formData.children[i] || { age: '' }
      );
      setFormData(prev => ({
        ...prev,
        children: newChildren
      }));
    }
  };

  const handleChildAgeChange = (index: number, age: string) => {
    const newChildren = [...formData.children];
    newChildren[index] = { age };
    setFormData(prev => ({
      ...prev,
      children: newChildren
    }));
  };

  const handleNeedToggle = (needValue: string) => {
    setFormData(prev => ({
      ...prev,
      familyNeeds: prev.familyNeeds.includes(needValue)
        ? prev.familyNeeds.filter(n => n !== needValue)
        : [...prev.familyNeeds, needValue]
    }));
  };

  const canProceedFromStep1 = () => {
    return formData.numberOfChildren.trim() !== "" && 
           parseInt(formData.numberOfChildren) >= 0 &&
           formData.children.every(child => child.age.trim() !== "");
  };

  const canProceedFromStep2 = () => {
    return formData.familyNeeds.length > 0;
  };

  const canSubmit = () => {
    return formData.name.trim() !== "" && 
           formData.email.trim() !== "" && 
           formData.phone.trim() !== "";
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    if (!canSubmit()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit consultation request');
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting consultation:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <SEOHead
          title="Consultation Booked - Thank You | Nora"
          description="Thank you for booking a consultation with Nora. We'll be in touch soon!"
          canonical="https://askfellow.com/consultation"
          noIndex={true}
        />
        <div className="min-h-screen bg-gradient-to-br from-accent via-warm to-white flex items-center justify-center py-16 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full"
          >
            <Card className="shadow-2xl border-2 border-primary/20 p-8 sm:p-12">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                </motion.div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gradient-primary mb-4">
                  We've Got Your Request!
                </h1>
                <p className="text-lg sm:text-xl text-charcoal mb-6">
                  Thank you{formData.name ? `, ${formData.name},` : ""} for reaching out to Nora.
                </p>
                <p className="text-base sm:text-lg text-charcoal/80 mb-8">
                  Our team will review your information and contact you at <strong className="text-primary">{formData.email}</strong> or <strong className="text-primary">{formData.phone}</strong> within 24 hours to schedule your consultation.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6 mb-8">
                  <p className="text-sm sm:text-base text-charcoal/90">
                    <strong className="text-primary">What's next?</strong> Our expert team will reach out to understand your needs better and match you with the perfect specialist for your family's journey.
                  </p>
                </div>
                <Link href="/">
                  <Button className="bg-gradient-primary text-white hover:shadow-lg glow-primary text-base sm:text-lg px-6 sm:px-8 py-3">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Return to Home
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Book Your Free Consultation | Nora"
        description="Get personalized parenting support with Nora. Book your free consultation today and connect with certified specialists."
        keywords="parenting consultation, family support, expert guidance, nora consultation"
        canonical="https://askfellow.com/consultation"
      />
      <div className="min-h-screen bg-gradient-to-br from-accent via-warm to-white py-8 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <Link href="/">
              <Button variant="ghost" className="mb-4 sm:mb-6 hover:bg-primary/10" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gradient-primary">Get care, today.</span>
            </motion.h1>
          </div>

          {/* Progress Steps */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              {[1, 2, 3].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300 ${
                        currentStep >= step
                          ? 'bg-gradient-primary text-white shadow-lg'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {step}
                    </div>
                    <p className={`text-xs sm:text-sm mt-2 font-medium ${currentStep >= step ? 'text-primary' : 'text-gray-500'}`}>
                      {step === 1 ? 'Your Family' : step === 2 ? 'Your Needs' : 'Book Session'}
                    </p>
                  </div>
                  {index < 2 && (
                    <div className={`w-12 sm:w-20 h-1 mx-2 rounded ${currentStep > step ? 'bg-gradient-primary' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-charcoal/60">Takes 2 minutes</p>
            </div>
          </div>

          {/* Error Message */}
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4"
            >
              <p className="text-sm text-red-800">
                <strong>Error:</strong> {submitError}
              </p>
            </motion.div>
          )}

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-xl border-2 border-primary/20 p-6 sm:p-8">
                {/* Step 1: Family Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gradient-primary">Tell us about your family</h2>
                        <p className="text-sm sm:text-base text-charcoal/70">Help us understand your parenting journey</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="numberOfChildren" className="text-sm font-medium text-charcoal">
                        How many children do you have? <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="numberOfChildren"
                        type="number"
                        min="0"
                        max="20"
                        value={formData.numberOfChildren}
                        onChange={(e) => handleInputChange('numberOfChildren', e.target.value)}
                        placeholder="Number of children"
                        className="w-full text-base sm:text-lg"
                        data-testid="input-number-of-children"
                      />
                    </div>

                    {formData.children.length > 0 && (
                      <div className="space-y-3">
                        <Label className="text-sm font-medium text-charcoal">
                          Age of each child <span className="text-red-500">*</span>
                        </Label>
                        <div className="space-y-3">
                          {formData.children.map((child, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                <span className="text-sm font-semibold text-primary">{index + 1}</span>
                              </div>
                              <Input
                                type="text"
                                value={child.age}
                                onChange={(e) => handleChildAgeChange(index, e.target.value)}
                                placeholder="e.g., 3 years old, 6 months, newborn"
                                className="flex-1"
                                data-testid={`input-child-age-${index}`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button
                      onClick={handleNext}
                      disabled={!canProceedFromStep1()}
                      className="w-full bg-gradient-primary text-white hover:shadow-lg glow-primary py-3 text-base sm:text-lg font-semibold mt-6"
                      data-testid="button-next-step-1"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                )}

                {/* Step 2: Family Needs */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gradient-primary">What can we help your family with?</h2>
                        <p className="text-sm sm:text-base text-charcoal/70">We'll match you with a team specialized in your needs <span className="text-red-500">*</span></p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {FAMILY_NEEDS_OPTIONS.map((option) => (
                        <div
                          key={option.value}
                          className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:shadow-md ${
                            formData.familyNeeds.includes(option.value)
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-primary/30'
                          }`}
                          onClick={() => handleNeedToggle(option.value)}
                          data-testid={`checkbox-need-${option.value}`}
                        >
                          <Checkbox
                            checked={formData.familyNeeds.includes(option.value)}
                            onCheckedChange={() => handleNeedToggle(option.value)}
                            className="mt-0.5"
                          />
                          <label className="flex-1 cursor-pointer text-sm sm:text-base text-charcoal">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-6">
                      <Button
                        onClick={handleBack}
                        variant="outline"
                        className="flex-1 py-3 text-base sm:text-lg font-semibold"
                        data-testid="button-back-step-2"
                      >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={!canProceedFromStep2()}
                        className="flex-1 bg-gradient-primary text-white hover:shadow-lg glow-primary py-3 text-base sm:text-lg font-semibold"
                        data-testid="button-next-step-2"
                      >
                        Continue
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gradient-primary">Book your session</h2>
                        <p className="text-sm sm:text-base text-charcoal/70">How can we reach you?</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-charcoal">
                        Your Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your name"
                        className="w-full"
                        data-testid="input-name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-charcoal">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full"
                        data-testid="input-email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-charcoal">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="9123 4567"
                        className="w-full"
                        data-testid="input-phone"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalDetails" className="text-sm font-medium text-charcoal">
                        Additional Details <span className="text-charcoal/50">(Optional)</span>
                      </Label>
                      <Textarea
                        id="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                        placeholder="Any other information you'd like to share..."
                        rows={4}
                        className="w-full resize-none"
                        data-testid="textarea-additional-details"
                      />
                    </div>

                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-4">
                      <p className="text-sm text-charcoal/80">
                        <strong className="text-primary">Next Steps:</strong> Our team will contact you within 24 hours to schedule your consultation with a certified specialist.
                      </p>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <Button
                        onClick={handleBack}
                        variant="outline"
                        className="flex-1 py-3 text-base sm:text-lg font-semibold"
                        data-testid="button-back-step-3"
                      >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        disabled={!canSubmit() || isSubmitting}
                        className="flex-1 bg-gradient-primary text-white hover:shadow-lg glow-primary py-3 text-base sm:text-lg font-semibold"
                        data-testid="button-submit-consultation"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Book My Consultation
                            <CheckCircle className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
