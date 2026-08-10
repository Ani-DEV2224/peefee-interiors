"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

type ServiceMediaLightboxProps = {
  open: boolean;
  type: "image" | "video";
  src: string;
  alt: string;
  onClose: () => void;
};

export default function ServiceMediaLightbox({
  open,
  type,
  src,
  alt,
  onClose,
}: ServiceMediaLightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            bg-black/90 px-4 py-6
            backdrop-blur-md
            sm:px-8
          "
        >
          {/* Close button */}
          <motion.button
            type="button"
            aria-label="Close media viewer"
            onClick={onClose}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.94,
            }}
            className="
              absolute right-5 top-5 z-30
              flex h-12 w-12
              items-center justify-center
              rounded-full border border-white/20
              bg-white/10 text-white
              backdrop-blur-md
              transition-colors duration-300
              hover:bg-[#C6A46A]
              sm:right-8 sm:top-8
            "
          >
            <FiX size={26} />
          </motion.button>

          {/* Media container */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.88,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.88,
              y: 30,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
            className="
              relative flex
              max-h-[90vh] w-full max-w-7xl
              flex-col items-center justify-center
            "
          >
            {type === "image" ? (
              <div className="relative h-[78vh] w-full">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <video
                src={src}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="
                  max-h-[78vh] w-auto max-w-full
                  rounded-2xl bg-black
                  shadow-[0_30px_100px_rgba(0,0,0,0.6)]
                "
              />
            )}

            <p className="mt-5 text-center text-sm tracking-wide text-white/70">
              {alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}