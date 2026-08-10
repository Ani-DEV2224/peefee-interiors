"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiMaximize2,
  FiX,
} from "react-icons/fi";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  alt: string;
  index?: number;
};

export default function ProjectGalleryCard({
  src,
  alt,
  index = 0,
}: Props) {
  const [open, setOpen] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open]);

  return (
    <>
      <motion.button
        layout
        type="button"
        onClick={() => setOpen(true)}
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
          amount: 0.15,
        }}
        transition={{
          duration: 0.55,
          delay:
            (index % 3) * 0.06,
        }}
        whileHover={{
          y: -5,
        }}
        className="
          group
          relative
          h-[300px]
          w-full
          overflow-hidden
          rounded-[26px]
          bg-white
          shadow-[0_15px_45px_rgba(0,0,0,0.08)]
          outline-none
        "
      >
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
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.07]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-colors
            duration-300
            group-hover:bg-black/15
          "
        />

        <div
          className="
            absolute
            right-4
            top-4
            flex
            h-10
            w-10
            scale-90
            items-center
            justify-center
            rounded-full
            bg-black/50
            text-white
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:scale-100
            group-hover:opacity-100
          "
        >
          <FiMaximize2 size={16} />
        </div>
      </motion.button>

      {/* Fullscreen Viewer */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                onClick={() =>
                  setOpen(false)
                }
                className="
                  fixed
                  inset-0
                  z-[9999]
                  flex
                  items-center
                  justify-center
                  bg-black/90
                  p-4
                  backdrop-blur-md
                  sm:p-8
                "
              >
                <button
                  type="button"
                  aria-label="Close image"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="
                    absolute
                    right-5
                    top-5
                    z-20
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    transition-all
                    hover:bg-white
                    hover:text-black
                  "
                >
                  <FiX size={21} />
                </button>

                <motion.div
                  initial={{
                    scale: 0.94,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={{
                    scale: 0.96,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                  className="
                    relative
                    h-[88vh]
                    w-full
                    max-w-6xl
                  "
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}