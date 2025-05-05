"use client";
import { FooterImage, Legal, QuickLinks } from "@/constants";
import React, { useState } from "react";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaAngleDown, FaFacebook, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import Image from "next/image";
import { IconProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FooterTopSection from "./FooterTopSection";

const Icons: IconProps[] = [
  { icon: <FaFacebook size={20} />, className: "hidden md:block text-white" },
  {
    icon: <BsInstagram size={20} />,
    className: "block text-[#F03F98] md:text-white",
  },
  { icon: <FaXTwitter size={20} />, className: "hidden md:block text-white" },
  { icon: <BsLinkedin size={20} />, className: "hidden md:block text-white" },
  { icon: <BsYoutube size={20} />, className: "hidden md:block text-white" },
  {
    icon: <CiTwitter size={20} />,
    className: "block md:hidden text-[#B5C8F2]",
  },
  {
    icon: <FaFacebook size={20} />,
    className: "block md:hidden text-[#8B5CF6]",
  },
  { icon: <FaTiktok size={20} />, className: "block md:hidden text-[#DB9078]" },
];

const Footer = () => {
  const pathname = usePathname();
  const [openQuickLinks, setOpenQuickLinks] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openLegal, setOpenLegal] = useState(false);

  const isAboutPageOrBooknowPage =
    pathname === "/about" || pathname === "/booknow";

  return (
    <div className="bg-[#151515] mt-10 md:mt-36 globalContainer">
      {isAboutPageOrBooknowPage ? (
        <FooterTopSection
          title="Explore our "
          title2="PREMIUM MUSIC "
          des="Connecting artists and producers with high-quality beats and services for an unparalleled music experience."
          link="/explorenow"
          button="Explore Now"
        />
      ) : (
        <FooterTopSection
          title="Book a Studio Session with "
          title2="Cute Boka"
          des="Session includes song writing, lyrics writing, recording & more. (Only for Melbourne)"
          link="/booknow"
          button="Book Now"
        />
      )}
      <hr className="border border-[#FAFAFA] mt-10 w-full hidden md:block" />
      <div className="flex flex-col md:flex-row items-start justify-between py-10 md:py-18 md:gap-8 gap-2">
        {/* Quick Links */}
        <div className="flex flex-col text-white text-sm w-full md:w-auto">
          <div
            className="flex md:block cursor-pointer gap-3"
            onClick={() => setOpenQuickLinks(!openQuickLinks)}
          >
            <p className="horizon mb-4">Quick Links</p>
            <FaAngleDown size={20} className="md:hidden" />
          </div>
          <div
            className={`flex-col ${
              openQuickLinks ? "flex" : "hidden"
            } md:flex gap-4`}
          >
            {QuickLinks.map((item, idx) => (
              <div key={idx}>
                <Link href={item.href}>{item.name}</Link>
              </div>
            ))}
          </div>
        </div>
        {/* Quick Links */}

        {/* Support */}
        <div className="flex flex-col text-white text-sm w-full md:w-auto">
          <div
            className="flex md:block cursor-pointer"
            onClick={() => setOpenSupport(!openSupport)}
          >
            <p className="horizon mb-4">Support</p>
            <FaAngleDown size={20} className="md:hidden" />
          </div>
          <div
            className={`flex-col ${
              openSupport ? "flex" : "hidden"
            } md:flex gap-4`}
          >
            <Link href="/faq">FAQ</Link>
            <Link href="/helpcenter">Help Center</Link>
          </div>
        </div>
        {/* Support */}

        {/* Resources */}
        <div className="flex flex-col text-white text-sm w-full md:w-auto">
          <div
            className="flex md:block cursor-pointer"
            onClick={() => setOpenResources(!openResources)}
          >
            <p className="horizon mb-4">Resources</p>
            <FaAngleDown size={20} className="md:hidden" />
          </div>
          <div
            className={`flex-col ${
              openResources ? "flex" : "hidden"
            } md:flex gap-4`}
          >
            <Link href="/blog">Blog</Link>
            <Link href="/beatpasal">Beat Pasal</Link>
          </div>
        </div>
        {/* Resources */}

        {/* Legal */}
        <div className="flex flex-col text-white text-sm w-full md:w-auto">
          <div
            className="flex md:block cursor-pointer"
            onClick={() => setOpenLegal(!openLegal)}
          >
            <p className="horizon mb-4">Legal</p>
            <FaAngleDown size={20} className="md:hidden" />
          </div>
          <div
            className={`flex-col ${
              openLegal ? "flex" : "hidden"
            } md:flex gap-4`}
          >
            {Legal.map((item, idx) => (
              <div key={idx}>
                <Link href={item.href}>{item.name}</Link>
              </div>
            ))}
          </div>
        </div>
        {/* Legal */}

        {/* Social Media */}
        <div className="text-white flex flex-col gap-3 w-full md:w-auto my-3 md:my-0">
          <p className="horizon text-sm hidden md:block">Social Media</p>
          <div className="flex items-center justify-center gap-4">
            {Icons.map((item, idx) => (
              <div key={idx} className={item.className}>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        {/* Social Media */}
      </div>
      <div className="hidden md:flex justify-between">
        <Image src="/img/Logo-wide 1.png" alt="none" height={80} width={80} />
        <div className="flex -space-x-2">
          {FooterImage.map((item, idx) => (
            <div
              key={idx}
              className="rounded-full h-10 w-10 border-2 border-white overflow-hidden"
            >
              <Image
                src={item.image}
                alt="avatar"
                height={40}
                width={40}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="border border-[#FAFAFA] w-full hidden md:block mt-6" />
      <p className="text-[10px] text-[#FFFFFF66] text-center w-full my-5">
        © 2025 Cute Boka. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
