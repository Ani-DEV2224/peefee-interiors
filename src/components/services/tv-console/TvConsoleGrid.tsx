import ServiceImageCard from "../upholstery/UpholsteryImageCard";
import ServiceVideoCard from "../upholstery/UpholsteryVideoCard";

type TvConsoleMediaItem =
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

const tvConsoleMedia: TvConsoleMediaItem[] = [
  // Row 1
  {
    id: "tv-console-image-1",
    type: "image",
    src: "/images/Tv_console_section_image-1.jpeg",
    alt: "Luxury TV console design project 1",
  },
  {
    id: "tv-console-video-1",
    type: "video",
    src: "/videos/Tv_console_section_video-1.mp4",
    alt: "Luxury TV console design video 1",
  },
  {
    id: "tv-console-image-2",
    type: "image",
    src: "/images/Tv_console_section_image-2.jpeg",
    alt: "Luxury TV console design project 2",
  },

  // Row 2
  {
    id: "tv-console-video-2",
    type: "video",
    src: "/videos/Tv_console_section_video-2.mp4",
    alt: "Luxury TV console design video 2",
  },
  {
    id: "tv-console-image-3",
    type: "image",
    src: "/images/Tv_console_section_image-3.jpeg",
    alt: "Luxury TV console design project 3",
  },
  {
    id: "tv-console-video-3",
    type: "video",
    src: "/videos/Tv_console_section_video-3.mp4",
    alt: "Luxury TV console design video 3",
  },

  // Row 3
  {
    id: "tv-console-image-4",
    type: "image",
    src: "/images/Tv_console_section_image-4.jpeg",
    alt: "Luxury TV console design project 4",
  },
  {
    id: "tv-console-video-4",
    type: "video",
    src: "/videos/Tv_console_section_video-4.mp4",
    alt: "Luxury TV console design video 4",
  },
  {
    id: "tv-console-image-5",
    type: "image",
    src: "/images/Tv_console_section_image-5.jpeg",
    alt: "Luxury TV console design project 5",
  },

  // Row 4
  {
    id: "tv-console-video-5",
    type: "video",
    src: "/videos/Tv_console_section_video-5.mp4",
    alt: "Luxury TV console design video 5",
  },
  {
    id: "tv-console-image-6",
    type: "image",
    src: "/images/Tv_console_section_image-6.jpeg",
    alt: "Luxury TV console design project 6",
  },
  {
    id: "tv-console-video-6",
    type: "video",
    src: "/videos/Tv_console_section_video-6.mp4",
    alt: "Luxury TV console design video 6",
  },

  // Row 5
  {
    id: "tv-console-image-7",
    type: "image",
    src: "/images/Tv_console_section_image-7.jpeg",
    alt: "Luxury TV console design project 7",
  },
  {
    id: "tv-console-video-7",
    type: "video",
    src: "/videos/Tv_console_section_video-7.mp4",
    alt: "Luxury TV console design video 7",
  },
  {
    id: "tv-console-image-8",
    type: "image",
    src: "/images/Tv_console_section_image-8.jpeg",
    alt: "Luxury TV console design project 8",
  },

  // Final centered card
  {
    id: "tv-console-video-8",
    type: "video",
    src: "/videos/Tv_console_section_video-8.mp4",
    alt: "Luxury TV console design video 8",
  },
];

export default function TvConsoleGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {tvConsoleMedia.map((item, index) => {
        const isFinalCard = index === tvConsoleMedia.length - 1;

        return (
          <div
            key={item.id}
            className={isFinalCard ? "lg:col-start-2" : undefined}
          >
            {item.type === "image" ? (
              <ServiceImageCard src={item.src} alt={item.alt} />
            ) : (
              <ServiceVideoCard src={item.src} alt={item.alt} />
            )}
          </div>
        );
      })}
    </div>
  );
}