"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BiPause, BiPlay } from "react-icons/bi";

interface AudioPlayerProps {
  title: string;
  sub: string;
  Array: string[];
}

const AudioPlayer = ({ title, sub, Array }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className="w-full flex gap-3">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-2"
        >
          {isPlaying ? (
            <BiPause className="w-10 h-10 text-black" />
          ) : (
            <BiPlay className="w-10 h-10 text-black ml-0.5" />
          )}
        </button>

        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-white mr-2.5 leading-5">{title}</h3>
            <div className="flex gap-2 text-xs text-zinc-400">
              {Array.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#252525] p-1.5 rounded-lg text-[10px]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Link href={"producer"}><p className="text-[12px] text-[#8C9092]">{sub}</p></Link>
        </div>
      </div>
      <div className="w-full h-4 bg-zinc-800 rounded-full my-6 overflow-hidden">
        <div
          className="h-full bg-[#8C9092] rounded-full"
          style={{ width: isPlaying ? "50%" : "20%" }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
