"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCheck,
  FiHome,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";

const identityOptions = [
  "Developer",
  "Architect",
  "Designer",
  "Property Owner",
  "Potential Partner",
];

const serviceOptions = [
  "Upholstery",
  "Interior Design",
  "TV Console",
  "Exterior Design",
  "Architecture",
  "Electrical",
  "Other",
];

const projectTypes = [
  "Residential",
  "Commercial",
  "Luxury",
];

const budgetOptions = [
  "Prefer not to say",
  "Under ₦1,000,000",
  "₦1,000,000 – ₦5,000,000",
  "₦5,000,000 – ₦10,000,000",
  "₦10,000,000 – ₦25,000,000",
  "₦25,000,000+",
];

type Status =
  | "idle"
  | "sending"
  | "success"
  | "error";

export default function ContactForm() {
  const [identity, setIdentity] = useState("");
  const [service, setService] = useState("");
  const [status, setStatus] =
    useState<Status>("idle");
  const [errorMessage, setErrorMessage] =
    useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!identity) {
      setStatus("error");
      setErrorMessage(
        "Please select the option that best describes you."
      );
      return;
    }

    if (!service) {
      setStatus("error");
      setErrorMessage(
        "Please select the service you're interested in."
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),

      identity,

      service,

      otherService:
        service === "Other"
          ? formData.get("otherService")
          : "",

      projectType:
        formData.get("projectType"),

      budget: formData.get("budget"),

      message: formData.get("message"),

      companyWebsite:
        formData.get("companyWebsite"),
    };

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to send your enquiry."
        );
      }

      form.reset();

      setIdentity("");
      setService("");
      setStatus("success");
      setErrorMessage("");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        overflow-hidden
        border
        border-black/[0.08]
        bg-white
        shadow-[0_30px_80px_rgba(25,23,18,0.08)]
      "
    >
      {/* =====================================
          TOP GOLD LINE
      ===================================== */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[3px]
          w-full
          bg-[#C6A46A]
        "
      />

      {/* =====================================
          FORM HEADER
      ===================================== */}

      <div
        className="
          border-b
          border-black/[0.07]
          px-6
          pb-8
          pt-10
          sm:px-9
          lg:px-12
          lg:pb-10
          lg:pt-12
        "
      >
        <div
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                mb-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#B28A4B]
              "
            >
              Project Enquiry
            </p>

            <h3
              className="
                max-w-xl
                font-[family-name:var(--font-heading)]
                text-3xl
                leading-tight
                text-[#191712]
                sm:text-4xl
                lg:text-[44px]
              "
            >
              Tell Us What You&apos;re
              Looking To Create.
            </h3>
          </div>

          <p
            className="
              max-w-[240px]
              text-xs
              leading-6
              text-black/45
            "
          >
            Fields marked with an asterisk
            are required.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="
          px-6
          py-9
          sm:px-9
          lg:px-12
          lg:py-12
        "
      >
        {/* Honeypot */}

        <input
          type="text"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        {/* =====================================
            SECTION 01 — CONTACT DETAILS
        ===================================== */}

        <FormSectionHeading
          number="01"
          icon={<FiUser size={16} />}
          title="Your Details"
          description="Tell us how we can reach you."
        />

        <div
          className="
            mt-7
            grid
            gap-x-7
            gap-y-7
            sm:grid-cols-2
          "
        >
          <Field
            label="Full Name"
            name="fullName"
            type="text"
            required
            placeholder="Your full name"
          />

          <Field
            label="Email Address"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />

          <Field
            label="Phone / WhatsApp"
            name="phone"
            type="tel"
            required
            placeholder="+234..."
          />

          <Field
            label="Location"
            name="location"
            type="text"
            placeholder="City, Country"
          />
        </div>

        <SectionDivider />

        {/* =====================================
            SECTION 02 — WHO ARE YOU?
        ===================================== */}

        <FormSectionHeading
          number="02"
          icon={<FiBriefcase size={16} />}
          title="About You"
          description="Choose the option that best describes you."
        />

        <div className="mt-7">
          <label
            className="
              mb-4
              block
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#191712]
            "
          >
            I&apos;m a *
          </label>

          <div
            className="
              grid
              grid-cols-1
              gap-2
              sm:grid-cols-2
              xl:grid-cols-3
            "
          >
            {identityOptions.map(
              (option) => {
                const selected =
                  identity === option;

                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => {
                      setIdentity(option);

                      if (
                        status === "error"
                      ) {
                        setErrorMessage("");
                        setStatus("idle");
                      }
                    }}
                    className={`
                      group
                      flex
                      min-h-[54px]
                      items-center
                      justify-between
                      border
                      px-4
                      text-left
                      text-[12px]
                      font-medium
                      transition-all
                      duration-300

                      ${
                        selected
                          ? `
                            border-[#C6A46A]
                            bg-[#F4EEE3]
                            text-[#191712]
                          `
                          : `
                            border-black/[0.09]
                            bg-white
                            text-black/60
                            hover:border-[#C6A46A]/70
                            hover:bg-[#FAF8F4]
                            hover:text-[#191712]
                          `
                      }
                    `}
                  >
                    <span>{option}</span>

                    <span
                      className={`
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300

                        ${
                          selected
                            ? `
                              border-[#C6A46A]
                              bg-[#C6A46A]
                              text-white
                            `
                            : `
                              border-black/15
                              text-transparent
                            `
                        }
                      `}
                    >
                      <FiCheck size={12} />
                    </span>
                  </button>
                );
              }
            )}
          </div>
        </div>

        <SectionDivider />

        {/* =====================================
            SECTION 03 — PROJECT DETAILS
        ===================================== */}

        <FormSectionHeading
          number="03"
          icon={<FiHome size={16} />}
          title="Your Project"
          description="Help us understand the type of work you have in mind."
        />

        <div
          className="
            mt-7
            grid
            gap-x-7
            gap-y-7
            sm:grid-cols-2
          "
        >
          {/* SERVICE */}

          <SelectField
            label="Service Interested In"
            name="service"
            required
            value={service}
            onChange={(value) => {
              setService(value);

              if (status === "error") {
                setErrorMessage("");
                setStatus("idle");
              }
            }}
            placeholder="Select a service"
            options={serviceOptions}
          />

          {/* PROJECT TYPE */}

          <SelectField
            label="Project Type"
            name="projectType"
            required
            placeholder="Select project type"
            options={projectTypes}
          />
        </div>

        {/* OTHER SERVICE */}

        <AnimatePresence initial={false}>
          {service === "Other" && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -8,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
            >
              <div className="pt-7">
                <Field
                  label="Please Specify The Service"
                  name="otherService"
                  type="text"
                  required
                  placeholder="Type the service you're looking for"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BUDGET */}

        <div className="mt-7">
          <SelectField
            label="Approximate Budget"
            name="budget"
            placeholder="Select a budget range"
            options={budgetOptions}
          />
        </div>

        <SectionDivider />

        {/* =====================================
            SECTION 04 — MESSAGE
        ===================================== */}

        <FormSectionHeading
          number="04"
          icon={
            <FiMessageSquare size={16} />
          }
          title="Tell Us More"
          description="Share the vision, scope or goals for your project."
        />

        <div className="mt-7">
          <label
            htmlFor="message"
            className="
              mb-3
              block
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#191712]
            "
          >
            Project Details *
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={7}
            placeholder="Tell us about your space, what you'd like to achieve, your ideas, timeline or any other important details..."
            className="
              w-full
              resize-none
              border
              border-black/[0.1]
              bg-[#FAF9F6]
              px-5
              py-4
              text-[14px]
              leading-7
              text-[#191712]
              outline-none
              transition-all
              duration-300
              placeholder:text-black/30
              hover:border-black/20
              focus:border-[#C6A46A]
              focus:bg-white
              focus:ring-1
              focus:ring-[#C6A46A]/25
            "
          />
        </div>

        {/* =====================================
            ERROR MESSAGE
        ===================================== */}

        <AnimatePresence>
          {errorMessage && (
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 8,
              }}
              className="
                mt-7
                border-l-2
                border-red-500
                bg-red-50
                px-4
                py-3
              "
            >
              <p
                className="
                  text-[13px]
                  leading-6
                  text-red-700
                "
              >
                {errorMessage}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================
            SUCCESS MESSAGE
        ===================================== */}

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 10,
              }}
              className="
                mt-7
                flex
                items-start
                gap-4
                border
                border-[#C6A46A]/35
                bg-[#F7F2E9]
                p-5
              "
            >
              <span
                className="
                  mt-0.5
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#C6A46A]
                  text-white
                "
              >
                <FiCheck size={15} />
              </span>

              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                    text-[#191712]
                  "
                >
                  Your enquiry has been
                  sent.
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-6
                    text-black/50
                  "
                >
                  Thank you for contacting
                  PeeFee Interiors. Our team
                  will review your enquiry and
                  get back to you shortly.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================
            SUBMIT AREA
        ===================================== */}

        <div
          className="
            mt-9
            flex
            flex-col
            gap-5
            border-t
            border-black/[0.07]
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              max-w-sm
              text-[11px]
              leading-5
              text-black/40
            "
          >
            By submitting this enquiry,
            you&apos;re asking the PeeFee
            Interiors team to contact you
            regarding your project.
          </p>

          <button
            type="submit"
            disabled={
              status === "sending"
            }
            className="
              group
              inline-flex
              min-h-[56px]
              shrink-0
              items-center
              justify-center
              gap-4
              bg-[#191712]
              px-7
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.22em]
              !text-white
              transition-all
              duration-300
              hover:bg-[#C6A46A]
              hover:!text-[#191712]
              disabled:cursor-not-allowed
              disabled:opacity-50
              sm:px-8
            "
          >
            {status === "sending"
              ? "Sending Enquiry..."
              : "Send Enquiry"}

            {status !== "sending" && (
              <FiArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}

/* =========================================
   FORM SECTION HEADING
========================================= */

type FormSectionHeadingProps = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

function FormSectionHeading({
  number,
  title,
  description,
  icon,
}: FormSectionHeadingProps) {
  return (
    <div
      className="
        flex
        items-start
        gap-4
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          border
          border-[#C6A46A]/40
          text-[#B28A4B]
        "
      >
        {icon}
      </div>

      <div className="flex-1">
        <div
          className="
            mb-1
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              text-[9px]
              font-semibold
              tracking-[0.22em]
              text-[#B28A4B]
            "
          >
            {number}
          </span>

          <div
            className="
              h-px
              w-6
              bg-[#C6A46A]/60
            "
          />
        </div>

        <h4
          className="
            font-[family-name:var(--font-heading)]
            text-[23px]
            text-[#191712]
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-1
            text-xs
            leading-5
            text-black/40
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================
   DIVIDER
========================================= */

function SectionDivider() {
  return (
    <div
      className="
        my-10
        h-px
        w-full
        bg-black/[0.07]
        lg:my-12
      "
    />
  );
}

/* =========================================
   INPUT FIELD
========================================= */

type FieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
};

function Field({
  label,
  name,
  type,
  placeholder,
  required = false,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-3
          block
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.22em]
          text-[#191712]
        "
      >
        {label}
        {required ? " *" : ""}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="
          h-[56px]
          w-full
          border
          border-black/[0.1]
          bg-[#FAF9F6]
          px-4
          text-[14px]
          text-[#191712]
          outline-none
          transition-all
          duration-300
          placeholder:text-black/30
          hover:border-black/20
          focus:border-[#C6A46A]
          focus:bg-white
          focus:ring-1
          focus:ring-[#C6A46A]/25
        "
      />
    </div>
  );
}

/* =========================================
   SELECT FIELD
========================================= */

type SelectFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

function SelectField({
  label,
  name,
  placeholder,
  options,
  required = false,
  value,
  onChange,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-3
          block
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.22em]
          text-[#191712]
        "
      >
        {label}
        {required ? " *" : ""}
      </label>

      <select
        id={name}
        name={name}
        required={required}
        {...(value !== undefined
          ? {
              value,
              onChange: (
                event: React.ChangeEvent<HTMLSelectElement>
              ) =>
                onChange?.(
                  event.target.value
                ),
            }
          : {
              defaultValue: "",
            })}
        className="
          h-[56px]
          w-full
          cursor-pointer
          border
          border-black/[0.1]
          bg-[#FAF9F6]
          px-4
          text-[14px]
          text-[#191712]
          outline-none
          transition-all
          duration-300
          hover:border-black/20
          focus:border-[#C6A46A]
          focus:bg-white
          focus:ring-1
          focus:ring-[#C6A46A]/25
        "
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}