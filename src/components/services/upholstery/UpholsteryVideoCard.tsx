"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiMaximize2 } from "react-icons/fi";

import ServiceMediaLightbox from "../shared/ServiceMediaLightbox";
import VideoControls from "./VideoControls";

type UpholsteryVideoCardProps = {
  src: string;
  alt?: string;
};

export default function UpholsteryVideoCard({
  src,
  alt = "PeeFee Interiors design video",
}: UpholsteryVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (error) {
        console.error("The video could not be played:", error);
      }
    } else {
      video.pause();
    }
  };

  const seekVideo = (seconds: number) => {
    const video = videoRef.current;

    if (!video) return;

    const duration = Number.isFinite(video.duration)
      ? video.duration
      : video.currentTime + seconds;

    video.currentTime = Math.max(
      0,
      Math.min(video.currentTime + seconds, duration)
    );
  };

  const openViewer = () => {
    const video = videoRef.current;

    if (video) {
      video.pause();
    }

    setPlaying(false);
    setViewerOpen(true);
  };

  return (
    <>
      <motion.article
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -8,
        }}
        className="group h-full"
      >
        <div
          className="
            h-full overflow-hidden
            rounded-[26px] bg-white p-3
            shadow-[0_15px_45px_rgba(0,0,0,0.08)]
            transition-all duration-500
            group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
          "
        >
          <div className="relative h-[300px] overflow-hidden rounded-[20px] bg-black">
            <video
              ref={videoRef}
              src={src}
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              className="h-full w-full object-cover"
            />

            {/* Clickable video overlay */}
            <button
              type="button"
              aria-label={`Open video: ${alt}`}
              onClick={openViewer}
              className="
                absolute inset-0 z-10
                flex cursor-zoom-in
                items-center justify-center
                bg-black/0
                transition-colors duration-500
                group-hover:bg-black/30
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-inset
                focus-visible:ring-[#C6A46A]
              "
            >
              <span
                className="
                  flex h-14 w-14
                  scale-75 items-center justify-center
                  rounded-full border border-white/30
                  bg-white/15 text-white
                  opacity-0 backdrop-blur-md
                  transition-all duration-500
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              >
                <FiMaximize2 size={22} />
              </span>
            </button>
          </div>

          <VideoControls
            playing={playing}
            onPlayPause={togglePlay}
            onForward={() => seekVideo(5)}
            onBackward={() => seekVideo(-5)}
          />
        </div>
      </motion.article>

      <ServiceMediaLightbox
        open={viewerOpen}
        type="video"
        src={src}
        alt={alt}
        onClose={() => setViewerOpen(false)}
      />
    </>
  );
}