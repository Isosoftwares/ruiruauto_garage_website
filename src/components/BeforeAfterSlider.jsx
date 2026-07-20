import React, { useState, useRef, useCallback, useEffect } from "react";
import { PhotoIcon, VideoCameraIcon, ArrowsRightLeftIcon } from "@heroicons/react/24/outline";

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
  const [viewMode, setViewMode] = useState("slider"); // 'slider' | 'side'

  const containerRef = useRef(null);

  const isBeforeVideo = beforeMedia?.type === "video";
  const isAfterVideo = afterMedia?.type === "video";
  const hasVideo = isBeforeVideo || isAfterVideo;

  const handleMove = useCallback(
    (clientX) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPos(percentage);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
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

  // If resources are videos, render tabbed or side-by-side video player
  if (hasVideo) {
    return (
      <div className={`space-y-3 ${className}`}>
        {/* Toggle Pills for Videos */}
        <div className="flex justify-between items-center bg-gray-100 dark:bg-dark p-1 rounded-xl text-xs font-bold">
          <button
            onClick={() => setActiveTab("before")}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "before"
                ? "bg-red-600 text-white shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <VideoCameraIcon className="w-4 h-4" /> BEFORE REPAIR
          </button>
          <button
            onClick={() => setActiveTab("after")}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "after"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <VideoCameraIcon className="w-4 h-4" /> AFTER RESTORATION
          </button>
        </div>

        {/* Video Display Container */}
        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800">
          {activeTab === "before" ? (
            isBeforeVideo ? (
              <video
                src={beforeMedia.url}
                controls
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
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={afterMedia.url}
              alt="After restoration"
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
            {activeTab === "before" ? (
              <>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Initial Condition
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
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
    <div className={`space-y-2 ${className}`}>
      {/* Controls Bar */}
      <div className="flex justify-between items-center text-xs">
        <span className="font-semibold text-gray-500 dark:text-gray-400">
          Drag handle or tap to compare:
        </span>
        <button
          onClick={() => setViewMode(viewMode === "slider" ? "side" : "slider")}
          className="text-primary hover:underline font-bold"
        >
          {viewMode === "slider" ? "Side-by-Side View" : "Interactive Slider"}
        </button>
      </div>

      {viewMode === "side" ? (
        <div className="grid grid-cols-2 gap-2">
          <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 aspect-video">
            <img src={beforeMedia.url} alt="Before" className="w-full h-full object-cover" />
            <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-md">
              BEFORE
            </span>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 aspect-video">
            <img src={afterMedia.url} alt="After" className="w-full h-full object-cover" />
            <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-md">
              AFTER
            </span>
          </div>
        </div>
      ) : (
        /* Interactive Drag Reveal Container */
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
          className="relative aspect-video w-full rounded-2xl overflow-hidden select-none cursor-ew-resize border border-gray-200 dark:border-gray-800 shadow-md group"
        >
          {/* AFTER IMAGE (Base background) */}
          <img
            src={afterMedia.url}
            alt="After restoration"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* AFTER BADGE */}
          <span className="absolute top-3 right-3 bg-emerald-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase shadow pointer-events-none backdrop-blur-sm">
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
                width: containerRef.current
                  ? `${containerRef.current.offsetWidth}px`
                  : "100%",
                height: "100%",
              }}
            />
            {/* BEFORE BADGE */}
            <span className="absolute top-3 left-3 bg-red-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase shadow pointer-events-none backdrop-blur-sm">
              BEFORE
            </span>
          </div>

          {/* SLIDER DIVIDER LINE & HANDLE */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Center Circular Button */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary group-hover:scale-110 transition-transform">
              <ArrowsRightLeftIcon className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
