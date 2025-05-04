"use client";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
import LogoComp from "@/components/LogoComp";
import MusicCard from "@/components/card/MusicCard";

export default function ShoppingCart() {
  const [cart, setCart] = useState({
    beats: [
      {
        id: 1,
        name: "Summer Vibes Beat",
        license: "License: Standard",
        price: 29.99,
        quantity: 1,
        image: "/img/musicCardImg/2.jpg",
      },
      {
        id: 2,
        name: "Summer Vibes Beat",
        license: "License: Standard",
        price: 29.99,
        quantity: 1,
        image: "/img/musicCardImg/2.jpg",
      },
    ],
    merchandise: [
      {
        id: 3,
        name: "Artist Logo T-Shirt",
        details: "Size: L | Color: Black",
        price: 24.99,
        quantity: 2,
        image: "/img/products/3.jpg",
      },
    ],
  });

  const [discountCode, setDiscountCode] = useState("");

  // Calculate totals
  const subtotal = [...cart.beats, ...cart.merchandise].reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 5.0;
  const tax = 4.99;
  const total = subtotal - discount + tax;

  const updateQuantity = (
    section: "beats" | "merchandise",
    id: number,
    newQuantity: number
  ) => {
    if (newQuantity < 1) return;

    setCart((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ),
    }));
  };

  const removeItem = (section: "beats" | "merchandise", id: number) => {
    setCart((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }));
  };

  return (
    <div className="globalContainer relative overflow-hidden">
      <LogoComp />

      <section className="flex flex-col md:flex-row gap-6 lg:p-10 text-white">
        {/* Shopping Cart Section */}
        <div className="flex-1 bg-[#252525] rounded-lg p-6">
          <h2 className="text-xl mb-6">Shopping Cart (4 items)</h2>

          {/* Beats Section */}
          <div className="mb-6">
            <h3 className="text-lg mb-6">Beats</h3>

            <div className="space-y-4">
              {cart.beats.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between pb-6 border-b border-[#E5E5E5]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-[96px] h-[96px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={1000}
                        height={1000}
                        className="object-center w-full h-full rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-xs md:text-base">{item.name}</p>
                      <p className="text-[10px] md:text-sm text-[#8C9092]">{item.license}</p>
                      <div className="flex items-center mt-2">
                        <button
                          className="py-[1px] px-2 flex items-center justify-center border border-[#E5E7EB] rounded-sm"
                          onClick={() =>
                            updateQuantity("beats", item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="py-[1px] px-2 flex items-center justify-center border border-[#E5E7EB] rounded-sm"
                          onClick={() =>
                            updateQuantity("beats", item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-4">
                    <button
                      onClick={() => removeItem("beats", item.id)}
                      className="text-zinc-400 hover:text-white"
                    >
                      <FaTrash size={16} />
                    </button>
                    <span className="min-w-[80px] text-xs md:text-base text-right">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Merchandise Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Merchandise</h3>
            <div className="space-y-4">
              {cart.merchandise.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between pb-4 border-b border-zinc-800"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-[96px] h-[96px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={1000}
                        height={1000}
                        className="object-center w-full h-full rounded-lg"
                      />
                    </div>
                    <div>
                      <p className=" text-xs md:text-base ">{item.name}</p>
                      <p className="text-[10px] md:text-sm text-[#8C9092]">{item.details}</p>
                      <div className="flex items-center mt-2">
                        <button
                          className="py-[1px] px-2 flex items-center justify-center border border-[#E5E7EB] rounded-sm"
                          onClick={() =>
                            updateQuantity(
                              "merchandise",
                              item.id,
                              item.quantity - 1
                            )
                          }
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="py-[1px] px-2 flex items-center justify-center border border-[#E5E7EB] rounded-sm"
                          onClick={() =>
                            updateQuantity(
                              "merchandise",
                              item.id,
                              item.quantity + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <button
                      onClick={() => removeItem("merchandise", item.id)}
                      className="text-zinc-400 hover:text-white"
                    >
                      <FaTrash size={16} />
                    </button>
                    <div className="min-w-[80px]  text-xs md:text-base  text-right">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="md:w-[35%] bg-[#252525] rounded-lg p-6 h-fit">
          <h2 className="text-xl mb-6">Order Summary</h2>

          {/* Discount Code */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Discount Code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="flex-1 bg-transparent border border-zinc-700 rounded px-3 py-2 text-sm w-5 md:w-full"
            />
            <button className="border border-zinc-700 rounded px-4 py-2 text-sm hover:bg-zinc-800 transition-colors">
              Apply
            </button>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-[#FAFAFA]  text-xs md:text-base ">Subtotal</span>
              <span className=" text-xs md:text-base ">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8C9092]  text-xs md:text-base ">Discount</span>
              <span className=" text-xs md:text-base ">-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#FAFAFA]  text-xs md:text-base ">Tax</span>
              <span className=" text-xs md:text-base " >${tax.toFixed(2)}</span>
            </div>
            <div className="h-px bg-[#8C9092] my-4"></div>
            <div className="flex justify-between  text-xs md:text-base ">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-gradient-to-r from-[#9B24CB] to-[#F03F98] border border-[#D4D4D4] text-white py-3 rounded-md transition-colors  text-xs md:text-base ">
            Proceed to Checkout
          </button>
        </div>
      </section>

      <section>
          <h1 className="text-white text-xl d:text-3xl horizon-outlined text-center my-10">
          You <span className="horizon">Might Also Like</span>
          </h1>
          <div className="pb-10">
          <MusicCard/>
          </div>
      </section>
    </div>
  );
}
