"use client";

import { motion } from "framer-motion";
import ElectricalGrid from "./ElectricalGrid";

export default function ElectricalSection() {
  return (
    <section
      id="electrical"
      className="relative overflow-hidden bg-[#F7F4EE] py-24 sm:py-28 lg:py-36"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-40 top-24
          h-[400px] w-[400px]
          rounded-full bg-[#C6A46A]/10
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-40 bottom-20
          h-[420px] w-[420px]
          rounded-full bg-[#C6A46A]/10
          blur-[150px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center sm:mb-16 lg:mb-20">
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              text-xs font-semibold uppercase
              tracking-[0.32em] text-[#B28A4B]
              sm:text-sm sm:tracking-[0.42em]
            "
          >
            Electrical Solutions
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              mt-5
              font-[family-name:var(--font-heading)]
              text-4xl leading-[1.08] text-[#191712]
              sm:text-5xl
              lg:text-7xl
            "
          >
            Intelligent Electrical Solutions
            <br className="hidden md:block" />
            for Modern Spaces.
          </motion.h2>

          <motion.div
            initial={{
              opacity: 0,
              width: 0,
            }}
            whileInView={{
              opacity: 1,
              width: 120,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="mx-auto mt-8 h-[2px] bg-[#C6A46A]"
          />

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              mx-auto mt-8 max-w-3xl
              text-base leading-8 text-[#575249]
              sm:text-lg sm:leading-9
            "
          >
            From decorative lighting and concealed electrical installations to
            sockets, switches, power distribution, smart lighting systems, and
            carefully integrated electrical finishes, we provide solutions
            designed to complement the beauty, functionality, and safety of
            every space.
          </motion.p>
        </div>

        {/* Electrical media gallery */}
        <ElectricalGrid />
      </div>
    </section>
  );
}