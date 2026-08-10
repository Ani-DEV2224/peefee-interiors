"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function ProjectIntro({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <section
      className="
        bg-[#F7F4EE]
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
            text-[#B28A4B]
          "
        >
          {eyebrow}
        </p>

        <h2
          className="
            font-[family-name:var(--font-heading)]
            text-4xl
            leading-tight
            text-[#191712]
            sm:text-5xl
          "
        >
          {title}
        </h2>

        <div
          className="
            mx-auto
            my-6
            h-px
            w-14
            bg-[#C6A46A]
          "
        />

        <p
          className="
            mx-auto
            max-w-2xl
            text-[15px]
            leading-8
            text-black/60
            sm:text-base
          "
        >
          {description}
        </p>
      </motion.div>
    </section>
  );
}