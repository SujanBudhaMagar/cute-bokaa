import MusicCard from "@/components/card/MusicCard";
import SearchBar from "@/components/SearchBar";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const ViewAllBeat = () => {
  return (
    <div>
      <SearchBar logo={"/img/beatlogo.png"} />

      <h1 className="horizon text-base Md:text-xl tracking-widest globalContainer text-center text-white">
        Explore{" "}
        <span className="bg-gradient-to-r from-[#F03F98] via-[#F03F98] to-[#B5C8F2] text-transparent bg-clip-text">
          “pREmium beats”
        </span>{" "}
        from <span className="horizon-outlined">Top producers</span> of Nepal.
      </h1>

      <section className="globalContainer pt-10 md:pt-20 flex item-center justify-center">
        <div className="flex items-center justify-center gap-3">
          <div className="text-[10px] md:text-sm py-2 px-4 border border-[#252525] rounded-lg text-[#FAFAFA] hover:bg-[#252525] cursor-pointer">
            Genre <IoIosArrowDown className="inline text-base -mt-1 ml-1" />
          </div>
          <div className="text-[10px] md:text-sm py-2 px-4 border border-[#252525] rounded-lg text-[#FAFAFA] hover:bg-[#252525] cursor-pointer">
            BPM
            <IoIosArrowDown className="inline text-base -mt-1 ml-1" />
          </div>
        </div>
      </section>

      <section className="globalContainer py-10 md:py-20">
        <div>
          <h1 className="text-white text-sm mb-5">Chill</h1>
          <div className="space-y-5">
            <MusicCard />
            <MusicCard />
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-white text-sm mb-5">Dark</h1>
          <div className="space-y-5">
            <MusicCard />
            <MusicCard />
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-white text-sm mb-5">Sad</h1>
          <div className="space-y-5">
            <MusicCard />
            <MusicCard />
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-white text-sm mb-5">Drill</h1>
          <div className="space-y-5">
            <MusicCard />
            <MusicCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewAllBeat;
