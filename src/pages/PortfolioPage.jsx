import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
  WrenchScrewdriverIcon,
  PhoneIcon,
  ChatBubbleLeftEllipsisIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  ShieldCheckIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import axios from "../api/axios";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Bodywork & Paint",
  "Engine Overhaul",
  "Accident Repair",
  "Custom Upgrades",
  "General Service",
  "Other",
];

// Single Media Card Component (Before or After)
const MediaPreviewCard = ({ media, badgeText, onClick }) => {
  const isVideo = media?.type === "video";

  return (
    <div
      onClick={onClick}
      className="relative aspect-[4/5] sm:aspect-square bg-black rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
    >
      {isVideo ? (
        <video
          src={media.url}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
        />
      ) : (
        <img
          src={media.url}
          alt={badgeText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none" />

      {/* Video Indicator */}
      {isVideo && (
        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md p-1.5 rounded-full text-white">
          <VideoCameraIcon className="w-4 h-4" />
        </div>
      )}

      {/* Badge at Bottom Right */}
      <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white font-extrabold text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1 rounded-lg border border-white/10 shadow-lg pointer-events-none">
        {badgeText}
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const { data, isLoading } = useQuery({
    queryKey: ["publicPortfolios", selectedCategory, search],
    queryFn: async () => {
      const categoryParam = selectedCategory === "All" ? "" : selectedCategory;
      const res = await axios.get(
        `/portfolio?status=active&category=${categoryParam}&search=${search}&limit=50`
      );
      return res.data;
    },
  });

  const projects = data?.data || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark text-gray-900 dark:text-white py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* HEADER SECTION */}
        <div className="space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-primary">
            OUR WORK
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
            Portfolio Gallery
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Real jobs from our shop. Before and after sets are placed together, and videos play silently in the gallery.
          </p>
        </div>

        {/* SEARCH & CATEGORY FILTERS */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search vehicle model, category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-dark-lighter border border-gray-200 dark:border-gray-800 rounded-xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-primary shadow-sm"
              />
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              Showing <strong>{projects.length}</strong> transformation set(s)
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                    : "bg-white dark:bg-dark-lighter text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GALLERY GRID (BEFORE & AFTER SETS PLACED TOGETHER) */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-dark-lighter rounded-3xl border border-gray-200 dark:border-gray-800 p-8 space-y-4 shadow-sm">
            <WrenchScrewdriverIcon className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">No Projects Found</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto">
              We couldn't find any portfolio projects matching your search or category filter. Try clearing filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearch("");
              }}
              className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {projects.map((project) => (
              <React.Fragment key={project._id}>
                {/* BEFORE WORK CARD */}
                <MediaPreviewCard
                  media={project.beforeMedia}
                  badgeText="BEFORE WORK"
                  onClick={() => setActiveModalProject(project)}
                />

                {/* AFTER WORK CARD */}
                <MediaPreviewCard
                  media={project.afterMedia}
                  badgeText="AFTER WORK"
                  onClick={() => setActiveModalProject(project)}
                />
              </React.Fragment>
            ))}
          </div>
        )}

        {/* BOTTOM CALL TO ACTION */}
        <div className="relative rounded-3xl overflow-hidden bg-primary text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-black">
              Need a Similar Vehicle Repair or Transformation?
            </h2>
            <p className="text-white/90 text-sm">
              Send us photos of your damaged car on WhatsApp or call our team for an instant quote & free inspection at Ruiru Auto Garage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/254748333555?text=Hello%20Ruiru%20Auto%20Garage,%20I%20saw%20your%20portfolio%20and%20need%20a%20quote"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-white text-primary font-extrabold rounded-xl shadow-lg hover:bg-gray-100 transition-colors text-center text-sm flex items-center justify-center gap-2"
            >
              <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-green-600" />
              WhatsApp Photos
            </a>
            <a
              href="tel:0748333555"
              className="px-6 py-3 bg-black/30 hover:bg-black/40 text-white font-extrabold rounded-xl transition-colors text-center text-sm flex items-center justify-center gap-2 border border-white/20"
            >
              <PhoneIcon className="w-5 h-5" /> Call 0748 333 555
            </a>
          </div>
        </div>
      </div>

      {/* INTERACTIVE MODAL DIALOG ON CLICK */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl h-[94vh] bg-white dark:bg-dark-lighter rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden z-10 flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-dark">
                <div>
                  <span className="text-xs font-extrabold text-primary uppercase tracking-wider">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white">
                    {activeModalProject.title || "Garage Transformation"}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-white rounded-full transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* Interactive Slider / Full Player */}
                <BeforeAfterSlider
                  beforeMedia={activeModalProject.beforeMedia}
                  afterMedia={activeModalProject.afterMedia}
                  title={activeModalProject.title}
                />

                {/* Info Grid (If vehicle specs exist) */}
                {activeModalProject.vehicleInfo && (
                  <div className="bg-gray-50 dark:bg-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800 text-xs">
                    <span className="text-gray-500 dark:text-gray-400 block font-semibold uppercase">
                      Vehicle Specification
                    </span>
                    <span className="text-gray-900 dark:text-white font-bold text-sm">
                      {activeModalProject.vehicleInfo}
                    </span>
                  </div>
                )}

                {activeModalProject.description && (
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-1.5">
                      <ShieldCheckIcon className="w-4 h-4 text-primary" /> Work Performed & Notes
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                      {activeModalProject.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer CTA */}
              <div className="p-5 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-dark flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
                  Have a similar repair? Contact us for a free estimate.
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <a
                    href="https://wa.me/254748333555"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ChatBubbleLeftEllipsisIcon className="w-4 h-4" /> WhatsApp Us
                  </a>
                  <Link
                    to="/contact"
                    className="flex-1 sm:flex-initial px-4 py-2 bg-primary hover:bg-primary/95 text-white text-xs font-bold rounded-xl shadow transition-colors text-center"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;
