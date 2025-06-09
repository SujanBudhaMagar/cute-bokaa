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
  const [form, setForm] = useState({
    name: "",
    email: "",
    genre: "",
    preferred: "",
    needs: "",
    files: "",
    instructions: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.id || e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.id || e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = "This field must be filled";
    if (!form.email) newErrors.email = "This field must be filled";
    if (!form.genre) newErrors.genre = "This field must be filled";
    if (!form.preferred) newErrors.preferred = "This field must be filled";
    if (!form.needs) newErrors.needs = "This field must be filled";
    if (!form.files) newErrors.files = "This field must be filled";
    if (selectedPayment === null)
      newErrors.payment = "Please select a new method";
    return newErrors;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErros = validate();
    if (Object.keys(validationErros).length > 0) {
      setErrors(validationErros);
      return;
    }
    setIsPaying(true);
    setTimeout(() => {
      alert("Payment Processed!");
      setIsPaying(false);
      setForm({
        name: "",
        email: "",
        genre: "",
        preferred: "",
        needs: "",
        files: "",
        instructions: "",
      });
      setSelectedPayment(null);
    }, 2000);
  };

  const handlePaymentSelect = (index: number) => {
    setSelectedPayment(index);
    setErrors({ ...errors, payment: "" });
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
          <form
            className="flex flex-col gap-2 md:gap-4 tracking-widest"
            onSubmit={handleSubmit}
          >
            {/* Name Input */}
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-white mb-3">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Full Name"
                value={form.name}
                onChange={handleChange}
                className="input w-full border border-[#374151] text-[#8C9092] rounded-md bg-primary text-xs md:text-base md:px-4 md:py-2 p-4"
              />
              {errors.name && (
                <span className="text-red-400 text-xs mt-1">{errors.name}</span>
              )}
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
                value={form.email}
                onChange={handleChange}
                className="input w-full border border-[#374151] text-[#8C9092] rounded-md bg-primary text-xs md:text-base md:px-4 md:py-2 p-4"
              />
              {errors.email && (
                <span className="text-red-400 text-xs mt-1">
                  {errors.email}
                </span>
              )}
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
                value={form.genre}
                onChange={handleChange}
                className="input w-full border border-[#374151] text-[#8C9092] rounded-md text-xs md:text-base md:px-4 md:py-2 p-4 bg-primary"
              />
              {errors.genre && (
                <span className="text-red-400 text-xs mt-1">
                  {errors.genre}
                </span>
              )}
            </div>

            {/* Preferred Music Style */}
            <div className="flex flex-col mb-4">
              <label htmlFor="preferred" className="text-white mb-3">
                Preferred Music Style
              </label>
              <select
                name="preferred"
                id="preferred"
                value={form.preferred}
                onChange={handleChange}
                className="input w-full border border-[#374151] text-[#8C9092] rounded-md text-xs md:text-base p-4 md:px-4 md:py-2 bg-primary"
              >
                <option value="Select style">Select style</option>
                <option value="1">Style 1</option>
                <option value="2">Style 2</option>
                <option value="3">Style 3</option>
              </select>
              {errors.preferred && (
                <span className="text-red-400 text-xs mt-1">
                  {errors.preferred}
                </span>
              )}
            </div>

            {/* Describe Your Needs */}
            <div className="flex flex-col mb-4">
              <label htmlFor="needs" className="text-white mb-3">
                Describe Your Needs
              </label>
              <textarea
                id="needs"
                placeholder="Describe your needs"
                value={form.needs}
                onChange={handleChange}
                className="input w-full border border-[#374151] text-[#8C9092] rounded-md pl-4 pr-14 md:pr-28 pt-2 pb-24 bg-primary text-xs md:text-base"
              />
              {errors.needs && (
                <span className="text-red-400 text-xs mt-1">
                  {errors.needs}
                </span>
              )}
            </div>

            {/* Upload Files */}
            <div className="flex flex-col mb-4">
              <label htmlFor="files" className="text-white mb-3">
                Upload Files
              </label>
              <input
                id="files"
                type="text"
                placeholder="Provide your Google Drive link here..."
                value={form.files}
                onChange={handleChange}
                className="input w-full border border-[#374151] text-[#8C9092] rounded-md md:px-4 md:py-2 p-4 bg-primary text-xs md:text-base"
              />
              {errors.files && (
                <span className="text-red-400 text-xs mt-1">
                  {errors.files}
                </span>
              )}
            </div>

            {/* Additional Instructions */}
            <div className="flex flex-col mb-4">
              <label htmlFor="instructions" className="text-white mb-3">
                Additional Instructions
              </label>
              <textarea
                id="instructions"
                placeholder="Any specific requirements..."
                value={form.instructions}
                onChange={handleChange}
                className="input w-full border border-[#374151] text-[#8C9092] text-sm md:text-base rounded-md pl-4 pr-14 md:pr-28 pt-2 pb-24 bg-primary"
              />
              <span className="text-[#8C9092] text-xs mt-1">*optional</span>
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
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {Payment.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-white border border-[#8C9092] w-full rounded-lg p-2 md:px-3 py-4 bg-primary"
                  >
                    <input
                      type="checkbox"
                      id={`payment-${index}`}
                      checked={selectedPayment === index}
                      onChange={() => handlePaymentSelect(index)}
                      className="appearance-none h-3 w-3 md:h-4 md:w-4 border border-[#8C9092] rounded-full checked:bg-[#925AEE] checked:border-transparent focus:outline-none"
                    />
                    <label
                      htmlFor={`payment-${index}`}
                      className="flex items-center gap-2"
                    >
                      {item.icon}
                      <span className="md:text-xs text-[8px]">{item.name}</span>
                    </label>
                  </div>
                ))}
              </div>
              {errors.payment && (
                <span className="text-red-400 text-xs mt-2 ">
                  {errors.payment}
                </span>
              )}

              {/* Pay Button */}
              <div
                className="flex items-center justify-center bg-gradient-to-r from-[#9747FF] to-[#DE4AA5] rounded-md mt-8 gap-2 md:w-[415px] md:h-[60px] w-full h-15 cursor-pointer"
                onClick={handleSubmit}
              >
                <FaLock size={16} />
                <p className="md:text-lg text-sm">
                  {isPaying ? "Processing" : "Pay"}
                </p>
              </div>
              <p className="text-[#737373] md:text-base text-xs mt-4">
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
