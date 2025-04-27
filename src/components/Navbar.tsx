"use client";
import { NavData } from "@/constants";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* Desktop view */}

      <div className="py-5 sticky top-0 z-10 bg-[#151515]">
        <div className="globalContainer flex justify-between">
          <div className="md:flex items-center gap-9 hidden">
            <p
              className={`text-sm font-bold bg-gradient-to-r from-[#E94DA1] to-[#B4C8F2] text-transparent bg-clip-text text-center horizon`}
            >
              BEAT PASAL
            </p>
            <div className="flex gap-9">
              {NavData.map((item, index) => (
                <div key={index} className="flex items-center gap-1">
                  <Link href={item.href} className="text-white text-sm">
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

          <div className="text-white  gap-6 items-center hidden md:flex">
            <Link href="/signup" className="text-sm">
              Sign Up
            </Link>
            <Link href="/login" className="text-sm">
              Log In
            </Link>
            <FaShoppingCart size={26} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
