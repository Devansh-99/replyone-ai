import Footer from "@/components/footer";
import { LandingBackground } from "@/components/landing/background";
import { PageLoadOverlay } from "@/components/landing/page-load";
import LandingPage from "@/components/landing-page";

export default function Home() {
  return (
    <div className="landing relative min-h-screen overflow-x-hidden">
      <LandingBackground />
      <PageLoadOverlay />
      <main className="relative z-10 flex-grow">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}
