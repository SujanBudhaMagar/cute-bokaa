import MusicCard from "@/components/card/MusicCard";
import LogoComp from "@/components/LogoComp";
import Image from "next/image";
import React from "react";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Producer = () => {
  return (
    <div className="bg-primary overflow-hidden">
      <div className="flex flex-col items-center justify-between ">
        <LogoComp />
        <div className="flex flex-col md:flex-row items-center justify-between gap-9 px-10 md:py-10 py-14 globalContainer">
          <Image
            src="/img/producer.jpg"
            alt="Not found"
            height={1000}
            width={1000}
            className="h-[240px] w-[350px] md:h-[410px] md:w-[640px]"
          />
          <div className="flex flex-col items-start">
            <h1 className="text-[#FAFAFA] text-xl md:text-3xl tracking-widest mb-4">
              Producer Page
            </h1>
            <p className="text-[#8C9092] text-sm md:text-base w-80 md:w-[580px] tracking-widest mb-7 md:mb-11">
              Award-winning music producer specializing in hip-hop and
              electronic beats. Based in Los Angeles.
            </p>
            <div className="flex gap-4 text-white mb-4 md:mb-9">
              <BsInstagram size={24} />
              <BsYoutube size={24} />
              <BsSpotify size={24} />
              <IoMdMail size={24} />
            </div>
            <button className="rounded-2xl bg-gradient-to-r from-[#9B58E6] to-[#E94CA1] text-[#FAFAFA] px-5 py-4 tracking-widest">
              Explore Beats
            </button>
          </div>
        </div>
        <div className="flex flex-col globalContainer my-10 gap-6 md:py-10 py-4">
          <h1 className="text-lg md:text-3xl horizon-outlined text-white tracking-widest w-80 md:w-full">
            More Beats <span className="horizon">from this producer</span>
          </h1>
          <div>
            <MusicCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producer;
