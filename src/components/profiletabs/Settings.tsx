"use client";
import Image from "next/image";
import React from "react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaCamera, FaCheck, FaTrashAlt } from "react-icons/fa";

// Define interfaces for our state
interface ProfileData {
  fullName: string;
  email: string;
  phoneNumber: string;
  city: string;
  country: string;
}

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const Settings = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: "John Anderson",
    email: "john@example.com",
    phoneNumber: "+1 (555) 123-4567",
    city: "New York",
    country: "United States",
  });

  const [passwordData, setPasswordData] = useState<PasswordData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Profile data saved:", profileData);
    // Here you would typically send this data to your backend
  };

  const handleUpdatePassword = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Password updated");
    // Here you would typically send this data to your backend
  };

  const handleDeleteAccount = (): void => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      console.log("Account deleted");
      // Here you would typically send a request to delete the account
    }
  };

  return (
    <div>
      <div className="w-full space-y-6">
        {/* Profile Settings Section */}
        <div className="bg-[#252525] border-[1px] border-[#151515] rounded-lg p-6">
          <h2 className="text-[#F3F4F6] text-xl mb-6">
            Profile Settings
          </h2>

          <form onSubmit={handleSaveChanges}>
            <div className="flex mb-6 gap-6">
              <div className="relative h-fit">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#8B5CF6]">
                  <Image
                    src="/img/profile/profile.jpg"
                    alt="Profile"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-3 right-1 bg-blue-500 rounded-full p-2">
                  <FaCamera className="text-white text-sm" />
                </div>
              </div>

              <div>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-white text-sm mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={profileData.fullName}
                    onChange={handleProfileChange}
                    className="w-full bg-[#151515] border-[1px] border-[#4B5563] rounded-lg px-3 py-2 text-[#8C9092] focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="my-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-300 text-sm mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    className="w-full bg-[#151515] border-[1px] border-[#4B5563] rounded-lg px-3 py-2 text-[#8C9092] focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-gray-300 text-sm mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={profileData.phoneNumber}
                    onChange={handleProfileChange}
                    className="w-full bg-[#151515] border-[1px] border-[#4B5563] rounded-lg px-3 py-2 text-[#8C9092] focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-gray-300 text-sm mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={profileData.city}
                      onChange={handleProfileChange}
                      className="w-full bg-[#151515] border-[1px] border-[#4B5563] rounded-lg px-3 py-2 text-[#8C9092] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-gray-300 text-sm mb-1"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={profileData.country}
                      onChange={handleProfileChange}
                      className="w-full bg-[#151515] border-[1px] border-[#4B5563] rounded-lg px-3 py-2 text-[#8C9092] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#8B5CF6] hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                >
                  Save Changes
                </button>
              </div>

            </div>
          </form>
        </div>

        {/* Account & Security Section */}
        <div className="bg-[#252525] rounded-lg p-6">
          <h2 className="text-white text-xl font-medium mb-6">
            Account & Security
          </h2>

          <div className="mb-6">
            <h3 className="text-white text-sm font-medium mb-4">
              Change Password
            </h3>

            <form onSubmit={handleUpdatePassword} className="space-y-4">
              <div>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  placeholder="Current Password"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full bg-[#151515] border-[1px] border-[#4B5563] rounded-lg px-3 py-2 text-[#8C9092] focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  placeholder="New Password"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full bg-[#151515] border-[1px] border-[#4B5563] rounded-lg px-3 py-2 text-[#8C9092] focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full bg-[#151515] border-[1px] border-[#4B5563] rounded-lg px-3 py-2 text-[#8C9092] focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              >
                Update Password
              </button>
            </form>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <button
              onClick={handleDeleteAccount}
              className="text-red-500 hover:text-red-400 font-medium flex items-center focus:outline-none"
            >
              Delete Account <FaTrashAlt className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Settings;
