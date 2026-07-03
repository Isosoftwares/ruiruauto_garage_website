import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";
import Logo from "../assets/graphics/garagelogo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, darkMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Areas", path: "/areas" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300`}
    >
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "glass rounded-full shadow-lg w-[95%] md:w-[90%] max-w-7xl px-8 py-3 bg-white/90 dark:bg-dark-lighter/90 backdrop-blur-md"
            : "w-[95%] md:w-[90%] max-w-7xl px-0 py-2"
        }`}
      >
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-primary shadow-lg group-hover:shadow-primary/50 transition-all">
              <img
                src={Logo}
                alt="Ruiru Auto Garage"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered Links */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 bg-gray-100 dark:bg-white/5 rounded-full p-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-primary text-white shadow-md"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-white dark:hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions - Right Aligned */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/portal"
              className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              title="Client Portal"
            >
              <UserCircleIcon className="w-6 h-6" />
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <Link
              to="/contact"
              className="btn-primary py-2 px-4 shadow-md text-sm"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-lighter border-t border-gray-100 dark:border-white/5 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container-custom py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium py-2 border-b border-gray-100 dark:border-white/5 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/portal"
              className="text-lg font-medium py-2 border-b border-gray-100 dark:border-white/5 text-gray-700 dark:text-gray-300 flex items-center gap-2"
            >
              <UserCircleIcon className="w-5 h-5" />
              Client Portal
            </Link>
            <Link to="/contact" className="btn-primary mt-4 text-center">
              Book Service
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
