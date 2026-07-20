import React, { useEffect } from "react";
import { ArrowTopRightOnSquareIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

const TikTokFeedSection = () => {
  useEffect(() => {
    // Load TikTok's official web embed script dynamically
    const scriptId = "tiktok-embed-script";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-12 bg-gray-50 dark:bg-dark text-gray-900 dark:text-white transition-colors border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-dark-lighter p-6 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black text-xl shadow-md shrink-0">
              <VideoCameraIcon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                @ruiruautogarage
                <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Official TikTok
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Watch public garage transformations, body resprays, and repair clips.
              </p>
            </div>
          </div>

          <a
            href="https://www.tiktok.com/@ruiruautogarage"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-extrabold text-xs rounded-xl shadow-md hover:opacity-90 transition-all flex items-center gap-2 shrink-0"
          >
            Open Profile on TikTok
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        </div>

        {/* OFFICIAL TIKTOK CREATOR / PUBLIC PROFILE EMBED */}
        <div className="flex justify-center w-full min-h-[500px] bg-white dark:bg-dark-lighter p-4 sm:p-6 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@ruiruautogarage"
            data-unique-id="ruiruautogarage"
            data-embed-type="creator"
            style={{ width: "100%", maxWidth: "780px", minWidth: "288px" }}
          >
            <section className="text-center py-12 space-y-4">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm text-gray-500 font-medium">
                Loading public TikTok video feed for @ruiruautogarage...
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.tiktok.com/@ruiruautogarage?refer=creator_embed"
                className="text-xs font-bold text-primary hover:underline block"
              >
                @ruiruautogarage on TikTok
              </a>
            </section>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TikTokFeedSection;
