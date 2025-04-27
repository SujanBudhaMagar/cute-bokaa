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
      <section className="globalContainer pb-10">
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
              {`Discover what's hot in music right now`}
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

      <section>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black flex flex-col items-center justify-center p-4 text-white">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-5xl font-bold mb-8 tracking-wider">
              CUSTOM BEAT PRO
            </h1>

            <p className="text-xl mb-10 leading-relaxed">
              Get a Customised High Quality beat to match your style.
            </p>

            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg mb-6 transition duration-300 transform hover:scale-105">
              Explore more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
