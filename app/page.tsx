import Collections from "@/components/Collections/Collections";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Journey from "@/components/Journey";
import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/Stars";

export default function Home() {
  return (
    <>
      <Navbar />
      <StarsCanvas/>
      <HeroSection />
      <div>
      <Collections />
      </div>
      <Journey/>
      <div className="relative z-0">
       <Content />
      <StarsCanvas/>
      </div>
      <Footer />
    </>
  )
}
