import {
  NextRequest,
  NextResponse,
} from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

const allowedIdentities = [
  "Developer",
  "Architect",
  "Designer",
  "Property Owner",
  "Potential Partner",
];

const allowedServices = [
  "Upholstery",
  "Interior Design",
  "TV Console",
  "Exterior Design",
  "Architecture",
  "Electrical",
  "Other",
];

const allowedProjectTypes = [
  "Residential",
  "Commercial",
  "Luxury",
];

function clean(value: unknown) {
  return String(value ?? "").trim();
}

function escapeHTML(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const fullName = clean(body.fullName);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const location = clean(body.location);

    const identity = clean(body.identity);

    const service = clean(body.service);

    const otherService = clean(
      body.otherService
    );

    const projectType = clean(
      body.projectType
    );

    const budget = clean(body.budget);

    const message = clean(body.message);

    const companyWebsite = clean(
      body.companyWebsite
    );

    /* Honeypot */
    if (companyWebsite) {
      return NextResponse.json({
        success: true,
      });
    }

    if (
      !fullName ||
      !email ||
      !phone ||
      !identity ||
      !service ||
      !projectType ||
      !message
    ) {
      return NextResponse.json(
        {
          message:
            "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !allowedIdentities.includes(
        identity
      )
    ) {
      return NextResponse.json(
        {
          message:
            "Invalid identity option.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !allowedServices.includes(service)
    ) {
      return NextResponse.json(
        {
          message:
            "Invalid service option.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      service === "Other" &&
      !otherService
    ) {
      return NextResponse.json(
        {
          message:
            "Please specify the other service.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !allowedProjectTypes.includes(
        projectType
      )
    ) {
      return NextResponse.json(
        {
          message:
            "Invalid project type.",
        },
        {
          status: 400,
        }
      );
    }

    const displayedService =
      service === "Other"
        ? `Other — ${otherService}`
        : service;

    const subject = `New PeeFee Enquiry — ${identity} — ${displayedService}`;

    const {
      error,
    } = await resend.emails.send({
      from:
        process.env
          .CONTACT_FROM_EMAIL ||
        "PeeFee Interiors <onboarding@resend.dev>",

      to: [
        "peefeeinteriors@gmail.com",
      ],

      replyTo: email,

      subject,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            color: #191712;
          "
        >
          <div
            style="
              background: #191712;
              color: #ffffff;
              padding: 28px;
            "
          >
            <div
              style="
                color: #C6A46A;
                font-size: 12px;
                letter-spacing: 2px;
                text-transform: uppercase;
                margin-bottom: 8px;
              "
            >
              PeeFee Interiors
            </div>

            <h1
              style="
                margin: 0;
                font-size: 26px;
              "
            >
              New Website Enquiry
            </h1>
          </div>

          <div
            style="
              background: #F7F4EE;
              padding: 28px;
            "
          >
            <p>
              <strong>Name:</strong><br />
              ${escapeHTML(fullName)}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${escapeHTML(email)}
            </p>

            <p>
              <strong>Phone / WhatsApp:</strong><br />
              ${escapeHTML(phone)}
            </p>

            <p>
              <strong>Location:</strong><br />
              ${
                location
                  ? escapeHTML(location)
                  : "Not provided"
              }
            </p>

            <hr
              style="
                border: 0;
                border-top: 1px solid #d9d0c1;
                margin: 25px 0;
              "
            />

            <p>
              <strong>I'm a:</strong><br />
              ${escapeHTML(identity)}
            </p>

            <p>
              <strong>Service Interested In:</strong><br />
              ${escapeHTML(service)}
            </p>

            ${
              service === "Other"
                ? `
                  <p>
                    <strong>Other Service:</strong><br />
                    ${escapeHTML(otherService)}
                  </p>
                `
                : ""
            }

            <p>
              <strong>Project Type:</strong><br />
              ${escapeHTML(projectType)}
            </p>

            <p>
              <strong>Approximate Budget:</strong><br />
              ${
                budget
                  ? escapeHTML(budget)
                  : "Not provided"
              }
            </p>

            <hr
              style="
                border: 0;
                border-top: 1px solid #d9d0c1;
                margin: 25px 0;
              "
            />

            <p>
              <strong>Project Details:</strong>
            </p>

            <div
              style="
                white-space: pre-wrap;
                line-height: 1.7;
              "
            >
              ${escapeHTML(message)}
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error(
        "Resend error:",
        error
      );

      return NextResponse.json(
        {
          message:
            "We couldn't send your enquiry. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        message:
          "Something went wrong while sending your enquiry.",
      },
      {
        status: 500,
      }
    );
  }
}