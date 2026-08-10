import ServiceImageCard from "../upholstery/UpholsteryImageCard";
import ServiceVideoCard from "../upholstery/UpholsteryVideoCard";

type ElectricalMediaItem =
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

const electricalMedia: ElectricalMediaItem[] = [
  // Row 1
  {
    id: "electrical-image-1",
    type: "image",
    src: "/images/Electrical_section_image-1.jpeg",
    alt: "PeeFee electrical project 1",
  },
  {
    id: "electrical-video-1",
    type: "video",
    src: "/videos/Electrical_section_video-1.mp4",
    alt: "PeeFee electrical project video 1",
  },
  {
    id: "electrical-image-2",
    type: "image",
    src: "/images/Electrical_section_image-2.jpeg",
    alt: "PeeFee electrical project 2",
  },

  // Row 2
  {
    id: "electrical-video-2",
    type: "video",
    src: "/videos/Electrical_section_video-2.mp4",
    alt: "PeeFee electrical project video 2",
  },
  {
    id: "electrical-image-3",
    type: "image",
    src: "/images/Electrical_section_image-3.jpeg",
    alt: "PeeFee electrical project 3",
  },
  {
    id: "electrical-video-3",
    type: "video",
    src: "/videos/Electrical_section_video-3.mp4",
    alt: "PeeFee electrical project video 3",
  },

  // Row 3
  {
    id: "electrical-image-4",
    type: "image",
    src: "/images/Electrical_section_image-4.jpeg",
    alt: "PeeFee electrical project 4",
  },
  {
    id: "electrical-video-4",
    type: "video",
    src: "/videos/Electrical_section_video-4.mp4",
    alt: "PeeFee electrical project video 4",
  },
  {
    id: "electrical-image-5",
    type: "image",
    src: "/images/Electrical_section_image-5.jpeg",
    alt: "PeeFee electrical project 5",
  },

  // Row 4
  {
    id: "electrical-video-5",
    type: "video",
    src: "/videos/Electrical_section_video-5.mp4",
    alt: "PeeFee electrical project video 5",
  },
  {
    id: "electrical-image-6",
    type: "image",
    src: "/images/Electrical_section_image-6.jpeg",
    alt: "PeeFee electrical project 6",
  },
  {
    id: "electrical-video-6",
    type: "video",
    src: "/videos/Electrical_section_video-6.mp4",
    alt: "PeeFee electrical project video 6",
  },

  // Row 5
  {
    id: "electrical-video-7",
    type: "video",
    src: "/videos/Electrical_section_video-7.mp4",
    alt: "PeeFee electrical project video 7",
  },
  {
    id: "electrical-video-8",
    type: "video",
    src: "/videos/Electrical_section_video-8.mp4",
    alt: "PeeFee electrical project video 8",
  },
  {
    id: "electrical-video-9",
    type: "video",
    src: "/videos/Electrical_section_video-9.mp4",
    alt: "PeeFee electrical project video 9",
  },

  // Row 6
  {
    id: "electrical-video-10",
    type: "video",
    src: "/videos/Electrical_section_video-10.mp4",
    alt: "PeeFee electrical project video 10",
  },
  {
    id: "electrical-video-11",
    type: "video",
    src: "/videos/Electrical_section_video-11.mp4",
    alt: "PeeFee electrical project video 11",
  },
  {
    id: "electrical-video-12",
    type: "video",
    src: "/videos/Electrical_section_video-12.mp4",
    alt: "PeeFee electrical project video 12",
  },
];

export default function ElectricalGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {electricalMedia.map((item) => {
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