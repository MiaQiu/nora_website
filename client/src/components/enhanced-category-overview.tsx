import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Users, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import ChatWidget from "@/components/chat-widget";
import SEOHead from "@/components/seo-head";
import { useSpecialists, useSpecialistSearch } from "@/hooks/useSpecialists";
import SpecialistCard from "@/components/specialists/SpecialistCard";
import SpecialistModal from "@/components/specialists/SpecialistModal";
import { categories, Specialist } from "@/data/specialists";

interface SubCategory {
  id: string;
  name: string;
  color: string;
  count: number;
}

interface EnhancedCategoryOverviewProps {
  categoryKey: string;
  title: string;
  description: string;
  gradientColor: string;
  subCategories?: SubCategory[];
}

export default function EnhancedCategoryOverview({ 
  categoryKey, 
  title, 
  description, 
  gradientColor,
  subCategories = []
}: EnhancedCategoryOverviewProps) {
  const allSpecialists = useSpecialists(categoryKey);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Use search hook for filtering
  const searchResults = useSpecialistSearch(searchTerm, categoryKey);
  
  // Filter by selected tags
  const filteredSpecialists = selectedTags.length > 0
    ? searchResults.filter(specialist =>
        selectedTags.some(tag =>
          specialist.specialties.some(specialty =>
            specialty.toLowerCase().includes(tag.toLowerCase())
          ) ||
          specialist.title.toLowerCase().includes(tag.toLowerCase())
        )
      )
    : searchResults;

  // Generate sub-category tags from specialist data
  const generateTagsFromSpecialists = () => {
    const tagCounts = new Map<string, number>();
    
    allSpecialists.forEach(specialist => {
      // Extract tags only from specialties
      specialist.specialties.forEach(specialty => {
        tagCounts.set(specialty, (tagCounts.get(specialty) || 0) + 1);
      });
    });
    
    // Convert to sorted array of tags with counts
    return Array.from(tagCounts.entries())
      .filter(([_, count]) => count > 0)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 12) // Limit to top 12 tags
      .map(([tag, count]) => ({ tag, count }));
  };

  const availableTags = generateTagsFromSpecialists();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedTags([]);
  };

  const openSpecialistModal = (specialist: Specialist) => {
    setSelectedSpecialist(specialist);
    setIsModalOpen(true);
  };

  const closeSpecialistModal = () => {
    setIsModalOpen(false);
    setSelectedSpecialist(null);
  };

  return (
    <div className="min-h-screen bg-warm">
      <SEOHead 
        title={`${title} Specialists - Parent Compass`}
        description={`Find specialized ${title.toLowerCase()} support in Singapore. ${description}`}
        keywords={`${title.toLowerCase()}, parenting, singapore, specialists, support`}
      />

      {/* Simplified Header Section */}
      <div className="bg-white border-b border-gray-100 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Back Button and Breadcrumb */}
          <div className="flex items-center gap-3 mb-4">
            <Link href="/">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-primary hover:bg-primary/5 p-2"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary transition-colors">Services</Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{title}</span>
            </div>
          </div>
          
          {/* Title and Description */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-3">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-200/50 p-4 sm:p-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search specialists by name, specialty, or language..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white border-gray-200 text-charcoal placeholder:text-gray-400 focus:border-primary focus:ring-primary/20"
                  />
                </div>
                {(selectedTags.length > 0 || searchTerm) && (
                  <Button
                    onClick={clearAllFilters}
                    variant="outline"
                    size="sm"
                    className="text-gray-600 hover:text-charcoal border-gray-200 hover:border-primary"
                  >
                    <X className="h-3 w-3 mr-1" />
                    Clear all filters
                  </Button>
                )}
              </div>
              
              {/* Filter Tags - Hidden for now */}
              {false && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-charcoal">Filter by specialty:</h3>
                    {selectedTags.length > 0 && (
                      <span className="text-xs text-gray-500 bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {selectedTags.length} filter{selectedTags.length !== 1 ? 's' : ''} applied
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map(({ tag, count }) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                          selectedTags.includes(tag)
                            ? 'bg-primary text-white shadow-sm'
                            : 'bg-white text-gray-600 hover:text-primary hover:bg-primary/5 border border-gray-200 hover:border-primary/20'
                        }`}
                      >
                        {tag} ({count})
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Results Summary */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="h-5 w-5" />
              <span className="font-medium">
                {filteredSpecialists.length} specialist{filteredSpecialists.length !== 1 ? 's' : ''} 
                {searchTerm || selectedTags.length > 0 ? ' found' : ' available'}
              </span>
            </div>
            
            {/* Active Filters Display */}
            {(searchTerm || selectedTags.length > 0) && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Filters applied:</span>
                {searchTerm && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Search: "{searchTerm}"
                  </span>
                )}
                {selectedTags.map(tag => (
                  <span key={tag} className="bg-purple-100 text-purple-800 px-2 py-1 rounded flex items-center gap-1">
                    {tag}
                    <button onClick={() => toggleTag(tag)} className="hover:text-purple-900">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Specialists Grid */}
        {filteredSpecialists.length > 0 ? (
          <div className="space-y-6 sm:space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2"
            >
              {filteredSpecialists.map((specialist, index) => (
                <SpecialistCard 
                  key={specialist.id} 
                  specialist={specialist} 
                  index={index}
                  onOpenModal={openSpecialistModal}
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
                {searchTerm || selectedTags.length > 0 ? 'No specialists match your filters' : 'No specialists found'}
              </h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || selectedTags.length > 0 
                  ? 'Try adjusting your search terms or removing some filters.'
                  : "We're working on adding more specialists in this category."
                }
              </p>
              {(searchTerm || selectedTags.length > 0) && (
                <Button onClick={clearAllFilters} variant="outline">
                  Clear all filters
                </Button>
              )}
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

      {/* Specialist Modal */}
      <SpecialistModal
        specialist={selectedSpecialist}
        isOpen={isModalOpen}
        onClose={closeSpecialistModal}
      />

      <ChatWidget />
    </div>
  );
}