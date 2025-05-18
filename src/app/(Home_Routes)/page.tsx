"use client";
import BlogCard from "@/components/card/BlogCard";
import MusicCard from "@/components/card/MusicCard";
import { LandingPagePopUpForm } from "@/components/LandingPagePopUp";
import SearchBar from "@/components/SearchBar";
import CustomSwiperSlide from "@/components/SwiperSlide";
import { BlogCardData, Treading } from "@/constants";
import { FollowBtnProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsFire } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { FaDiscord, FaSpotify } from "react-icons/fa";

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(true);
  const followBtn: FollowBtnProps[] = [
    {
      Icon: <FaSpotify className="w-4 h-4 md:w-6 md:h-6 text-white" />,
      title: "Follow on Spotify",
      color: "#1DB95480",
    },
    {
      Icon: <CiYoutube className="w-5 h-5 md:w-6 md:h-6 text-white" />,
      title: "Watch on Youtube",
      color: "#FF000080",
    },
    {
      Icon: <FaDiscord className="w-5 h-5 md:w-6 md:h-6 text-white" />,
      title: "Join Discord",
      color: "#5865F280",
    },
  ];
  useEffect(() => {
    if (showPopUp) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [showPopUp]);

  return (
    <div className="overflow-hidden">
      <SearchBar logo="/img/Logo-wide 1.png" />
      {/* trending track */}
      <section className="globalContainer pb-9 md:pb-16">
        <h3 className="text-center text-base md:text-4xl font-bold horizon text-white ">
          <span className="bg-gradient-to-r from-[#B4C8F2] via-[#B4C8F2] to-[#E94DA1] text-transparent bg-clip-text">
            Premium
          </span>{" "}
          <br className="block md:hidden" />
          for <span className="horizon-outlined">Professionals</span>
        </h3>

        <div className="flex justify-between items-center py-4 md:py-12 text-[#FAFAFA]">
          <div>
            <h3 className="text-xs md:text-xl font-bold horizon pb-4">
              Trending <span className="horizon-outlined">Tracks</span>{" "}
              <BsFire className="inline -mt-2 ml-2" color="#FF5027" />
            </h3>
            <p className="hidden md:block font-normal">
              {`Discover what's hot in music right now`}
            </p>
          </div>
          <div className="flex gap-3">
            <div className="hidden lg:flex flex-wrap gap-3">
              {Treading.map((item, idx) => (
                <div
                  key={idx}
                  className="text-xs py-2 px-4 border border-[#252525] rounded-lg text-[#FAFAFA] hover:bg-[#252525] cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
            <Link
              href={"/viewallbeat"}
              className="text-xs py-2 px-4 -mt-5 md:mt-0 md:bg-gradient-to-r from-[#A655DA] to-[#D84BAB] rounded-lg text-[#FAFAFA] hover:bg-[#252525] cursor-pointer"
            >
              View all
            </Link>
          </div>
        </div>

        <div>
          <MusicCard />
        </div>
      </section>
      {/* trending track */}

      {/* Custom beat box  */}
      <section className="globalContainer pb-9 md:pb-16 flex items-center justify-center">
        <div className="relative w-[768px] h-[222px] bg-[#252525] text-center rounded-lg flex items-center justify-center">
          <div>
            <div className="w-[120px] h-[223px] bg-transparent border border-r-0 border-[#F03F9880] rounded-l-lg absolute top-0 left-0 -mt-[1px]"></div>
            <div className="w-[120px] h-[223px] bg-transparent border border-l-0 border-[#F03F9880] rounded-r-lg absolute top-0 right-0 -mt-[1px]"></div>
            <h1 className="horizon-outlined text-base md:text-xl text-[#FAFAFA] inline relative">
              Custom <span className="horizon">Beat </span>
              <span className="horizon text-xs md:text-sm inline md:-mt-2 ml-2 absolute bg-gradient-to-r from-[#E94DA1] to-[#B4C8F2] text-transparent bg-clip-text">
                PRO
              </span>
            </h1>
            <p className="text-[#8C9092] text-xs md:text-sm mt-4 px-16">
              Get a Customized High Quality beat to match your style.
            </p>
            <button className="text-xs md:text-[14px] py-2.5 md:py-3 px-4 bg-gradient-to-r from-[#A655DA] to-[#D84BAB] rounded-lg text-[#FAFAFA] hover:bg-[#252525] cursor-pointer mt-6 tracking-widest ">
              Explore more
            </button>
          </div>
        </div>
      </section>
      {/* Custom beat box  */}

      {/* Trusted client  */}
      <section className="globalContainer md:pt-4 pb-9 md:pb-20">
        <h1 className="text-[#FAFAFA] text-xs md:text-xl horizon text-center tracking-wide">
          Trusted by <span className="horizon-outlined">the BEST</span>
        </h1>
        <div className="-mt-2">
          <CustomSwiperSlide />
        </div>
      </section>
      {/* Trusted client  */}

      {/* Mixing Pro  */}
      <section className="globalContainer md:pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-20">
          <div className="relative w-full md:w-[616px] h-[250px] md:h-[640px]">
            <Image
              src={"/img/Mixingpro.jpg"}
              alt="mixingImg"
              width={1000}
              height={1000}
              className="object-cover w-full h-full object-[object-position:50%_10%] rounded-lg md:rounded-none"
            />
          </div>
          <div>
            <h1 className="horizon text-base md:text-5xl text-[#FAFAFA] inline tracking-widest relative">
              Mix<span className="horizon-outlined">ing</span>
              <span className="horizon text-[10px] md:text-xl inline md:-mt-2 ml-2 absolute bg-gradient-to-r from-[#E94DA1] to-[#B4C8F2] text-transparent bg-clip-text">
                PRO
              </span>
            </h1>

            <div className="md:w-[640px] ">
              <p className="text-[10px] md:text-3xl text-[#FAFAFA] md:mt-9 tracking-widest text-wrap">
                Industry-Standard Professional Vocal Mixing
              </p>
              <p className="mt-6 text-[#8C9092] tracking-widest text-[10px] md:text-base">
                {`An Immersive Cute Boka Experience while you let me transform your
              vocals into Industry Standard Perfection with professional-grade
              mixing using top-tier UAD plugins, ensuring your voice shines in
              any genre whether it’s pop, rap, or R&B. Crisp, Clean & Creative.
              "Your voice deserves the Premium treatment." - Cute Boka`}
              </p>
              <button className="text-xs md:text-[16px] py-2.5 md:py-3 px-4 bg-gradient-to-r mt-8 from-[#A655DA] to-[#D84BAB] rounded-lg text-[#FAFAFA] hover:bg-[#252525] cursor-pointer  tracking-widest ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Mixing Pro  */}

      {/* for creators  */}
      <section className="globalContainer py-10 md:pb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-4 md:gap-20">
          <div>
            <h1 className="horizon text-base md:text-5xl text-[#FAFAFA] tracking-widest">
              F<span className="horizon-outlined">or </span>
              <span className="horizon text-base md:text-5xl inline bg-gradient-to-r from-[#E94DA1] to-[#B4C8F2] text-transparent bg-clip-text">
                Creators
              </span>
            </h1>

            <div className="text-wrap md:w-[640px] ">
              <p className="text-[10px] md:text-3xl text-[#FAFAFA] md:mt-9 tracking-widest">
                Sell your own beats
              </p>
              <p className="mt-6 text-[#8C9092] tracking-widest text-[10px] md:text-base">
                {`Are you a Music Producer ? Do you want to start selling your own beats & make a profit ? Join me & the Top Producers of Nepal & start earning today.`}
              </p>
              <button className="text-xs md:text-[16px] py-2.5 md:py-3 px-4 bg-gradient-to-r mt-8 from-[#A655DA] to-[#D84BAB] rounded-lg text-[#FAFAFA] hover:bg-[#252525] cursor-pointer  tracking-widest ">
                Apply Now
              </button>
            </div>
          </div>

          <div className="relative w-full md:w-[616px] h-[250px] md:h-[640px]">
            <Image
              src={"/img/creators.jpg"}
              alt="mixingImg"
              width={1000}
              height={1000}
              className="object-cover w-full h-full object-[object-position:50%_10%] rounded-lg md:rounded-none"
            />
          </div>
        </div>
      </section>
      {/* for creators  */}

      {/* Who Is  */}
      <section className="globalContainer md:py-10 pb-10 md:pb-20">
        <div className="flex justify-center items-center w-full">
          <div className="text-[#FAFAFA] text-center">
            <h1 className="text-base md:text-3xl horizon text-center">
              Who is <span className="horizon-outlined">Cute Boka</span>
              <br className="block md:hidden" /> & Why{" "}
              <span className="bg-gradient-to-r from-[#F03F98] to-[#DB9078] text-transparent bg-clip-text">
                Cute Boka ?
              </span>
            </h1>

            <p className="text-[#8C9092] mt-4 md:mt-6 text-xs md:text-base ">
              {`Take a deeper dive into Cute Boka's Producer Community &`}
              <br className="hidden md:block" />{" "}
              {`learn more about the vision
              behind it.`}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 md:flex md:flex-row md:gap-6 md:justify-center">
              {followBtn.map((item, idx) => (
                <button
                  key={idx}
                  className={` text-[10px] md:text-sm py-4 px-2 md:px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer 
                  ${idx === 2 ? "col-span-2" : "col-span-1"} md:col-auto`}
                  style={{ backgroundColor: item.color }}
                >
                  {item.Icon}
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Who Is  */}

      {/* BlogCard  */}
      <section className="globalContainer md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {BlogCardData.slice(0, 3).map((item, idx) => (
            <BlogCard key={idx} item={item} />
          ))}
        </div>
        <div className="w-full text-center md:text-right mt-7">
          <Link
            href={"/blogs"}
            className="bg-gradient-to-r from-[#F03F98] to-[#9B24CB] text-transparent bg-clip-text text-lg cursor-pointer"
          >
            View More
          </Link>
        </div>
      </section>

      {/* BlogCard  */}

      {/* Drip  */}
      <section className="globalContainer py-10 md:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-4 md:gap-20">
          <div>
            <h1 className="horizon-outlined text-base md:text-5xl text-[#FAFAFA] inline tracking-widest relative">
              Dr<span className="horizon">ip</span>
              <span className="horizon text-[10px] md:text-xl inline md:-mt-2 ml-2 absolute bg-gradient-to-r from-[#E94DA1] to-[#B4C8F2] text-transparent bg-clip-text">
                TM
              </span>
            </h1>

            <div className="text-wrap md:w-[640px] ">
              <p className="text-[10px] md:text-3xl text-[#FAFAFA] mt-2 md:mt-9 tracking-widest">
                Cute Boka Drip
              </p>
              <p className=" mt-4 md:mt-6 text-[#8C9092] tracking-widest text-[10px] lg:text-base">
                {`Flashy & Unique drip to ensure people are turning their heads as they walk past you`}
              </p>
              <button className="text-xs md:text-[14px] py-2.5 md:py-3 px-4 bg-gradient-to-r mt-8 from-[#A655DA] to-[#D84BAB] rounded-lg text-[#FAFAFA] hover:bg-[#252525] cursor-pointer  tracking-widest ">
                Coming Soon
              </button>
            </div>
          </div>

          <div className="relative w-full md:w-[616px] h-[250px] md:h-[640px]">
            <Image
              src={"/img/trip.jpg"}
              alt="mixingImg"
              width={1000}
              height={1000}
              className="object-cover w-full h-full object-[object-position:50%_10%]"
            />
          </div>
        </div>
      </section>
      {/* Drip  */}

      {/* Landing page popup */}
      {showPopUp && (
        <div className="fixed inset-0 bg-black/50 transition-opacity duration-300 opacity-100 flex items-center justify-center z-50">
          <LandingPagePopUpForm onclose={() => setShowPopUp(false)} />
        </div>
      )}
      {/* Landing page popup */}
    </div>
  );
};

export default Home;
