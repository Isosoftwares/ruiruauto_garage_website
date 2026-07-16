import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

function CallFloat() {
  return (
    <a
      href="tel:0748333555"
      className="fixed bottom-24 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all z-[60] flex items-center justify-center cursor-pointer"
      aria-label="Call Motion Zip"
    >
      <FaPhoneAlt className="text-xl animate-pulse" />
    </a>
  );
}

export default CallFloat;
