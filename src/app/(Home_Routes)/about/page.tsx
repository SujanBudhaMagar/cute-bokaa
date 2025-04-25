"use client";
import AboutCard from "@/components/card/AboutCard";
import { SpotifyData, YoutubeData } from "@/constants";
import horizon from "@/lib/horizon";
import Image from "next/image";
import { BsInstagram, BsLinkedin, BsSpotify, BsYoutube } from "react-icons/bs";

const About = () => {
  return (
    <div className="bg-primary overflow-hidden">
      <div className="bg-black h-screen">
        {/* details */}
        <div className="flex flex-col items-center h-full global-container">
          <Image
            src="/img/logo.png"
            alt="Logo"
            height={150}
            width={150}
            className="hidden md:block"
          />
          <div className="flex items-center justify-evenly h-full w-full">
            <div className="w-[48%]">
              <div className="inline-block">
                <p className="text-white text-lg md:text-4xl font-bold leading-tight tracking-widest">
                  HELLO, I'M MIKE
                </p>
                <p className="inline-block px-1 mt-1 text-lg md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#F03F98] tracking-widest">
                  SHRESTHA
                </p>
              </div>
              <hr className="border-[#F03F98] border-t my-4 w-32" />
              <p className="text-[#8C9092] md:text-xl text-sm">
                A creative developer and content creator passionate about
                building immersive digital experiences. With over 8 years of
                experience in web development and digital content creation.
              </p>
              <div className="flex gap-4 mt-6">
                <BsYoutube className="text-white" size={30} />
                <BsSpotify className="text-white" size={30} />
                <BsLinkedin className="text-white" size={30} />
                <BsInstagram className="text-white" size={30} />
              </div>
            </div>
            <div>
              <Image
                src="/img/mike.png"
                alt="Mike Shrestha"
                height={350}
                width={430}
              />
            </div>
          </div>
        </div>
        {/* details */}
      </div>

      <div className="flex items-center justify-center h-full flex-col w-full">
        <p
          className={`text-white font-bold text-3xl my-16 ${horizon.className}`}
        >
          LATEST{" "}
          <span className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            WORKS
          </span>
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-14 w-full">
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
