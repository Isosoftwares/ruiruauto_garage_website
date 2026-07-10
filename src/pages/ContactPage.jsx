import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {

  return (
    <div className="">
      <Helmet>
        <title>Contact Us | Motion Zip Ltd</title>
        <meta
          name="description"
          content="Get in touch with Motion Zip Ltd. Visit us off Thika Super Highway, call us on 0748 333 555, or send us a message."
        />
        <link rel="canonical" href="https://motionzipltd.com/contact" />
      </Helmet>

      {/* Header */}
      <div className="bg-dark text-white py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to get your car back in shape? Reach out to us today.
          </p>
        </div>
      </div>

      <div className="section-padding bg-gray-50 dark:bg-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Visit Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Motion Zip Ltd, Mathigu Rd,
                      <br />
                      Ruiru Town, Along Thika Super Highway.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      <a
                        href="tel:0748333555"
                        className="hover:text-primary transition-colors"
                      >
                        0748 333 555
                      </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a
                        href="tel:0781333555"
                        className="hover:text-primary transition-colors"
                      >
                        0781 333 555
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a
                        href="mailto:contact@motionzipltd.com"
                        className="hover:text-primary transition-colors"
                      >
                        contact@motionzipltd.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="mt-12 rounded-2xl overflow-hidden h-64 border border-gray-200 dark:border-white/5 relative shadow-md">
                <iframe
                  title="Motion Zip Ltd Map Location"
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
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="glass-card bg-white dark:bg-dark-lighter border-gray-100 dark:border-gray-800 p-8 flex flex-col justify-center items-center text-center space-y-6">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 shadow-lg shadow-green-500/25">
                <FaWhatsapp className="w-10 h-10 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Direct WhatsApp Booking
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-sm font-light">
                The fastest way to book a diagnostic scan, timing belt replacement, or mechanical repairs is to chat directly with our front desk coordinators on WhatsApp.
              </p>
              <a
                href="https://wa.me/254723669437?text=Hi%20Motion%20Zip%20Ltd,%20I'd%20like%20to%20inquire%20about%20booking%20an%20appointment%20for%20my%20vehicle."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full bg-green-600 hover:bg-green-700 hover:shadow-green-500/30 border-none flex items-center justify-center gap-2 py-4 shadow-md text-sm font-bold active:scale-95"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Start WhatsApp Chat</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-light">
                <span>Or call us directly at</span>
                <a href="tel:0748333555" className="font-bold text-primary hover:underline">0748 333 555</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
