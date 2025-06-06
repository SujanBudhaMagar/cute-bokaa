"use client";

import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function PopupNotification() {
  const [showNotification, setShowNotification] = useState(false);
  const [currentNameIndex, setCurrentNameIndex] = useState(0);

  const names = [
    "Harry Boka",
    "Sita Chulbuli",
    "Ramesh Raja",
    "Pinky Power",
    "Babita Queen",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(true);

      const hideTimer = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // hide after 10s

      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length); // loop through names

      return () => clearTimeout(hideTimer);
    }, 10000); // every 20s (10s visible + 10s hidden)

    // Start the first popup after 10s
    const initialTimer = setTimeout(() => setShowNotification(true), 10000);
    const initialHide = setTimeout(() => setShowNotification(false), 20000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimer);
      clearTimeout(initialHide);
    };
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="hidden md:flex w-fit fixed z-10 right-0 bottom-20 bg-[#fefaf3] text-[#1e1e1e] rounded-[12px] border border-pink-400 shadow-md px-4 py-3 items-center gap-4"
          >
            <div className="text-primary text-xl -rotate-30">
              <FaBell />
            </div>
            <p className="text-xs">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                {names[currentNameIndex]}
              </span>{" "}
              bought <span className="font-medium">Summer Rhythm!</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
