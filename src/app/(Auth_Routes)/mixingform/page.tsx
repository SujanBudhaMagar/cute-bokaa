"use client";
import Navbar from "@/components/Navbar";
import { PaymentIn } from "@/types";

import React, { useState } from "react";
import {
  FaApplePay,
  FaCcMastercard,
  FaCcVisa,
  FaLock,
  FaPaypal,
} from "react-icons/fa";
import CustomSwiperSlide from "@/components/SwiperSlide";
import Footer from "@/components/Footer";
import LogoComp from "@/components/LogoComp";

const Payment: PaymentIn[] = [
  {
    icon: <FaCcVisa className="text-[#014AE6] h-5 w-5 md:h-8 md:w-8" />,
    name: "Visa",
  },
  {
    icon: <FaCcMastercard className="text-[#EB001B] h-5 w-5 md:h-8 md:w-8" />,
    name: "Master Card",
  },
  {
    icon: <FaPaypal className="text-[#014AE6] h-5 w-5 md:h-8 md:w-8" />,
    name: "Paypal",
  },
  {
    icon: <FaApplePay className="h-5 w-5 md:h-8 md:w-8" />,
    name: "Apple Pay",
  },
];

const MixingProForm = () => {
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);
  const [isPaying, setIsPaying] = useState(false);

  const handlePaymentClick = () => {
    if (selectedPayment === null) {
      alert("Please select a payment method!");
      return;
    }
    setIsPaying(true);
    setTimeout(() => {
      alert("Payment Processed!");
      setIsPaying(false);
    }, 2000);
  };

  const handlePaymentSelect = (index: number) => {
    setSelectedPayment(index);
  };

  return (
    <div className="bg-[#151515] min-h-screen w-full overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 md:px-0 min-h-screen text-white gap-6">
        {/* Logo */}
        <LogoComp />

        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-4 text-center mb-6 mt-6 md:mt-0">
          <p className="md:text-3xl font-bold text-xl horizon-outlined tracking-widest ">
            TELL US{" "}
            <span className="horizon tracking-widest">
              ABOUT YOUR MIXING NEEDS
            </span>
          </p>
          <p className="text-[#8C9092] text-xs md:text-base w-sm md:w-2xl">
            Provide details about your beat, voice, and mixing preferences.
            Upload your files, and our experts will handle the rest!
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#252525] w-full max-w-3xl md:px-20 md:py-10 px-10 py-5 rounded-md globalContainer">
          <form className="flex flex-col">
            {/* Name Input */}
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-white mb-3">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Full Name"
                required
                className="w-full border border-[#374151] text-[#8C9092] rounded-md bg-[#151515] text-xs md:text-base md:p-2 p-4"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-white mb-3">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full border border-[#374151] text-[#8C9092] rounded-md bg-[#151515] text-xs md:text-base md:p-2 p-4"
              />
            </div>

            {/* Music Genre Input */}
            <div className="flex flex-col mb-4">
              <label htmlFor="genre" className="text-white mb-3">
                Music Genre
              </label>
              <input
                id="genre"
                type="text"
                placeholder="Tell us about your music genre.."
                required
                className="w-full border border-[#374151] text-[#8C9092] rounded-md text-xs md:text-base md:p-2 p-4 bg-[#151515]"
              />
            </div>

            {/* Preferred Music Style */}
            <div className="flex flex-col mb-4">
              <label htmlFor="preferred" className="text-white mb-3">
                Preferred Music Style
              </label>
              <select
                name="preferred"
                id="preferred"
                className="w-full border border-[#374151] text-[#8C9092] rounded-md text-xs md:text-base p-4 md:p-2 bg-[#151515]"
              >
                <option value="Select style">Select style</option>
                <option value="1">Style 1</option>
                <option value="2">Style 2</option>
                <option value="3">Style 3</option>
              </select>
            </div>

            {/* Describe Your Needs */}
            <div className="flex flex-col mb-4">
              <label htmlFor="needs" className="text-white mb-3">
                Describe Your Needs
              </label>
              <textarea
                id="needs"
                placeholder="Link your reference tracks, sample mixes"
                required
                className="w-full h-24 border border-[#374151] text-[#8C9092] rounded-md px-2 pt-2 bg-[#151515] text-xs md:text-base"
              />
            </div>

            {/* Upload Files */}
            <div className="flex flex-col mb-4">
              <label htmlFor="files" className="text-white mb-3s">
                Upload Files
              </label>
              <input
                id="files"
                type="text"
                placeholder="Provide your Google Drive link here..."
                required
                className="w-full border border-[#374151] text-[#8C9092] rounded-md p-4 md:p-2 bg-[#151515] text-xs md:text-base"
              />
            </div>

            {/* Additional Instructions */}
            <div className="flex flex-col mb-4">
              <label htmlFor="instructions" className="text-white mb-3">
                Additional Instructions
              </label>
              <textarea
                id="instructions"
                placeholder="Any specific requirements..."
                required
                className="w-full h-24 border border-[#374151] text-[#8C9092] text-sm md:text-base rounded-md px-2 pt-2 bg-[#151515]"
              />
            </div>

            {/* Pay with Esewa */}
            <div className="flex items-center justify-center bg-gradient-to-r from-[#925AEE] to-[#E04AA3] rounded-md px-2 w-full py-4 mb-4">
              <button className="text-white font-semibold text-sm md:text-base">
                Pay with Esewa
              </button>
            </div>

            {/* Payment Options */}
            <div className="flex flex-col items-center justify-center mb-4">
              <p className="mb-6 text-[#8C9092]">Or pay with</p>
              <div className="grid grid-cols-2 gap-4">
                {Payment.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-white border border-[#8C9092] w-full md:w-56 rounded-lg p-2"
                  >
                    <input
                      type="checkbox"
                      id={`payment-${index}`}
                      checked={selectedPayment === index}
                      onChange={() => handlePaymentSelect(index)}
                      className="appearance-none h-5 w-5 border border-[#8C9092] rounded-full checked:bg-[#925AEE] checked:border-transparent focus:outline-none"
                    />
                    <label
                      htmlFor={`payment-${index}`}
                      className="flex items-center gap-2"
                    >
                      {item.icon}
                      <span className="md:text-base text-[10px]">
                        {item.name}
                      </span>
                    </label>
                  </div>
                ))}
              </div>

              {/* Pay Button */}
              <div
                className="flex items-center justify-center bg-gradient-to-r from-[#9747FF] to-[#DE4AA5] rounded-md mt-8 gap-2 w-40 md:w-full px-4 py-3 cursor-pointer"
                onClick={handlePaymentClick}
              >
                <FaLock size={16} />
                <p className="md:text-lg text-sm">
                  {isPaying ? "Processing" : "Pay"}
                </p>
              </div>
              <p className="text-[#737373] md:text-base text-sm mt-4">
                {`We'll respond within 10 hours.`}
              </p>
            </div>
          </form>
        </div>

        {/* Clients Section */}
        <p className="text-xl md:text-3xl font-bold horizon tracking-widest">
          OUR{" "}
          <span className="horizon-outlined md:text-3xl text-xl tracking-widest">
            CLIENTS
          </span>{" "}
        </p>
        <CustomSwiperSlide />
      </div>
      <Footer />
    </div>
  );
};

export default MixingProForm;
