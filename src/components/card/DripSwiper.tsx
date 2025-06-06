"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { WornData } from "@/constants";

// Repeat slides to avoid reset effect
const repeatedData = [...WornData, ...WornData, ...WornData];

const DripSwiper = () => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        loop={WornData.length > 3}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000} // smooth scroll speed
        spaceBetween={10}
        grabCursor={true}
        // allowTouchMove={false}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 2.5, spaceBetween: 15 },
          1024: { slidesPerView: 3.5, spaceBetween: 20 },
        }}
      >
        {repeatedData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-[333px]">
              <Image
                src={item.image}
                alt={`Worn item ${idx + 1}`}
                width={1000}
                height={1000}
                className="object-cover h-full w-full"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DripSwiper;
