import React from "react";
import { Helmet } from "react-helmet-async";
import { TrashIcon, EnvelopeIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

const DataDeletionPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-dark min-h-screen">
      <Helmet>
        <title>Data Deletion Instructions | Motion Zip Ltd</title>
        <meta
          name="description"
          content="Data Deletion Instructions for Motion Zip Ltd. Submit a formal request to delete your personal information in compliance with privacy regulations."
        />
        <link rel="canonical" href="https://www.motionzipltd.com/data-deletion" />
      </Helmet>

      {/* Header Banner */}
      <div className="bg-dark text-white py-16 text-center border-b border-white/10">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <TrashIcon className="w-4 h-4" /> User Rights & Control
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Data Deletion Instructions
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Request Deletion of Your Personal Information
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding py-16">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="glass-card bg-white dark:bg-dark-lighter p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            
            <p className="text-base md:text-lg">
              <strong>Motion Zip Ltd</strong> respects your privacy and provides customers and users with the ability to request deletion of their personal information where legally applicable.
            </p>

            {/* How to Submit Request */}
            <div className="bg-gray-50 dark:bg-white/5 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-800 space-y-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <EnvelopeIcon className="w-6 h-6 text-primary" /> How to Submit a Request
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-gray-900 dark:text-white w-24">Email:</span>
                  <a href="mailto:support@motionzipltd.com" className="text-primary hover:underline font-semibold">
                    support@motionzipltd.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-gray-900 dark:text-white w-24">Subject:</span>
                  <span className="bg-gray-200 dark:bg-white/10 px-2.5 py-1 rounded font-mono text-xs font-semibold text-gray-900 dark:text-white">
                    Data Deletion Request
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-4 space-y-2">
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  Please include the following in your email:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 pl-2">
                  <li>Full Name</li>
                  <li>Phone Number (associated with your account or bookings)</li>
                  <li>Email Address</li>
                  <li>Details of your specific data deletion request</li>
                </ul>
              </div>
            </div>

            {/* Response Timeframe */}
            <div className="flex items-start gap-4 p-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 rounded-xl">
              <CheckBadgeIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900 dark:text-blue-200 space-y-1">
                <p className="font-bold">Confirmation & Processing</p>
                <p>
                  We will acknowledge receipt of your data deletion request and process it within a reasonable timeframe, confirming once completed.
                </p>
              </div>
            </div>

            {/* Retention Note */}
            <div className="text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-6">
              <p>
                <strong>Legal Note:</strong> Some information may be retained where required by law, taxation compliance, statutory accounting, warranty obligations, fraud prevention, or ongoing dispute resolution.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionPage;
