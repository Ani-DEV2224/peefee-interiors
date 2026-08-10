"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhyChooseFeature from "./WhyChooseFeature";

const slides = [
  {
    number: "01",
    title: "Tailored Designs",
    description:
      "Every project begins with your vision. We design interiors uniquely tailored to your lifestyle, personality and functional needs, ensuring no two spaces are ever alike.",
  },

  {
    number: "02",
    title: "Premium Craftsmanship",
    description:
      "From carefully selected materials to exceptional finishing touches, every detail reflects our commitment to uncompromising quality and timeless elegance.",
  },

  {
    number: "03",
    title: "Timely Delivery",
    description:
      "We combine creativity with professional project management, ensuring every project is completed efficiently without sacrificing quality or attention to detail.",
  },

  {
    number: "04",
    title: "Designed To Last",
    description:
      "Our interiors are created to remain beautiful for years to come, blending functionality, durability and sophisticated design into every environment.",
  },
];

export default function WhyChooseTimeline() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = document.getElementById("why-choose");

    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();

      const total =
        section.offsetHeight - window.innerHeight;

      const progress = Math.min(
        Math.max(-rect.top / total, 0),
        1
      );

      const index = Math.min(
        slides.length - 1,
        Math.floor(progress * slides.length)
      );

      setActive(index);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

  return (
    <div className="absolute inset-0 z-[100]">

      <div
        className="
          flex
          h-full
          items-center

          px-8

          md:px-16

          lg:px-24

          xl:px-36
        "
      >

        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="
              uppercase

              tracking-[0.45em]

              text-[#C6A46A]
            "
          >
            THE PEEFEE DIFFERENCE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            className="
              mt-6

              font-[family-name:var(--font-heading)]

              text-[clamp(3rem,7vw,7rem)]

              leading-[0.95]

              text-[#F7F4EE]
            "
          >
            Designed
            <br />
            To Be
            <br />
            Remembered.
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 150 }}
            transition={{ delay: .35 }}
            className="
              mt-10

              h-[2px]

              bg-[#C6A46A]
            "
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="
              mt-10

              max-w-2xl

              text-lg

              leading-9

              text-[#F7F4EE]/80
            "
          >
            Every project we undertake is guided by timeless
            design, exceptional craftsmanship and a commitment
            to creating spaces that inspire. We don't simply
            decorate interiors—we design experiences people
            never forget.
          </motion.p>

          <div className="mt-20">

            <AnimatePresence mode="wait">

              <WhyChooseFeature
                key={active}
                number={slides[active].number}
                title={slides[active].title}
                description={slides[active].description}
              />

            </AnimatePresence>

          </div>

        </div>

      </div>

    </div>
  );
}