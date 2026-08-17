import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  PhotoIcon,
  VideoCameraIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

/**
 * BeforeAfterSlider component
 * Supports:
 * - Interactive mouse/touch image reveal slider for before vs after photos
 * - Tabbed or side-by-side view toggle
 * - Video player support for video resources
 */
const BeforeAfterSlider = ({
  beforeMedia,
  afterMedia,
  title = "Project Transformation",
  className = "",
}) => {
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100%
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState("after"); // 'before' | 'after' (for video or mobile tab view)
  const [viewMode, setViewMode] = useState("side"); // 'slider' | 'side'
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef(null);

  const isBeforeVideo = beforeMedia?.type === "video";
  const isAfterVideo = afterMedia?.type === "video";
  const hasVideo = isBeforeVideo || isAfterVideo;

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove],
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  // Keep track of container width for responsive image calculations
  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      setContainerWidth(containerRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [viewMode]);

  // If resources are videos, render tabbed or side-by-side video player
  if (hasVideo) {
    return (
      <div className={`space-y-3 ${className}`}>
        {/* Toggle Pills for Videos */}
        <div className="flex justify-between items-center bg-gray-150/80 dark:bg-dark p-1.5 rounded-2xl text-xs font-bold border border-gray-200 dark:border-gray-850">
          <button
            onClick={() => setActiveTab("before")}
            className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "before"
                ? "bg-red-600 text-white shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <VideoCameraIcon className="w-4 h-4" /> BEFORE REPAIR
          </button>
          <button
            onClick={() => setActiveTab("after")}
            className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "after"
                ? "bg-green-600 text-white shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <VideoCameraIcon className="w-4 h-4" /> AFTER RESTORATION
          </button>
        </div>

        {/* Video Display Container - Larger and Cinematic */}
        <div className="relative w-full h-[45vh] sm:h-[60vh] md:h-[65vh] min-h-[320px] max-h-[600px] bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
          {activeTab === "before" ? (
            isBeforeVideo ? (
              <video
                src={beforeMedia.url}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={beforeMedia.url}
                alt="Before repair"
                className="w-full h-full object-cover"
              />
            )
          ) : isAfterVideo ? (
            <video
              src={afterMedia.url}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={afterMedia.url}
              alt="After restoration"
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-2 border border-white/10 shadow-lg">
            {activeTab === "before" ? (
              <>
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                Initial Condition
              </>
            ) : (
              <>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                Restored Result
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // IMAGE BEFORE & AFTER SLIDER
  return (
    <div className={`space-y-3.5 ${className}`}>
      {/* Controls Bar */}
      <div className="flex justify-between items-center text-xs">
        <span className="font-semibold text-gray-500 dark:text-gray-400">
          Drag handle or tap to compare:
        </span>
        <button
          onClick={() => setViewMode(viewMode === "slider" ? "side" : "slider")}
          className="text-primary hover:underline font-extrabold flex items-center gap-1 bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-xl border border-primary/20 transition-all"
        >
          {viewMode === "slider" ? "Side-by-Side View" : "Interactive Slider"}
        </button>
      </div>

      {viewMode === "side" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 w-full h-[30vh] sm:h-[45vh] min-h-[250px] max-h-[450px] shadow-lg">
            <img
              src={beforeMedia.url}
              alt="Before"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-sm text-white text-xs font-black px-3.5 py-1.5 rounded-xl border border-white/10 shadow">
              BEFORE
            </span>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 w-full h-[30vh] sm:h-[45vh] min-h-[250px] max-h-[450px] shadow-lg">
            <img
              src={afterMedia.url}
              alt="After"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 left-3 bg-green-600/90 backdrop-blur-sm text-white text-xs font-black px-3.5 py-1.5 rounded-xl border border-white/10 shadow">
              AFTER
            </span>
          </div>
        </div>
      ) : (
        /* Interactive Drag Reveal Container - Larger and Cinematic */
        <div
          ref={containerRef}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
          className="relative w-full h-[45vh] sm:h-[60vh] md:h-[65vh] min-h-[320px] max-h-[600px] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-gray-200 dark:border-gray-800 shadow-2xl group"
        >
          {/* AFTER IMAGE (Base background) */}
          <img
            src={afterMedia.url}
            alt="After restoration"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* AFTER BADGE */}
          <span className="absolute top-4 right-4 bg-green-600/90 text-white text-xs font-black px-3.5 py-1.5 rounded-xl shadow border border-white/10 pointer-events-none backdrop-blur-sm tracking-wider">
            AFTER
          </span>

          {/* BEFORE IMAGE (Clipped overlay) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={beforeMedia.url}
              alt="Before repair"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
              style={{
                width: containerWidth ? `${containerWidth}px` : "100%",
                height: "100%",
              }}
            />
            {/* BEFORE BADGE */}
            <span className="absolute top-4 left-4 bg-red-600/90 text-white text-xs font-black px-3.5 py-1.5 rounded-xl shadow border border-white/10 pointer-events-none backdrop-blur-sm tracking-wider">
              BEFORE
            </span>
          </div>

          {/* SLIDER DIVIDER LINE & HANDLE */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Center Circular Button */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm shadow-2xl flex items-center justify-center border-2 border-primary group-hover:scale-110 transition-transform cursor-ew-resize select-none">
              <ArrowsRightLeftIcon className="w-5 h-5 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
