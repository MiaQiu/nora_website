import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FamilyChallengesSection from "@/components/family-challenges-section";
import ServicesGrid from "@/components/services-grid";
import TherapistCarousel from "@/components/specialists/TherapistCarousel";
import Footer from "@/components/footer";
// import ChatWidget from "@/components/chat-widget";
import SEOHead from "@/components/seo-head";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Nora - Expert Parenting Support & Child Development Guidance"
        description="Connect with expert parenting specialists for personalized 1:1 guidance across every stage of child development. From pregnancy to teen years - evidence-based support when you need it most."
        keywords="parenting support, child development, parenting experts, postpartum care, parenting skills, family guidance, child psychology, parenting advice, pregnancy support, newborn care, toddler development, teen guidance"
        canonical="https://askfellow.com"
      />
      <div className="min-h-screen bg-warm">
        <Navigation />
        <main role="main">
          <HeroSection />
          <FamilyChallengesSection />
          {/* <ServicesGrid />
          <TherapistCarousel /> */}
        </main>
        <Footer />
        {/* <ChatWidget /> */}
      </div>
    </>
  );
}
