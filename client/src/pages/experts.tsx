import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Users, Search, X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import ChatWidget from "@/components/chat-widget";
import SEOHead from "@/components/seo-head";
import { specialists, categories, Specialist, getSpecialistsByCategory } from "@/data/specialists";
import SpecialistModal from "@/components/specialists/SpecialistModal";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

// Simple Specialist Card for Experts Page
function SimpleSpecialistCard({
  specialist,
  onViewProfile
}: {
  specialist: Specialist;
  onViewProfile: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20 cursor-pointer h-full flex flex-col"
      onClick={onViewProfile}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={specialist.image}
            alt={specialist.name}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face";
            }}
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-charcoal mb-1 truncate">{specialist.name}</h3>
            <p className="text-secondary font-medium text-sm line-clamp-2">{specialist.title}</p>
          </div>
        </div>

        <p className="text-sm text-charcoal/70 leading-relaxed line-clamp-4 flex-grow">
          {specialist.experience}
        </p>
      </div>
    </motion.div>
  );
}

export default function Experts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter specialists based on search term and category
  const filteredSpecialists = specialists.filter(specialist => {
    const matchesSearch = searchTerm === "" ||
      specialist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      specialist.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      specialist.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
      specialist.about.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = !selectedCategory || specialist.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  // Group specialists by category
  const specialistsByCategory = Object.keys(categories).map(categoryKey => {
    const categorySpecialists = filteredSpecialists.filter(s =>
      s.categories.includes(categoryKey)
    );

    return {
      key: categoryKey,
      name: categories[categoryKey as keyof typeof categories],
      specialists: categorySpecialists,
      count: categorySpecialists.length
    };
  }).filter(cat => cat.count > 0);

  const openSpecialistModal = (specialist: Specialist) => {
    setSelectedSpecialist(specialist);
    setIsModalOpen(true);
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
  };

  const categoryGradients: { [key: string]: string } = {
    'emotional-wellbeing': 'from-purple-500 to-pink-500',
    'special-complex-care': 'from-orange-500 to-red-500',
    'postpartum-care': 'from-blue-500 to-cyan-500',
    'education-academic': 'from-indigo-500 to-purple-500',
    'parenting-skills': 'from-green-500 to-emerald-500',
    'return-to-work': 'from-yellow-500 to-orange-500'
  };

  return (
    <>
      <SEOHead
        title="Our Experts - Nora Parenting"
        description="Meet our team of certified specialists including parent coaches, lactation consultants, return-to-work coaches, and more. Expert support for every parenting journey."
        keywords="parenting experts, specialists, coaches, consultants, Singapore"
      />

      <div className="min-h-screen bg-gradient-to-br from-accent/30 via-white to-secondary/20">
        <Navigation />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/">
                <Button
                  variant="ghost"
                  className="mb-6 group hover:bg-primary/10 transition-all duration-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  Back to Home
                </Button>
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-sm">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gradient-primary">
                  Our Experts
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mb-8">
                Meet our team of certified specialists providing expert support for every stage of your parenting journey.
              </p>

              {/* Search and Filter Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="flex flex-col gap-4">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/40 h-5 w-5" />
                    <Input
                      type="text"
                      placeholder="Search by name, specialty, or keyword..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-10 h-12 text-base border-charcoal/20 focus:border-primary"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-charcoal/40 hover:text-charcoal transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>

                  {/* Category Filter Pills */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === null
                          ? 'bg-gradient-primary text-white shadow-md'
                          : 'bg-white text-charcoal border border-charcoal/20 hover:border-primary hover:text-primary'
                      }`}
                    >
                      All Categories
                    </button>
                    {Object.entries(categories).map(([key, name]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          selectedCategory === key
                            ? 'bg-gradient-primary text-white shadow-md'
                            : 'bg-white text-charcoal border border-charcoal/20 hover:border-primary hover:text-primary'
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>

                  {/* Clear Filters */}
                  {(searchTerm || selectedCategory) && (
                    <div className="flex items-center justify-between pt-2 border-t border-charcoal/10">
                      <p className="text-sm text-charcoal/60">
                        Showing {filteredSpecialists.length} of {specialists.length} experts
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearAllFilters}
                        className="text-primary hover:text-primary/80"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Clear filters
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specialists by Category */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredSpecialists.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <Users className="h-16 w-16 mx-auto text-charcoal/20 mb-4" />
                <h3 className="text-xl font-semibold text-charcoal/60 mb-2">
                  No experts found
                </h3>
                <p className="text-charcoal/40 mb-6">
                  Try adjusting your search or filters
                </p>
                <Button onClick={clearAllFilters} variant="outline">
                  Clear all filters
                </Button>
              </motion.div>
            ) : (
              <div className="space-y-12">
                {specialistsByCategory.map((category, categoryIndex) => (
                  <motion.div
                    key={category.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  >
                    {/* Category Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`h-1 w-12 bg-gradient-to-r ${categoryGradients[category.key]} rounded-full`} />
                        <h2 className="text-2xl sm:text-3xl font-bold text-charcoal">
                          {category.name}
                        </h2>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {category.count} {category.count === 1 ? 'Expert' : 'Experts'}
                        </span>
                      </div>
                    </div>

                    {/* Specialists Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.specialists.map((specialist, index) => (
                        <motion.div
                          key={specialist.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <SimpleSpecialistCard
                            specialist={specialist}
                            onViewProfile={() => openSpecialistModal(specialist)}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Specialist Modal */}
        <SpecialistModal
          specialist={selectedSpecialist}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedSpecialist(null);
          }}
        />

        {/* Chat Widget */}
        <ChatWidget />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
