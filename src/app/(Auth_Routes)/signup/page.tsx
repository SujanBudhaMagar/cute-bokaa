"use client";
import AuthLogoComp from "@/components/AuthLogo";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center w-full max-w-sm p-3">
        {/* Logo */}
        <AuthLogoComp />
        <div className="bg-[#252525] px-6 py-10 rounded-lg shadow-2xl w-full">
          <h2 className="text-center text-3xl font-bold mb-6 text-[#FAFAFA] horizon">
            SIGN <span className="horizon-outlined text-3xl">UP</span>
          </h2>
          <div className="flex flex-col w-full items-center justify-center mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full mb-4 px-3 py-3 text-base rounded-xl bg-[#151515] text-[#8C9092] border border-[#374151]"
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full mb-4 px-3 py-3 text-base rounded-xl bg-[#151515] text-[#8C9092] border border-[#374151]"
            />
            <Link
              href="/password"
              className="w-full py-3 rounded-xl text-base text-white font-semibold bg-gradient-to-r from-secondary to-tertiary text-center"
            >
              Continue
            </Link>
            <div className="mt-2 text-center text-sm text-[#9CA3AF]">
              Already have an account?
              <Link
                href="/login"
                className="hover:underline text-[#60A5FA] ml-1"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
