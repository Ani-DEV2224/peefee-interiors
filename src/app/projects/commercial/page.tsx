import Navbar from "@/components/layout/Navbar";
import ProjectCategoryPage from "@/components/projects/ProjectCategoryPage";

const galleryImages = [
  "/images/Residential_projects-1.0.jpg",
  "/images/Residential_projects-2.jpg",
  "/images/Residential_projects-3.webp",
  "/images/Residential_projects-4.jpg",
  "/images/Residential_projects-5.jpg",
  "/images/Residential_projects-6.avif",
  "/images/Residential_projects-7.jpg",
  "/images/Residential_projects-8.jpeg",
  "/images/Residential_projects-9.jpg",
  "/images/Residential_projects-10.png",
  "/images/Residential_projects-11.jpg",
  "/images/Residential_projects-12.jpg",
  "/images/Residential_projects-13.jpeg",
  "/images/Residential_projects-14.jpg",
];

export default function CommercialProjectsPage() {
  return (
    <>
      <Navbar />

      <ProjectCategoryPage
        eyebrow="Commercial Projects"
        title="Spaces That Work As Beautifully As They Look."
        description="Purposeful commercial interiors designed to strengthen brands, improve experiences and create spaces people remember."
        heroImage="/images/Residential_hero_section.jpg"
        introEyebrow="Commercial Design"
        introTitle="Designed For Business. Built For Experience."
        introDescription="At PeeFee Interiors, we create commercial environments that combine functionality, visual identity and thoughtful spatial planning. From offices and showrooms to hospitality and retail spaces, every project is designed to support the business while creating an exceptional experience for the people who use it."
        galleryEyebrow="Selected Work"
        galleryTitle="Our Commercial Projects"
        galleryDescription="Explore commercial spaces shaped through intelligent planning, refined materials and a strong understanding of how design influences both business and experience."
        galleryImages={galleryImages}
        galleryAltPrefix="Commercial project"
      />
    </>
  );
}