import Navbar from "@/components/Navbar";
import EventsHero from "@/components/Event/EventsHero";
import UpcomingEvents from "@/components/Event/UpcomingEvents";
import PastHighlights from "@/components/Event/PastHighlights";
import Achievements from "@/components/Event/Achievements";
import Announcements from "@/components/Event/Announcements";
import EventRegistration from "@/components/Event/EventRegistration";
import Footer from "@/components/Footer";

export default function Events() {
  return (
    <>
      <Navbar />
      <EventsHero />
       <UpcomingEvents />
        <PastHighlights />
        <Achievements />
        <Announcements />
        <EventRegistration />
      <Footer />
    </>
  );
}