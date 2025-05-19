"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";

const SearchBar = ({ logo }: { logo: string }) => {
  const treading = ["pop", "dark", "drill"];
  const Mood = [
    "all",
    "sad",
    "happy",
    "had",
    "angry",
    "cheerful",
    "passionate",
  ];

  const [Moodfil, setMoodfil] = useState(false);

  return (
    <div>
      <div className="globalContainer py-10 md:py-16 flex gap-20">
        <div>
          <div className="relative mb-4 w-fit">
            <input
              type="text"
              placeholder="Search beats, producers..."
              className="bg-[#FAF8F01A] rounded-lg py-5 px-5 text-xs border  blinking-border outline-none w-[358px] md:w-[450px] placeholder-[#8C9092] text-[#8C9092] placeholder:text-[10px] md:placeholder:text-xs"
            />
            <div className="w-fit flex gap-3 md:gap-5 items-center text-[#FAFAFA] absolute top-3 right-5">
              <div className="flex gap-2 items-center">
                <p
                  className="text-[10px] md:text-sm cursor-pointer"
                  onClick={() => setMoodfil(!Moodfil)}
                >
                  Mood
                </p>
                <span
                  className="cursor-pointer"
                  onClick={() => setMoodfil(!Moodfil)}
                >
                  <IoIosArrowDown />
                </span>
              </div>

              <div className="bg-[#FAFAFA] p-2 text-4 text-primary rounded-full w-fit cursor-pointer">
                <IoIosSearch />
              </div>
            </div>
            {Moodfil && (
              <div className="bg-[#252525] p-5 w-fit rounded-lg absolute top-17 right-2">
                {Mood.map((item, idx) => (
                  <p
                    key={idx}
                    className="capitalize text-[#8C9092] text-sm cursor-pointer hover:text-[#FAFAFA]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Trending Section */}
          <div className="md:flex items-center gap-2">
            <h2 className=" text-[10px] md:text-xs text-[#FAFAFA]">
              {`What's trending right now:`}
            </h2>
            <div className="flex flex-wrap gap-2 md:gap-3 mt-3.5 md:mt-0">
              {treading.map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] md:text-xs py-2 px-4 border border-[#252525] rounded-lg text-[#FAFAFA] hover:bg-[#252525] cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Link href={"/"}>
          <div className="hidden  md:block w-[250px] h-full">
            <Image
              src={logo}
              alt="logo"
              width={1000}
              height={1000}
              className="object-center w-full h-auto"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
