"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] py-32 lg:py-40">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 font-[family-name:var(--font-heading)] text-[15rem] font-semibold leading-none text-[#ECE6DB] opacity-40 select-none">
        PF
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-5xl">

          {/* Section Label */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="text-center uppercase tracking-[0.45em] text-[#C6A46A]"
          >
            ABOUT PEEFEE INTERIORS
          </motion.p>

          {/* Heading */}

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-4xl text-center font-[family-name:var(--font-heading)] text-5xl leading-[1.1] text-[#111111] md:text-6xl lg:text-7xl"
          >
            A Legacy Of
            <br />
            Design Excellence
          </motion.h2>

          {/* Gold Line */}

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            transition={{ delay: .4, duration: .8 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 h-[2px] bg-[#C6A46A]"
          />

          {/* Story */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .4 }}
            viewport={{ once: true }}
            className="mx-auto mt-20 max-w-4xl space-y-10 text-center"
          >

            <p className="text-lg leading-10 text-neutral-700">
              At PeeFee Interiors, we believe that every space should tell a
              story. Every room, every detail and every carefully selected
              material should reflect the personality, aspirations and lifestyle
              of the people who experience it. Our mission is to transform
              ordinary environments into timeless spaces that inspire comfort,
              elegance and functionality.
            </p>

            <p className="text-lg leading-10 text-neutral-700">
              Since our inception, we have remained committed to combining
              creativity with technical expertise. Whether designing luxurious
              residential interiors, sophisticated commercial spaces,
              architectural concepts, exterior transformations, bespoke TV
              consoles, electrical installations or custom upholstery, every
              project is approached with passion, precision and exceptional
              craftsmanship.
            </p>

            <p className="text-lg leading-10 text-neutral-700">
              We understand that outstanding design goes beyond beautiful
              aesthetics. It is about creating environments that improve the way
              people live, work and connect. Every layout is intentionally
              planned, every finish carefully executed and every detail refined
              until it meets the highest standards of quality.
            </p>

            <p className="text-lg leading-10 text-neutral-700">
              Collaboration lies at the heart of everything we do. We work
              closely with every client, listening carefully to their ideas,
              understanding their vision and transforming those dreams into
              spaces that exceed expectations. Every completed project becomes a
              unique reflection of its owner while maintaining the timeless
              elegance that defines PeeFee Interiors.
            </p>

            <p className="text-lg leading-10 text-neutral-700">
              As we continue to grow, our commitment remains unchanged: to
              deliver exceptional interior and architectural solutions that
              stand the test of time, inspire everyday living and leave lasting
              impressions. We don't simply design spaces—we create experiences
              that people are proud to call their own.
            </p>

          </motion.div>

          {/* Quote */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .5, duration: .8 }}
            viewport={{ once: true }}
            className="mx-auto mt-28 max-w-4xl"
          >

            <div className="mx-auto mb-10 h-px w-40 bg-[#C6A46A]" />

            <blockquote className="text-center font-[family-name:var(--font-heading)] text-4xl italic leading-[1.6] text-[#111111] md:text-5xl">
              "We don't just create beautiful spaces.
              <br />
              We create places people love coming home to."
            </blockquote>

            <p className="mt-10 text-center uppercase tracking-[0.35em] text-[#C6A46A]">
              — PeeFee Interiors
            </p>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}