import Navbar from "@/components/Navbar";
import OpportunitiesHero from "@/components/Opportunities/OpportunitiesHero";
import WhyEmas from "@/components/Opportunities/WhyEmas";
import NetworkSection from "../../components/Opportunities/NetworkSection";
import NetworkBenefits from "../../components/Opportunities/NetworkBenefits";
import WhoCanJoin from "../../components/Opportunities/WhoCanJoin";
import IncomeGrowth from "../../components/Opportunities/IncomeGrowth";
import Footer from "@/components/Footer";


export default function Opportunities() {
  return (
    <>
      <Navbar />
      <OpportunitiesHero />
      <WhyEmas />
      <NetworkSection />
      <NetworkBenefits />
      <WhoCanJoin />
      <IncomeGrowth />
      <Footer />
    </>
  );
}