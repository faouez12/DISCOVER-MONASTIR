import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MysteryClub from "@/components/MysteryClub";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <div className="pt-24 lg:pt-32">
                <MysteryClub />
            </div>
            <Footer />
        </main>
    );
}
