"use client";
import Image from "next/image";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center w-full max-w-sm p-3">
        {/* Logo */}
        <Image
          src="/img/logo.png"
          alt="None"
          width={60}
          height={60}
          className="mb-10"
        />
        <div className="bg-[#252525] px-6 py-10 rounded-lg shadow-2xl w-full">
          <h2 className="text-center text-3xl font-bold mb-6 text-[#FAFAFA] orbitron">
            SIGN <span className="outlined-text text-3xl">UP</span>
          </h2>
          <div className="flex flex-col w-full items-center justify-center mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full mb-4 px-3 py-3 text-base rounded-xl bg-[#151515] placeholder-[#8C9092] border border-[#374151]"
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full mb-4 px-3 py-3 text-base rounded-xl bg-[#151515] placeholder-[#8C9092] border border-[#374151]"
            />
            <a
              href="/password"
              className="w-full py-3 rounded-xl text-base text-white font-semibold bg-gradient-to-r from-secondary to-tertiary text-center"
            >
              Continue
            </a>
            <div className="mt-2 text-center text-sm text-[#9CA3AF]">
              Already have an account?
              <a href="/login" className="hover:underline text-[#60A5FA] ml-1">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
