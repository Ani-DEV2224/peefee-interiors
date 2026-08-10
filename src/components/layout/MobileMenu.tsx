"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

type Props = {
  open: boolean;
  close: () => void;
};

type DropdownKey = "services" | "projects" | null;

const servicesLinks = [
  {
    label: "Upholstery",
    href: "/services#upholstery",
  },
  {
    label: "Interior",
    href: "/services#interior-design",
  },
  {
    label: "TV Console",
    href: "/services#tv-console",
  },
  {
    label: "Exterior",
    href: "/services#exterior-design",
  },
  {
    label: "Architecture",
    href: "/services#architecture",
  },
  {
    label: "Electrical",
    href: "/services#electrical",
  },
];

const projectsLinks = [
  {
    label: "Residential Projects",
    href: "/projects/residential",
  },
  {
    label: "Commercial Projects",
    href: "/projects/commercial",
  },
  {
    label: "Luxury Projects",
    href: "/projects/luxury",
  },
];

export default function MobileMenu({
  open,
  close,
}: Props) {
  const [openDropdown, setOpenDropdown] =
    useState<DropdownKey>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [open]);

  const toggleDropdown = (
    dropdown: "services" | "projects"
  ) => {
    setOpenDropdown((current) =>
      current === dropdown ? null : dropdown
    );
  };

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[1050]
        lg:hidden
      "
    >
      {/* Click outside drawer to close */}
      <div
        className="
          absolute
          inset-0
          bg-transparent
        "
        onClick={close}
      />

      {/* =====================================
          RIGHT MOBILE DRAWER
      ===================================== */}

      <motion.aside
        initial={{
          x: "100%",
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: "100%",
        }}
        transition={{
          duration: 0.38,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          right-0
          top-0
          z-[1060]

          h-dvh
          w-[76vw]
          max-w-[320px]

          overflow-y-auto

          border-l
          border-white/10

          bg-[#11100E]/60
          backdrop-blur-md

          px-7
          pb-12
          pt-[155px]

          shadow-[-15px_0_45px_rgba(0,0,0,0.18)]
        "
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <nav
          className="
            flex
            w-full
            flex-col
            items-end
          "
        >
          {/* =================================
              HOME
          ================================= */}

          <Link
            href="/"
            onClick={close}
            className="
              mb-6
              block
              text-right

              text-[15px]
              font-medium
              uppercase
              tracking-[0.22em]

              !text-white

              drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]

              transition-colors
              duration-300

              hover:!text-[#C6A46A]
            "
            style={{
              color: "#FFFFFF",
            }}
          >
            Home
          </Link>

          {/* =================================
              ABOUT
          ================================= */}

          <Link
            href="/about"
            onClick={close}
            className="
              mb-6
              block
              text-right

              text-[15px]
              font-medium
              uppercase
              tracking-[0.22em]

              !text-white

              drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]

              transition-colors
              duration-300

              hover:!text-[#C6A46A]
            "
            style={{
              color: "#FFFFFF",
            }}
          >
            About
          </Link>

          {/* =================================
              SERVICES
          ================================= */}

          <div className="mb-6 w-full">
            <div className="flex w-full justify-end">
              <button
                type="button"
                onClick={() =>
                  toggleDropdown("services")
                }
                aria-expanded={
                  openDropdown === "services"
                }
                className="
                  flex
                  items-center
                  justify-end
                  gap-2

                  bg-transparent
                  p-0

                  text-right
                  text-[15px]
                  font-medium
                  uppercase
                  tracking-[0.22em]

                  !text-white

                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]

                  transition-colors
                  duration-300

                  hover:!text-[#C6A46A]
                "
                style={{
                  color: "#FFFFFF",
                }}
              >
                Services

                <motion.span
                  animate={{
                    rotate:
                      openDropdown === "services"
                        ? 180
                        : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FiChevronDown size={17} />
                </motion.span>
              </button>
            </div>

            {/* SERVICES DROPDOWN */}

            <AnimatePresence initial={false}>
              {openDropdown === "services" && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div
                    className="
                      flex
                      flex-col
                      items-end

                      gap-4
                      pb-1
                      pt-5
                    "
                  >
                    {servicesLinks.map(
                      (service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          onClick={close}
                          className="
                            block
                            text-right

                            text-[12px]
                            font-medium
                            uppercase
                            tracking-[0.16em]

                            !text-white

                            drop-shadow-[0_2px_4px_rgba(0,0,0,0.75)]

                            transition-all
                            duration-300

                            hover:-translate-x-1
                            hover:!text-[#C6A46A]
                          "
                          style={{
                            color: "#FFFFFF",
                          }}
                        >
                          {service.label}
                        </Link>
                      )
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* =================================
              PROJECTS
          ================================= */}

          <div className="mb-6 w-full">
            <div className="flex w-full justify-end">
              <button
                type="button"
                onClick={() =>
                  toggleDropdown("projects")
                }
                aria-expanded={
                  openDropdown === "projects"
                }
                className="
                  flex
                  items-center
                  justify-end
                  gap-2

                  bg-transparent
                  p-0

                  text-right
                  text-[15px]
                  font-medium
                  uppercase
                  tracking-[0.22em]

                  !text-white

                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]

                  transition-colors
                  duration-300

                  hover:!text-[#C6A46A]
                "
                style={{
                  color: "#FFFFFF",
                }}
              >
                Projects

                <motion.span
                  animate={{
                    rotate:
                      openDropdown === "projects"
                        ? 180
                        : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FiChevronDown size={17} />
                </motion.span>
              </button>
            </div>

            {/* PROJECTS DROPDOWN */}

            <AnimatePresence initial={false}>
              {openDropdown === "projects" && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div
                    className="
                      flex
                      flex-col
                      items-end

                      gap-4
                      pb-1
                      pt-5
                    "
                  >
                    {projectsLinks.map(
                      (project) => (
                        <Link
                          key={project.label}
                          href={project.href}
                          onClick={close}
                          className="
                            block
                            text-right

                            text-[12px]
                            font-medium
                            uppercase
                            tracking-[0.16em]

                            !text-white

                            drop-shadow-[0_2px_4px_rgba(0,0,0,0.75)]

                            transition-all
                            duration-300

                            hover:-translate-x-1
                            hover:!text-[#C6A46A]
                          "
                          style={{
                            color: "#FFFFFF",
                          }}
                        >
                          {project.label}
                        </Link>
                      )
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* =================================
              CONTACT
          ================================= */}

          <Link
            href="/contact"
            onClick={close}
            className="
              mb-8
              block
              text-right

              text-[15px]
              font-medium
              uppercase
              tracking-[0.22em]

              !text-white

              drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]

              transition-colors
              duration-300

              hover:!text-[#C6A46A]
            "
            style={{
              color: "#FFFFFF",
            }}
          >
            Contact
          </Link>

          {/* =================================
              GOLD DIVIDER
          ================================= */}

          <div
            className="
              mb-8
              h-px
              w-16
              bg-[#C6A46A]/70
            "
          />

          {/* =================================
              BOOK CONSULTATION
          ================================= */}

          <Link
            href="/contact"
            onClick={close}
            className="
              rounded-full
              border
              border-[#C6A46A]

              bg-transparent

              px-5
              py-3

              text-[10px]
              font-semibold
              uppercase
              tracking-[0.17em]

              !text-white

              drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]

              transition-all
              duration-300

              hover:bg-[#C6A46A]
              hover:!text-black
            "
            style={{
              color: "#FFFFFF",
            }}
          >
            Book Consultation
          </Link>
        </nav>
      </motion.aside>
    </div>
  );
}