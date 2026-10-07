import Navbar from "@/components/Navbar";
import AboutHero from "@/components/About/AboutHero";
import AboutStory from "@/components/About/AboutStory";
import VisionMission from "../../components/About/VisionMission";
import CoreValues from "@/components/About/CoreValues";
import LeaderBoard from "../../components/About/LeaderBoard";
import CertificatesRecognition from "@/components/about/CertificatesRecognition";
import Footer from "@/components/Footer";



export default function About() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />
        <AboutStory />
        <VisionMission />
        <CoreValues />
        <LeaderBoard />
        <CertificatesRecognition />

      </main>
        <Footer />

    </>
  );
}