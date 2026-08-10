"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

import ProjectGalleryCard from "./ProjectGalleryCard";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  images: string[];
  altPrefix?: string;
};

const INITIAL_IMAGES = 12;

export default function ProjectGallery({
  eyebrow,
  title,
  description,
  images,
  altPrefix = "Project",
}: Props) {
  const [showAll, setShowAll] =
    useState(false);

  const visibleImages = showAll
    ? images
    : images.slice(0, INITIAL_IMAGES);

  return (
    <section
      className="
        bg-[#F7F4EE]
        px-6
        pb-24
        sm:px-8
        lg:px-12
      "
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            mb-12
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
              text-[#191712]
              sm:text-5xl
            "
          >
            {title}
          </h2>

          <div
            className="
              mx-auto
              my-5
              h-px
              w-14
              bg-[#C6A46A]
            "
          />

          <p
            className="
              mx-auto
              max-w-2xl
              text-sm
              leading-7
              text-black/55
              sm:text-[15px]
            "
          >
            {description}
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          layout
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          <AnimatePresence>
            {visibleImages.map(
              (image, index) => (
                <ProjectGalleryCard
                  key={image}
                  src={image}
                  alt={`${altPrefix} ${
                    index + 1
                  }`}
                  index={index}
                />
              )
            )}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        {images.length >
          INITIAL_IMAGES && (
          <div
            className="
              mt-12
              flex
              justify-center
            "
          >
            <button
              type="button"
              onClick={() =>
                setShowAll(
                  (previous) => !previous
                )
              }
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[#191712]/20
                bg-transparent
                px-7
                py-3.5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#191712]
                transition-all
                duration-300
                hover:border-[#C6A46A]
                hover:bg-[#C6A46A]
              "
            >
              {showAll
                ? "Show Less"
                : "View All Projects"}

              {showAll ? (
                <FiChevronUp size={16} />
              ) : (
                <FiChevronDown size={16} />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}