import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import ChatWidget from "@/components/chat-widget";
import SEOHead from "@/components/seo-head";
import { useSpecialists } from "@/hooks/useSpecialists";
import SpecialistCard from "@/components/specialists/SpecialistCard";
import { categories } from "@/data/specialists";

interface CategoryOverviewProps {
  categoryKey: string;
  title: string;
  description: string;
  gradientColor: string;
}

export default function CategoryOverview({ 
  categoryKey, 
  title, 
  description, 
  gradientColor 
}: CategoryOverviewProps) {
  const specialists = useSpecialists(categoryKey);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEOHead 
        title={`${title} Specialists - Parent Compass`}
        description={`Find specialized ${title.toLowerCase()} support in Singapore. ${description}`}
        keywords={`${title.toLowerCase()}, parenting, singapore, specialists, support`}
      />

      {/* Header Section */}
      <div className={`bg-gradient-to-r ${gradientColor} text-white py-8 sm:py-12`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/10 hover:text-white p-2"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
          </div>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl">
            {description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Stats */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Users className="h-5 w-5" />
            <span className="font-medium">
              {specialists.length} specialist{specialists.length !== 1 ? 's' : ''} available
            </span>
          </div>
        </div>

        {/* Specialists Grid */}
        {specialists.length > 0 ? (
          <div className="space-y-6 sm:space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              {specialists.map((specialist, index) => (
                <SpecialistCard 
                  key={specialist.id} 
                  specialist={specialist} 
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No specialists found
              </h3>
              <p className="text-gray-600">
                We're working on adding more specialists in this category.
              </p>
            </motion.div>
          </div>
        )}

        {/* Back to Categories */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link href="/">
            <Button variant="outline" size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Categories
            </Button>
          </Link>
        </div>
      </div>

      <ChatWidget />
    </div>
  );
}