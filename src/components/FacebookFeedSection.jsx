import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import axios from "../api/axios";
import { motion } from "framer-motion";

const FacebookFeedSection = () => {
  const [displayCount, setDisplayCount] = useState(6);

  const { data, isLoading } = useQuery({
    queryKey: ["facebookPublicPosts"],
    queryFn: async () => {
      const res = await axios.get("/social/facebook?limit=24");
      return res.data;
    },
  });

  const posts = data?.data || [];
  const visiblePosts = posts.slice(0, displayCount);

  // If no Facebook posts are returned, hide the section gracefully for clients
  if (!isLoading && posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white dark:bg-dark text-gray-900 dark:text-white transition-colors border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              FACEBOOK FEED
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
              Latest posts from Facebook Page
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xl">
              Stay updated with recent bodywork restorations, engine work, and customer deliveries from our official Facebook Page.
            </p>
          </div>

          <a
            href="https://www.facebook.com/ruiruautogarage"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
          >
            Follow on Facebook
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        </div>

        {/* POSTS GRID (Matching user reference layout) */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-80 bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visiblePosts.map((post) => (
              <motion.a
                key={post._id || post.postId}
                href={post.shareUrl || "https://www.facebook.com/ruiruautogarage"}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group glass-card p-4 bg-gray-50 dark:bg-dark-lighter rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-primary transition-all flex flex-col justify-between overflow-hidden shadow-sm"
              >
                {/* Media Preview Image */}
                {post.coverUrl && (
                  <div className="relative aspect-[16/10] bg-black rounded-2xl overflow-hidden mb-4">
                    <img
                      src={post.coverUrl}
                      alt={post.caption || "Facebook Post"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <ChatBubbleLeftEllipsisIcon className="w-3.5 h-3.5" />
                      Facebook
                    </div>
                  </div>
                )}

                {/* Caption Snippet & Date */}
                <div className="space-y-2 flex-1 flex flex-col justify-between">
                  {post.caption && (
                    <p className="text-xs text-gray-700 dark:text-gray-300 font-medium line-clamp-3 leading-relaxed">
                      {post.caption}
                    </p>
                  )}

                  <div className="pt-3 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="w-3.5 h-3.5 text-primary" />
                      {post.postDate
                        ? new Date(post.postDate).toLocaleDateString("en-KE", {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                          })
                        : "7/8/2026"}
                    </span>

                    <span className="text-primary font-bold flex items-center gap-1 group-hover:underline">
                      View Post <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* LOAD MORE BUTTON */}
        {posts.length > displayCount && (
          <div className="text-center pt-4">
            <button
              onClick={() => setDisplayCount((prev) => prev + 6)}
              className="px-6 py-3 bg-white dark:bg-dark-lighter border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 text-xs font-bold rounded-xl shadow-sm hover:border-primary hover:text-primary transition-all"
            >
              Load More Facebook Posts ({posts.length - displayCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacebookFeedSection;
