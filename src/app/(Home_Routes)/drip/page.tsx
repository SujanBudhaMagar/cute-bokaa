"use client";
import DripSwiper from "@/components/card/DripSwiper";
import LogoComp from "@/components/LogoComp";
import CustomSwiperSlide from "@/components/SwiperSlide";
import { ProductData } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Drip = () => {
  return (
    <div className="bg-primary min-h-screen overflow-hidden">
      <div className="flex flex-col items-center">
        <LogoComp />
        {/* section1 */}
        <div className="flex flex-col items-center justify-evenly globalContainer w-full">
          <p className="uppercase horizon text-xl md:text-3xl text-white tracking-widest mt-4">
            Rock{" "}
            <span className="horizon-outlined text-xl md:text-3xl text-white tracking-widest mt-4">
              the Beat.
            </span>
          </p>
          <p className="horizon-outlined uppercase text-xl md:text-3xl text-white tracking-widest mt-4">
            wear{" "}
            <span className="horizon text-xl md:text-3xl text-white tracking-widest mt-4">
              the drip.
            </span>
          </p>
          {/* section1 */}

          {/* products section */}
          <div className="grid grid-cols-2 md:grid-cols-4 md:flex-wrap md:gap-14 gap-6 justify-center py-12">
            {ProductData.map((item, idx) => (
              <div
                key={idx}
                className="h-[320px] w-[160px] md:h-[330px] md:w-[230px] rounded-md shadow-lg "
              >
                <div className="h-[250px] w-full">
                  <Image
                    src={item.image}
                    alt="None"
                    height={250}
                    width={230}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex justify-between p-2">
                  <p className="text-[#FAFAFA] text-sm md:text-base">
                    {item.name}
                  </p>
                  <FaCartShopping className="text-white h-6 w-6 md:h-8 md:w-8" />
                </div>
                <p className="text-[#8C9092] text-sm md:text-base">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
          {/* products section */}
          <p className="horizon text-base md:text-2xl text-white mt-2 tracking-widest">
            Trusted By{" "}
            <span className=" horizon-outlined text-white">The Best</span>
          </p>
          <CustomSwiperSlide />
        </div>
      </div>
      {/* section 2 */}
      <div className="flex flex-col items-center justify-between globalContainer overflow-hidden gap-3 mt-14 md:mt-20">
        <p className="horizon text-white text-xl md:text-3xl tracking-widest">
          Worn by <span className="horizon-outlined">the Best</span>
        </p>
        <p className="text-[#8C9092] text-sm md:text-base text-center mb-9 md:mb-16">
          Join the elite community of producers and artists who trust our brand
        </p>
        {/* animated slides */}
        <DripSwiper />
        {/* animated slides */}
      </div>
      {/* section 2 */}
    </div>
  );
};

export default Drip;
