"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function WhyChooseBackground() {
  const { scrollY } = useScroll();

  // Slow cinematic zoom
  const scale = useTransform(
    scrollY,
    [1800, 4200],
    [1, 1.08]
  );

  return (
    <motion.div
      style={{ scale }}
      className="absolute inset-0"
    >
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0

          bg-center
          bg-cover
          bg-no-repeat
          will-change-transform
        "
        style={{
          backgroundImage:
            "url('/images/Why_choose_us_section_full_image.jpg')",
        }}
      />

      {/* Extra vignette */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,.28)_100%)]
        "
      />
    </motion.div>
  );
}