import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp, FaDirections } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const mapDirectionsUrl = "https://maps.app.goo.gl/eCQfJSSpTJnVMwSP9";

  return (
    <div className="bg-gray-50 dark:bg-dark min-h-screen">
      <Helmet>
        <title>Contact Us | Motion Zip Ltd</title>
        <meta
          name="description"
          content="Contact Motion Zip Ltd. Visit us on Mathigu Road, Ruiru Town off Thika Superhighway, call +254 748 333 555 / +254 781 333 555, or email support@motionzipltd.com."
        />
        <link rel="canonical" href="https://www.motionzipltd.com/contact-us" />
      </Helmet>

      {/* Header */}
      <div className="bg-dark text-white py-20 text-center border-b border-white/10">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Contact Motion Zip Ltd
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We are committed to providing prompt and professional support across
            all our automotive and technology services.
          </p>
        </div>
      </div>

      <div className="section-padding py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4 p-5 bg-white dark:bg-dark-lighter rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Location & Directions
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Mathigu Road, Ruiru Town
                      <br />
                      Along Thika Superhighway, Kenya
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4 p-5 bg-white dark:bg-dark-lighter rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      Telephone
                    </h3>
                    <div className="space-y-1 text-sm">
                      <p>
                        <a
                          href="tel:+254748333555"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary font-medium transition-colors"
                        >
                          +254 748 333 555
                        </a>
                      </p>
                      <p>
                        <a
                          href="tel:+254781333555"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary font-medium transition-colors"
                        >
                          +254 781 333 555
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email & Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 p-5 bg-white dark:bg-dark-lighter rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <EnvelopeIcon className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                        Email
                      </h3>
                      <p className="text-xs">
                        <a
                          href="mailto:support@motionzipltd.com"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary font-medium break-all"
                        >
                          support@motionzipltd.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-white dark:bg-dark-lighter rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <GlobeAltIcon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                        Website
                      </h3>
                      <p className="text-xs">
                        <a
                          href="https://www.motionzipltd.com"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary font-medium"
                        >
                          www.motionzipltd.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-5 bg-white dark:bg-dark-lighter rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      Business Hours
                    </h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <p>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Monday – Saturday:
                        </span>{" "}
                        8:00 AM – 6:00 PM
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Sunday & Public Holidays:
                        </span>{" "}
                        By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="rounded-2xl overflow-hidden h-64 border border-gray-200 dark:border-white/5 relative shadow-md">
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

            {/* Direct WhatsApp Call to Action & Info */}
            <div className="space-y-6">
              <div className="glass-card bg-white dark:bg-dark-lighter border-gray-200 dark:border-gray-800 p-8 rounded-2xl flex flex-col justify-center items-center text-center space-y-6 shadow-xl">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 shadow-lg shadow-green-500/25">
                  <FaWhatsapp className="w-10 h-10 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Direct WhatsApp Booking
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-sm text-sm">
                  The fastest way to book a diagnostic scan, timing belt
                  replacement, mechanical repairs, or tech inquiries is to chat
                  directly with our front desk team on WhatsApp.
                </p>
                <a
                  href="https://wa.me/254748333555?text=Hi%20Motion%20Zip%20Ltd,%20I'd%20like%20to%20inquire%20about%20booking%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full bg-green-600 hover:bg-green-700 hover:shadow-green-500/30 border-none flex items-center justify-center gap-2 py-4 shadow-md text-sm font-bold active:scale-95"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Start WhatsApp Chat</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>Or call us directly at</span>
                  <a
                    href="tel:+254748333555"
                    className="font-bold text-primary hover:underline"
                  >
                    +254 748 333 555
                  </a>
                </div>
              </div>

              <div className="p-6 bg-dark text-white rounded-2xl border border-white/10 space-y-4">
                <h4 className="font-bold text-lg text-primary">
                  Need Directions on Mobile?
                </h4>
                <p className="text-xs text-gray-300">
                  Open Google Maps directly on your smartphone to get
                  turn-by-turn directions to our Ruiru workshop along Thika
                  Superhighway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
