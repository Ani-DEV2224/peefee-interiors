"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function WhyChooseIndicator() {
  const { scrollYProgress } = useScroll();

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <div
      className="
        absolute
        bottom-12
        left-1/2
        z-[120]

        -translate-x-1/2

        flex
        flex-col
        items-center
      "
    >
      {/* Scroll Text */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
        className="
          mb-5

          text-xs

          uppercase

          tracking-[0.45em]

          text-[#F7F4EE]/80
        "
      >
        Keep Scrolling
      </motion.p>

      {/* Progress Bar */}

      <div
        className="
          relative

          h-[2px]

          w-44

          overflow-hidden

          rounded-full

          bg-white/20
        "
      >
        <motion.div
          style={{
            width,
          }}
          className="
            absolute
            left-0
            top-0

            h-full

            bg-[#C6A46A]
          "
        />
      </div>

      {/* Mouse Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="
          mt-7

          flex

          h-14

          w-8

          justify-center

          rounded-full

          border

          border-white/35
        "
      >
        <motion.div
          animate={{
            y: [0, 18, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            mt-2

            h-2

            w-2

            rounded-full

            bg-[#C6A46A]
          "
        />
      </motion.div>
    </div>
  );
}