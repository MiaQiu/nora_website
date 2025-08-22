import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, X, Loader2 } from "lucide-react";
import { Link, useLocation } from "wouter";
import SEOHead from "@/components/seo-head";

export default function BookSession() {
  const [location] = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    specialist: "",
    details: ""
  });

  const [timeSlots, setTimeSlots] = useState<Array<{
    date: string;
    startTime: string;
    duration: string;
  }>>([]);

  const [currentTimeSlot, setCurrentTimeSlot] = useState({
    date: "",
    startTime: "",
    duration: ""
  });

  const specialists = [
    "Dr. Priya Sharma",
    "Dr. Rachel Lim",
    "Dr. Ahmad Hassan",
    "Dr. Catherine Wong",
    "Dr. Sarah Tan",
    "Dr. Marcus Chen",
    "Dr. Amelia Kumar",
    "Dr. Janet Loh"
  ];

  // Extract specialist from URL parameters and scroll to top
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    const urlParams = new URLSearchParams(window.location.search);
    const specialistParam = urlParams.get('specialist');
    
    if (specialistParam && specialists.includes(specialistParam)) {
      setFormData(prev => ({
        ...prev,
        specialist: specialistParam
      }));
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that at least one time slot is added
    if (timeSlots.length === 0) {
      alert("Please add at least one available time slot.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/book-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timeSlots
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit booking request');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting booking:', error);
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
  };

  const categories = [
    "Postpartum Care",
    "Return to Work",
    "Education & Academic Guidance",
    "Parenting Skills & Child Development",
    "Special & Complex Care Navigation",
    "Emotional & Relationship Wellbeing",
    "Other"
  ];

  const durations = [
    { value: "10", label: "10 minutes (Free consultation)" },
    { value: "30", label: "30 minutes" },
    { value: "60", label: "1 hour" }
  ];

  const handleTimeSlotChange = (field: string, value: string) => {
    setCurrentTimeSlot(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addTimeSlot = () => {
    if (currentTimeSlot.date && currentTimeSlot.startTime && currentTimeSlot.duration) {
      setTimeSlots(prev => [...prev, currentTimeSlot]);
      setCurrentTimeSlot({
        date: "",
        startTime: "",
        duration: ""
      });
    }
  };

  const removeTimeSlot = (index: number) => {
    setTimeSlots(prev => prev.filter((_, i) => i !== index));
  };

  const formatTimeSlot = (slot: { date: string; startTime: string; duration: string }) => {
    const date = new Date(slot.date).toLocaleDateString();
    const duration = durations.find(d => d.value === slot.duration)?.label || slot.duration;
    return `${date} at ${slot.startTime} (${duration})`;
  };

  if (isSubmitted) {
    return (
      <>
        <SEOHead
          title="Session Booked - Thank You | AskFellow"
          description="Your parenting session request has been submitted. Our expert specialists will contact you within 1 business day to schedule your personalized consultation."
          canonical="https://askfellow.com/book-session"
          noIndex={true}
        />
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
                  Thank you{formData.name ? `, ${formData.name},` : ""} for booking your session with AskFellow. Our team will review your request and get back to you within 1 business day.
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
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Book a Session - Expert Parenting Support | AskFellow"
        description="Schedule a personalized 1:1 consultation with our expert parenting specialists. Get professional guidance for child development, behavior issues, and family challenges."
        keywords="book parenting session, parenting consultation, child development expert, family counseling, parenting specialist appointment"
        canonical="https://askfellow.com/book-session"
      />
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
            {formData.specialist 
              ? <>Schedule a personalized consultation with <strong className="text-secondary">{formData.specialist}</strong></>
              : "Schedule a personalized consultation with our expert team"
            }
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
              {/* Display error message if any */}
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800">
                    <strong>Error:</strong> {submitError}
                  </p>
                </div>
              )}

              {/* User Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-charcoal">
                  User Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="How would you like to be addressed?"
                  required
                  disabled={isSubmitting}
                  className="w-full"
                  data-testid="input-name"
                />
              </div>

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
                  placeholder="9123-4567"
                  required
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                  className="w-full"
                  data-testid="input-email"
                />
              </div>

              {/* Category Selection */}
              <div className="space-y-2">
                <Label htmlFor="category" className="text-sm font-medium text-charcoal">
                  Support Category (Optional)
                </Label>
                <Select onValueChange={(value) => handleInputChange('category', value)} disabled={isSubmitting}>
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

              {/* Specialist Selection */}
              <div className="space-y-2">
                <Label htmlFor="specialist" className="text-sm font-medium text-charcoal">
                  Preferred Specialist (Optional)
                </Label>
                <Select 
                  value={formData.specialist} 
                  onValueChange={(value) => handleInputChange('specialist', value)}
                  disabled={isSubmitting}
                >
                  <SelectTrigger className="w-full" data-testid="select-specialist">
                    <SelectValue placeholder="Select a specialist you'd like to work with" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialists.map((specialist) => (
                      <SelectItem key={specialist} value={specialist}>
                        {specialist}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Available Time Slots */}
              <div className="space-y-4">
                <Label className="text-sm font-medium text-charcoal">
                  Your Available Time Slots *
                </Label>
                
                {/* Add Time Slot Form */}
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <h4 className="text-sm font-semibold text-charcoal mb-3">Add Available Time Slot</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                    {/* Date */}
                    <div>
                      <Label htmlFor="date" className="text-xs text-gray-600 mb-1 block">
                        Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={currentTimeSlot.date}
                        onChange={(e) => handleTimeSlotChange('date', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        disabled={isSubmitting}
                        className="w-full text-sm"
                        data-testid="input-time-slot-date"
                      />
                    </div>
                    
                    {/* Start Time */}
                    <div>
                      <Label htmlFor="startTime" className="text-xs text-gray-600 mb-1 block">
                        Start Time
                      </Label>
                      <Select 
                        value={currentTimeSlot.startTime}
                        onValueChange={(value) => handleTimeSlotChange('startTime', value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="w-full text-sm" data-testid="select-time-slot-time">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }, (_, hour) => [
                            { value: `${hour.toString().padStart(2, '0')}:00`, label: `${hour.toString().padStart(2, '0')}:00` },
                            { value: `${hour.toString().padStart(2, '0')}:30`, label: `${hour.toString().padStart(2, '0')}:30` }
                          ]).flat().map((time) => (
                            <SelectItem key={time.value} value={time.value}>
                              {time.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Duration */}
                    <div>
                      <Label htmlFor="duration" className="text-xs text-gray-600 mb-1 block">
                        Duration
                      </Label>
                      <Select 
                        value={currentTimeSlot.duration}
                        onValueChange={(value) => handleTimeSlotChange('duration', value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="w-full text-sm" data-testid="select-time-slot-duration">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          {durations.map((duration) => (
                            <SelectItem key={duration.value} value={duration.value}>
                              {duration.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button
                    type="button"
                    onClick={addTimeSlot}
                    disabled={!currentTimeSlot.date || !currentTimeSlot.startTime || !currentTimeSlot.duration || isSubmitting}
                    className="bg-primary text-white hover:bg-primary/90 text-sm px-4 py-2"
                    data-testid="button-add-time-slot"
                  >
                    Add Time Slot
                  </Button>
                </div>
                
                {/* Selected Time Slots */}
                {timeSlots.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-charcoal">Your Available Times:</h4>
                    <div className="space-y-2">
                      {timeSlots.map((slot, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3"
                          data-testid={`time-slot-${index}`}
                        >
                          <span className="text-sm text-charcoal">
                            {formatTimeSlot(slot)}
                          </span>
                          <Button
                            type="button"
                            onClick={() => removeTimeSlot(index)}
                            variant="outline"
                            size="sm"
                            disabled={isSubmitting}
                            className="text-red-600 border-red-200 hover:bg-red-50 text-xs px-2 py-1"
                            data-testid={`button-remove-time-slot-${index}`}
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {timeSlots.length === 0 && (
                  <p className="text-sm text-gray-500 italic">
                    Please add at least one available time slot to help us schedule your session.
                  </p>
                )}
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
                  disabled={isSubmitting}
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
                disabled={isSubmitting}
                className="w-full bg-primary text-white hover:bg-primary/90 py-3 text-lg font-semibold"
                data-testid="button-submit-booking"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting Request...
                  </>
                ) : (
                  'Submit Session Request'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
}