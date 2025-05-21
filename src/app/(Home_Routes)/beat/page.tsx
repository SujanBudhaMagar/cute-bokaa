import React from "react";
import Image from "next/image";
import PricingCard from "@/components/card/Pricing-Card";
import AudioPlayer from "@/components/card/Audio-Player";
import { FaCrown } from "react-icons/fa6";

import LogoComp from "@/components/LogoComp";
import MusicCard from "@/components/card/MusicCard";
import Link from "next/link";
import { FeatureProps } from "@/types";

const AudioArray = ["140 BPM", "Trap", "Am"];
const standardFeatures: FeatureProps[] = [
  { name: <p>High Quality WAV Version</p>, available: true },
  { name: <p>Radio Play & Profit Live Performance</p>, available: true },
  {
    name: (
      <p>
        <span className="line-through">Unlimited Streams</span> 50,000 Streams
      </p>
    ),
    available: false,
  },
  {
    name: (
      <p>
        <span className="line-through">Unlimited Rights </span> Limited Rights
      </p>
    ),
    available: false,
  },
  { name: <p>Free Performance Version</p>, available: false },
  { name: <p>Producer Tag</p>, available: false },
];

const premiumFeatures: FeatureProps[] = [
  { name: <p>Fully Customized Beat with STEMS</p>, available: true },
  { name: <p>Exclusive License with Full Rights</p>, available: true },
  { name: <p>Unlimited Streams</p>, available: true },
  { name: <p>Free Performance Version</p>, available: true },
  { name: <p>Radio Play & Profit Live Performance</p>, available: true },
  { name: <p>Remove Producer Tag</p>, available: true },
];

const Beat = () => {
  return (
    <main className="globalContainer overflow-hidden">
      <LogoComp />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Standard Package */}
        <div className="bg-[#252525] rounded-lg px-6 pt-3 pb-6 h-fit">
          <div className="mb-12">
            <p className="text-[10px] py-1.5 px-2.5 bg-primary text-white text-right w-fit rounded-lg ml-auto">
              Limited Rights
            </p>
            <h2 className="text-base md:text-xl text-white text-center horizon-outlined mt-2">
              <span className="bg-gradient-to-r from-[#F03F98] via-[#B4C8F2] to-[#B4C8F2] text-transparent bg-clip-text horizon">
                STANDARD
              </span>{" "}
              PACKAGE
            </h2>
            <p className="text-xl md:text-3xl text-white md:mt-1 text-center">
              $29.99
            </p>
          </div>

          <PricingCard features={standardFeatures} />

          <button className="w-full bg-white text-primary py-3 rounded-md mt-6 font-medium hover:bg-zinc-200 transition-colors">
            Select Package
          </button>
        </div>

        {/* Audio Player */}
        <div className="flex flex-col items-center">
          <div className="relative w-full h-[295px] mb-4 rounded-lg overflow-hidden">
            <Image
              src="/img/beat.jpg"
              alt="Audio waveform visualization"
              width={1000}
              height={1000}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="-mt-10 md:mt-5">
            <AudioPlayer
              title="Electric Soul"
              sub="Neon Beats"
              Array={AudioArray}
            />
            <div className="flex gap-2 mt-10 w-full">
              <Link
                href={"cart"}
                className="flex-1 text-center bg-gradient-to-r from-[#9B58E6] to-[#E94CA1] text-white py-4  rounded-lg border border-[#8C9092] "
              >
                Buy Now
              </Link>

              <Link
                href={"/cart"}
                className="flex-1 flex items-center justify-center bg-transparent border border-[#8C9092] text-white py-4  rounded-lg"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>

        {/* Premium Package */}
        <div className="bg-[#252525] rounded-lg px-6 pt-3 pb-6 relative h-fit">
          <div className="absolute top-3 left-8 ">
            <FaCrown className="text-white w-8 h-7" />
          </div>
          <div className="mb-7 md:mb-12">
            <p className="text-[10px] py-1.5 px-2.5 bg-primary text-white text-right w-fit rounded-lg ml-auto">
              Exclusive Rights
            </p>
            <h2 className="text-base md:text-xl text-white text-center horizon-outlined mt-2">
              <span className="bg-gradient-to-r from-[#F03F98] via-[#B4C8F2] to-[#B4C8F2] text-transparent bg-clip-text horizon">
                Premium
              </span>{" "}
              PACKAGE
            </h2>
            <p className="text-xl md:text-3xl text-white mt-1 text-center">
              $199.99
            </p>
          </div>

          <PricingCard features={premiumFeatures} />

          <button className="w-full bg-white  text-primary py-3 rounded-md mt-6 font-medium hover:bg-zinc-200 transition-colors">
            Select Package
          </button>
        </div>
      </div>

      <section className="globalContainer py-10 md:py-20">
        <h1 className="horizon-outlined text-base md:text-3xl text-white mb-9">
          Top Selling <span className="horizon">Tracks RIGHT NOW</span>
        </h1>
        <MusicCard />
      </section>
    </main>
  );
};

export default Beat;
