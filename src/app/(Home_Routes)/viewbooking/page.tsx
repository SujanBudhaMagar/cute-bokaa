"use client";
import LogoComp from "@/components/LogoComp";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from "react-icons/md";

const ViewBooking = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [duration, setDuration] = useState("1 hour");
  const [timeSlot, setTimeSlot] = useState("12:00 PM");
  const [equipment, setEquipment] = useState("Guitar");
  const [beatUrl, setBeatUrl] = useState("http beat.com");

  return (
    <div>
      <section className="w-full">
        <div className="relative w-full h-screen">
          <Image
            src={"/img/book.png"}
            alt="background"
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000CC] to-[#000000CC] z-10"></div>
          <div className="absolute top-0 z-10 w-full flex items-center justify-between">
            <div className="w-full globalContainer">
              <LogoComp />
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full mb-64 flex items-center justify-center">
        <div className="absolute w-fit bg-[#252525] text-white p-8 rounded-2xl border border-[#FFFFFF1A] z-10 -mt-64  ">
          <div className="mb-8 text-center">
            <h1 className="text-3xl text-shadow-white horizon">
              BOOKING
              <span className="horizon-outlined"> DETAILS</span>
            </h1>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="date" className="text-gray-400 text-sm">
                  Date
                </label>
                <div className="relative">
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    placeholderText="04/05/2025"
                    className="bg-[#151515] border-[#374151] text-white pr-10 rounded-md p-3 w-full"
                  />

                  <MdOutlineDateRange className="h-5 w-5 text-white absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="duration" className="text-gray-400 text-sm">
                  Select Duration(in hour)
                </label>
                <div className="relative">
                  <select
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="bg-[#1e1e1e] border border-[#333] rounded-md text-white w-full p-2 appearance-none"
                  >
                    <option>1 hour</option>
                    <option>2 hours</option>
                    <option>3 hours</option>
                    <option>4 hours</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="timeSlot" className="text-gray-400 text-sm">
                Time Slot
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  id="timeSlot"
                  type="text"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="bg-[#1e1e1e] border-[#333] text-white rounded-md"
                  readOnly
                />
                <div className="relative">
                  <select
                    id="selectTime"
                    className="bg-[#1e1e1e] border border-[#333] rounded-md text-white w-full p-2 appearance-none"
                    onChange={(e) => setTimeSlot(e.target.value)}
                  >
                    <option>Select time</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-400 text-sm">
                Additional Equipment
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                  className="bg-[#1e1e1e] border-[#333] text-white rounded-md"
                  placeholder="Equipment"
                />
                <input
                  type="text"
                  value={beatUrl}
                  onChange={(e) => setBeatUrl(e.target.value)}
                  className="bg-[#1e1e1e] border-[#333] text-white rounded-md"
                  placeholder="URL"
                />
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-md p-4 flex justify-between items-center">
              <div className="text-gray-400">Total Amount:</div>
              <div className="text-xl font-bold">$245</div>
            </div>

            <button
              className="w-full h-12 text-white font-medium"
              style={{
                background: "linear-gradient(to right, #4361ee, #e649f5)",
              }}
            >
              Edit Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBooking;
