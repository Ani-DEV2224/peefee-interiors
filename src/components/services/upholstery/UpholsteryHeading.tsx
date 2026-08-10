"use client";

import { motion } from "framer-motion";

export default function UpholsteryHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mx-auto mb-24 max-w-4xl text-center"
    >
      <p className="uppercase tracking-[0.45em] text-[#C6A46A]">
        UPHOLSTERY
      </p>

      <h2 className="mt-6 font-[family-name:var(--font-heading)] text-5xl leading-tight text-[#111111] md:text-6xl">
        Luxury Upholstery
      </h2>

      <div className="mx-auto mt-8 h-[2px] w-36 bg-[#C6A46A]" />

      <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-neutral-600">
        Every piece is handcrafted with precision, premium materials and
        exceptional attention to detail. We restore, redesign and create
        luxurious upholstered furniture that blends comfort with timeless
        elegance, ensuring every project becomes a statement of quality and
        craftsmanship.
      </p>
    </motion.div>
  );
}