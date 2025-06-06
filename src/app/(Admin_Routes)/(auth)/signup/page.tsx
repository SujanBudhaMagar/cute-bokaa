"use client";
import { useState } from "react";
import AuthLogoComp from "@/components/AuthLogo";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      if (!formData.name || !formData.email) {
        alert("Please fill out all fields.");
        return;
      }
      return setStep(2);
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    localStorage.setItem("UserData", JSON.stringify(formData));
    console.log(formData);
    alert("Signup successful!");
    router.push("/login");
  };

  return (
    <div className="bg-primary min-h-screen flex items-center justify-center px-4">
      <div className="globalContainer">
        <AuthLogoComp />
        <div className="md:w-[550px] max-w-lg bg-[#252525] px-10 py-10 rounded-lg shadow-2xl">
          <div className="flex flex-col items-center">
            <div>
              {step === 1 ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#FAFAFA] tracking-wide mb-10 text-center">
                    {" "}
                    SIGN <span className="horizon-outlined">UP</span>
                  </h2>
                </>
              ) : (
                <>
                  <h2 className="text-lg md:text-2xl  text-[#FAFAFA] tracking-wide mb-10 text-center">
                    {" "}
                    CREATE <span className="horizon">A PASSWORD</span>
                  </h2>
                </>
              )}
            </div>

            <form onSubmit={handleSubmit} className="w-full">
              {step === 1 ? (
                <>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full mb-4 px-4 py-3 rounded-xl bg-primary text-[#8C9092] border border-[#374151]"
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="input w-full mb-6 px-4 py-3 rounded-xl bg-primary text-[#8C9092] border border-[#374151]"
                  />
                </>
              ) : (
                <>
                  <label className="text-white mb-1 ml-1 block">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    required
                    className="input w-full mb-4 px-4 py-3 rounded-xl bg-primary text-[#8C9092] border border-[#374151]"
                  />

                  <label className="text-white mb-1 ml-1 block">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    required
                    className="input w-full mb-6 px-4 py-3 rounded-xl bg-primary text-[#8C9092] border border-[#374151]"
                  />
                </>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-secondary to-tertiary transition-all hover:brightness-110"
              >
                {step === 1 ? "Continue" : "Sign Up"}
              </button>
            </form>

            {step === 1 && (
              <div className="mt-4 text-sm text-[#9CA3AF]">
                Already have an account?
                <button className="hover:underline text-[#60A5FA] ml-1">
                  Log in
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
