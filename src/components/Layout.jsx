import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const isPortal = location.pathname.startsWith("/portal");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark transition-colors duration-300">
      {!isPortal && <Navbar />}
      <main className={`flex-grow ${isPortal ? "pt-0" : "pt-20"}`}>{children}</main>
      {!isPortal && <Footer />}
    </div>
  );
};

export default Layout;
