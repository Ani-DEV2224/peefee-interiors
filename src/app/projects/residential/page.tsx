import Navbar from "@/components/layout/Navbar";
import ProjectCategoryPage from "@/components/projects/ProjectCategoryPage";

const galleryImages = Array.from(
  { length: 21 },
  (_, index) =>
    `/images/commercial_project-${index + 1}.jpg`
);

export default function ResidentialProjectsPage() {
  return (
    <>
      <Navbar />

      <ProjectCategoryPage
        eyebrow="Residential Projects"
        title="Homes Designed Around The Way You Live."
        description="Thoughtfully created residential spaces where comfort, functionality and refined design come together."
        heroImage="/images/Commercial_hero_section_image.jpg"
        introEyebrow="Residential Design"
        introTitle="Spaces With Character."
        introDescription="Every home should feel personal. At PeeFee Interiors, we create residential spaces that reflect the people who live in them — balancing beautiful details with comfort, purpose and everyday functionality."
        galleryEyebrow="Selected Work"
        galleryTitle="Our Residential Projects"
        galleryDescription="Explore a selection of residential spaces shaped through thoughtful planning, refined materials and carefully considered details."
        galleryImages={galleryImages}
      />
    </>
  );
}