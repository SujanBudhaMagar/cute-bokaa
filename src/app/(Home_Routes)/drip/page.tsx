import CustomSwiperSlide from "@/components/SwiperSlide";
import { ProductData, WornData } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Drip = () => {
  const photoSlides = Array.from(
    { length: 150 }, // Increase the number of slides for smoothness
    (_, i) => WornData[i % WornData.length]
  );
  return (
    <div className="bg-primary min-h-screen overflow-hidden">
      <div className="flex flex-col items-center">
        <Image
          src="/img/logo.png"
          alt="Logo"
          height={150}
          width={150}
          className="hidden md:block mb-10"
        />
        {/* section1 */}
        <div className="flex flex-col items-center justify-between globalContainer w-full h-screen">
          <p className="uppercase horizon text-base md:text-3xl text-white tracking-widest mt-4">
            Rock{" "}
            <span className="horizon-outlined text-base md:text-3xl text-white tracking-widest mt-4">
              the Beat.
            </span>
          </p>
          <p className="horizon-outlined uppercase text-base md:text-3xl text-white tracking-widest mt-4">
            wear{" "}
            <span className="horizon text-base md:text-3xl text-white tracking-widest mt-4">
              the drip.
            </span>
          </p>
          {/* section1 */}

          {/* products section */}
          <div className="grid grid-cols-2 md:grid-cols-4 md:flex-wrap gap-6 justify-center py-12">
            {ProductData.map((item, idx) => (
              <div
                key={idx}
                className="h-[320px] w-[180px] md:h-[330px] md:w-[230px] rounded-md shadow-lg "
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
          <p className="horizon text-sm md:text-2xl text-white mt-2">
            Trusted By{" "}
            <span className="text-sm md:text-2xl horizon-outlined text-white">
              The Best
            </span>
          </p>
          <CustomSwiperSlide />
        </div>
      </div>
      {/* section 2 */}
      <div className="flex flex-col items-center justify-between globalContainer overflow-hidden gap-3 mt-20 md:mt-26">
        <p className="horizon text-white text-base md:text-3xl tracking-widest">
          Worn by{" "}
          <span className="horizon-outlined text-white text-sm md:text-3xl tracking-widest">
            the Best
          </span>
        </p>
        <p className="text-[#8C9092] text-sm md:text-base text-center">
          Join the elite community of producers and artists who trust our brand
        </p>
        {/* animated slides */}
        <div className="flex flex-nowrap gap-6 mt-14 animate-slide relative w-full">
          {photoSlides.map((item, idx) => (
            <div
              className="w-[200px] h-[320px] md:w-[330px] md:h-[320px] relative flex-shrink-0"
              key={idx}
            >
              <Image
                src={item.image}
                alt="none"
                height={1000}
                width={1000}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        {/* animated slides */}
      </div>
      {/* section 2 */}
    </div>
  );
};

export default Drip;
