"use client";
import AboutCard from "@/components/card/AboutCard";
import LogoComp from "@/components/LogoComp";
import { SpotifyData, YoutubeData } from "@/constants";

import Image from "next/image";
import { BsInstagram, BsLinkedin, BsSpotify, BsYoutube } from "react-icons/bs";

const About = () => {
  return (
    <div className="bg-primary overflow-hidden">
      {/* details */}
      <div className="bg-[#000000] flex flex-col items-center">
        <LogoComp />
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly w-full globalContainer ">
          <div className="w-full md:w-[55%] ml-4 ">
            <div className="inline-block">
              <p className="text-white text-xl md:text-4xl font-bold leading-tight tracking-widest horizon">
                {`HELLO, I'M MIKE`}
              </p>
              <p className="horizon inline-block px-1 mt-1 text-xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#F03F98] tracking-widest">
                SHRESTHA
              </p>
            </div>
            <hr className="border-[#F03F98] border-t my-4 w-32" />
            <p className="text-[#8C9092] md:text-xl text-sm">
              A creative developer and content creator passionate about building
              immersive digital experiences. With over 8 years of experience in
              web development and digital content creation.
            </p>
            <div className="flex gap-4 mt-6 text-white mb-5 md:mb-0">
              <BsYoutube size={30} />
              <BsSpotify size={30} />
              <BsLinkedin size={30} />
              <BsInstagram size={30} />
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
