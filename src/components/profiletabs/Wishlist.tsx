import { wishlistItems } from "@/constants";
import Image from "next/image";
import React from "react";
import { MdShoppingCart } from "react-icons/md";

const Wishlist = () => {
  return (
    <div>
      <div className="bg-[#252525] rounded-lg p-6 text-white   border-1 border-[#374151]">
        <h2 className="text-xl mb-4">Wishlist</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#3741514D] rounded-lg p-4 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <div className="w-[64px] h-[64px] rounded-md overflow-hidden bg-purple-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-sm md:text-xl">{item.title}</h3>
                  <p className="text-gray-400 text-xs md:text-base">
                    {item.price}
                  </p>
                </div>
              </div>
              <button className="text-purple-400 hover:text-purple-300">
                <MdShoppingCart size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
