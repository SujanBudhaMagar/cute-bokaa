import { FooterTopSectionProps } from "@/types";
import Link from "next/link";
import React from "react";

const FooterTopSection: React.FC<FooterTopSectionProps> = ({
  title,
  title2,
  des,
  link,
  button,
}) => {
  return (
    <div className="flex flex-col h-full md:flex-row items-center justify-between gap-5">
      <div className="flex flex-col justify-between gap-8 w-full md:w-[1080px]">
        <p className="text-white horizon text-base md:text-3xl tracking-widest">
          {title}
          <span className="horizon-outlined">{title2}</span>
        </p>
        <p className="text-white text-[12px] md:text-base mb-3 tracking-widest w-full">
          {des}
        </p>
      </div>
      <Link
        href={link}
        className=" text-white w-full md:w-1/6 py-4 text-center text-base md:text-xl bg-gradient-to-r from-[#945AED] to-[#E24AA2] rounded-md"
      >
        {button}
      </Link>
    </div>
  );
};

export default FooterTopSection;
