import Navbar from "@/components/Navbar";
import Hero from "@/components/Womens/Hero";
import UpcomingEvents from "../../components/Womens/UpcomingEvents";
import LeadershipSection from "../../components/Womens/LeadershipSection";
import SuccessStories from "../../components/Womens/SuccessStories";
import EventsSection from "../../components/Womens/EventsSection";
import ConversationSection from "../../components/Womens/ConversationSection";
import Footer from "@/components/Footer";





export default function Training() {
  return (
    <>
      <Navbar />
     <Hero />
     <UpcomingEvents />
     <LeadershipSection />
     <SuccessStories />
     <EventsSection />
     <ConversationSection />
      <Footer />
    </>
  );
}