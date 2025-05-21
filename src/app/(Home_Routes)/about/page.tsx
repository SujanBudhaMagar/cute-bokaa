"use client";
import AboutCard from "@/components/card/AboutCard";
import LogoComp from "@/components/LogoComp";
import { SpotifyData, YoutubeData } from "@/constants";

import Image from "next/image";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsSpotify,
  BsYoutube,
} from "react-icons/bs";

const About = () => {
  return (
    <div className="bg-primary  overflow-hidden">
      {/* details */}
      <div className="bg-[#000000] py-20 flex flex-col items-center">
        <LogoComp />
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly w-full globalContainer tracking-widest">
          <div className="w-full md:w-[55%] ml-4 ">
            <hr className="border-[#F03F98] border-t my-4 w-32" />
            <p className="text-[#8C9092] md:text-[16px] text-[10px]">
              {`Withdrawn & Introspective rapper Cute Boka rides hypnotic trap beats with his wavy sing or flaunting sleek flows, crafting a sonic blend that draws upon styles similar to contemporaries such as Young Thug, PnB Rock and NAV. His most notable collaboration Bhaagera & Lakshya with Sushant KC peaked at number #27 & #19 on YouTube Trending Charts (Nepal) and clocked over 2.5 Million streams worldwide. Having produced / engineered for notable artists like Sushant KC, Yodda, Chirag Khadka aka 5:55, Young Lama, NJK, Vyoma & Vek, Cute Boka is also known for his famous producer tag line “Lil Stone Finna Cook This Beat”. The Atlanta-Florida rap influenced producer who stamps his every beat with Tag has over 25 Million streams worldwide. Nepal born Hirak Hemant Bhattarai & alter ego disguised as Cute Boka had been steadily building a following performing a string of unreleased songs including “Harna Man Le Mandaina” at Local Clubs in Sydney which would lead to collaborate with Sushant KC & ABBOYE for his debut single Lakshya sampled in late Tara Devi’s “Ukali Orali Haruma”. His Before Cute Boka mixtape appeared in early 2019 which presented chock-full of versatile vocals and slick beats. The release was preceded by Sushant KC’s lead single “Bhaagera” featuring Cute Boka. And a year later, a quick turnaround with sophomore follow-up Lilac Fashion featuring the Local Sydney group 2oolit was released. The track was quickly co-signed by UK based RnB artist Jay Author who later hopped on for Lilac Fashion (Remix) with Sushant KC. He has then dropped songs like Dirty Kura Kani ft. Chirag (5:55) & Najeek REMIX ft. Oasis Thapa with a great success. He is currently managed & distributed by Silent Roar a Division of Warner Music.`}
            </p>

            <div className="flex gap-4 mt-6 text-white mb-5 md:mb-0">
              <Link href={"https://www.youtube.com/@lilrocklook/"}>
                <BsYoutube size={30} />
              </Link>
              <Link
                href={
                  "https://open.spotify.com/embed/artist/1onW0aoWIXT09Pb9REqwO5?utm"
                }
              >
                <BsSpotify size={30} />
              </Link>
              <Link href={"https://www.facebook.com/cutebokaofficial/"}>
                <BsFacebook size={30} />
              </Link>
              <Link href={"https://www.instagram.com/lilrocklook/"}>
                <BsInstagram size={30} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-t from-black via-[#9135A7] to-[#00AB36] blur-[300px] overflow-hidden">
              Hello
            </div>
            <Image
              src="/img/mike.png"
              alt="Mike Shrestha"
              height={1000}
              width={1000}
              className="relative h-[440px] w-[320px] md:h-[660px] md:w-[450px] mb-4 md:mb-0"
            />
          </div>
        </div>
      </div>
      {/* details */}

      <div className="flex items-center justify-center flex-col">
        <p className="horizon text-white font-bold text-3xl my-16">
          LATEST{" "}
          <span className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 horizon-outlined">
            WORKS
          </span>
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center globalContainer gap-14">
          {/* youtube */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <BsYoutube size={25} className="text-red-600 mt-1" />
              <p className="text-white font-bold text-2xl space-grotesk">
                Youtube Work
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {YoutubeData.map((item, index) => (
                <AboutCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  des={item.des}
                  btn={item.btn}
                  btnClass={item.btnClass}
                />
              ))}
            </div>
          </div>

          {/* spotify */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <BsSpotify size={25} className="text-green-600 mt-1" />
              <p className="text-white font-bold text-2xl space-grotesk">
                Spotify Work
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {SpotifyData.map((item, index) => (
                <AboutCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  des={item.des}
                  btn={item.btn}
                  btnClass={item.btnClass}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
