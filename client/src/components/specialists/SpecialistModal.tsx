import { X, Video, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Specialist } from "@/data/specialists";

interface SpecialistModalProps {
  specialist: Specialist | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SpecialistModal({ specialist, isOpen, onClose }: SpecialistModalProps) {
  const [, setLocation] = useLocation();

  if (!isOpen || !specialist) return null;

  const handleBookAppointment = () => {
    // Navigate to booking page with specialist name as URL parameter
    setLocation(`/book-session?specialist=${encodeURIComponent(specialist.name)}`);
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
            data-testid="button-close-modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <img
              src={specialist.image}
              alt={`${specialist.name} - Professional therapist headshot`}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              data-testid="img-modal-specialist"
            />
            <h2 className="text-2xl font-bold text-primary mb-1" data-testid="text-modal-name">
              {specialist.name}
            </h2>
            <p className="text-secondary font-semibold mb-2" data-testid="text-modal-title">
              {specialist.title}
            </p>
            <p className="text-gray-600" data-testid="text-modal-experience">
              {specialist.experience}
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <Button
              onClick={handleBookAppointment}
              className="bg-secondary text-white hover:bg-secondary/90"
              data-testid="button-book-session-specialist"
            >
              <Video className="w-4 h-4 mr-2" />
              Book appointment
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* About This Provider Type */}
          <div>
            <h3 className="text-lg font-bold text-charcoal mb-3" data-testid="text-about-title">
              ABOUT THIS PROVIDER TYPE
            </h3>
            <p className="text-charcoal leading-relaxed" data-testid="text-about-description">
              {specialist.about}
            </p>
          </div>

          {/* Experience */}
          {specialist.workExperience && specialist.workExperience.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-charcoal mb-3" data-testid="text-experience-title">
                EXPERIENCE
              </h3>
              <div className="space-y-2">
                {specialist.workExperience.map((exp, index) => (
                  <p key={index} className="text-charcoal" data-testid={`text-experience-${index}`}>
                    {exp}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {specialist.education && specialist.education.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-charcoal mb-3" data-testid="text-education-title">
                EDUCATION
              </h3>
              <div className="space-y-2">
                {specialist.education.map((edu, index) => (
                  <p key={index} className="text-charcoal" data-testid={`text-education-${index}`}>
                    {edu}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          <div>
            <h3 className="text-lg font-bold text-charcoal mb-3" data-testid="text-languages-title">
              LANGUAGES
            </h3>
            <div className="space-y-2">
              {specialist.languages.map((lang, index) => (
                <p key={index} className="text-charcoal" data-testid={`text-language-${index}`}>
                  {lang}
                </p>
              ))}
            </div>
          </div>

          {/* Sub-Specialties */}
          <div>
            <h3 className="text-lg font-bold text-charcoal mb-3" data-testid="text-specialties-title">
              SUB-SPECIALTIES
            </h3>
            <p className="text-charcoal leading-relaxed" data-testid="text-specialties-list">
              {specialist.specialties.join(', ')}
            </p>
          </div>

          {/* Cancellation Policy */}
          <div>
            <h3 className="text-lg font-bold text-charcoal mb-3" data-testid="text-policy-title">
              CANCELLATION POLICY
            </h3>
            <p className="text-charcoal" data-testid="text-policy-description">
              {specialist.cancellationPolicy}
            </p>
          </div>

          {/* Back to Specialists Button */}
          <div className="pt-4 border-t border-gray-200">
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full"
              data-testid="button-back-to-specialists"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Specialists
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}