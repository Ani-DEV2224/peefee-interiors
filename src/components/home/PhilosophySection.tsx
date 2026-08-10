"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

const principles = [
  {
    image: "/images/Philosophy_section_grid-1-removebg-preview.png",
    title: "Intentional",
    description:
      "Every design decision begins with purpose and meaning.",
  },
  {
    image: "/images/Philosophy_section_grid-2-removebg-preview.png",
    title: "Crafted",
    description:
      "Beautiful interiors created with exceptional attention to detail.",
  },
  {
    image: "/images/Philosophy_section_grid-3-removebg-preview.png",
    title: "Human",
    description:
      "Every space is designed around the people who experience it.",
  },
  {
    image: "/images/Philosophy_section_grid-4-removebg-preview.png",
    title: "Timeless",
    description:
      "Elegant designs that remain beautiful for generations.",
  },
];

export default function PhilosophySection() {
  return (
    <>
      {/* =====================================
          MAIN PHILOSOPHY SECTION
      ===================================== */}

      <section className="relative overflow-hidden bg-[#F7F4EE] py-36">
        {/* Background Decoration */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-24
            -translate-x-1/2
            select-none

            font-[family-name:var(--font-heading)]
            text-[15rem]
            font-semibold
            leading-none

            text-[#ECE6DD]
            opacity-50
          "
        >
          PF
        </div>

        <Container>
          {/* =====================================
              SECTION INTRO
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
              },
            }}
            viewport={{
              once: true,
            }}
            animate={{
              y: [0, -4, 0],
              scale: [1, 1.01, 1],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="
              relative
              z-10
              mx-auto
              max-w-6xl
              text-center
            "
          >
            <p
              className="
                uppercase
                tracking-[0.45em]
                text-[#C6A46A]
              "
            >
              OUR PHILOSOPHY
            </p>

            <h2
              className="
                mt-6
                font-[family-name:var(--font-heading)]
                text-5xl
                leading-[1.05]
                md:text-6xl
                lg:text-7xl
              "
            >
              Design With Purpose.
              <br />
              Built To Inspire.
            </h2>

            <div
              className="
                mx-auto
                mt-10
                h-[2px]
                w-36
                bg-[#C6A46A]
              "
            />

            <p
              className="
                mx-auto
                mt-12
                max-w-3xl
                text-lg
                leading-9
                text-neutral-600
              "
            >
              Every project begins with understanding. Every material has
              intention. Every space tells a story. We believe thoughtful
              interiors should feel effortless, timeless and deeply personal.
            </p>
          </motion.div>

          {/* =====================================
              PHILOSOPHY STORY
          ===================================== */}

          <div
            className="
              mt-28
              grid
              items-center
              gap-20
              lg:grid-cols-[1.1fr_.9fr]
            "
          >
            {/* LEFT TEXT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <h3
                className="
                  max-w-xl
                  font-[family-name:var(--font-heading)]
                  text-4xl
                  leading-tight
                  text-[#111111]
                  lg:text-5xl
                "
              >
                Interior spaces should inspire the people who experience them.
              </h3>

              <p
                className="
                  mt-8
                  max-w-xl
                  text-lg
                  leading-9
                  text-neutral-600
                "
              >
                From modern residences to commercial environments, every
                PeeFee project balances beauty, functionality and timeless
                craftsmanship. Our philosophy isn&apos;t about trends. It&apos;s
                about creating environments people genuinely love living in.
              </p>
            </motion.div>

            {/* RIGHT IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
                rotate: -5,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: -4,
                transition: {
                  duration: 0.9,
                },
              }}
              viewport={{
                once: true,
              }}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.01, 1],
                rotate: [-4, -3, -4],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="
                flex
                justify-center
                lg:justify-end
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-tl-[140px]
                  rounded-tr-[28px]
                  rounded-bl-[28px]
                  rounded-br-[90px]
                  border
                  border-[#C6A46A]/20
                  shadow-[0_30px_90px_rgba(0,0,0,.12)]
                "
              >
                <Image
                  src="/images/Philosophy_image-1.jpg"
                  alt="Luxury Interior"
                  width={640}
                  height={820}
                  className="
                    h-[720px]
                    w-[520px]
                    object-cover
                  "
                />
              </div>
            </motion.div>
          </div>

          {/* =====================================
              PRINCIPLES GRID
          ===================================== */}

          <div
            className="
              mt-28
              grid
              border-y
              border-[#D9D0C2]
              lg:grid-cols-4
            "
          >
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.15,
                    duration: 0.6,
                  },
                }}
                viewport={{
                  once: true,
                }}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 2.6 + index * 0.2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className="
                  relative
                  flex
                  min-h-[260px]
                  flex-col
                  items-center
                  justify-center
                  px-10
                  py-14
                  text-center
                "
              >
                {index !== 3 && (
                  <div
                    className="
                      absolute
                      right-0
                      top-10
                      hidden
                      h-[70%]
                      w-px
                      bg-[#D9D0C2]
                      lg:block
                    "
                  />
                )}

                <Image
                  src={item.image}
                  alt={item.title}
                  width={54}
                  height={54}
                  className="
                    mb-8
                    h-12
                    w-12
                    object-contain
                  "
                />

                <h4
                  className="
                    font-[family-name:var(--font-heading)]
                    text-2xl
                  "
                >
                  {item.title}
                </h4>

                <p
                  className="
                    mt-5
                    max-w-[220px]
                    text-base
                    leading-8
                    text-neutral-600
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================
          DARK PHILOSOPHY SECTION
      ===================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#111111]
          py-36
        "
      >
        {/* BACKGROUND GOLD GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#C6A46A]/5
            blur-[140px]
          "
        />

        <Container>
          <div
            className="
              relative
              z-10
              grid
              items-center
              gap-20
              lg:grid-cols-[1fr_1.1fr_.7fr]
            "
          >
            {/* =================================
                LEFT IMAGE
            ================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -60,
                rotate: 4,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: 2,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
              }}
            >
              <div
                className="
                  overflow-hidden
                  rounded-tl-[110px]
                  rounded-tr-[24px]
                  rounded-bl-[90px]
                  rounded-br-[24px]
                  border
                  border-white/10
                  shadow-[0_35px_80px_rgba(0,0,0,.45)]
                "
              >
                <Image
                  src="/images/Philosophy_image-2.jpg"
                  alt="Interior"
                  width={520}
                  height={760}
                  className="
                    h-[620px]
                    w-full
                    object-cover
                  "
                />
              </div>
            </motion.div>

            {/* =================================
                QUOTE
            ================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                },
              }}
              viewport={{
                once: true,
              }}
              animate={{
                x: [0, 4, 0],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="
                flex
                items-center
                gap-8
              "
            >
              <div
                className="
                  text-[7rem]
                  leading-none
                  text-[#C6A46A]
                "
              >
                &quot;
              </div>

              <div
                className="
                  h-56
                  w-px
                  bg-[#C6A46A]
                "
              />

              <blockquote
                className="
                  max-w-xl
                  font-[family-name:var(--font-heading)]
                  text-3xl
                  italic
                  leading-[1.6]
                  text-[#F6F3EE]
                  lg:text-4xl
                "
              >
                We don&apos;t follow trends.
                <br />
                <br />
                We create timeless spaces
                <br />
                <br />
                that tell your story.
              </blockquote>
            </motion.div>

            {/* =================================
                BRAND AREA
            ================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.9,
                },
              }}
              viewport={{
                once: true,
              }}
              animate={{
                rotate: [0, 2, -2, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="
                flex
                flex-col
                items-center
                justify-center
              "
            >
              <Image
                src="/logos/PeeFee_logo_white-2.svg"
                alt="PeeFee Interiors"
                width={180}
                height={180}
                priority
                className="
                  h-auto
                  w-40
                  lg:w-48
                "
              />

              <div
                className="
                  mt-10
                  h-px
                  w-28
                  bg-[#C6A46A]
                "
              />

              <h3
                className="
                  mt-8
                  font-[family-name:var(--font-heading)]
                  text-3xl
                  tracking-wide
                  text-white
                "
              >
                PeeFee Interiors
              </h3>

              <p
                className="
                  mt-4
                  max-w-[240px]
                  text-center
                  text-base
                  leading-8
                  text-white/70
                "
              >
                Luxury interior design crafted with elegance, functionality
                and timeless sophistication.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}