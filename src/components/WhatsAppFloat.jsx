import React, { useState } from "react";
import { FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";

function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const whatsappNumber = "+254717063036";

  const handleStartChat = () => {
    const encodedMessage = encodeURIComponent(message || "Hello, I'm interested in RyzonPlus");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 z-[60] animate-fade-in">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-2xl" />
              <div>
                <div className="font-semibold">Chat with us</div>
                <div className="text-xs text-green-100">Typically replies instantly</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-green-700 rounded-full p-1"
            >
              <FaTimes />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Hi there! 👋</p>
              <p className="text-sm text-gray-600">How can we help you today?</p>
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-green-500 text-sm"
              rows="3"
            />

            <button
              onClick={handleStartChat}
              className="w-full mt-3 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              <span>Start Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110 z-[60] flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? <FaTimes className="text-2xl" /> : <FaWhatsapp className="text-2xl" />}
      </button>
    </>
  );
}

export default WhatsAppFloat;
