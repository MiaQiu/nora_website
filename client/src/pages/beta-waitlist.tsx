import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Loader2, PlusCircle, X } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/seo-head";
import { motion } from "framer-motion";

interface ChildInfo {
  age: string;
}

export default function BetaWaitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfChildren: "",
    children: [] as ChildInfo[],
    topics: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/beta-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit waitlist request');
      }

      setIsSubmitted(true);
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting waitlist:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Update children array when number of children changes
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

  if (isSubmitted) {
    return (
      <>
        <SEOHead
          title="Joined Beta Waitlist - Thank You | Nora"
          description="Thank you for joining Nora's beta waitlist. We'll be in touch soon!"
          canonical="https://askfellow.com/beta-waitlist"
          noIndex={true}
        />
        <div className="min-h-screen bg-gradient-to-br from-accent via-warm to-white py-16 lg:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl border-2 border-primary/20">
                <CardContent className="pt-8">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    </motion.div>
                    <h1 className="text-3xl font-bold text-gradient-primary mb-4">
                      Welcome to the Nora Beta Family!
                    </h1>
                    <p className="text-lg text-charcoal mb-6">
                      Thank you{formData.name ? `, ${formData.name},` : ""} for joining our beta waitlist. We're excited to have you on this journey with us.
                    </p>
                    <p className="text-md text-charcoal/80 mb-8">
                      We'll send updates and early access information to <strong className="text-primary">{formData.email}</strong>. Keep an eye on your inbox!
                    </p>
                    <Link href="/">
                      <Button className="bg-gradient-primary text-white hover:shadow-lg glow-primary">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Return to Home
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Join Beta Waitlist - Early Access to Nora | Nora"
        description="Join Nora's beta waitlist to get early access to personalized parenting support and expert guidance. Be among the first to experience our platform."
        keywords="beta waitlist, early access, parenting support, nora beta, parenting platform"
        canonical="https://askfellow.com/beta-waitlist"
      />
      <div className="min-h-screen bg-gradient-to-br from-accent via-warm to-white py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4 hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <motion.h1
              className="text-3xl sm:text-4xl font-bold text-gradient-primary mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join the Beta Waitlist
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-charcoal/80"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Be among the first to experience personalized parenting support with Nora
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-xl border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-primary">Tell Us About Your Family</CardTitle>
                <CardDescription className="text-base">
                  Help us understand your needs so we can provide the best support for your parenting journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Display error message if any */}
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-sm text-red-800">
                        <strong>Error:</strong> {submitError}
                      </p>
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-charcoal">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your name"
                      required
                      disabled={isSubmitting}
                      className="w-full"
                      data-testid="input-name"
                    />
                  </div>

                  {/* Email Address */}
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
                      required
                      disabled={isSubmitting}
                      className="w-full"
                      data-testid="input-email"
                    />
                  </div>

                  {/* Phone Number */}
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
                      required
                      disabled={isSubmitting}
                      className="w-full"
                      data-testid="input-phone"
                    />
                  </div>

                  {/* Number of Children */}
                  <div className="space-y-2">
                    <Label htmlFor="numberOfChildren" className="text-sm font-medium text-charcoal">
                      Number of Children <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="numberOfChildren"
                      type="number"
                      min="0"
                      max="20"
                      value={formData.numberOfChildren}
                      onChange={(e) => handleInputChange('numberOfChildren', e.target.value)}
                      placeholder="How many children do you have?"
                      required
                      disabled={isSubmitting}
                      className="w-full"
                      data-testid="input-number-of-children"
                    />
                  </div>

                  {/* Children Ages */}
                  {formData.children.length > 0 && (
                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-charcoal">
                        Age of Children <span className="text-red-500">*</span>
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
                              required
                              disabled={isSubmitting}
                              className="flex-1"
                              data-testid={`input-child-age-${index}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Topics (Optional) */}
                  <div className="space-y-2">
                    <Label htmlFor="topics" className="text-sm font-medium text-charcoal">
                      Topics You'd Like to Discuss with Experts <span className="text-charcoal/50">(Optional)</span>
                    </Label>
                    <Textarea
                      id="topics"
                      value={formData.topics}
                      onChange={(e) => handleInputChange('topics', e.target.value)}
                      placeholder="e.g., Sleep training, behavior management, education planning, developmental milestones, etc."
                      disabled={isSubmitting}
                      rows={4}
                      className="w-full resize-none"
                      data-testid="textarea-topics"
                    />
                    <p className="text-xs text-charcoal/60">
                      Share any specific areas where you'd like expert guidance. This helps us tailor our platform to your needs.
                    </p>
                  </div>

                  {/* Info Box */}
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm text-charcoal/80">
                      <strong className="text-primary">What to expect:</strong> You'll be among the first to access Nora when we launch. We'll keep you updated on our progress and may reach out for early feedback.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-white hover:shadow-lg glow-primary py-3 text-lg font-semibold transition-all duration-300"
                    data-testid="button-submit-waitlist"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Joining Waitlist...
                      </>
                    ) : (
                      <>
                        <PlusCircle className="w-5 h-5 mr-2" />
                        Join the Beta Waitlist
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}
