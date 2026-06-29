import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/graphics/l3.jpeg";
import { useTheme } from "../context/ThemeContext";

function NavBarLanding() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMobileMenu(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Benefits", path: "/benefits" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[50] transition-all duration-300 rounded-full ${
          scrolled
            ? "bg-white/90 dark:bg-[#0e111d]/90 backdrop-blur-md border border-gray-200 dark:border-white/10 py-2 shadow-xl shadow-black/5"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <img
                src={logo}
                alt="RyzonPlus"
                className="h-[45px] rounded-md w-auto"
              />
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons & Theme Toggle - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <FaSun className="text-lg text-yellow-500" />
                ) : (
                  <FaMoon className="text-lg text-secondary" />
                )}
              </button>

              <a
                href="https://mybusiness.RyzonPlus.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
              >
                Login
              </a>
              <a
                href="https://mybusiness.RyzonPlus.com/get-started"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5 px-5 shadow-none"
              >
                Start Free Trial
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300"
              >
                {theme === "dark" ? (
                  <FaSun className="text-lg text-yellow-500" />
                ) : (
                  <FaMoon className="text-lg text-secondary" />
                )}
              </button>

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="p-2 text-gray-900 dark:text-white hover:text-primary transition-all duration-300"
              >
                {mobileMenu ? (
                  <FaTimes className="text-xl" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
          onClick={() => setMobileMenu(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white dark:bg-dark border-l border-gray-200 dark:border-white/10 z-[70] md:hidden transform transition-transform duration-300 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="RyzonPlus"
                className="h-[35px] rounded-md w-auto"
              />
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                RyzonPlus
              </span>
            </div>
            <button
              onClick={() => setMobileMenu(false)}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg"
            >
              <FaTimes />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`block py-3 px-4 rounded-xl font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                }`}
                onClick={() => setMobileMenu(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-8 mt-6 border-t border-gray-200 dark:border-white/10 space-y-4">
              <a
                href="https://mybusiness.RyzonPlus.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl font-medium transition-all"
              >
                Login
              </a>
              <a
                href="https://mybusiness.RyzonPlus.com/get-started"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarLanding;
