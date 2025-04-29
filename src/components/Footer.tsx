import { Legal, QuickLinks } from "@/constants";
import React from "react";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#151515] h-full mt-20">
      <div className="flex items-center justify-between">
        {/* booking */}
        <div className="flex flex-col ml-10 gap-8">
          <p className="uppercase text-white font-bold ">
            Book a Studio Session with <span>Cute Boka</span>
          </p>
          <p className="text-white">
            Session includes song writing, lyrics writing, recording & more.
            (Only for Melbourne)
          </p>
        </div>
        <button className="text-white mr-18 px-6 py-4 text-center text-xl bg-gradient-to-r from-[#945AED] to-[#E24AA2] rounded-md">
          Book Now
        </button>
      </div>
      {/* booking */}
      <hr className="border border-[#FAFAFA] mt-10 w-[93%] ml-10" />
      <div className="flex items-center justify-evenly py-10">
        {/* QUick links  */}
        <div className="flex flex-col gap-3 text-white mt-18">
          <p>Quick Links</p>
          {QuickLinks.map((item, idx) => (
            <div key={idx}>
              <a href={item.href}>{item.name}</a>
            </div>
          ))}
        </div>
        {/* Quick links */}

        {/* support */}
        <div className="text-white flex flex-col gap-3">
          <p>Support</p>
          <a href="/faq">FAQ</a>
          <a href="/helpcenter">Help Center</a>
        </div>
        {/* support */}

        {/* resources */}
        <div className="text-white flex flex-col gap-3">
          <p>Resources</p>
          <a>Blog</a>
          <a>Beat Pasal</a>
        </div>
        {/* resources */}

        {/* legal */}
        <div className="flex flex-col gap-3 text-white mt-26">
          <p>Legal</p>
          {Legal.map((item, idx) => (
            <div key={idx}>
              <a href={item.href}>{item.name}</a>
            </div>
          ))}
        </div>
        {/* legal */}

        {/* social media */}
        <div className="text-white mb-14">
          <p>Social Media</p>
          <div className="flex gap-2">
            <FaFacebook size={20} />
            <BsInstagram size={20} />
            <FaXTwitter size={20} />
            <BsLinkedin size={20} />
            <BsYoutube size={20} />
          </div>
        </div>
        {/* social media */}
      </div>
    </div>
  );
};

export default Footer;
