import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import ProjectsSection from "@/components/home/ProjectsSection";

import WhyChooseSection from "@/components/home/WhyChooseUs/WhyChooseSection";
import ServicesSection from "@/components/home/Services/ServicesSection";
import ConnectSection from "@/components/home/Connect/ConnectSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <AboutSection />

        <PhilosophySection />

        <ProjectsSection />

        <WhyChooseSection />

        <ServicesSection />

        <ConnectSection />
      </main>

      <Footer />
    </>
  );
}