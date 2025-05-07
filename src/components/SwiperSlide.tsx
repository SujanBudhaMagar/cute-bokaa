import React from "react";
import { FaWebflow } from "react-icons/fa6";
import { FaCube } from "react-icons/fa";

const baseSlides = [
  { icon: <FaCube size={30} />, title: "Relume" },
  { icon: <FaWebflow size={30} />, title: "Webflow" },
];

const CustomSwiperSlide = () => {
  const repeatedSlides = Array.from(
    { length: 150 }, // Increase the number of slides for smoothness
    (_, i) => baseSlides[i % baseSlides.length]
  );

  return (
    <div className="w-full mt-3 md:mt-2 h-14 md:h-20 relative overflow-hidden">
      <div className="relative w-full h-full animate-slide gap-3">
        {repeatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex px-4 text-[#D4D4D4] items-center gap-3"
          >
            {slide.icon}
            <p className="font-bold text-xl md:text-2xl whitespace-nowrap">
              {slide.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSwiperSlide;
