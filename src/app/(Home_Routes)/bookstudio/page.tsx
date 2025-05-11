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
import { extraTimes, timeOptions } from "@/constants";
import DatePicker from "react-datepicker";
import { LuCalendarDays } from "react-icons/lu";
import "react-datepicker/dist/react-datepicker.css";
import { PopUpForm } from "@/components/ViewBookPopUp";

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
  { icon: <MdWatchLater size={16} />, name: "Arrive 10 mins early" },
  { icon: <RiBeerLine size={16} />, name: "Drinks allowed" },
  { icon: <CiWarning size={16} />, name: "No refunds or cancellation" },
  { icon: <FaMoneyBill size={16} />, name: "Extra time charges apply" },
];

const BookStudio = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [duration, setDuration] = useState(1);
  const [timeSlot, setTimeSlot] = useState("");
  const [beatLink, setBeatLink] = useState("");
  const [ShowPopUp, setShowPopUp] = useState(false);

  const hourlyRate = 245;
  const totalAmount = duration * hourlyRate;

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="flex flex-col items-center relative w-full h-screen overflow-hidden bg-primary">
        {/* Background Image */}
        <Image
          src="/img/book.png"
          alt="Background"
          fill
          className="object-cover z-0"
        />

        {/* Overlay background to darken image */}
        <div className="absolute inset-0 bg-primary opacity-80 z-10"></div>

        {/* Logo */}
        <div className="absolute top-6 z-20">
          <LogoComp />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 mt-36 px-4 text-center flex flex-col items-center gap-14">
          <h1 className="text-xl md:text-3xl horizon mt-46">
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

      {/* Booking Section */}
      <div id="form" className="py-16 md:py-14 globalContainer text-white">
        <div className="flex flex-col md:flex-row gap-6 md:gap-4">
          {/* Booking Form */}
          <div className="bg-[#252525] rounded-xl p-6 w-full md:w-[80%] flex flex-col gap-4 md:gap-10">
            <p className="text-center text-lg md:text-3xl mb-6 horizon tracking-wide">
              Book{" "}
              <span className="horizon-outlined text-lg md:text-3xl">
                Your Session
              </span>
            </p>
            <div className="flex md:flex-row flex-col w-full gap-4 md:gap-10">
              {/* Date Picker */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full">
                <div className="block w-full">
                  <label className="mb-2 text-sm md:text-base font-medium text-white">
                    Select Date
                  </label>
                  <div className="relative px-4 py-3 rounded-lg bg-primary border border-[#374151] mt-2 text-xs md:text-base">
                    <DatePicker
                      selected={date}
                      onChange={(date) => setDate(date)}
                      placeholderText="04/05/2025"
                      className="text-[#8C9092] w-full "
                    />

                    <LuCalendarDays className="h-5 w-5 text-white absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Duration Selector */}
                <div className="block w-full gap-4">
                  <label className="mb-2 text-sm md:text-base font-medium">
                    Select Duration (in hour)
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg bg-primary border border-[#374151] mt-2 text-xs md:text-base text-[#8C9092]"
                  >
                    <option value={1}>1 hour</option>
                    <option value={2}>2 hours</option>
                    <option value={3}>3 hours</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Time Slots */}
            <div className="w-full">
              <label className="block mb-2 text-sm md:text-base font-medium text-[#FAFAFA]">
                Select Time Slot
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-base text-[#8C9092]">
                {timeOptions.map((slot, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-3 rounded w-full ${
                      timeSlot === slot.name ? "bg-primary" : "bg-primary"
                    } hover:bg-[#444]`}
                    onClick={() => setTimeSlot(slot.name)}
                  >
                    {slot.name}
                  </button>
                ))}
                <select
                  className="px-4 py-3 rounded-lg bg-primary border border-[#374151] text-sm md:text-base w-full"
                  onChange={(e) => setTimeSlot(e.target.value)}
                >
                  <option className="text-xs md:text-base">Select time</option>
                  {extraTimes.map((et, idx) => (
                    <option key={idx} value={et.name}>
                      {et.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Upload Beat */}
            <div className="gap-4">
              <label className="block mb-2 text-sm md:text-base font-medium text-[#FAFAFA]">
                Upload Beat
              </label>
              <input
                type="text"
                placeholder="Provide your Google Drive link here..."
                value={beatLink}
                onChange={(e) => setBeatLink(e.target.value)}
                className="w-full mb-4 px-4 py-3 rounded-lg bg-primary border border-[#374151] text-xs md:text-base"
              />
            </div>

            {/* Total Amount */}
            <div className="mb-4 bg-primary p-6 rounded-lg flex justify-between items-center font-semibold">
              <span className="text-[#8C9092] text-sm md:text-xl">
                Total Amount:
              </span>
              <span className="text-[#B5C8F2] text-base md:text-3xl">
                ${totalAmount}
              </span>
            </div>

            {/* Confirm Booking Button */}
            <button
              onClick={() => {
                setShowPopUp(true);
              }}
              className="w-full p-4 rounded-lg text-white font-semibold bg-gradient-to-r from-[#9A58E6] to-[#D94CAB] hover:opacity-90 transition text-sm md:text-base"
            >
              Confirm Booking
            </button>
          </div>

          {/* Studio Info */}
          <div className="flex flex-col gap-4">
            {/* Studio Location */}
            <div className="bg-[#252525] rounded-2xl px-4 py-6 md:px-6 md:py-9">
              <p className="text-base md:text-lg mb-6 text-center tracking-widest text-[#FAFAFA]">
                Studio Location
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14136.810748159813!2d85.35074544999999!3d27.6492001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1745922536704!5m2!1sen!2snp"
                width="100%"
                height="250"
                loading="lazy"
                className="rounded-md mb-8"
              ></iframe>
              <div className="flex gap-4 items-center mb-2">
                <FaLocationDot size={16} />
                <p className="text-sm md:text-base tracking-wider">
                  16 Anderson St, Werribee 3030 VIC
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <FaPhoneAlt size={16} />
                <p className="text-sm md:text-base tracking-wider">
                  +61 403 464 735
                </p>
              </div>
            </div>

            {/* Studio Rules */}
            <div className="bg-[#252525] rounded-2xl px-4 py-6 md:px-6 md:py-9">
              <p className="text-base md:text-lg mb-6 tracking-widest text-center">
                Studio Rules
              </p>
              <div className="space-y-2">
                {StudioRules.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span>{item.icon}</span>
                    <p className="text-sm md:text-base tracking-wider">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pop-up */}
      {ShowPopUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <PopUpForm onClose={() => setShowPopUp(false)} />
        </div>
      )}
    </div>
  );
};

export default BookStudio;
