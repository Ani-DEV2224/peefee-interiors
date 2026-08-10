"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ConnectButton() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.6,
        duration: 0.6,
      }}
      viewport={{
        once: true,
      }}
      className="shrink-0"
    >
      <Link
        href="/contact"
        aria-label="Contact PeeFee Interiors"
        className="
          group
          inline-flex
          items-center
          gap-8
          rounded-full
          border
          border-white/20
          bg-white/10
          px-5
          py-5
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-[#C6A46A]
          hover:bg-white/15
        "
      >
        <span
          className="
            px-4
            text-lg
            font-medium
            tracking-wide
            !text-white
          "
        >
          Let&apos;s Connect
        </span>

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#C6A46A]
            transition-all
            duration-500
            group-hover:rotate-45
            group-hover:scale-110
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="
              h-6
              w-6
              text-[#111111]
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H8M17 7V16"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}