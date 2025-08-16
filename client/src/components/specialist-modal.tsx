import { X, MessageCircle, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Specialist {
  name: string;
  title: string;
  experience: string;
  image: string;
  about: string;
  workExperience: string[];
  education: string[];
  languages: string[];
  specialties: string[];
  cancellationPolicy: string;
}

interface SpecialistModalProps {
  specialist: Specialist | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SpecialistModal({ specialist, isOpen, onClose }: SpecialistModalProps) {
  if (!isOpen || !specialist) return null;

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

          {/* Education */}
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
        </div>

        {/* Action Buttons */}
        <div className="p-6 border-t border-gray-200 flex space-x-3">
          <Button
            variant="outline"
            className="flex-1 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
            data-testid="button-message-specialist"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Message
          </Button>
          <Button
            className="flex-1 bg-secondary text-white hover:bg-secondary/90"
            data-testid="button-book-appointment"
          >
            <Video className="w-4 h-4 mr-2" />
            Book video appointment
          </Button>
        </div>
      </div>
    </div>
  );
}