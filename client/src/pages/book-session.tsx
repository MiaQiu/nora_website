import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function BookSession() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    category: "",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to the server
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const categories = [
    "Mental Health Support",
    "Return-to-Work Guidance", 
    "Child Care Assistance",
    "Neurodivergent Family Support",
    "Parenting Strategies",
    "Work-Life Balance",
    "Family Communication",
    "Behavioral Management",
    "Educational Support",
    "Other"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent to-white py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardContent className="pt-8">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-primary mb-4">
                  Session Request Submitted!
                </h1>
                <p className="text-lg text-charcoal mb-6">
                  Thank you for booking your session with ParentPro. Our team will review your request and get back to you within 1 business day.
                </p>
                <p className="text-md text-charcoal mb-8">
                  We'll contact you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> to schedule your personalized consultation.
                </p>
                <Link href="/">
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Return to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent to-white py-16 lg:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Book Your Session
          </h1>
          <p className="text-xl text-charcoal">
            Schedule a personalized consultation with our expert team
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Session Details</CardTitle>
            <CardDescription>
              Tell us about yourself and what you'd like to discuss. We'll get back to you within 1 business day.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-charcoal">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                  required
                  className="w-full"
                  data-testid="input-phone"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-charcoal">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                  data-testid="input-email"
                />
              </div>

              {/* Category Selection */}
              <div className="space-y-2">
                <Label htmlFor="category" className="text-sm font-medium text-charcoal">
                  Support Category (Optional)
                </Label>
                <Select onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger className="w-full" data-testid="select-category">
                    <SelectValue placeholder="Select a category that best describes your needs" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <Label htmlFor="details" className="text-sm font-medium text-charcoal">
                  What would you like to discuss? *
                </Label>
                <Textarea
                  id="details"
                  value={formData.details}
                  onChange={(e) => handleInputChange('details', e.target.value)}
                  placeholder="Please describe the topics, challenges, or questions you'd like to address during your session. The more details you provide, the better we can prepare to help you."
                  required
                  rows={4}
                  className="w-full resize-none"
                  data-testid="textarea-details"
                />
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>What happens next?</strong> After we match you with a coach, you'll start with a complimentary 10-minute consultation to discuss your needs and ensure it's the right fit before continuing with your full session.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90 py-3 text-lg font-semibold"
                data-testid="button-submit-booking"
              >
                Submit Session Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}