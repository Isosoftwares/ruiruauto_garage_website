import React, { useState, useEffect } from "react";
import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Show the install banner
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // If the app is already installed, or running in standalone mode
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`PWA Install Choice Outcome: ${outcome}`);

    // We no longer need the prompt, clear it
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    // Optionally stash dismiss in sessionStorage so we don't annoy the user
    sessionStorage.setItem("pwaDismissed", "true");
  };

  // Do not show if dismissed in this session
  if (sessionStorage.getItem("pwaDismissed") === "true") {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-gray-900 border border-white/10 text-white p-5 rounded-3xl shadow-2xl z-50 flex gap-4"
        >
          {/* Icon */}
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
            <ArrowDownTrayIcon className="w-6 h-6" />
          </div>

          {/* Text and Actions */}
          <div className="flex-grow space-y-3">
            <div>
              <h4 className="font-extrabold text-base tracking-tight text-white">
                Install Portal App
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed font-light">
                Add Motion Zip Ltd to your home screen for quick, offline-capable
                access to your vehicle records, invoices, and estimates.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleInstallClick}
                className="btn-primary py-2 px-4 rounded-xl text-xs font-bold shadow-md shadow-primary/20"
              >
                Install App
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 rounded-xl text-xs font-semibold transition-all"
              >
                Maybe Later
              </button>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="text-gray-450 hover:text-white transition-colors flex-shrink-0 self-start"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;
