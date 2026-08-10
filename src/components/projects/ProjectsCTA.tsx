"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectsCTA() {
  return (
    <section
      className="
        bg-[#191712]
        px-6
        py-20
        sm:px-8
        lg:px-12
        lg:py-24
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          mx-auto
          max-w-3xl
          text-center
        "
      >
        <p
          className="
            mb-4
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.35em]
            text-[#C6A46A]
          "
        >
          Have A Space In Mind?
        </p>

        <h2
          className="
            font-[family-name:var(--font-heading)]
            text-4xl
            leading-tight
            text-[#F7F4EE]
            sm:text-5xl
            lg:text-6xl
          "
        >
          Let&apos;s Create Something
          Exceptional.
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-xl
            text-sm
            leading-7
            text-white/60
            sm:text-[15px]
          "
        >
          Whether you&apos;re creating a new
          home or transforming an existing
          space, PeeFee Interiors can help
          bring your vision to life.
        </p>

        <Link
          href="/contact"
          style={{
            color: "#FFFFFF",
          }}
          className="
            group
            mx-auto
            mt-8
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-[#C6A46A]
            bg-transparent
            px-7
            py-3.5
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.2em]
            !text-white
            transition-all
            duration-300
            hover:bg-[#C6A46A]
            hover:!text-white
          "
        >
          Start Your Project

          <FiArrowUpRight
            size={16}
            className="
              text-white
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </Link>
      </motion.div>
    </section>
  );
}