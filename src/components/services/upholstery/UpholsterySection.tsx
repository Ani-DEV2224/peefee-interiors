"use client";

import Container from "@/components/layout/Container";

import UpholsteryHeading from "./UpholsteryHeading";
import UpholsteryGrid from "./UpholsteryGrid";

export default function UpholsterySection() {
  return (
    <section className="bg-[#F7F4EE] py-36">

      <Container>

        <UpholsteryHeading />

        <UpholsteryGrid />

      </Container>

    </section>
  );
}