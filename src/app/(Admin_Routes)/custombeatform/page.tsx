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
    icon: <FaCcVisa className="text-[#014AE6] h-6 w-6" />,
    name: "Visa",
  },
  {
    icon: <FaCcMastercard className="text-[#EB001B] h-6 w-6" />,
    name: "Master Card",
  },
  {
    icon: <FaPaypal className="text-[#014AE6] h-6 w-6" />,
    name: "Paypal",
  },
  {
    icon: <FaApplePay className="h-6 w-6" />,
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
    <div className="bg-primary min-h-screen w-full overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 md:px-0 text-white gap-6 md:gap-12">
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
          <p className="text-[#8C9092] text-xs md:text-base tracking-widest">
            Provide details about your beat, voice, and mixing preferences.
            <br className="hidden md:block" />
            Upload your files, and our experts will handle the rest!
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#252525] w-full max-w-3xl md:px-28 md:py-14 px-10 py-5 rounded-md globalContainer">
          <form className="flex flex-col gap-2 md:gap-4 tracking-widest">
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
                className="input w-full border border-[#374151] text-[#8C9092] rounded-md bg-primary text-xs md:text-base md:px-4 md:py-2 p-4"
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
                className="input w-full border border-[#374151] text-[#8C9092] rounded-md bg-primary text-xs md:text-base md:px-4 md:py-2 p-4"
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
                className="input w-full border border-[#374151] text-[#8C9092] rounded-md text-xs md:text-base md:px-4 md:py-2 p-4 bg-primary"
              />
            </div>

            {/* Mood */}
            <div className="flex flex-col mb-4">
              <label htmlFor="mood" className="text-white mb-3">
                Mood
              </label>
              <input
                id="mood"
                type="text"
                placeholder="Describe the mood you're going for..."
                required
                className="input w-full border border-[#374151] text-[#8C9092] rounded-md text-xs md:text-base md:px-4 md:py-2 p-4 bg-primary"
              />
            </div>

            {/* BPM */}
            <div className="flex flex-col mb-4">
              <label htmlFor="needs" className="text-white mb-3">
                BPM
              </label>
              <input
                id="BPM"
                placeholder="Enter the tempo(BPM) of your beat..."
                required
                className="input w-full border border-[#374151] text-[#8C9092] rounded-md text-xs md:text-base md:px-4 md:py-2 p-4 bg-primary"
              />
            </div>

            {/* Song Key */}
            <div className="flex flex-col mb-4">
              <label htmlFor="files" className="text-white mb-3">
                Song Key
              </label>
              <input
                id="songKey"
                type="text"
                placeholder="Enter the key for your beat..."
                required
                className="input w-full border border-[#374151] text-[#8C9092] rounded-md p-4 md:p-2 bg-primary text-xs md:text-base"
              />
            </div>

            {/* Instrument */}
            <div className="flex flex-col mb-4">
              <label htmlFor="instrument" className="text-white mb-3">
                Instruments
              </label>
              <input
                id="instrument"
                type="text"
                placeholder="Enter the instruments in your song..."
                required
                className="input w-full border border-[#374151] text-[#8C9092] rounded-md p-4 md:p-2 bg-primary text-xs md:text-base"
              />
            </div>

            {/* reference track */}
            <div className="flex flex-col mb-4">
              <label htmlFor="referenceTrack" className="text-white mb-3">
                Reference Track
              </label>
              <textarea
                id="referenceTrack"
                placeholder="Link to a song that matches the vibe.."
                required
                className="input w-full border border-[#374151] text-[#8C9092] text-sm md:text-base rounded-md pl-4 pr-14 md:pr-28 pt-2 pb-24 bg-primary"
              />
            </div>

            {/* Additional instructions */}
            <div className="flex flex-col mb-4">
              <label
                htmlFor="additionalInstructions"
                className="text-white mb-3"
              >
                Additional Instructions
              </label>
              <textarea
                id="additionalInstructions"
                placeholder="Any specific requirements..."
                required
                className="input w-full border border-[#374151] text-[#8C9092] text-sm md:text-base rounded-md pl-4 pr-14 md:pr-28 pt-2 pb-24 bg-primary"
              />
            </div>

            {/* Pay with Esewa */}
            <div className="flex items-center justify-center bg-gradient-to-r from-[#925AEE] to-[#E04AA3] rounded-md px-3 w-full py-4 md:py-3 mb-4">
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
                    className="flex items-center gap-3 text-white border border-[#8C9092] w-full md:w-50 rounded-lg px-2 py-3 bg-primary"
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
                      <span className="md:text-xs text-[10px]">
                        {item.name}
                      </span>
                    </label>
                  </div>
                ))}
              </div>

              {/* Pay Button */}
              <div
                className="flex items-center justify-center bg-gradient-to-r from-[#9747FF] to-[#DE4AA5] rounded-md mt-8 gap-2 px-16 md:px-44 py-5 cursor-pointer"
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
      </div>
      {/* Clients Section */}
      <p className="text-xl md:text-3xl font-bold horizon tracking-widest text-white text-center mt-24">
        OUR{" "}
        <span className="horizon-outlined md:text-3xl text-xl tracking-widest">
          CLIENTS
        </span>{" "}
      </p>
      <CustomSwiperSlide />
      <Footer />
    </div>
  );
};

export default MixingProForm;
