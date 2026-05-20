import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarGallery from "@/components/CarGallery";
import EngineSection from "@/components/EngineSection";
import TechnicalSpecs from "@/components/TechnicalSpecs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <div className="speed-line w-full" />
      <CarGallery />
      <EngineSection />
      <TechnicalSpecs />
      
      <footer className="py-12 border-t border-white/10 bg-black text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4">
          <p>© 2024 F1 TECH EXPLORER. FOR EDUCATIONAL PURPOSES ONLY.</p>
        </div>
      </footer>
    </main>
  );
}
