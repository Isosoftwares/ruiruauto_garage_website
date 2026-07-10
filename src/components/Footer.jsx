import React from "react";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";
import Logo from "../assets/graphics/garagelogo.jpeg";
// Using placeholders for brand icons if specific library not installed, or generic text
// Assuming react-icons or similar might be available based on package.json,
// checking package.json: "react-icons": "^4.9.0", "react-social-icons": "^5.15.0"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-lighter border-t border-gray-200 dark:border-white/5 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 overflow-hidden rounded-full border border-primary/50">
                <img
                  src={Logo}
                  alt="Motion Zip Ltd"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Reliable, professional, and exceptional automotive care. We
              combine advanced technology with expert craftsmanship to keep you
              safe on the road.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <SocialIcon
                url="https://www.facebook.com/motionzipltd"
                style={{ height: 35, width: 35 }}
                bgColor="#E63946"
                fgColor="#fff"
              />
              <SocialIcon
                url="https://x.com/motionzipltd"
                style={{ height: 35, width: 35 }}
                bgColor="#E63946"
                fgColor="#fff"
              />
              <SocialIcon
                url="https://www.instagram.com/motionzipltd"
                style={{ height: 35, width: 35 }}
                bgColor="#E63946"
                fgColor="#fff"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
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
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/portal"
                  className="dark:text-gray-400 hover:text-primary transition-colors font-semibold text-primary"
                >
                  Client Portal
                </Link>
              </li>
              {/* <li>
                <a
                  href="https://admin.motionzipltd.com/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Admin Login
                </a>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
              Top Services
            </h3>
            <ul className="space-y-4">
              <li className="text-gray-600 dark:text-gray-400">
                Engine Diagnostics
              </li>
              <li className="text-gray-600 dark:text-gray-400">Brake Repair</li>
              <li className="text-gray-600 dark:text-gray-400">
                Suspension Work
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Oil & Filter Change
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Electrical Systems
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <MapPinIcon className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=-1.1457946630675555,36.956170139548476"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors block"
                  >
                    Mathigu Rd, Ruiru Town,
                    <br />
                    Along Thika Super Highway
                  </a>
                  
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <PhoneIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:0748333555"
                  className="hover:text-primary transition-colors"
                >
                  0748 333 555
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <EnvelopeIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@motionzipltd.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@motionzipltd.com
                </a>
              </li>
              <li className="pt-2">
                <div className="rounded-2xl overflow-hidden h-36 border border-gray-250/50 dark:border-white/5 shadow-sm relative">
                  <iframe
                    title="Motion Zip Ltd Map Pin"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.5580781550575!2d36.956170139548476!3d-1.1457946630675555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b6d635904c59cf%3A0xd5a0c7361a168229!2sRuiru%20Auto%20Garage!5e1!3m2!1sen!2ske!4v1783055545910!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="dark:opacity-80"
                  ></iframe>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/5 pt-8 text-center text-gray-500 dark:text-gray-600 text-sm">
          <p>&copy; {currentYear} Motion Zip Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
