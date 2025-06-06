"use client";
import {MdEmail,MdPhone,MdLocationOn,MdPerson,MdHistory,MdFavorite,MdSettings,} from "react-icons/md";
import Image from "next/image";
import LogoComp from "@/components/LogoComp";
import Settings from "@/components/profiletabs/Settings";
import ProfileOverview from "@/components/profiletabs/ProfileOverview";
import OrderHistory from "@/components/profiletabs/OrderHistory";
import Wishlist from "@/components/profiletabs/Wishlist";
import { useState } from "react";
import { wishlistItemsProps } from "@/types";

export default function Profile() {
  const [activeTab, setActiveTab] = useState<string>("profile");


  const tabs:wishlistItemsProps[] = [
    { key: "profile", label: "Profile Overview", icon: <MdPerson /> },
    { key: "history", label: "Order History", icon: <MdHistory /> },
    { key: "wishlist", label: "Wishlist", icon: <MdFavorite /> },
    { key: "settings", label: "Settings", icon: <MdSettings /> },
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileOverview />;
      case "history":
        return <OrderHistory />;
      case "wishlist":
        return <Wishlist />;
      case "settings":
        return <Settings />;
      default:
        return <ProfileOverview />;
    }
  };

  return (
    <div className="globalContainer">
      <div className="hidden md:block">
        <LogoComp />
      </div>

      <div className="md:px-10 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 mt-10 md:mt-0">
        {/* Left Sidebar */}
        <div className="flex flex-col gap-6">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center bg-[#252525] rounded-2xl p-6 border-1 border-[#374151]">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#8B5CF6]">
              <Image
                src="/img/profile/profile.jpg"
                alt="Profile"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <h2 className="horizon text-white">JAMES ANDERSON</h2>
            <button className="w-full mt-4 py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-sm">
              Edit Profile
            </button>

            <div className="w-full mt-6 space-y-4 text-white">
              <div className="flex items-center gap-4">
                <MdEmail />
                <span className="text-sm">james@example.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MdPhone />
                <span className="text-sm">+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-4">
                <MdLocationOn />
                <span className="text-sm">Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-[#252525] rounded-2xl p-6 space-y-1 border border-[#374151] min-w-[250px]">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`w-full flex items-center gap-3 py-2 px-4 rounded-md ${
                  activeTab === tab.key
                    ? "bg-[#B5C8F2] text-[#014AE6]"
                    : "text-[#8C9092] hover:bg-gray-800"
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          {/*show here active content component*/}
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
}
