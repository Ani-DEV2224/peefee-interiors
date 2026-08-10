import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";

import ConnectSection from "@/components/home/Connect/ConnectSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />

        <AboutStory />

        <ConnectSection />
      </main>

      <Footer />
    </>
  );
}