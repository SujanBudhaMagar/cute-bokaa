"use client";
import { MusicCardProps } from "@/types";
import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { MusicCardData } from "@/constants";
import Link from "next/link";

const MusicCard = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 2.3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4.5,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 18,
        },
      }}
    >
      {MusicCardData.map((item, idx) => (
        <SwiperSlide
          className={`relative w-[145px] cursor-pointer overflow-hidden bg-[#252525] rounded-lg shadow-sm 
          }`}
        >
          <Link href={"/beat"}>
            <div className="relative w-full h-[145px]">
              <Image
                src={item.img}
                alt="musicImg"
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="py-2.5 px-1.5">
              <h4 className="text-xs text-[#FAFAFA]">{item.title}</h4>
              <p className="text-[10px] text-[#8C9092] mt-1">{item.des}</p>

              <div className="flex items-center justify-between pt-3 text-[#FAFAFA]">
                <p className="text-xs">${item.price}</p>
                <button className="text-[10px] py-1.5 px-4 bg-[#151515] rounded-[6px]">
                  Buy
                </button>
              </div>
            </div>
            <div className="absolute top-1 right-1 p-1.5 bg-[#25252580] rounded-full cursor-pointer">
              <FaRegHeart color="white" size={16} />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MusicCard;
