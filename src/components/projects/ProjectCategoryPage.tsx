import ProjectHero from "./ProjectHero";
import ProjectIntro from "./ProjectIntro";
import ProjectGallery from "./ProjectGallery";
import ProjectsCTA from "./ProjectsCTA";

import ConnectSection from "@/components/home/Connect/ConnectSection";
import Footer from "@/components/layout/Footer";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;

  introEyebrow: string;
  introTitle: string;
  introDescription: string;

  galleryEyebrow: string;
  galleryTitle: string;
  galleryDescription: string;
  galleryImages: string[];

  galleryAltPrefix?: string;
};

export default function ProjectCategoryPage({
  eyebrow,
  title,
  description,
  heroImage,

  introEyebrow,
  introTitle,
  introDescription,

  galleryEyebrow,
  galleryTitle,
  galleryDescription,
  galleryImages,

  galleryAltPrefix = "PeeFee Interiors project",
}: Props) {
  return (
    <>
      <main className="overflow-x-hidden bg-[#F7F4EE]">
        {/* =====================================
            PROJECT HERO
        ===================================== */}

        <ProjectHero
          eyebrow={eyebrow}
          title={title}
          description={description}
          image={heroImage}
        />

        {/* =====================================
            PROJECT INTRODUCTION
        ===================================== */}

        <ProjectIntro
          eyebrow={introEyebrow}
          title={introTitle}
          description={introDescription}
        />

        {/* =====================================
            PROJECT GALLERY
        ===================================== */}

        <ProjectGallery
          eyebrow={galleryEyebrow}
          title={galleryTitle}
          description={galleryDescription}
          images={galleryImages}
          altPrefix={galleryAltPrefix}
        />

        {/* =====================================
            PROJECT CTA
        ===================================== */}

        <ProjectsCTA />

        {/* =====================================
            CONNECT SECTION
        ===================================== */}

        <ConnectSection />
      </main>

      {/* =====================================
          FOOTER
      ===================================== */}

      <Footer />
    </>
  );
}