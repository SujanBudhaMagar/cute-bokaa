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
import LogoComp from "@/components/LogoComp";
import PricingSection from "@/components/pricing-section";

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
      <LogoComp />
      <div
        className={`absolute w-[210px] md:w-[585px] h-[15vh] md:h-[20vh] rounded ${
          blinkTarget === "div1" ? "blinking-border" : ""
        }`}
      ></div>

      <div className="flex flex-col items-center justify-around md:justify-between">
        <div className="flex flex-col items-center justify-center relative w-full">
          <div className="flex items-center justify-center mb-10">
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
        <div className="flex flex-col md:flex-row items-center justify-center  gap-10 md:my-14 my-6 md:gap-18">
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
          <div className="flex flex-col p-3 gap-3">
            {CustomBeatData.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <div className="mr-3">{item.icon}</div>
                <p className="text-sm md:text-base text-[#FAFAFA]">
                  {item.des}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* features */}
      </div>
      {/* packages */}
      <div className="flex flex-col items-start mt-10 gap-2 globalContainer">
        <p className="horizon text-xl md:text-3xl text-white ml-5">
          Beat{" "}
          <span className="horizon-outlined text-xl md:text-3xl">Package</span>
        </p>
        <div className="flex items-end gap-1 md:gap-3 ml-5 mt-2">
          <p className="bg-gradient-to-r from-[#B5C8F2] to-[#E04AA3] text-transparent bg-clip-text text-3xl md:text-5xl horizon">
            $199.99
          </p>
          <p className="text-[10px] md:text-sm text-[#8C9092] mb-2 md:mb-3">
            base price
          </p>
        </div>

        {/* customize package */}
        <p className="horizon-outlined text-xl md:text-3xl text-white text-center md:text-start tracking-widest ml-5 mt-4 md:mt-1">
          Customize{" "}
          <span className="horizon text-xl md:text-3xl">Your Package</span>
        </p>
        <div className="w-full">
          <PricingSection services={Packages} />
        </div>
        <p className="horizon-outlined text-xl md:text-3xl text-center text-white w-full tracking-widest">
          Our <span className="horizon">Clients</span>
        </p>
        {/* customize package */}
        <CustomSwiperSlide />
      </div>
      {/* packages */}
    </div>
  );
};

export default CustomBeat;
