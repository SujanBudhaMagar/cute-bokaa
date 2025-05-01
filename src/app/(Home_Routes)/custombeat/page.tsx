"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { RxMixerHorizontal } from "react-icons/rx";
import { HiFire } from "react-icons/hi";
import { CiLink } from "react-icons/ci";
import { FaTape } from "react-icons/fa";
import { CustomBeatProps } from "@/types";
import { Packages } from "@/constants";
import CustomSwiperSlide from "@/components/SwiperSlide";

export const CustomBeatData: CustomBeatProps[] = [
  {
    icon: <RxMixerHorizontal size={24} className="text-[#F03F98]" />,
    des: "Full control over the mix",
  },
  {
    icon: <IoMdStar size={24} className="text-[#B5C8F2]" />,
    des: "Multiple revisions",
  },
  {
    icon: <CiLink size={24} className="text-[#DB9078] rotate-[120deg]" />,
    des: "Separated tracks",
  },
  {
    icon: <FaTape size={24} className="text-[#9B24CB]" />,
    des: "Master files on disk or download",
  },
  {
    icon: <HiFire size={24} className="text-[#014AE6]" />,
    des: "Signed contracts to provide publishing rights",
  },
];

const CustomBeat = () => {
  const [blinkTarget, setBlinkTarget] = useState<"div1" | "image">("div1");

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkTarget((prev) => (prev === "div1" ? "image" : "div1"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary overflow-hidden min-h-screen globalContainer">
      <div className="flex justify-center">
        <Image
          src="/img/logo.png"
          alt="Logo"
          height={100}
          width={100}
          className="object-contain md:block hidden"
        />
      </div>
      <div
        className={`absolute w-[190px] md:w-[585px] h-[15vh] md:h-[20vh] mt-10 rounded ${
          blinkTarget === "div1" ? "blinking-border" : ""
        }`}
      ></div>
      <div className="flex flex-col items-center justify-around md:justify-between md:h-[80vh] h-screen">
        <div className="flex flex-col items-center justify-center relative w-full">
          <div className="flex items-center justify-center my-10">
            <h1 className="text-white horizon text-xl md:text-3xl tracking-widest mt-2">
              Custom{" "}
              <span className="horizon-outlined text-xl md:text-3xl">Beat</span>
            </h1>
            <p className="bg-gradient-to-r from-[#F03F98] to-[#B5C8F2] text-transparent bg-clip-text text-sm md:text-xl mb-2 md:mb-4 ml-1 horizon">
              Pro
            </p>
          </div>
          <p className="text-sm md:text-base text-[#FAFAFA] text-center w-xs md:w-[750px]">
            At Custom Beat Pro, we specialize in creating high-quality,
            tailor-made beats that match your unique style. Elevate your music
            with precision-crafted sounds designed just for you.
          </p>
        </div>

        {/* features */}
        <div className="flex flex-col md:flex-row items-center justify-center globalContainer gap-10 mb-12 md:mb-6 md:gap-18">
          <div
            className={`w-fit rounded ${
              blinkTarget === "image" ? "blinking-border" : ""
            }`}
          >
            <Image
              src="/img/custombeat.jpg"
              alt="None"
              height={300}
              width={620}
              className="rounded-lg h-[240px] w-[340px] md:w-[622px] md:h-[320px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3">
            {CustomBeatData.map((item, idx) => (
              <div key={idx} className="flex">
                <div className="mr-3">{item.icon}</div>
                <p className="text-base text-[#FAFAFA]">{item.des}</p>
              </div>
            ))}
          </div>
        </div>
        {/* features */}
      </div>
      {/* packages */}
      <div className="flex flex-col items-start mt-10 gap-2">
        <p className="horizon text-xl md:text-3xl text-white">
          Beat{" "}
          <span className="horizon-outlined text-xl md:text-3xl">Package</span>
        </p>
        <div className="flex items-end gap-1 md:gap-3">
          <p className="bg-gradient-to-r from-[#B5C8F2] to-[#E04AA3] text-transparent bg-clip-text text-3xl md:text-5xl horizon">
            $199.99
          </p>
          <p className="text-[10px] md:text-sm text-[#8C9092] mb-2 md:mb-3">
            base price
          </p>
        </div>

        {/* customize package */}
        <div className="flex flex-col mt-4 w-full py-10 ">
          <p className="horizon-outlined text-base md:text-xl text-white tracking-widest">
            Customize{" "}
            <span className="horizon text-base md:text-xl">Your Package</span>
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            {Packages.map((item, idx) => (
              <div
                key={idx}
                className="flex  bg-[#252525] items-start justify-between h-36 w-96 px-4 py-6 rounded-xl"
              >
                <div className="flex flex-col gap-3">
                  <p className="text-white text-base">{item.name}</p>
                  <p className="text-[#8C9092] text-xs">{item.work}</p>
                  <p className="text-[#F472B6] text-xl md:text-xl">
                    {item.price}
                  </p>
                </div>
                <input type="checkbox" />
              </div>
            ))}
          </div>
          <div className="bg-[#252525] flex items-center justify-between w-full rounded-xl mt-6 px-5 py-8">
            <div className=" flex flex-col">
              <p className="text-white text-base md:text-xl mb-4 md:mb-2">
                Total
              </p>
              <p className="text-[#8C9092] text-sm md:text-base">
                Selected Items:3
              </p>
            </div>
            <div className=" flex flex-col">
              <p className="text-white text-base md:text-xl mb-2 t md:mb-2">
                $155
              </p>
              <button className="bg-gradient-to-r from-[#945AED] to-[#E6499E] rounded-2xl px-6 py-3 text-[#FAFAFA]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <p className="horizon-outlined text-3xl text-center text-white w-full tracking-widest">
          Our<span className="horizon text-3xl">Clients</span>
        </p>
        {/* customize package */}
        <CustomSwiperSlide />
      </div>
      {/* packages */}
    </div>
  );
};

export default CustomBeat;
