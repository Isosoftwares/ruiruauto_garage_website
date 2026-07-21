import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppFloat() {
  const whatsappNumber = "254781333555";

  const handleStartChat = () => {
    const message = "Hello Ruiru Auto Garage, I'd like to inquire about your services";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <button
      onClick={handleStartChat}
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110 z-[60] flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl animate-pulse" />
    </button>
  );
}

export default WhatsAppFloat;
