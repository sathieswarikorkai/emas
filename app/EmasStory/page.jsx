import Navbar from "@/components/Navbar";
import EmasStory from "@/components/Emas Story/EmasStory";
import HowWeStarted from "../../components/EMAS Story/HowWeStarted";
import ProductIdea from "../../components/EMAS Story/ProductIdea";
import SmallSteps from "@/components/EMAS Story/SmallSteps";
import Footer from "@/components/Footer";


export default function Training() {
  return (
    <>
      <Navbar />
      <EmasStory />
      <HowWeStarted />
      <ProductIdea />
      <SmallSteps />
      <Footer />
    </>
  );
}