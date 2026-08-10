"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";

const projects = [
  {
    title: "Residential Projects",
    description:
      "Elegant homes designed with comfort, functionality and timeless beauty in every detail.",
    image: "/images/Residential_projects-1.jpg",
    href: "/projects/residential",
    height: "short",
  },

  {
    title: "Commercial Projects",
    description:
      "Professional spaces crafted to elevate businesses, productivity and customer experiences.",
    image: "/images/Commercial_projects-1.jpg",
    href: "/projects/commercial",
    height: "tall",
  },

  {
    title: "Luxury Projects",
    description:
      "Exclusive interiors where premium materials meet world-class craftsmanship and sophistication.",
    image: "/images/Luxury_projects-1.jpg",
    href: "/projects/luxury",
    height: "short",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        bg-[#F7F4EE]
        py-28
        lg:py-36
      "
    >
      {/* =====================================
          BACKGROUND DECORATION
      ===================================== */}

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
        Projects
      </div>

      <Container>
        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            relative
            z-10
            mx-auto
            max-w-5xl
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
            OUR PROJECTS
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
            Spaces We&apos;ve
            <br />
            Brought To Life.
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
            Explore a selection of our work
            across residential, commercial and
            luxury interiors. Click any
            category to discover more completed
            projects, images and videos.
          </p>
        </motion.div>

        {/* =====================================
            PROJECT GRID
        ===================================== */}

        <div
          className="
            mt-28
            grid
            items-end
            gap-10
            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="group"
            >
              <Link
                href={project.href}
                aria-label={`Explore ${project.title}`}
                className="block"
              >
                <motion.div
                  whileHover={{
                    y: -10,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="cursor-pointer"
                >
                  {/* IMAGE */}

                  <div
                    className={`
                      relative
                      overflow-hidden

                      rounded-tl-[90px]
                      rounded-tr-[26px]
                      rounded-bl-[26px]
                      rounded-br-[70px]

                      shadow-[0_25px_70px_rgba(0,0,0,.12)]

                      ${
                        project.height === "tall"
                          ? "h-[720px]"
                          : "h-[600px]"
                      }
                    `}
                  >
                    {/* DARK OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0
                        z-10

                        bg-gradient-to-t
                        from-black/65
                        via-black/15
                        to-transparent

                        opacity-70

                        transition-all
                        duration-500

                        group-hover:opacity-100
                      "
                    />

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority
                      className="
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* FEATURED LABEL */}

                    <div
                      className="
                        absolute
                        left-8
                        top-8
                        z-20

                        rounded-full
                        bg-white/95

                        px-5
                        py-2

                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.3em]
                        text-[#111111]

                        shadow-lg
                      "
                    >
                      Featured
                    </div>

                    {/* BOTTOM CONTENT */}

                    <div
                      className="
                        absolute
                        bottom-10
                        left-8
                        right-8
                        z-20
                      "
                    >
                      <motion.div
                        whileHover={{
                          x: 8,
                        }}
                      >
                        <h3
                          className="
                            font-[family-name:var(--font-heading)]
                            text-3xl
                            leading-tight
                            text-white
                          "
                        >
                          {project.title}
                        </h3>
                      </motion.div>

                      <div
                        className="
                          mt-5
                          h-[2px]
                          w-0
                          bg-[#C6A46A]

                          transition-all
                          duration-500

                          group-hover:w-28
                        "
                      />

                      <p
                        className="
                          mt-6
                          max-w-xs
                          text-base
                          leading-8
                          text-white/85
                        "
                      >
                        {project.description}
                      </p>

                      {/* EXPLORE */}

                      <div
                        className="
                          mt-8
                          flex
                          items-center
                          gap-3

                          text-sm
                          uppercase
                          tracking-[0.3em]
                          text-[#C6A46A]
                        "
                      >
                        <span>Explore</span>

                        <motion.span
                          className="inline-block"
                          whileHover={{
                            x: 6,
                          }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* =====================================
            DECORATIVE BACKGROUND ACCENT
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{
            once: true,
          }}
          className="
            pointer-events-none
            absolute
            -right-52
            bottom-[-180px]

            h-[520px]
            w-[520px]

            rounded-full
            bg-[#C6A46A]/10
            blur-[130px]
          "
        />
      </Container>
    </section>
  );
}