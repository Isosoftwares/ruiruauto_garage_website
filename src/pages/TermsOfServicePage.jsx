import React from "react";
import { Helmet } from "react-helmet-async";
import { DocumentTextIcon, CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const TermsOfServicePage = () => {
  return (
    <div className="bg-gray-50 dark:bg-dark min-h-screen">
      <Helmet>
        <title>Terms of Service | Motion Zip Ltd</title>
        <meta
          name="description"
          content="Terms of Service for Motion Zip Ltd. Review our conditions governing website use, automotive services, WhatsApp bookings, AI assistant, and payments."
        />
        <link rel="canonical" href="https://www.motionzipltd.com/terms-of-service" />
      </Helmet>

      {/* Header Banner */}
      <div className="bg-dark text-white py-16 text-center border-b border-white/10">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <DocumentTextIcon className="w-4 h-4" /> Legal Agreement
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Terms of Service
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
                Overview & Agreement
              </h2>
              <p>
                These Terms govern the use of <strong>Motion Zip Ltd</strong> websites, digital platforms, WhatsApp Business services, AI assistant, online booking systems, and any products or services offered.
              </p>
              <p>
                By accessing our website, communicating with our virtual assistants, or booking services with us, you agree to be bound by these Terms of Service.
              </p>
            </section>

            {/* Services */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Services Offered
              </h2>
              <p>
                Motion Zip Ltd provides services through its business divisions, including but not limited to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                {[
                  "Automotive mechanical repair & maintenance",
                  "Computerized engine diagnostics & scanning",
                  "Panel beating, bodywork & accident restoration",
                  "High-bake spray painting & color matching",
                  "Corporate fleet management & maintenance",
                  "Technology solutions & software tools",
                  "Related customer support and logistics",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm bg-gray-50 dark:bg-white/5 p-3 rounded-lg border border-gray-100 dark:border-white/5">
                    <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Quotations & Bookings */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-gray-800 space-y-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Quotations</h3>
                <p className="text-sm">
                  All quotations provided via website, email, or WhatsApp are estimates unless explicitly stated in writing. Additional work identified after physical inspection will require explicit customer approval prior to execution.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-gray-800 space-y-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Bookings</h3>
                <p className="text-sm">
                  Appointments scheduled through the website, WhatsApp Cloud API, telephone, or social media channels are subject to workshop availability and scheduling confirmation.
                </p>
              </div>
            </section>

            {/* Customer Responsibilities */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Customer Responsibilities
              </h2>
              <p>Customers agree to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
                <li>Provide accurate, current, and complete contact and vehicle information</li>
                <li>Authorize requested work clearly before service commencement</li>
                <li>Remove all personal valuables and loose belongings before handing over vehicles</li>
                <li>Comply with agreed payment terms upon job completion</li>
              </ul>
            </section>

            {/* Payments */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Payments
              </h2>
              <p>
                Invoices become payable according to agreed payment terms upon service completion. Services or goods may be withheld until full payment has been received where permitted by applicable law.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Intellectual Property
              </h2>
              <p>
                All website content, software, trademarks, logos, graphics, photographs, and code remain the exclusive property of Motion Zip Ltd unless otherwise stated. Unauthorized reproduction or redistribution is prohibited.
              </p>
            </section>

            {/* Website Use */}
            <section className="space-y-4 bg-red-50 dark:bg-red-950/20 p-6 rounded-xl border border-red-200 dark:border-red-800/40">
              <h2 className="text-xl font-bold text-red-900 dark:text-red-300 flex items-center gap-2">
                <ExclamationTriangleIcon className="w-5 h-5 text-red-600" /> Acceptable Website Use
              </h2>
              <p className="text-sm text-red-800 dark:text-red-200">
                Users shall not:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-red-800 dark:text-red-200 pl-2">
                <li>Attempt unauthorized access to server infrastructure or admin systems</li>
                <li>Upload or transmit malicious software, scripts, or viruses</li>
                <li>Misuse automated booking systems or send spam requests</li>
                <li>Interfere with or disrupt regular website operation and APIs</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Limitation of Liability
              </h2>
              <p>
                Motion Zip Ltd shall not be liable for indirect, incidental, or consequential damages arising from the use of our website or services except where prohibited by law.
              </p>
            </section>

            {/* Amendments */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-3">
                Amendments
              </h2>
              <p>
                These Terms may be updated periodically. Continued use of our website and digital services constitutes acceptance of any revisions.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
