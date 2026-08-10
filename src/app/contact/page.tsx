import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import WhatsAppCTA from "@/components/contact/WhatsAppCTA";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-[#F7F4EE]">
        <ContactHero />

        <ContactSection />

        <WhatsAppCTA />
      </main>

      <Footer />
    </>
  );
}