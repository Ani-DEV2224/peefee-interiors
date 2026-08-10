"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#F8F6F2] py-32 lg:py-44">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >
          <SectionHeading
            center
            tag="ABOUT PEEFEE INTERIORS"
            title="Your space should tell your story."
          />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mx-auto mt-8 flex items-center justify-center gap-5"
          >
            <div className="h-px w-24 bg-[#C6A46A]" />
            <div className="h-2 w-2 rounded-full bg-[#C6A46A]" />
            <div className="h-px w-24 bg-[#C6A46A]" />
          </motion.div>
        </motion.div>

        {/* Two-column layout */}
        <div className="mt-28 grid items-center gap-20 lg:grid-cols-2">
          {/* Left column */}
          <motion.div
            initial={{ opacity:0, x:-40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8, delay:.2 }}
            className="mx-auto max-w-xl text-center"
          >
            <p className="text-lg leading-10 text-neutral-600">
              At PeeFee Interiors, we believe your space should tell your story
              — with elegance, functionality, and purpose...
            </p>

            <p className="mt-8 text-lg leading-10 text-neutral-600">
              Whether it's a home, office, showroom, or hospitality space...
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity:0, x:40, rotate:-16 }}
            whileInView={{ opacity:1, x:0, rotate:-8 }}
            viewport={{ once:true }}
            transition={{ duration:1 }}
            className="flex justify-center"
          >
            <div className="rounded-[30px] border border-[#C6A46A]/40 bg-white p-3 shadow-2xl rotate-[-8deg]">
              <video
                src="/videos/PeeFee_Interior_record_original-1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full max-w-[500px] rounded-[24px]"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ delay:.5 }}
          className="mt-24 flex justify-center"
        >
          <Button
            href="/about"
            variant="secondary"
            className="px-14 py-4 text-base rounded-full"
          >
            Discover Our Story
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}