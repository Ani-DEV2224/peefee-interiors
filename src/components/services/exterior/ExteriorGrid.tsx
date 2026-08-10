import ServiceImageCard from "../upholstery/UpholsteryImageCard";
import ServiceVideoCard from "../upholstery/UpholsteryVideoCard";

type ExteriorMediaItem =
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

const exteriorMedia: ExteriorMediaItem[] = [
  // Row 1
  {
    id: "exterior-image-1",
    type: "image",
    src: "/images/Exterior_section_image-1.jpeg",
    alt: "PeeFee exterior design project 1",
  },
  {
    id: "exterior-video-1",
    type: "video",
    src: "/videos/Exterior_section_video-1.mp4",
    alt: "PeeFee exterior design video 1",
  },
  {
    id: "exterior-image-2",
    type: "image",
    src: "/images/Exterior_section_image-2.jpeg",
    alt: "PeeFee exterior design project 2",
  },

  // Row 2
  {
    id: "exterior-video-2",
    type: "video",
    src: "/videos/Exterior_section_video-2.mp4",
    alt: "PeeFee exterior design video 2",
  },
  {
    id: "exterior-image-3",
    type: "image",
    src: "/images/Exterior_section_image-3.jpeg",
    alt: "PeeFee exterior design project 3",
  },
  {
    id: "exterior-video-3",
    type: "video",
    src: "/videos/Exterior_section_video-3.mp4",
    alt: "PeeFee exterior design video 3",
  },

  // Row 3
  {
    id: "exterior-image-4",
    type: "image",
    src: "/images/Exterior_section_image-4.jpeg",
    alt: "PeeFee exterior design project 4",
  },
  {
    id: "exterior-video-4",
    type: "video",
    src: "/videos/Exterior_section_video-4.mp4",
    alt: "PeeFee exterior design video 4",
  },
  {
    id: "exterior-image-5",
    type: "image",
    src: "/images/Exterior_section_image-5.jpeg",
    alt: "PeeFee exterior design project 5",
  },

  // Row 4
  {
    id: "exterior-video-5",
    type: "video",
    src: "/videos/Exterior_section_video-5.mp4",
    alt: "PeeFee exterior design video 5",
  },
  {
    id: "exterior-image-6",
    type: "image",
    src: "/images/Exterior_section_image-6.jpeg",
    alt: "PeeFee exterior design project 6",
  },
  {
    id: "exterior-image-7",
    type: "image",
    src: "/images/Exterior_section_image-7.jpeg",
    alt: "PeeFee exterior design project 7",
  },
];

export default function ExteriorGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {exteriorMedia.map((item) => {
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