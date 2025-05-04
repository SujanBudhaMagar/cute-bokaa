"use client";
import LogoComp from "@/components/LogoComp";
import PricingSection from "@/components/pricing-section";
import CustomSwiperSlide from "@/components/SwiperSlide";
import { comparisonData, services } from "@/constants";
import { PaymentIn } from "@/types";
import Image from "next/image";
import {
  FaPlay,
  FaWater,
  FaMusic,
  FaVolumeUp,
  FaCompressAlt,
  FaGuitar,
  FaFire,
  FaStar,
  FaFrown,
} from "react-icons/fa";
import { MdOutlineWaves, MdAutoAwesome } from "react-icons/md";
import { SwiperSlide } from "swiper/react";

const creative: PaymentIn[] = [
  {
    icon: <MdAutoAwesome color="#014AE6" />,
    name: "Revamped Intro & Outro",
  },
  {
    icon: <FaMusic color="#B5C8F2" />,
    name: "Complete Hook Transformed w/ Ear Candies",
  },
  {
    icon: <FaWater color="#DB9078" />,
    name: "Underwater & Halftime Effects",
  },
  {
    icon: <MdOutlineWaves color="#8B5CF6" />,
    name: "Reverse Reverb & Psycha Delay Magic",
  },
  {
    icon: <FaStar color="#F03F98" />,
    name: "Additional Cute Boka Touch of Creative SFXs",
  },
];

const Premium: PaymentIn[] = [
  {
    icon: <FaVolumeUp color="#F03F98" />,
    name: "The Good Stuffs(eq & all)",
  },
  {
    icon: <FaStar color="#B5C8F2" />,
    name: "Clean & Crisp Vocal Creaming",
  },

  {
    icon: <FaCompressAlt color="#014AE6" />,
    name: "Parallel Comp & Sidechain",
  },
  {
    icon: <FaGuitar color="#8B5CF6" />,
    name: "Beat Chops & Tape Stops",
  },
  {
    icon: <FaFire color="#DB9078" />,
    name: "Saturation for Harmonics",
  },
];

const Home = () => {
  return (
    <main className="text-white globalContainer">
      <LogoComp />
      {/* Header */}
      <section className="pb-10 text-center">
        <h1 className="horizon text-base md:text-6xl text-[#FAFAFA] inline tracking-widest relative">
          Mix<span className="horizon-outlined">ing</span>
          <span className="horizon text-[10px] md:text-3xl inline md:-mt-2 ml-2 absolute bg-gradient-to-r from-[#E94DA1] to-[#B4C8F2] text-transparent bg-clip-text">
            PRO
          </span>
        </h1>

        <p className="mt-4 text-xs md:text-base text-center px-0 lg:px-40 leading-relaxed">
          An Immersive Cute Boka Experience while you let Cute Boka transform
          your vocals into Industry Standard Perfection with professional-grade
          mixing using top-tier UAD plugins, ensuring your voice shines in any
          genre whether it's pop, rap, or R&B. Crisp, Clean & Creative. Your
          voice deserves the Premium treatment.
        </p>
      </section>

      {/* Main Content */}
      <div className="px-4 py-0 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Creative Sauce */}
          <div className="mt-10">
            <h2 className="mb-8 text-xl horizon">
              <span className="bg-gradient-to-r from-[#E94DA1] to-[#B4C8F2] text-transparent bg-clip-text">
                CREATIVE
              </span>
              <span className="text-white horizon-outlined ml-2"> SAUCE</span>
            </h2>

            <div className="flex flex-col justify-between gap-10 lg:gap-28">
              <ul className="space-y-6 lg:h-[230px]">
                {creative.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="text-blue-400 text-2xl mt-1 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-zinc-900 rounded-lg py-3.5 px-5 w-full ">
                <div className="text-center mb-4">
                  <h3 className="text-base">Before Mixing</h3>
                  <p>(Raw Audio)</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full">
                    <FaPlay className="text-white" />
                  </button>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="w-1/3 h-full bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Image */}
          <div>
            <div className="relative border-[1px] border-[#9B24CB] rounded-lg overflow-hidden w-full">
              <Image
                src="/img/mixingpro1.jpg"
                alt="DJ mixing at a concert"
                width={1000}
                height={1000}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Premium Treatment */}
          <div className="mt-10">
            <h2 className="mb-8 text-xl horizon">
              <span className="bg-gradient-to-r from-[#E94DA1] to-[#B4C8F2] text-transparent bg-clip-text">
                PREMIUM
              </span>
              <span className="text-white horizon-outlined ml-2">
                {" "}
                TREATMENT
              </span>
            </h2>

            <div className="flex flex-col gap-10 lg:gap-32 ">
              <ul className="space-y-6 lg:h-[230px]">
                {Premium.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="text-blue-400 text-2xl mt-1 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-zinc-900 rounded-lg py-3.5 px-5">
                <div className="text-center mb-4">
                  <h3>After Mixing</h3>
                  <p>(Professionally Enhanced)</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full">
                    <FaPlay className="text-white" />
                  </button>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="w-1/3 h-full bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h1 className="horizon text-xl md:text-3xl text-center mt-10 md:mt-20">
          Mixing <span className="horizon-outlined">Package</span>
        </h1>
        <h4 className="text-center bg-gradient-to-r from-[#B5C8F2]  to-[#E04AA3] text-transparent bg-clip-text text-xl md:text-5xl">
          <span className="horizon">$149.99</span>{" "}
          <span className="font-none text-sm text-[#8C9092] tracking-widest">
            base price
          </span>
        </h4>

        <h1 className="horizon-outlined text-sm md:text-xl text-center mt-5 md:mt-9">
          Customize <span className="horizon">your package</span>
        </h1>
        <PricingSection services={services} />
      </section>

      <section className="py-20">
        <h1 className="horizon text-xl md:text-3xl text-center">
          THE DIFFERENCE:{" "}
          <span className="horizon-outlined">WHY CUte boka!</span>
        </h1>

        <div className="overflow-x-auto mt-10">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-1/3 py-6"></th>
                <th className="w-1/3 py-6 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <FaFrown className="text-4xl mb-2" />
                    <span className="text-lg font-sans font-normal">
                      Regular Producer
                    </span>
                  </div>
                </th>
                <th className="w-1/3 py-6 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src="/img/Logo-wide 1.png"
                      alt="none"
                      height={80}
                      width={80}
                    />
                    <span className="text-lg font-sans font-normal">
                      Cute Boka
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-t border-[#FAF8F0]">
                  <td className="py-4 px-4 tracking-widest ">{row.category}</td>
                  <td className="py-4 pl-36 tracking-widest ">{row.regular}</td>
                  <td className="py-4 pl-28  tracking-widest">
                    {row.cuteboka}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-32 mt-10">
        <h1 className="horizon-outlined text-xl md:text-3xl text-center">
          our
          <span className="horizon"> clients</span>
        </h1>
        <CustomSwiperSlide />
      </section>
    </main>
  );
};

export default Home;
