"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import ConnectButton from "./ConnectButton";

export default function ConnectSection() {
  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-[#F7F4EE] py-32"
    >
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
            relative
            overflow-hidden
            rounded-[48px]
            bg-[#111111]
            shadow-[0_40px_120px_rgba(0,0,0,.18)]
          "
        >

          {/* Background Image */}

          <Image
            src="/images/Lets_connect_image.jpg"
            alt="Let's Connect"
            width={1800}
            height={900}
            priority
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/45" />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/80
              via-black/45
              to-transparent
            "
          />

          {/* Decorative Glow */}

          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-full
              bg-[radial-gradient(circle_at_left,rgba(198,164,106,.18),transparent_55%)]
            "
          />

          {/* Content */}

          <div
            className="
              relative
              z-20

              flex
              min-h-[420px]

              flex-col
              justify-center

              gap-10

              px-10

              md:px-20

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            <div className="max-w-3xl">

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: .2 }}
                className="
                  uppercase
                  tracking-[0.45em]
                  text-[#C6A46A]
                "
              >
                LET'S CREATE SOMETHING BEAUTIFUL
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .35 }}
                className="
                  mt-6

                  font-[family-name:var(--font-heading)]

                  text-[clamp(3rem,7vw,6rem)]

                  leading-[0.95]

                  text-white
                "
              >
                Not For Everyone.
                <br />
                Precisely For You.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: .55 }}
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-9
                  text-white/75
                "
              >
                Whether you're transforming your home,
                redesigning your workspace or starting a
                completely new project, we're ready to bring
                your vision to life with timeless elegance.
              </motion.p>

            </div>

            <ConnectButton />

          </div>

        </motion.div>

      </Container>
    </section>
  );
}