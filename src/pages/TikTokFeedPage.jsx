import React from "react";
import { Helmet } from "react-helmet-async";
import TikTokFeedSection from "../components/TikTokFeedSection";

const TikTokFeedPage = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-dark min-h-screen text-gray-900 dark:text-white transition-colors">
      <Helmet>
        <title>TikTok Video Clips | Ruiru Auto Garage - Motion Zip Ltd</title>
        <meta
          name="description"
          content="Watch garage transformation clips, engine tuning, and spray painting videos from @ruiruautogarage on TikTok."
        />
      </Helmet>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
       
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
            TikTok Video Clips (@ruiruautogarage)
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            Watch short clips of engine overhauls, custom metallic painting, suspension repairs, and car care tips straight from our shop.
          </p>
        </div>
      </div>

      <TikTokFeedSection />
    </div>
  );
};

export default TikTokFeedPage;
