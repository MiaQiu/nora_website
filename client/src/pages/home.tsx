import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesGrid from "@/components/services-grid";
import TherapistCarousel from "@/components/therapist-carousel";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesGrid />
        <TherapistCarousel />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
