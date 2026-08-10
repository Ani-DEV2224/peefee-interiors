"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[58vh]
        items-end
        overflow-hidden
        bg-[#191712]
        px-6
        pb-14
        pt-36
        sm:px-8
        sm:pb-16
        lg:px-12
        lg:pb-20
      "
    >
      {/* Decorative glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#C6A46A]/10
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-white/5
          blur-[110px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <p
            className="
              mb-5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#C6A46A]
            "
          >
            Get In Touch
          </p>

          <h1
            className="
              max-w-4xl
              font-[family-name:var(--font-heading)]
              text-4xl
              leading-[1.05]
              text-[#F7F4EE]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Let&apos;s Create A Space
            That Feels Like You.
          </h1>

          <div
            className="
              my-6
              h-px
              w-16
              bg-[#C6A46A]
            "
          />

          <p
            className="
              max-w-2xl
              text-sm
              leading-7
              text-white/65
              sm:text-base
            "
          >
            Whether you&apos;re designing a
            new space, transforming an
            existing one, or exploring a
            potential collaboration, tell us
            what you have in mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
}