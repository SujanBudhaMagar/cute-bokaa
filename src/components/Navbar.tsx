"use client";
import { NavData } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import horizon from "@/lib/horizon";
import Image from "next/image";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Desktop view */}
      <div className="bg-black h-18 md:h-14 md:flex justify-between items-center sticky top-0 z-10 w-full overflow-y-hidden test">
        <div className="md:flex items-center justify-center px-9 gap-6 hidden">
          <p
            className={`text-sm font-bold bg-gradient-to-r from-[#E94DA1] to-[#B4C8F2] text-transparent bg-clip-text text-center${horizon.className}`}
          >
            BEAT PASAL
          </p>
          <div className="flex gap-4">
            {NavData.map((item, index) => (
              <div key={index} className="flex items-center">
                <Link href={item.href} className="text-white font-bold text-sm">
                  {item.name}
                </Link>
                {item.more && (
                  <p className=" bg-gradient-to-r from-[#F03F98] to-[#B5C8F2] text-transparent bg-clip-text text-[10px] mb-3 ml-1">
                    {item.more}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="text-white mr-16 gap-6 items-center hidden md:flex">
          <Link href="/signup" className="text-sm">
            Sign Up
          </Link>
          <Link href="/login" className="text-sm">
            Log In
          </Link>
          <FaShoppingCart size={26} />
        </div>
        {/* Menu */}
        {/* Hamburger */}
        <div className="block lg:hidden text-white">
          {!isOpen && (
            <div className="flex items-center justify-between px-4 py-2">
              <IoIosMenu size={40} onClick={() => setIsOpen(!isOpen)} />
              <Image src="/img/logo.png" alt="None" height={100} width={100} />
              <div className="flex items-center gap-4">
                <CiUser size={30} />
                <FaShoppingCart size={30} />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Desktop view */}

      {/* Mobile view */}
      {isOpen && (
        <div>
          <div
            className="fixed inset-0 z-50 bg-black opacity-50 w-full h-screen"
            onClick={() => setIsOpen(!isOpen)}
          ></div>
          <div className="fixed top-0 left-0 bg-primary w-full h-screen p-20 z-50 shadow-lg text-white">
            <IoIosClose
              className="absolute top-10 right-5"
              size={30}
              onClick={() => setIsOpen(!isOpen)}
            />
            {NavData.map((item, idx) => (
              <div key={idx} className="mb-5">
                <Link href={item.href} onClick={() => setIsOpen(!isOpen)}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Mobile view */}
    </>
  );
};

export default Navbar;
