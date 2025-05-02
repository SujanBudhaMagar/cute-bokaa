import BlogCard from "@/components/card/BlogCard";
import LogoComp from "@/components/LogoComp";
import { BlogCardData } from "@/constants";
import React from "react";

const Blogs = () => {
  return (
    <div className="globalContainer">
      <LogoComp />
      <h1 className="horizon text-3xl text-white text-center">
        <span className="horizon-outlined">Explore</span>{" "}
        <span className="bg-gradient-to-r from-[#F03F98] to-[#B5C8F2] text-transparent bg-clip-text">
          Insights
        </span>
        , Tips & Stories
      </h1>

      {/* blog section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-10">
          {BlogCardData.map((item, idx) => (
            <BlogCard key={idx} item={item} />
          ))}
        </div>
      </section>
      {/* blog section */}
    </div>
  );
};

export default Blogs;
