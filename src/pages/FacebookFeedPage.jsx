import React from "react";
import { Helmet } from "react-helmet-async";
import FacebookFeedSection from "../components/FacebookFeedSection";

const FacebookFeedPage = () => {
  return (
    <div className="pt-24 pb-16 bg-white dark:bg-dark min-h-screen text-gray-900 dark:text-white transition-colors">
      <Helmet>
        <title>Facebook Feed | Ruiru Auto Garage - Motion Zip Ltd</title>
        <meta
          name="description"
          content="View recent Facebook posts, vehicle restorations, paint resprays, and engine overhaul updates directly from Ruiru Auto Garage."
        />
      </Helmet>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
            Facebook Live Feed
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            Stay connected with real-time project updates, customer handovers, and bodywork restoration clips straight from our Facebook Page.
          </p>
        </div>
      </div>

      <FacebookFeedSection />
    </div>
  );
};

export default FacebookFeedPage;
