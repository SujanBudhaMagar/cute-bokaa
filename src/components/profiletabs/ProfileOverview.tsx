import { orderItems, wishlistItems } from "@/constants";
import Image from "next/image";
import React from "react";
import { MdShoppingCart } from "react-icons/md";

const ProfileOverview = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="flex flex-col gap-4">
        {/* Recent Orders */}
        <div className="bg-[#252525] text-white rounded-lg p-6 border-1 border-[#374151]">
          <h2 className="text-xl font-medium mb-4">Recent Orders</h2>

          <div className="space-y-4">
            {orderItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-[#3741514D] rounded-lg p-4"
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
                    <h3 className="text-sm md:text-xl tracking-wider">{item.title}</h3>
                    <p className="text-xs md:text-sm text-gray-400">{item.subtitle}</p>
                  </div>
                </div>
                <div>
                  <span
                    className={`px-3 md:px-4 py-1 md:py-2 ${
                      item.status === "Completed"
                        ? "bg-[#10B98133] text-[#10B981]"
                        : "text-[#3B82F6] bg-[#3B82F633]"
                    } rounded-full text-[12px] md:text-sm`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wishlist */}
        <div className="bg-[#252525] rounded-lg p-6 text-white mt-5  border-1 border-[#374151]">
          <h2 className="text-xl mb-4">Wishlist</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wishlistItems.slice(0,2).map((item) => (
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
                    <p className="text-gray-400 text-xs md:text-base">{item.price}</p>
                  </div>
                </div>
                <button className="text-purple-400 hover:text-purple-300">
                  <MdShoppingCart size={24} />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="p-[14px] bg-[#8B5CF6]  rounded-lg  text-sm">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
