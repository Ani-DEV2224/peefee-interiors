"use client";

import { motion } from "framer-motion";

type WhyChooseFeatureProps = {
  number: string;
  title: string;
  description: string;
};

export default function WhyChooseFeature({
  number,
  title,
  description,
}: WhyChooseFeatureProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -40,
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      className="max-w-2xl"
    >
      {/* Number */}
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          delay: 0.15,
          duration: 0.5,
        }}
        className="flex items-center gap-6"
      >
        <span
          className="
            font-[family-name:var(--font-heading)]
            text-6xl
            font-semibold
            leading-none
            text-[#C6A46A]
          "
        >
          {number}
        </span>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 140 }}
          transition={{
            delay: 0.25,
            duration: 0.6,
          }}
          className="h-[2px] bg-[#C6A46A]"
        />
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
        className="
          mt-10
          font-[family-name:var(--font-heading)]
          text-4xl
          leading-tight
          text-[#F7F4EE]
          lg:text-5xl
        "
      >
        {title}
      </motion.h3>

      {/* Description */}
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
          delay: 0.45,
          duration: 0.6,
        }}
        className="
          mt-8
          max-w-xl
          text-lg
          leading-9
          text-[#F7F4EE]/80
        "
      >
        {description}
      </motion.p>

      {/* Decorative Gold Accent */}
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: 90,
        }}
        transition={{
          delay: 0.6,
          duration: 0.5,
        }}
        className="
          mt-10
          h-[3px]
          rounded-full
          bg-[#C6A46A]
        "
      />
    </motion.div>
  );
}