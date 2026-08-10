"use client";

import Container from "@/components/layout/Container";
import ServicesSlider from "./ServicesSlider";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F7F4EE] py-36"
    >
      <Container>
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <p className="uppercase tracking-[0.45em] text-[#C6A46A]">
            OUR SERVICES
          </p>

          <h2
            className="
              mt-6
              font-[family-name:var(--font-heading)]
              text-5xl
              leading-[1.05]
              text-[#111111]
              md:text-6xl
              lg:text-7xl
            "
          >
            Crafting Exceptional
            <br />
            Spaces, Inside & Out.
          </h2>

          <div className="mx-auto mt-10 h-[2px] w-40 bg-[#C6A46A]" />

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-neutral-600">
            From timeless interiors to inspiring architecture,
            we create spaces that combine beauty, comfort,
            craftsmanship and functionality.
          </p>
        </div>

        <ServicesSlider />
      </Container>
    </section>
  );
}