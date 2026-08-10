import ServiceImageCard from "../upholstery/UpholsteryImageCard";
import ServiceVideoCard from "../upholstery/UpholsteryVideoCard";

type ArchitectureMediaItem =
  | {
      id: string;
      type: "image";
      src: string;
      alt: string;
    }
  | {
      id: string;
      type: "video";
      src: string;
      alt: string;
    };

const architectureMedia: ArchitectureMediaItem[] = [
  // Row 1
  {
    id: "architecture-image-1",
    type: "image",
    src: "/images/Architectural_section_image-1.jpeg",
    alt: "PeeFee architecture design project 1",
  },
  {
    id: "architecture-video-1",
    type: "video",
    src: "/videos/Architectural_section_video-1.mp4",
    alt: "PeeFee architecture design video 1",
  },
  {
    id: "architecture-image-2",
    type: "image",
    src: "/images/Architectural_section_image-2.jpeg",
    alt: "PeeFee architecture design project 2",
  },

  // Row 2
  {
    id: "architecture-video-2",
    type: "video",
    src: "/videos/Architectural_section_video-2.mp4",
    alt: "PeeFee architecture design video 2",
  },
  {
    id: "architecture-image-3",
    type: "image",
    src: "/images/Architectural_section_image-3.jpeg",
    alt: "PeeFee architecture design project 3",
  },
  {
    id: "architecture-video-3",
    type: "video",
    src: "/videos/Architectural_section_video-3.mp4",
    alt: "PeeFee architecture design video 3",
  },

  // Row 3
  {
    id: "architecture-video-4",
    type: "video",
    src: "/videos/Architectural_section_video-4.mp4",
    alt: "PeeFee architecture design video 4",
  },
  {
    id: "architecture-video-5",
    type: "video",
    src: "/videos/Architectural_section_video-5.mp4",
    alt: "PeeFee architecture design video 5",
  },
  {
    id: "architecture-video-6",
    type: "video",
    src: "/videos/Architectural_section_video-6.mp4",
    alt: "PeeFee architecture design video 6",
  },
];

export default function ArchitectureGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {architectureMedia.map((item) => {
        if (item.type === "image") {
          return (
            <ServiceImageCard
              key={item.id}
              src={item.src}
              alt={item.alt}
            />
          );
        }

        return (
          <ServiceVideoCard
            key={item.id}
            src={item.src}
            alt={item.alt}
          />
        );
      })}
    </div>
  );
}