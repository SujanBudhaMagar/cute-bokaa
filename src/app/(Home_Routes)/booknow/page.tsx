"use client";
import { BookProps, StudioRulesProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { CiWarning } from "react-icons/ci";
import { FaMicrophoneAlt, FaMoneyBill, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiBeerLine } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import LogoComp from "@/components/LogoComp";

const Book: BookProps[] = [
  {
    icon: <FaMicrophoneAlt className="text-white" />,
    price: "$50",
    detail: "per hour",
  },
  {
    icon: <FaMicrophoneAlt className="text-white" />,
    price: "$80",
    detail: "for 2 hours",
  },
];

const StudioRules: StudioRulesProps[] = [
  { icon: <MdWatchLater />, name: "Arrive 10 mins early" },
  { icon: <RiBeerLine />, name: "Drinks allowed" },
  { icon: <CiWarning />, name: "No refunds or cancellation" },
  { icon: <FaMoneyBill />, name: "Extra time charges apply" },
];

const BookNow = () => {
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState(1);
  const [timeSlot, setTimeSlot] = useState("");
  const [beatLink, setBeatLink] = useState("");

  const hourlyRate = 245;
  const totalAmount = duration * hourlyRate;

  const timeOptions = ["12:00 PM", "02:00 PM", "04:00 PM"];
  const extraTimes = ["06:00 PM", "08:00 PM"];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="flex flex-col items-center relative w-full h-[650px] bg-primary">
        {/* Logo */}
        <div className="absolute top-6 items-center z-5">
          <LogoComp />
        </div>{" "}
        <Image
          src="/img/book.png"
          alt="Background"
          fill
          className="object-cover"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-primary opacity-80 z-0">
          <div className="absolute inset-0 flex flex-col items-center justify-evenly px-4 text-center">
            <h1 className="text-xl md:text-3xl horizon mt-44">
              <span className="bg-gradient-to-r from-[#F03F98] to-[#B5C8F2] text-transparent bg-clip-text">
                BOOK YOUR STUDIO{" "}
              </span>
              <span className="text-white">RECORDING TIME</span>
            </h1>
            <p className="text-sm md:text-base max-w-xl text-[#FAFAFA]">
              Secure your session in a professional studio space. High-quality
              recording, mixing, and mastering, all in one place.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              {Book.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-[#252525] py-6 px-4 rounded-lg shadow-lg"
                >
                  <div className="bg-gradient-to-b from-[#E851A4] to-[#BABBEA] text-2xl rounded-full p-3">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white text-lg font-semibold">
                      {item.price}
                    </p>
                    <p className="text-[#8C9092] text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div id="form" className="py-16 md:py-10 globalContainer text-white">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Booking Form */}
          <div className="bg-[#252525] rounded-xl p-6 w-full md:max-w-4xl flex flex-col justify-around">
            <p className="text-center text-lg md:text-3xl mb-6 horizon tracking-wide">
              Book{" "}
              <span className="horizon-outlined text-lg md:text-3xl">
                Your Session
              </span>
            </p>
            <div className="flex md:flex-row flex-col w-full gap-4 md:gap-8">
              {/* Date Picker */}
              <div className=" block w-full md:w-1/2">
                <label className="mb-2 text-[12px] md:text-base font-medium">
                  Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="date-input uppercase appearance-none text-white w-full p-2 rounded bg-primary border border-[#374151] mt-2 md:mt-2 text-[10px] md:text-base"
                />
              </div>

              {/* Duration Selector */}
              <div className="block w-full md:w-1/2">
                <label className="mb-2 text-[12px] md:text-base font-medium">
                  Select Duration (in hour)
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full mb-4 p-2 rounded bg-primary border border-[#374151] mt-2 text-[10px] md:text-base"
                >
                  <option value={1}>1 hour</option>
                  <option value={2}>2 hours</option>
                  <option value={3}>3 hours</option>
                </select>
              </div>
            </div>

            {/* Time Slots */}
            <div className="w-full">
              <label className="block mb-2 text-[12px] md:text-base font-medium">
                Select Time Slot
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm md:text-base">
                {timeOptions.map((slot, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-2 rounded w-full ${
                      timeSlot === slot ? "bg-purple-600" : "bg-primary"
                    } hover:bg-[#444]`}
                    onClick={() => setTimeSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
                <select
                  className="px-4 py-2 rounded bg-primary border border-[#374151] text-sm md:text-base w-full"
                  onChange={(e) => setTimeSlot(e.target.value)}
                >
                  <option className="text-text-[12px] md:text-base">
                    Select time
                  </option>
                  {extraTimes.map((et, idx) => (
                    <option key={idx} value={et}>
                      {et}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Upload Beat */}
            <div>
              <label className="block mb-2 text-sm md:text-base font-medium">
                Upload Beat
              </label>
              <input
                type="text"
                placeholder="Provide your Google Drive link here..."
                value={beatLink}
                onChange={(e) => setBeatLink(e.target.value)}
                className="w-full mb-4 p-2 rounded bg-primary border border-[#374151] text-sm md:text-base"
              />
            </div>

            {/* Total Amount */}
            <div className="mb-4 bg-primary p-3 rounded flex justify-between items-center font-semibold">
              <span className="text-[#8C9092] text-sm md:text-xl">
                Total Amount:
              </span>
              <span className="text-[#B5C8F2] text-base md:text-3xl">
                ${totalAmount}
              </span>
            </div>

            {/* Confirm Booking Button */}
            <button className="w-full py-3 rounded text-white font-semibold bg-gradient-to-r from-[#9A58E6] to-[#D94CAB] hover:opacity-90 transition text-sm md:text-base">
              Confirm Booking
            </button>
          </div>

          {/* Studio Info */}
          <div className="flex flex-col gap-4">
            {/* Studio Location */}
            <div className="bg-[#252525] p-4 rounded-md">
              <p className="text-sm md:text-lg font-semibold mb-3">
                Studio Location
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14136.810748159813!2d85.35074544999999!3d27.6492001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1745922536704!5m2!1sen!2snp"
                width="100%"
                height="250"
                loading="lazy"
                className="rounded-md mb-4"
              ></iframe>
              <div className="flex gap-2 items-start mb-2">
                <FaLocationDot className="mt-1" />
                <p className="text-[10px] md:text-base">
                  16 Anderson St, Werribee 3030 VIC
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <FaPhoneAlt className="mt-1" />
                <p className="text-[10px] md:text-base">+61 403 464 735</p>
              </div>
            </div>

            {/* Studio Rules */}
            <div className="bg-[#252525] p-4 rounded-md">
              <p className="text-sm md:text-lg font-semibold mb-3">
                Studio Rules
              </p>
              <div className="space-y-2">
                {StudioRules.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-[10px] md:text-base">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
