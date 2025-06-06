"use client";
import LogoComp from "@/components/LogoComp";
import { Feature1props, PaymentIn } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";
import { FiBarChart2, FiCloud, FiFileText } from "react-icons/fi";
import { IoIosArrowDown, IoMdCloudUpload } from "react-icons/io";

const features: Feature1props[] = [
  {
    icon: <FiFileText className="text-purple-400 text-xl" />,
    bgColor: "bg-purple-900/50",
    title: "Keep 85% of Your Sales",
    description: "Industry-leading revenue share for producers",
  },
  {
    icon: <FiBarChart2 className="text-teal-400 text-xl" />,
    bgColor: "bg-teal-900/50",
    title: "Analytics Dashboard",
    description: "Track your sales and audience engagement",
  },
  {
    icon: <FiCloud className="text-purple-400 text-xl" />,
    bgColor: "bg-purple-900/50",
    title: "Instant File Delivery",
    description:
      "Your beats are instantly delivered to customers after purchase",
  },
];

const SellBeat = () => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);

  const PaymentSellBeat: PaymentIn[] = [
    {
      icon: <FaCcVisa className="text-[#014AE6] h-6 w-6" />,
      name: "Visa",
    },
    {
      icon: <FaCcMastercard className="text-[#EB001B] h-6 w-6" />,
      name: "Mastercard",
    },
    {
      icon: <FaPaypal className="text-[#014AE6] h-6 w-6" />,
      name: "Paypal",
    },
  ];

  const handlePayment = (idx: number) => {
    setSelectedPayment(idx);
  };
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="overflow-hidden">
      <section className="w-full">
        <div className="relative w-full h-screen">
          <Image
            src={"/img/sellbeatBG.png"}
            alt="background"
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000CC] to-[#00000099] z-10"></div>
          <div className="absolute top-0 z-10 w-full h-full flex items-center justify-between">
            <div className="w-full globalContainer">
              <div className="hidden md:block -mt-32">
                <LogoComp />
              </div>

              <h1 className="horizon text-xl md:text-3xl w-full text-white text-center mt-24">
                <span className="bg-gradient-to-r from-[#F03F98] to-[#B5C8F2] text-transparent bg-clip-text">
                  Sell
                </span>{" "}
                Your <span className="horizon-outlined">Own Beats</span>
              </h1>
              <p className="text-white text-center md:px-20 lg:px-72 mt-4">
                Turn your passion into profit. Upload your beats, set your
                prices, and start earning from your music production skills.
              </p>
              <div className="flex items-center justify-center ">
                <Link
                  href={"#apply"}
                  className="text-xs md:text-[16px] py-2.5 md:py-3 px-4 bg-gradient-to-r mt-8 from-[#A655DA] to-[#D84BAB] rounded-lg text-[#FAFAFA] hover:bg-[#252525] cursor-pointer  tracking-widest "
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-white flex items-center justify-center py-12 md:px-10 "
        id="apply"
      >
        <div className="globalContainer grid lg:grid-cols-2 gap-20">
          {/* Producer Registration Form */}
          <div className="bg-[#252525] rounded-lg p-8">
            <h2 className="text-xl mb-6 tracking-wider horizon text-center">
              PRODUCER <span className="horizon-outlined">REGISTRATION</span>
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Producer Name</label>
                <input
                  type="text"
                  placeholder="Your producer name"
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl p-3 text-sm focus:outline-none focus:border-purple-500 placeholder:text-[#8C9092]"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Producer Style</label>
                <div className="relative">
                  <select className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl p-3 text-sm appearance-none focus:outline-none focus:border-purple-500 placeholder:text-[#8C9092]">
                    <option>Hip Hop</option>
                    <option>Electronic</option>
                    <option>Pop</option>
                    <option>R&B</option>
                    <option>Rock</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm">Social Media URL</label>
                <input
                  type="url"
                  placeholder="https://your-account.com"
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl p-3 text-sm focus:outline-none focus:border-purple-500 placeholder:text-[#8C9092]"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Upload Demo Beat</label>
                <div
                  className={`border-2 border-dashed ${
                    dragActive
                      ? "border-purple-500 bg-[#1a1a1a]"
                      : "border-[#333] bg-[#1a1a1a]"
                  } rounded-md p-6 flex flex-col items-center justify-center cursor-pointer transition-colors`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() =>
                    document.getElementById("file-upload")?.click()
                  }
                >
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".mp3,.wav"
                    onChange={handleFileChange}
                  />
                  <IoMdCloudUpload className="text-4xl mb-2 text-gray-400" />
                  <p className="text-xs text-center text-gray-400">
                    {selectedFile
                      ? selectedFile.name
                      : "Drag & drop your beat or click to browse"}
                  </p>
                  <p className="text-xs text-center text-gray-500 mt-1">
                    MP3, WAV, up to 50MB
                  </p>
                </div>
              </div>
              <div>
                <p>Mode of Payment</p>
                <div className="flex gap-2 mt-4 mb-6">
                  {PaymentSellBeat.map((payment, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-white border border-[#8C9092] w-full md:w-50 rounded-lg px-3 py-4 bg-primary"
                    >
                      <input
                        type="checkbox"
                        id={`payment-${idx}`}
                        checked={selectedPayment === idx}
                        onChange={() => handlePayment(idx)}
                        className="appearance-none h-5 w-5 border border-[#8C9092] rounded-full checked:bg-[#925AEE] checked:border-transparent focus:outline-none"
                      />
                      <label
                        htmlFor={`payment-${idx}`}
                        className="flex items-center gap-2"
                      >
                        {payment.icon}
                        <span className="md:text-xs text-[10px]">
                          {payment.name}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md transition-colors font-medium">
                Submit Your Beats
              </button>
            </div>
          </div>

          {/* Why Join Us Section */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#252525] rounded-lg p-8">
              <h2 className="text-xl mb-6 text-center">Why Join Us?</h2>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`${feature.bgColor} p-3 rounded-full`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl">{feature.title}</h3>
                      <p className="text-xs text-[#8C9092] mt-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-[#252525] rounded-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/img/footimg/testi.jpg"
                    alt="Alex Producer"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3>Alex Producer</h3>
                  <p className="text-xs text-[#8C9092]">Top Seller</p>
                </div>
              </div>
              <p className="text-[#8C9092] text-xs">
                {`Joining BeatMarket was the best decision for my producer
                career. The platform's reach and tools helped me scale my
                beat-selling business.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellBeat;
