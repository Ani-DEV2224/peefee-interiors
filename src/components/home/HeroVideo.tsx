"use client";

export default function HeroVideo() {
  return (
    <video
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover

        brightness-[1.26]
        contrast-[1.0]
        saturate-[1.0]

        scale-[1.02]

        will-change-transform
      "
      src="/videos/Hero-Section_video.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}