import Navbar from "@/components/Navbar";
import TrainingSection from "@/components/Training/TrainingSection";
import QuickAccess from "../../components/Training/QuickAccess";
import FeaturedLearning from "../../components/Training/FeaturedLearning";
import KeepLearning from "../../components/Training/KeepLearning";

import Footer from "@/components/Footer";






export default function Training() {
  return (
    <>
      <Navbar />
      <TrainingSection />
      <QuickAccess />
      <FeaturedLearning />
      <KeepLearning />
      <Footer />
    </>
  );
}