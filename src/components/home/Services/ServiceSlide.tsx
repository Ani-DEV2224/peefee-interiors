"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  service: {
    number: string;
    title: string;
    description: string;
    image: string;
    href: string;
  };
};

export default function ServiceSlide({
  service,
}: Props) {
  const scrollToProjects = () => {
    const projectsSection =
      document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      key={service.number}
      initial={{
        opacity: 0,
        scale: 1.08,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="
        relative
        overflow-hidden
        rounded-[42px]
        shadow-[0_40px_90px_rgba(0,0,0,.18)]
      "
    >
      {/* =====================================
          SERVICE IMAGE
      ===================================== */}

      <Image
        src={service.image}
        alt={service.title}
        width={1600}
        height={1000}
        priority
        className="
          h-[720px]
          w-full
          object-cover
        "
      />

      {/* =====================================
          OVERLAYS
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/45
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-black/80
          via-black/35
          to-transparent
        "
      />

      {/* =====================================
          CONTENT
      ===================================== */}

      <div
        className="
          absolute
          right-8
          top-1/2
          z-20
          max-w-2xl
          -translate-y-1/2
          text-right
          sm:right-12
          lg:right-16
        "
      >
        <p
          className="
            text-sm
            uppercase
            tracking-[0.45em]
            text-[#C6A46A]
          "
        >
          {service.number}
        </p>

        <h3
          className="
            mt-6
            font-[family-name:var(--font-heading)]
            text-5xl
            leading-none
            text-white
            sm:text-6xl
            lg:text-7xl
          "
        >
          {service.title}
        </h3>

        <div
          className="
            ml-auto
            mt-8
            h-[2px]
            w-28
            bg-[#C6A46A]
          "
        />

        <p
          className="
            ml-auto
            mt-8
            max-w-xl
            text-base
            leading-8
            text-white/80
            sm:text-lg
            sm:leading-9
          "
        >
          {service.description}
        </p>

        {/* =====================================
            EXPLORE PROJECTS
        ===================================== */}

        <button
          type="button"
          onClick={scrollToProjects}
          className="
            ml-auto
            mt-12
            inline-flex
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-[#C6A46A]
            bg-transparent
            px-8
            py-4
            text-sm
            font-medium
            uppercase
            tracking-[0.25em]
            !text-[#C6A46A]
            transition-all
            duration-300
            hover:bg-[#C6A46A]
            hover:!text-black
          "
        >
          Explore Projects →
        </button>
      </div>
    </motion.div>
  );
}