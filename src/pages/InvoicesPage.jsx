import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const InvoicesPage = () => {
  return (
    <motion.div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gray-50 dark:bg-dark text-center px-4">
      <Helmet>
        <title>Client Portal | Motion Zip Ltd</title>
        <meta
          name="description"
          content="View your invoices and service history."
        />
      </Helmet>

      <div className="max-w-md w-full glass-card p-10">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <UserCircleIcon className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Client Portal
        </h1>
        <h2 className="text-xl text-primary font-medium mb-6">Coming Soon</h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          We are building a secure portal for you to view your invoices, track
          service history, and schedule appointments online.
        </p>

        <div className="flex justify-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <WrenchScrewdriverIcon className="w-5 h-5" />
            <span>Under Construction</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InvoicesPage;
