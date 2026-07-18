import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheckIcon,
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-dark min-h-screen">
      <Helmet>
        <title>Privacy Policy | Motion Zip Ltd</title>
        <meta
          name="description"
          content="Privacy Policy for Motion Zip Ltd. Learn how we collect, use, store, and safeguard your personal information across our website, WhatsApp Business Platform, and digital services."
        />
        <link
          rel="canonical"
          href="https://www.motionzipltd.com/privacy-policy"
        />
      </Helmet>

      {/* Header Banner */}
      <div className="bg-dark text-white py-16 text-center border-b border-white/10">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheckIcon className="w-4 h-4" /> Legal & Governance
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Effective Date: July 17, 2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="glass-card bg-white dark:bg-dark-lighter p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Overview
              </h2>
              <p>
                Welcome to <strong>Motion Zip Ltd</strong>. We are committed to
                protecting the privacy and security of our customers, partners,
                website visitors, and users of our digital services. This
                Privacy Policy explains how we collect, use, store, disclose,
                and safeguard your personal information when you visit{" "}
                <a
                  href="https://www.motionzipltd.com"
                  className="text-primary hover:underline font-medium"
                >
                  www.motionzipltd.com
                </a>
                , communicate with us, or use any of our services.
              </p>
              <p>
                By accessing our website or using our services, you agree to the
                practices described in this Privacy Policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Information We Collect
              </h2>
              <p>
                We may collect the following categories of personal information:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                {[
                  "Full name",
                  "Telephone number",
                  "Email address",
                  "Physical address",
                  "Vehicle details (where applicable)",
                  "Booking & service history",
                  "Photos, videos, and submitted documents",
                  "Payment and invoicing details",
                  "Customer support history",
                  "Website usage & analytics information",
                  "Device and browser information",
                  "IP address and location data",
                  "Cookies and tracking data",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm bg-gray-50 dark:bg-white/5 p-3 rounded-lg border border-gray-100 dark:border-white/5"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Communication Channels */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Communication Channels
              </h2>
              <p>We may communicate with customers through:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "WhatsApp Business Platform",
                  "Facebook & Instagram",
                  "Email & Direct Mail",
                  "Telephone & SMS",
                  "Website Contact Forms",
                  "AI-Powered Virtual Assistant",
                  "Online Booking Systems",
                ].map((channel, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-gray-800 text-sm font-medium text-center"
                  >
                    {channel}
                  </div>
                ))}
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                How We Use Your Information
              </h2>
              <p>Your information helps us:</p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
                <li>Respond to enquiries promptly</li>
                <li>Provide requested automotive and technology services</li>
                <li>Schedule and confirm appointments</li>
                <li>Generate accurate quotations and proforma invoices</li>
                <li>Improve customer support and service desk resolution</li>
                <li>
                  Process payments and maintain accurate accounting records
                </li>
                <li>Maintain customer relationship records</li>
                <li>Send automated booking notifications and status updates</li>
                <li>
                  Improve website functionality and overall user experience
                </li>
                <li>Enhance cybersecurity and prevent fraudulent activities</li>
                <li>Meet legal, statutory, and regulatory obligations</li>
              </ul>
            </section>

            {/* WhatsApp Business Platform */}
            <section className="space-y-4 bg-green-50 dark:bg-green-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800/40">
              <h2 className="text-xl font-bold text-green-900 dark:text-green-300">
                WhatsApp Business Platform
              </h2>
              <p className="text-sm text-green-800 dark:text-green-200">
                Motion Zip Ltd uses Meta's official WhatsApp Business Platform
                to communicate with customers. By contacting us through
                WhatsApp, you consent to receiving customer service messages,
                appointment reminders, quotations, order updates, and other
                communications relating to our services.
              </p>
            </section>

            {/* Artificial Intelligence (AI) */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Artificial Intelligence (AI)
              </h2>
              <p>
                Our website may use AI-powered virtual assistants to answer
                common questions, assist with bookings, collect information, and
                route enquiries to the appropriate department. AI responses are
                intended to improve customer experience and do not replace
                professional advice where applicable.
              </p>
            </section>

            {/* Facebook & Instagram */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Facebook & Instagram
              </h2>
              <p>
                Interactions through Facebook and Instagram may also be subject
                to Meta's Privacy Policy.
              </p>
            </section>

            {/* Information Sharing */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Information Sharing
              </h2>
              <p>
                We may share information only with trusted third parties,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
                <li>Authorized service providers and logistics partners</li>
                <li>
                  Insurance companies (where applicable for claims processing)
                </li>
                <li>Payment gateways and banking partners</li>
                <li>
                  Government agencies when legally required by subpoena or law
                </li>
                <li>
                  Technology providers supporting our cloud infrastructure
                </li>
              </ul>
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary font-semibold text-sm">
                Policy Guarantee: We never sell or rent your personal
                information to third parties for commercial marketing purposes.
              </div>
            </section>

            {/* Data Security & Retention */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-gray-800 space-y-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Data Security
                </h3>
                <p className="text-sm">
                  We implement appropriate administrative, technical, and
                  physical safeguards to protect customer information against
                  unauthorized access, disclosure, alteration, or destruction.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-gray-800 space-y-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Data Retention
                </h3>
                <p className="text-sm">
                  Information is retained only for as long as necessary to
                  provide services, comply with legal obligations, resolve
                  disputes, and enforce agreements.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Your Rights
              </h2>
              <p>Where applicable under privacy law, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
                <li>Request access to your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of personal information</li>
                <li>Restrict processing of your data</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            {/* Contact Information Box */}
            <section className="bg-dark text-white p-8 rounded-2xl border border-white/10 space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <EnvelopeIcon className="w-6 h-6 text-primary" /> Contact
                Privacy Office
              </h2>
              <p className="text-sm text-gray-300">
                If you have questions or concerns about this Privacy Policy or
                our privacy practices, please contact us:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-3">
                  <GlobeAltIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="https://www.motionzipltd.com"
                    className="hover:underline text-gray-300"
                  >
                    www.motionzipltd.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:support@motionzipltd.com"
                    className="hover:underline text-gray-300"
                  >
                    support@motionzipltd.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-gray-300">
                    <a
                      href="tel:+254748333555"
                      className="hover:underline block"
                    >
                      +254 748 333 555
                    </a>
                    <a
                      href="tel:+254781333555"
                      className="hover:underline block"
                    >
                      +254 781 333 555
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
