import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Attractions from "@/components/Attractions";
import Wonders from "@/components/Wonders";
import Crafts from "@/components/Crafts";
import TravelInfo from "@/components/TravelInfo";
import MysteryClub from "@/components/MysteryClub";
import Footer from "@/components/Footer";
import HashScrollHandler from "@/components/HashScrollHandler";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HashScrollHandler />
      <Navbar />
      <Hero />
      <Destinations />
      <Attractions />
      <Wonders />
      <Crafts />
      <TravelInfo />
      <MysteryClub />
      <Footer />
    </main>
  );
}
