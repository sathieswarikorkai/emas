import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import  Products from "@/components/Home/Products";
import  WhyEmas from "@/components/Home/WhyEmas";
import  GrowthPlans from "@/components/Home/GrowthPlans";
import  Opportunities from "@/components/Home/Opportunities";
import  WomenLeadership from "@/components/Home/WomenLeadership";
import  ChooseJourney from "@/components/Home/ChooseJourney";
import  AboutProduct from "@/components/Home/AboutProduct";
import  Transparency from "@/components/Home/Transparency";
import  Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
        <Navbar />
      <Hero />
      <Products />
      <WhyEmas />
      <GrowthPlans />
      <Opportunities />
      <WomenLeadership />
      <ChooseJourney />
      <AboutProduct />
      <Transparency />

      <Footer />

    </main>
  );
}