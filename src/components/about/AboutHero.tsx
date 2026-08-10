"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}

      <video
        className="absolute inset-0 h-full w-full object-cover scale-105"
        src="/videos/About_Page_Hero_video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/70" />

      {/* Gold Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A46A]/10 blur-[160px]" />

      {/* Content */}

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-8 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          className="
            mb-8
            uppercase
            tracking-[0.45em]
            text-[#C6A46A]
          "
        >
          Our Story
        </motion.p>

        <motion.h1
          initial={{
            y: -500,
            opacity: 0,
            scale: 1.2,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 8,
            mass: 1,
          }}
          className="
            max-w-6xl

            font-[family-name:var(--font-heading)]

            text-[clamp(3.2rem,8vw,8rem)]

            leading-[0.92]

            tracking-tight

            text-white

            drop-shadow-[0_20px_60px_rgba(0,0,0,.8)]
          "
        >
          About
          <br />
          PeeFee Interiors
        </motion.h1>

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 180,
            opacity: 1,
          }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
          className="mt-10 h-[2px] bg-[#C6A46A]"
        />

        <motion.p
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="
            mt-10

            max-w-3xl

            text-lg

            leading-9

            text-white/85
          "
        >
          Creating timeless interiors, inspiring architecture
          and beautifully crafted spaces that reflect your
          lifestyle with elegance, purpose and uncompromising
          attention to detail.
        </motion.p>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.8,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
        "
      >
        <span
          className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-white/70
          "
        >
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="
            mt-4
            flex
            h-14
            w-8
            justify-center
            rounded-full
            border
            border-white/40
          "
        >
          <div className="mt-2 h-3 w-3 rounded-full bg-[#C6A46A]" />
        </motion.div>
      </motion.div>

      {/* Fade Into Next Section */}

      <div className="absolute bottom-0 left-0 h-44 w-full bg-gradient-to-t from-[#F7F4EE] to-transparent" />

    </section>
  );
}