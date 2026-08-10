import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ConnectSection from "@/components/home/Connect/ConnectSection";

import ServicesHero from "@/components/services/hero/ServicesHero";

import UpholsterySection from "@/components/services/upholstery/UpholsterySection";

import InteriorSection from "@/components/services/interior/InteriorSection";

import TvConsoleSection from "@/components/services/tv-console/TvConsoleSection";

import ExteriorSection from "@/components/services/exterior/ExteriorSection";

import ArchitectureSection from "@/components/services/architecture/ArchitectureSection";

import ElectricalSection from "@/components/services/electrical/ElectricalSection";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">

        <ServicesHero />

        <UpholsterySection />

        <InteriorSection />

        <TvConsoleSection />

        <ExteriorSection />

        <ArchitectureSection />

        <ElectricalSection />

        <ConnectSection />

      </main>

      <Footer />
    </>
  );
}