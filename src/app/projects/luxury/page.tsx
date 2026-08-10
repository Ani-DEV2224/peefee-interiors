import Navbar from "@/components/layout/Navbar";
import ProjectCategoryPage from "@/components/projects/ProjectCategoryPage";

const galleryImages = [
  "/images/Luxury_projects-1.jpg",
  "/images/Luxury_projects-2.jpg",
  "/images/Luxury_projects-3.jpg",
  "/images/Luxury_projects-4.jpg",
  "/images/Luxury_projects-5.jpg",
  "/images/Luxury_projects-6.jpg",
  "/images/Luxury_projects-7.jpeg",
  "/images/Luxury_projects-8.jpeg",
  "/images/Luxury_projects-9.jpeg",
  "/images/Luxury_projects-10.jpeg",
  "/images/Luxury_projects-11.jpeg",
  "/images/Luxury_projects-12.jpeg",
  "/images/Luxury_projects-13.jpeg",
  "/images/Luxury_projects-14.jpeg",
  "/images/Luxury_projects-15.jpeg",
  "/images/Luxury_projects-16.jpeg",
  "/images/Luxury_projects-17.jpeg",
  "/images/Luxury_projects-18.jpeg",
  "/images/Luxury_projects-19.jpeg",
];

export default function LuxuryProjectsPage() {
  return (
    <>
      <Navbar />

      <ProjectCategoryPage
        eyebrow="Luxury Projects"
        title="Exceptional Spaces. Uncompromising Detail."
        description="Refined interiors created for those who value exceptional craftsmanship, distinctive materials and spaces designed beyond the ordinary."
        heroImage="/images/Luxury_hero_section.jpg"
        introEyebrow="Luxury Interior Design"
        introTitle="Where Elegance Meets Individuality."
        introDescription="Luxury is more than appearance — it is the experience of a space crafted with intention. At PeeFee Interiors, we combine sophisticated materials, bespoke detailing and thoughtful spatial design to create interiors that feel distinctive, timeless and deeply personal."
        galleryEyebrow="Selected Work"
        galleryTitle="Our Luxury Projects"
        galleryDescription="Explore a curated collection of refined interiors where distinctive materials, considered details and sophisticated design come together to create exceptional spaces."
        galleryImages={galleryImages}
        galleryAltPrefix="Luxury project"
      />
    </>
  );
}