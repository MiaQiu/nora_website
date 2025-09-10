import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, MapPin, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Specialist } from "@/data/specialists";

interface SpecialistCardProps {
  specialist: Specialist;
  index?: number;
  showBookButton?: boolean;
  compact?: boolean;
  onOpenModal?: (specialist: Specialist) => void;
}

export default function SpecialistCard({ 
  specialist, 
  index = 0, 
  showBookButton = true,
  compact = false,
  onOpenModal
}: SpecialistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20"
    >
      <div className={`${compact ? 'p-3 sm:p-4' : 'p-4 sm:p-6'}`}>
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
          <img
            src={specialist.image}
            alt={specialist.name}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mx-auto sm:mx-0"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face";
            }}
          />
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-charcoal mb-1">{specialist.name}</h3>
            <p className="text-secondary font-medium text-xs sm:text-sm mb-2">{specialist.title}</p>
          </div>
        </div>
        
        {!compact && (
          <>
            <p className="text-xs sm:text-sm text-charcoal leading-relaxed mb-4 text-center sm:text-left">
              {specialist.experience}
            </p>
            
            <div className="mb-4">
              <h4 className="text-xs sm:text-sm font-semibold text-charcoal mb-3 text-center sm:text-left">Specialties:</h4>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {specialist.specialties.map((specialty: string, idx: number) => (
                  <span key={idx} className="bg-gradient-to-r from-primary/15 to-secondary/15 text-charcoal text-xs font-medium px-3 py-1.5 rounded-full border border-primary/20 hover:border-primary/40 transition-colors">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-4 text-xs text-gray-600 justify-center sm:justify-start">
              <MapPin className="w-3 h-3" />
              <span>Languages: {specialist.languages.slice(0, 2).join(', ')}</span>
              {specialist.languages.length > 2 && (
                <span>+{specialist.languages.length - 2} more</span>
              )}
            </div>
          </>
        )}
        
        {showBookButton && (
          <div className="flex flex-col sm:flex-row gap-2">
            {onOpenModal ? (
              <Button 
                onClick={() => onOpenModal(specialist)}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium text-xs sm:text-sm"
              >
                <Info className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                More Information
              </Button>
            ) : (
              <Link href={`/book-session?specialist=${encodeURIComponent(specialist.name)}`} className="flex-1">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium text-xs sm:text-sm">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Book Session
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}