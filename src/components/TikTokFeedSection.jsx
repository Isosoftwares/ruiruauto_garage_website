import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowTopRightOnSquareIcon,
  VideoCameraIcon,
  EyeIcon,
  HeartIcon,
  PlayIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import axios from "../api/axios";
import { motion } from "framer-motion";
import { Modal } from "@mantine/core";

const TikTokFeedSection = () => {
  const [displayCount, setDisplayCount] = useState(6);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const { data, isLoading } = useQuery({
    queryKey: ["tiktokPublicPosts"],
    queryFn: async () => {
      const res = await axios.get("/social/tiktok?limit=24");
      return res.data;
    },
  });

  const posts = data?.data || [];
  const visiblePosts = posts.slice(0, displayCount);

  return (
    <section className="py-12 bg-gray-50 dark:bg-dark text-gray-900 dark:text-white transition-colors border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-dark-lighter p-6 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black text-xl shadow-md shrink-0">
              <VideoCameraIcon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                @ruiruautogarage
                <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  Official TikTok Feed
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Watch garage transformations, body resprays, and custom engine repair clips.
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

        {/* RESPONSIVE VIDEO GRID */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-96 bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"
              />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="bg-white dark:bg-dark-lighter p-10 rounded-3xl border border-gray-200 dark:border-gray-800 text-center space-y-4">
            <VideoCameraIcon className="w-12 h-12 text-gray-400 mx-auto" />
            <h3 className="text-lg font-bold">TikTok Feed Syncing...</h3>
            <p className="text-xs text-gray-500 max-w-md mx-auto">
              Please authorize your TikTok Sandbox App in Admin Panel $\rightarrow$ Social API Settings to sync your video clips.
            </p>
            <a
              href="https://www.tiktok.com/@ruiruautogarage"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-xl shadow-md"
            >
              Watch Directly on TikTok @ruiruautogarage
            </a>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.map((post) => (
                <motion.div
                  key={post._id || post.postId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group glass-card p-4 bg-white dark:bg-dark-lighter rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-primary transition-all flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl"
                >
                  {/* Media Cover Card */}
                  <div
                    onClick={() => setActiveVideoModal(post)}
                    className="relative aspect-[9/14] bg-black rounded-2xl overflow-hidden mb-4 cursor-pointer group-hover:scale-[1.01] transition-transform"
                  >
                    {post.coverUrl ? (
                      <img
                        src={post.coverUrl}
                        alt={post.caption}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-gray-400">
                        <VideoCameraIcon className="w-12 h-12" />
                      </div>
                    )}

                    {/* Dark Overlay with Play Icon */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/90 dark:bg-black/90 text-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <PlayIcon className="w-7 h-7 ml-0.5 fill-current" />
                      </div>
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl">
                      <span className="flex items-center gap-1">
                        <EyeIcon className="w-3.5 h-3.5 text-primary" />
                        {Number(post.viewsCount || 0).toLocaleString()} views
                      </span>
                      <span className="flex items-center gap-1">
                        <HeartIcon className="w-3.5 h-3.5 text-red-500 fill-current" />
                        {Number(post.likesCount || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Caption & Date */}
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 line-clamp-2 leading-relaxed font-medium">
                      {post.caption || "Video from @ruiruautogarage"}
                    </p>

                    <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-800 text-[11px] text-gray-500">
                      <span>{new Date(post.postDate).toLocaleDateString()}</span>
                      <a
                        href={post.shareUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary font-bold hover:underline flex items-center gap-1"
                      >
                        Watch on TikTok
                        <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            {posts.length > displayCount && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setDisplayCount((prev) => prev + 6)}
                  className="px-8 py-3 bg-white dark:bg-dark-lighter border border-gray-200 dark:border-gray-800 hover:border-primary text-gray-900 dark:text-white font-extrabold text-xs rounded-xl shadow-md transition-all"
                >
                  Load More TikTok Videos ({posts.length - displayCount} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* VIDEO POPUP EMBED MODAL */}
      <Modal
        opened={!!activeVideoModal}
        onClose={() => setActiveVideoModal(null)}
        centered
        size="md"
        radius="lg"
        withCloseButton={false}
        padding={0}
        styles={{
          modal: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        {activeVideoModal && (
          <div className="relative w-full max-w-sm mx-auto bg-white dark:bg-dark-lighter rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 p-4 flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white line-clamp-1 pr-6">
                {activeVideoModal.caption || "TikTok Video Clip"}
              </h3>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-1 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors shrink-0"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Video Container (Responsive Height) */}
            <div className="relative flex-grow min-h-0 aspect-[9/16] bg-black rounded-2xl overflow-hidden">
              <iframe
                src={activeVideoModal.embedUrl || `https://www.tiktok.com/embed/v2/${activeVideoModal.postId}`}
                title={activeVideoModal.caption}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Footer */}
            <div className="mt-3 shrink-0">
              <a
                href={activeVideoModal.shareUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 bg-black dark:bg-white text-white dark:text-black font-extrabold text-xs rounded-xl text-center shadow-md flex items-center justify-center gap-1.5 transition-colors hover:opacity-90"
              >
                Open Original Video on TikTok
                <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default TikTokFeedSection;
