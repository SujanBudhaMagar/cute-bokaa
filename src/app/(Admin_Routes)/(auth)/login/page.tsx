"use client";
import AuthLogoComp from "@/components/AuthLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface loginProp {
  email: string;
  pass: string;
  password: string;
}

const LogIn = () => {
  const [Login, setLogin] = useState({ email: "", Pass: "" });
  const [userData, setuserData] = useState<loginProp | null>(null);

  const router = useRouter();

  useEffect(() => {
    const localUserData = localStorage.getItem("UserData");
    if (localUserData) {
      setuserData(JSON.parse(localUserData));
    }
  }, []);

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const HandleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userData) {
      alert("No registered user found.");
      return;
    }

    if (Login.email === userData.email && Login.Pass === userData.password) {
      console.log("Login successful");
      alert("Login successful!");
      router.push("/");
      // Redirect or proceed to the app dashboard
    } else {
      console.log("Wrong email or password");
      alert("Wrong email or password");
    }
  };

  return (
    <div className="bg-primary h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="flex flex-col items-center justify-center w-full max-w-sm h-full p-3">
        <AuthLogoComp />
        <div className="bg-[#252525] px-6 py-10 rounded-lg shadow-2xl w-full">
          <h2 className="text-center text-3xl font-bold mb-6 text-[#FAFAFA] horizon">
            LOG <span className=" font-bold text-3xl horizon-outlined">IN</span>
          </h2>
          <div className="flex flex-col w-full items-center justify-center mb-4">
            <form onSubmit={HandleSubmit}>
              <input
                type="email"
                name="email"
                value={Login.email}
                placeholder="Enter your email address"
                onChange={HandleChange}
                required
                className="input w-full mb-4 px-3 py-3 text-base rounded-xl bg-primary text-[#8C9092] border border-[#374151]"
              />
              <input
                type="password"
                name="Pass"
                value={Login.Pass}
                placeholder="Enter your password"
                onChange={HandleChange}
                required
                className="input w-full mb-6 px-3 py-3 text-base rounded-xl bg-primary text-[#8C9092] border border-[#374151]"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-base text-white font-semibold bg-gradient-to-r from-secondary to-tertiary"
              >
                Log in
              </button>
            </form>
            <div className="mt-2 text-center text-xs">
              <Link href="#" className="hover:underline text-[#60A5FA]">
                Forgot your password?
              </Link>
            </div>

            <div className="mt-6 text-center text-sm text-[#9CA3AF]">
              Don’t have an account?
              <Link
                href="/signup"
                className="hover:underline text-[#60A5FA] ml-1 text-sm"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
