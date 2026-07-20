import React from "react";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaDirections,
} from "react-icons/fa";
import Logo from "../assets/graphics/garagelogo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const mapDirectionsUrl = "https://maps.app.goo.gl/eCQfJSSpTJnVMwSP9";

  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: "https://wa.me/254748333555",
      label: "WhatsApp",
      color: "hover:bg-green-600",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/motionzipltd",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/motionzipltd",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@motionzipltd",
      label: "TikTok",
      color: "hover:bg-black",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@motionzipltd",
      label: "YouTube",
      color: "hover:bg-red-600",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/motionzipltd",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <footer className="bg-white dark:bg-dark-lighter border-t border-gray-200 dark:border-white/5 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 overflow-hidden rounded-full border border-primary/50 shadow-md">
                <img
                  src={Logo}
                  alt="Motion Zip Ltd"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  Motion Zip Ltd
                </h2>
                <p className="text-xs text-primary font-semibold">
                  Parent Company
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Your Trusted Partner in Automotive & Technology Solutions.
              Combining advanced technology with expert craftsmanship to keep
              you moving forward.
            </p>

            {/* Connect With Us */}
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Connect With Us
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-9 h-9 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white ${social.color} transition-all border border-gray-200 dark:border-white/5`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick & Navigation Links */}
          <div>
            <a
              href="https://admin.motionzipltd.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
                Quick Links
              </h3>
            </a>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/areas"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Before & After Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Latest Blog Posts
                </Link>
              </li>
              <li>
                <Link
                  to="/portal"
                  className="text-primary font-semibold hover:underline"
                >
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
              Legal & Compliance
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/data-deletion"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Data Deletion Instructions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
              Corporate Desk
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <MapPinIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span>
                    Mathigu Road, Ruiru Town, Along Thika Superhighway
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <PhoneIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+254748333555"
                    className="hover:text-primary block transition-colors"
                  >
                    +254 748 333 555
                  </a>
                  <a
                    href="tel:+254781333555"
                    className="hover:text-primary block transition-colors"
                  >
                    +254 781 333 555
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <EnvelopeIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:support@motionzipltd.com"
                  className="hover:text-primary transition-colors"
                >
                  support@motionzipltd.com
                </a>
              </li>

              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <GlobeAltIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="https://www.motionzipltd.com"
                  className="hover:text-primary transition-colors"
                >
                  www.motionzipltd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 dark:text-gray-500 text-xs">
          <p>© 2026 Motion Zip Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:underline">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="hover:underline">
              Terms
            </Link>
            <Link to="/cookies-policy" className="hover:underline">
              Cookies
            </Link>
            <Link to="/data-deletion" className="hover:underline">
              Data Deletion
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
