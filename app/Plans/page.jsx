import Navbar from "@/components/Navbar";
import PlanHero from "@/components/Plans/PlanHero";
import BusinessPlanSection from "../../components/Plans/BusinessPlanSection";
import BusinessGrowthFlow from "../../components/Plans/BusinessGrowthFlow";
import PlanBenefits from "../../components/Plans/PlanBenefits";
import Footer from "@/components/Footer";




export default function Plans() {
  return (
    <>
      <Navbar />
      <PlanHero />
      <BusinessPlanSection />
      <BusinessGrowthFlow />
      <PlanBenefits />
      <Footer />
    </>
  );
}