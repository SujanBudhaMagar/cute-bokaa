import { ArtistData } from "@/constants";
import React from "react";

const CustomSwiperSlide = () => {
  const repeatedSlides = Array.from(
    { length: 150 }, // Increase the number of slides for smoothness
    (_, i) => ArtistData[i % ArtistData.length]
  );

  return (
    <div className="w-full mt-3 md:mt-2 h-14 md:h-20 overflow-hidden">
      <div className=" w-full h-full marquee-track">
        {repeatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex bg-gradient-to-r pr-9 from-[#B7BFEC] to-[#D37EC1] bg-clip-text text-transparent items-center gap-3"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z"
                fill="url(#paint0_linear_2231_9436)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2231_9436"
                  x1="8"
                  y1="-1.5"
                  x2="8"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.198342" stopColor="#B7BFEC" />
                  <stop offset="1" stopColor="#D37EC1" />
                </linearGradient>
              </defs>
            </svg>

            <p className="font-bold whitespace-nowrap horizon text-xl md:text-2xl">
              {slide.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSwiperSlide;
