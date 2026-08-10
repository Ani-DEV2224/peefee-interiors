"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export default function ProjectHero({
  eyebrow,
  title,
  description,
  image,
}: Props) {
  return (
    <section
      className="
        relative
        flex
        min-h-[82vh]
        items-end
        overflow-hidden
        bg-[#191712]
      "
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={`${eyebrow} by PeeFee Interiors`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/35" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-black/10
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
          px-6
          pb-14
          sm:px-8
          sm:pb-16
          lg:px-12
          lg:pb-20
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
            delay: 0.2,
          }}
          className="max-w-3xl"
        >
          <p
            className="
              mb-5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#C6A46A]
              sm:text-xs
            "
          >
            {eyebrow}
          </p>

          <h1
            className="
              max-w-3xl
              font-[family-name:var(--font-heading)]
              text-4xl
              leading-[1.03]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            {title}
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
              max-w-xl
              text-sm
              leading-7
              text-white/80
              sm:text-base
            "
          >
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}