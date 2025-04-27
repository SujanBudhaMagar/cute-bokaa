import MusicCard from "@/components/card/MusicCard";
import SearchBar from "@/components/SearchBar";
import { MusicCardData, Treading } from "@/constants";
import React from "react";
import { BsFire } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <SearchBar />

      {/* treading track */}
      <section className="globalContainer pb-16">
        <h3 className="text-center text-4xl font-bold horizon text-white">
          <span className="bg-gradient-to-r from-[#B4C8F2] via-[#B4C8F2] to-[#E94DA1] text-transparent bg-clip-text ">
            Premium
          </span>{" "}
          for <span className="horizon-outlined">Professionals</span>
        </h3>

        <div className="flex justify-between items-center py-12 text-[#FAFAFA]">
          <div>
            <h3 className="text-xl font-bold horizon pb-4">
              Trending <span className="horizon-outlined">Tracks</span>{" "}
              <BsFire className="inline -mt-2 ml-2" color="#FF5027" />
            </h3>
            <p className="font-normal">
              Discover what's hot in music right now
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {Treading.map((item, idx) => (
              <div
                key={idx}
                className="text-xs py-2 px-4 border border-[#252525] rounded-lg text-[#FAFAFA] hover:bg-[#252525] cursor-pointer"
              >
                {item}
              </div>
            ))}
            <button className="text-xs py-2 px-4 bg-gradient-to-r from-[#A655DA] to-[#D84BAB] rounded-lg text-[#FAFAFA] hover:bg-[#252525] cursor-pointer">
              View all
            </button>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-7">
          {MusicCardData.map((item, idx) => (
            <MusicCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </section>

      <section className="globalContainer pb-16 flex items-center justify-center">
        
        <div className="relative w-[768px] h-[222px] bg-[#252525] text-center rounded-lg flex items-center justify-center z-10">
          <div>
           <div className="w-[120px] h-[223px] bg-transparent border border-r-0 border-[#F03F9880] rounded-l-lg absolute top-0 left-0 -mt-[1px]">
           </div>
           <div className="w-[120px] h-[223px] bg-transparent border border-l-0 border-[#F03F9880 ] rounded-r-lg absolute top-0 right-0 -mt-[1px]">
           </div>
            <h1 className="horizon-outlined text-xl text-[#FAFAFA] inline relative">
              Custom <span className="horizon">Beat </span>
              <span className="horizon text-sm inline -mt-2 ml-2 absolute bg-gradient-to-r from-[#E94DA1] to-[#B4C8F2] text-transparent bg-clip-text">
                PRO
              </span>
            </h1>
            <p className="text-[#8C9092] text-sm mt-4">
              Get a Customized High Quality beat to match your style.
            </p>
            <button className="text-[14px] py-3 px-4 bg-gradient-to-r from-[#A655DA] to-[#D84BAB] rounded-lg text-[#FAFAFA] hover:bg-[#252525] cursor-pointer mt-6 tracking-widest ">
              Explore more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
