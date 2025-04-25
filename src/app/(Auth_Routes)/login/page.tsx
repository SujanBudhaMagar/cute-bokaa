"use client";
import Image from "next/image";

const LogIn = () => {
  return (
    <div className="bg-primary h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="flex flex-col items-center justify-center w-full max-w-sm h-full p-3">
        <Image
          src="/img/logo.png"
          alt="None"
          width={50}
          height={50}
          className="mb-10"
        />
        <div className="bg-[#252525] px-6 py-10 rounded-lg shadow-2xl w-full">
          <h2 className="text-center text-3xl font-extrabold mb-6 text-[#FAFAFA] orbitron">
            LOG{" "}
            <span className="outlined-text font-extrabold text-3xl orbitron">
              IN
            </span>
          </h2>
          <div className="flex flex-col w-full items-center justify-center mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full mb-4 px-3 py-3 text-base rounded-xl bg-[#151515] placeholder-[#8C9092] border border-[#374151]"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mb-6 px-3 py-3 text-base rounded-xl bg-[#151515] placeholder-[#8C9092] border border-[#374151]"
            />
            <button className="w-full py-3 rounded-xl text-base text-white font-semibold bg-gradient-to-r from-secondary to-tertiary">
              Log in
            </button>
            <div className="mt-2 text-center text-xs">
              <a href="#" className="hover:underline text-[#60A5FA]">
                Forgot your password?
              </a>
            </div>
            <div className="mt-6 text-center text-sm text-[#9CA3AF]">
              Don’t have an account?
              <a
                href="/signup"
                className="hover:underline text-[#60A5FA] ml-1 text-sm"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
