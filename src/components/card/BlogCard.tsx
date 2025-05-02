import { blogCardprops } from "@/types";
import Image from "next/image";
import React from "react";

const BlogCard = ({ item }: { item: blogCardprops }) => {
  return (
    <div>
      <div className="relative overflow-hidden  rounded-lg">
        <div className="relative w-full h-[195px]">
          <Image
            src={item.img}
            alt="blogCardImg"
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-[#FAFAFA] text-left mt-4 md:mt-6 text-[10px] lg:text-base">{item.title}</h1>

        <div className="flex items-center gap-5 mt-4 md:mt-9">
          <div className="relative w-[40px] h-[40px]">
            <Image
              src={item.authorImg}
              alt="blogCardImg"
              width={1000}
              height={1000}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="text-left text-[#FAFAFA] text-[10px] lg:text-base">
            <h4>{item.autName}</h4>
            <p className="text-sm text-[10px]  lg:text-base">{item.autWork}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
