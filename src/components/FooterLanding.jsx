import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaTiktok,
} from "react-icons/fa";
import logo from "../assets/graphics/l3.jpeg";

function FooterLanding() {
  const date = new Date();
  const year = date.getFullYear();
  const whatsappNumber = "+254717063036";

  const footerLinks = {
    product: [
      { name: "Features", path: "/features" },
      { name: "Pricing", path: "/pricing" },
      { name: "Use Cases", path: "/use-cases" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Benefits", path: "/benefits" },
    ],
  };

  return (
    <footer className="bg-gray-100 dark:bg-dark pt-20 pb-12 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img
                src={logo}
                alt="RyzonPlus"
                className="h-[45px] rounded-md w-auto"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-500 leading-relaxed mb-6">
              Empowering Kenyan businesses with world-class management tools.
              Built locally, for locals.
            </p>
            <div className="flex items-center gap-4">
              {[
                {
                  icon: FaFacebook,
                  href: "https://www.facebook.com/profile.php?id=61584507744621",
                },
                {
                  icon: FaTiktok,
                  href: "https://www.tiktok.com/@RyzonPlus.pos?_r=1&_t=ZM-91ly9KKzXVQ",
                },
                { icon: FaWhatsapp, href: `https://wa.me/${whatsappNumber}` },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white dark:bg-white/5 shadow-sm border border-gray-100 dark:border-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">
              Product
            </h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@RyzonPlus.com"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <FaEnvelope /> <span>info@RyzonPlus.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+254706181387"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <FaPhone /> <span>+254 706 181 387</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span>Mon - Fri, 8am - 5pm</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-500 text-sm">
            © {year} RyzonPlus. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-500">
            <Link
              to="/privacy"
              className="hover:text-primary dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-primary dark:hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterLanding;
