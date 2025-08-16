import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesGrid from "@/components/services-grid";
import TimelineJourney from "@/components/timeline-journey";
import HowItWorks from "@/components/how-it-works";
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
        <TimelineJourney />
        <HowItWorks />
        <TherapistCarousel />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
