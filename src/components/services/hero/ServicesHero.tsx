"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#171511]">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 10,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/Service_Hero_section.jpeg"
          alt="PeeFee Interiors services"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/35" />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/20 via-black/30 to-black/80" />

      {/* Decorative gold glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-1/2 z-[3]
          h-[350px] w-[350px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-[#C6A46A]/10
          blur-[120px]
          md:h-[650px] md:w-[650px]
          md:blur-[170px]
        "
      />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-5 py-28 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-6xl text-center">
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
              duration: 0.8,
              delay: 0.2,
            }}
            className="text-xs font-medium uppercase tracking-[0.3em] text-[#D7B77E] sm:text-sm sm:tracking-[0.45em]"
          >
            Our Services
          </motion.p>

          <motion.h1
            initial={{
              y: -120,
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              mass: 1,
              delay: 0.15,
            }}
            className="
              mt-6
              font-[family-name:var(--font-heading)]
              text-4xl leading-[1.02] text-white
              sm:text-5xl
              md:mt-8 md:text-7xl
              lg:text-[6.2rem]
            "
          >
            Crafting Every Detail.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Designing Every Experience.
          </motion.h1>

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 160,
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mx-auto mt-8 h-[2px] bg-[#C6A46A] md:mt-10"
          />

          <motion.p
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/85 sm:text-lg md:mt-10 md:leading-9"
          >
            Discover our bespoke interior design, architecture, upholstery,
            electrical solutions, TV console designs, and exterior
            transformations—thoughtfully created to elevate every space with
            timeless elegance and exceptional craftsmanship.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.7,
          duration: 0.8,
        }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-white/70">
          Scroll
        </span>

        <div className="mt-3 flex h-12 w-7 justify-center rounded-full border border-white/40">
          <motion.span
            animate={{
              y: [0, 14, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="mt-2 block h-2 w-2 rounded-full bg-[#C6A46A]"
          />
        </div>
      </motion.div>

      {/* Fade into the next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-28 w-full bg-gradient-to-t from-[#F7F4EE] to-transparent md:h-44" />
    </section>
  );
}