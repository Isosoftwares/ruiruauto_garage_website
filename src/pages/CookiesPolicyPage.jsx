import React from "react";
import { Helmet } from "react-helmet-async";
import { CircleStackIcon, CheckIcon, CpuChipIcon } from "@heroicons/react/24/outline";

const CookiesPolicyPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-dark min-h-screen">
      <Helmet>
        <title>Cookies Policy | Motion Zip Ltd</title>
        <meta
          name="description"
          content="Cookies Policy for Motion Zip Ltd. Learn how we use cookies, web analytics, and Meta Pixel to improve performance and site security."
        />
        <link rel="canonical" href="https://www.motionzipltd.com/cookies-policy" />
      </Helmet>

      {/* Header Banner */}
      <div className="bg-dark text-white py-16 text-center border-b border-white/10">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <CircleStackIcon className="w-4 h-4" /> Web Preferences
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Cookies Policy
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
            
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Overview
              </h2>
              <p>
                <strong>Motion Zip Ltd</strong> uses cookies and similar technologies to improve website performance, security, and user experience across our digital platforms.
              </p>
            </section>

            {/* Why We Use Cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Why We Use Cookies
              </h2>
              <p>We use cookies and web tracking technologies to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                {[
                  "Remember user preferences & session state",
                  "Improve website performance & load speeds",
                  "Analyze visitor traffic & usage analytics",
                  "Secure website forms against spam & bots",
                  "Improve online booking systems & checkout",
                  "Measure advertising & marketing effectiveness",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 p-3 rounded-lg border border-gray-100 dark:border-white/5 text-sm">
                    <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Third-Party Services
              </h2>
              <p>Our website may integrate third-party services including:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { title: "Google Analytics", desc: "For aggregated traffic analysis" },
                  { title: "Meta Pixel", desc: "For campaign measurement" },
                  { title: "Facebook & Instagram", desc: "For social widgets & ads" },
                  { title: "WhatsApp Cloud API", desc: "For customer messaging" },
                ].map((service, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-gray-800 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white text-sm">
                      <CpuChipIcon className="w-4 h-4 text-primary" /> {service.title}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{service.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 pt-2">
                These third-party providers may place cookies in accordance with their respective privacy policies.
              </p>
            </section>

            {/* Managing Cookies */}
            <section className="space-y-4 bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Managing Cookies
              </h2>
              <p className="text-sm">
                Users may manage, restrict, or disable cookies through their browser settings at any time. Please note that certain website functions, online booking tools, or interactive forms may not operate correctly if cookies are disabled.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicyPage;
