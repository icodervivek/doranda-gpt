import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-[#201f1f] text-white">
      {/* Navbar fixed */}
      <Navbar />

      {/* Push content below navbar height (64px) */}
      <main className="pt-16">
        <HeroSection />
        <Footer />
      </main>
    </div>
  );
}
