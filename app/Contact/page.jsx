import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <section className="contact-section">

      <Navbar />

      <ContactForm />
      <ContactInfo />

      <Footer />


    </section>
  );
};

export default Contact;
