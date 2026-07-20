import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  VideoCameraIcon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  EyeIcon,
  CalendarIcon,
  PlayIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import axios from "../api/axios";
import { motion, AnimatePresence } from "framer-motion";

const TikTokFeedSection = () => {
  const [activeModalVideo, setActiveModalVideo] = useState(null);
  const [displayCount, setDisplayCount] = useState(8);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["tiktokPublicPosts"],
    queryFn: async () => {
      const res = await axios.get("/social/tiktok?limit=24");
      return res.data;
    },
  });

  const posts = data?.data || [];
  const visiblePosts = posts.slice(0, displayCount);

  if (!isLoading && posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-dark text-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              TIKTOK FEED
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
              Latest Videos from TikTok
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xl">
              Real jobs from our shop in Ruiru. Follow{" "}
              <strong className="text-primary font-bold">@ruiruautogarage</strong>{" "}
              for daily engine overhauls, body resprays, and diagnostic tips.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => refetch()}
              className="p-2.5 bg-white dark:bg-dark-lighter border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary rounded-xl shadow-sm transition-colors"
              title="Refresh TikTok Feed"
            >
              <ArrowPathIcon className="w-4 h-4" />
            </button>
            <a
              href="https://www.tiktok.com/@ruiruautogarage"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black font-extrabold text-xs rounded-xl shadow-md hover:opacity-90 transition-all flex items-center gap-2"
            >
              Follow @ruiruautogarage
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* VIDEOS GRID */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : visiblePosts.length === 0 ? null : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {visiblePosts.map((post) => (
              <motion.div
                key={post._id || post.postId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveModalVideo(post)}
                className="relative aspect-[4/5] bg-black rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 flex flex-col justify-between"
              >
                {/* Poster Cover Thumbnail with fallback video player */}
                <img
                  src={post.coverUrl}
                  alt={post.caption || "TikTok Video"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Video Hover Player (If stream exists) */}
                {post.videoUrl && (
                  <video
                    src={post.videoUrl}
                    poster={post.coverUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                )}

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

                {/* Top Badge & Play Icon */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="bg-black/70 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <VideoCameraIcon className="w-3.5 h-3.5 text-primary" />
                    TikTok
                  </div>

                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary group-hover:scale-110 transition-all shadow-lg">
                    <PlayIcon className="w-4 h-4 fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1.5 text-white pointer-events-none z-10">
                  {post.caption && (
                    <p className="text-xs font-semibold line-clamp-2 leading-snug drop-shadow-md">
                      {post.caption}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-[10px] text-white/80 font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <EyeIcon className="w-3 h-3 text-primary" />
                      {post.viewsCount ? post.viewsCount.toLocaleString() : "1.2k"} views
                    </span>

                    {post.postDate && (
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-3 h-3" />
                        {new Date(post.postDate).toLocaleDateString("en-KE", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* LOAD MORE BUTTON */}
        {posts.length > displayCount && (
          <div className="text-center pt-4">
            <button
              onClick={() => setDisplayCount((prev) => prev + 8)}
              className="px-6 py-3 bg-white dark:bg-dark-lighter border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 text-xs font-bold rounded-xl shadow-sm hover:border-primary hover:text-primary transition-all"
            >
              Load More TikTok Videos ({posts.length - displayCount} remaining)
            </button>
          </div>
        )}
      </div>

      {/* FULLSCREEN TIKTOK VIDEO LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeModalVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalVideo(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-dark-lighter rounded-3xl shadow-2xl border border-gray-800 overflow-hidden z-10 flex flex-col text-white max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-dark">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  <h3 className="text-sm font-extrabold text-white">
                    TikTok Player (@ruiruautogarage)
                  </h3>
                </div>

                <button
                  onClick={() => setActiveModalVideo(null)}
                  className="p-1.5 text-gray-400 hover:text-white rounded-full transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Video Player Container (Renders TikTok Embed iframe or HTML5 Player) */}
              <div className="relative aspect-[4/5] bg-black overflow-hidden flex items-center justify-center">
                {activeModalVideo.embedUrl || activeModalVideo.postId ? (
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${activeModalVideo.postId}?lang=en-US`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={activeModalVideo.caption || "TikTok Video Player"}
                  />
                ) : (
                  <video
                    src={activeModalVideo.videoUrl}
                    poster={activeModalVideo.coverUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Caption & External Action */}
              <div className="p-5 space-y-4 bg-dark">
                {activeModalVideo.caption && (
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                    {activeModalVideo.caption}
                  </p>
                )}

                <div className="flex items-center justify-between gap-4 pt-2 border-t border-gray-800">
                  <a
                    href={activeModalVideo.shareUrl || "https://www.tiktok.com/@ruiruautogarage"}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-primary hover:bg-red-600 text-white text-xs font-bold rounded-xl shadow transition-colors flex items-center gap-2"
                  >
                    Watch on TikTok app <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://wa.me/254748333555?text=Hello%20Ruiru%20Auto%20Garage,%20I%20saw%20your%20TikTok%20video%20and%20need%20a%20quote"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl shadow transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TikTokFeedSection;
