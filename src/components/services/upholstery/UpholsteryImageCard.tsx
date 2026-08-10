"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMaximize2 } from "react-icons/fi";

import ServiceMediaLightbox from "../shared/ServiceMediaLightbox";

type UpholsteryImageCardProps = {
  src: string;
  alt?: string;
};

export default function UpholsteryImageCard({
  src,
  alt = "PeeFee Interiors design project",
}: UpholsteryImageCardProps) {
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -8,
        }}
        className="group h-full"
      >
        <button
          type="button"
          aria-label={`Open image: ${alt}`}
          onClick={() => setViewerOpen(true)}
          className="
            block h-full w-full
            cursor-zoom-in text-left
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#C6A46A]
            focus-visible:ring-offset-4
          "
        >
          <div
            className="
              h-full overflow-hidden
              rounded-[26px] bg-white p-3
              shadow-[0_15px_45px_rgba(0,0,0,0.08)]
              transition-all duration-500
              group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
            "
          >
            <div className="relative h-[300px] overflow-hidden rounded-[20px]">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  33vw
                "
                className="
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              {/* Hover overlay */}
              <div
                className="
                  absolute inset-0
                  flex items-center justify-center
                  bg-black/0
                  transition-colors duration-500
                  group-hover:bg-black/35
                "
              >
                <motion.span
                  initial={false}
                  className="
                    flex h-14 w-14
                    scale-75 items-center justify-center
                    rounded-full border border-white/30
                    bg-white/15 text-white
                    opacity-0 backdrop-blur-md
                    transition-all duration-500
                    group-hover:scale-100
                    group-hover:opacity-100
                  "
                >
                  <FiMaximize2 size={22} />
                </motion.span>
              </div>
            </div>
          </div>
        </button>
      </motion.article>

      <ServiceMediaLightbox
        open={viewerOpen}
        type="image"
        src={src}
        alt={alt}
        onClose={() => setViewerOpen(false)}
      />
    </>
  );
}