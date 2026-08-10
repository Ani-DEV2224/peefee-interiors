"use client";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";

type Props = {
  playing: boolean;
  onPlayPause: () => void;
  onForward: () => void;
  onBackward: () => void;
};

export default function VideoControls({
  playing,
  onPlayPause,
  onForward,
  onBackward,
}: Props) {
  return (
    <div className="mt-5 flex items-center justify-center gap-5">

      <button
        onClick={onBackward}
        className="rounded-full border border-[#C6A46A] p-4 text-[#C6A46A] transition hover:bg-[#C6A46A] hover:text-white"
      >
        <FaBackward />
      </button>

      <button
        onClick={onPlayPause}
        className="rounded-full bg-[#C6A46A] p-5 text-white transition hover:scale-105"
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>

      <button
        onClick={onForward}
        className="rounded-full border border-[#C6A46A] p-4 text-[#C6A46A] transition hover:bg-[#C6A46A] hover:text-white"
      >
        <FaForward />
      </button>

    </div>
  );
}