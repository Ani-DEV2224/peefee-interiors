import ServiceImageCard from "../upholstery/UpholsteryImageCard";
import ServiceVideoCard from "../upholstery/UpholsteryVideoCard";

type InteriorMediaItem =
  | {
      id: string;
      type: "image";
      src: string;
    }
  | {
      id: string;
      type: "video";
      src: string;
    };

const interiorMedia: InteriorMediaItem[] = [
  // Row 1
  {
    id: "interior-image-1",
    type: "image",
    src: "/images/Interior_section_image-1.jpg",
  },
  {
    id: "interior-video-1",
    type: "video",
    src: "/videos/Interior_section_video-1.mp4",
  },
  {
    id: "interior-image-2",
    type: "image",
    src: "/images/Interior_section_image-2.jpg",
  },

  // Row 2
  {
    id: "interior-video-2",
    type: "video",
    src: "/videos/Interior_section_video-2.mp4",
  },
  {
    id: "interior-image-3",
    type: "image",
    src: "/images/Interior_section_image-3.1.jpg",
  },
  {
    id: "interior-video-3",
    type: "video",
    src: "/videos/Interior_section_video-3.mp4",
  },

  // Row 3
  {
    id: "interior-image-4",
    type: "image",
    src: "/images/Interior_section_image-4.jpg",
  },
  {
    id: "interior-video-4",
    type: "video",
    src: "/videos/Interior_section_video-4.mp4",
  },
  {
    id: "interior-image-5",
    type: "image",
    src: "/images/Interior_section_image-5.jpg",
  },

  // Row 4
  {
    id: "interior-video-5",
    type: "video",
    src: "/videos/Interior_section_video-5.mp4",
  },
  {
    id: "interior-image-6",
    type: "image",
    src: "/images/Interior_section_image-6.jpg",
  },
  {
    id: "interior-video-6",
    type: "video",
    src: "/videos/Interior_section_video-6.mp4",
  },

  // Row 5
  {
    id: "interior-video-7",
    type: "video",
    src: "/videos/Interior_section_video-7.mp4",
  },
  {
    id: "interior-video-8",
    type: "video",
    src: "/videos/Interior_section_video-8.mp4",
  },
  {
    id: "interior-video-9",
    type: "video",
    src: "/videos/Interior_section_video-9.mp4",
  },
];

export default function InteriorGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {interiorMedia.map((item) => {
        if (item.type === "image") {
          return <ServiceImageCard key={item.id} src={item.src} />;
        }

        return <ServiceVideoCard key={item.id} src={item.src} />;
      })}
    </div>
  );
}