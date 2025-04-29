"use client";
import Image from "next/image";
import { useState } from "react";

const SignUpPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center px-4 md:px-0">
      <div className="flex flex-col items-center justify-center w-full max-w-lg">
        {/* Logo */}
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="mb-6"
        />
        <div className="bg-[#252525] px-6 py-8 md:px-8 md:py-12 rounded-lg shadow-2xl w-full">
          <h2 className="text-center text-lg md:text-2xl font-bold mb-6 text-[#FAFAFA] tracking-widest horizon-outlined">
            CREATE{" "}
            <span className="horizon text-lg md:text-2xl tracking-widest">
              A PASSWORD
            </span>
          </h2>
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full mb-4">
              <label
                htmlFor="password"
                className="text-white mb-2  ml-1 md:ml-8"
              >
                Enter Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="mx-auto w-full max-w-sm px-3 py-2 md:py-3 text-base rounded-xl bg-[#151515] placeholder-[#8C9092] border border-[#374151] text-[#8C9092]"
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <label
                htmlFor="confirmPassword"
                className="text-white mb-2 ml-1 md:ml-8"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter your password again"
                required
                className="mx-auto w-full max-w-sm px-3 py-2 md:py-3 text-base rounded-xl bg-[#151515] placeholder-[#8C9092] border border-[#374151] text-[#8C9092]"
              />
            </div>
            <a
              href="/login"
              className="mx-auto block py-2 md:py-3 rounded-xl text-base text-white font-semibold bg-gradient-to-r from-secondary to-tertiary text-center w-full max-w-sm"
            >
              Sign Up
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-white">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the{" "}
              <span className="text-[#60A5FA]">Terms & Conditions</span> and{" "}
              <span className="text-[#60A5FA]">Privacy & Policy</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPassword;
