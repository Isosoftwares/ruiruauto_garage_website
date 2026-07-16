import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { MagnifyingGlassIcon, MapPinIcon, CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [blogsRes, areasRes] = await Promise.all([
        axios.get("/blogs"), // Public endpoint (gets active blogs)
        axios.get("/areas"),
      ]);

      const activeBlogs = blogsRes.data?.data || [];
      const activeAreas = (areasRes.data?.data || []).filter((a) => a.isActive);
      
      setBlogs(activeBlogs);
      setAreas(activeAreas);
    } catch (error) {
      console.error("Failed to load blog page data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter logic
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase()) || 
                          (blog.summary && blog.summary.toLowerCase().includes(search.toLowerCase()));
    
    if (selectedArea === "all") return matchesSearch;
    if (selectedArea === "general") return matchesSearch && !blog.area;
    
    // matches selected area ID
    return matchesSearch && blog.area && blog.area._id === selectedArea;
  });

  // Helper to estimate reading time
  const getReadTime = (text = "") => {
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 225); // avg read speed
    return `${minutes} min read`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-deep py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Insights & Vehicle Care Advice | Motion Zip Ltd</title>
        <meta
          name="description"
          content="Read our latest blog articles on ECU diagnostics, engine repair, battery maintenance, and localized garage updates in Ruiru and surrounding areas."
        />
        <meta name="keywords" content="car repair blogs, vehicle diagnostics articles, auto repair tips, Motion Zip Ltd, Ruiru mechanic tips" />
      </Helmet>

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Banner Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs bg-primary/10 text-primary font-bold tracking-widest uppercase px-3 py-1 rounded-full"
          >
            Our Resources
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Insights & Vehicle Care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-gray-550 dark:text-gray-400"
          >
            Expert mechanical advice, diagnostic tips, and coverage area updates from our experienced team at Motion Zip Ltd.
          </motion.p>
        </div>

        {/* Filters and Search Control */}
        <div className="bg-white dark:bg-dark-lighter p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Areas Tab List */}
          <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
            <button
              onClick={() => setSelectedArea("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedArea === "all"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              All Articles
            </button>
            <button
              onClick={() => setSelectedArea("general")}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedArea === "general"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              General
            </button>
            {areas.map((a) => (
              <button
                key={a._id}
                onClick={() => setSelectedArea(a._id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  selectedArea === a._id
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
                }`}
              >
                {a.name}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-80">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-250 dark:border-white/5 rounded-xl bg-gray-50 dark:bg-dark text-gray-800 dark:text-gray-250 focus:outline-none focus:ring-2 focus:ring-primary/45 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Content list Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-24 bg-white dark:bg-dark-lighter border border-gray-100 dark:border-white/5 rounded-3xl space-y-3">
            <p className="text-lg font-bold text-gray-900 dark:text-white">No articles found</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
              We couldn't find any articles matching your filters. Check back soon for new car care insights!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, idx) => (
              <motion.article
                key={blog._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col bg-white dark:bg-dark-lighter rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-300"
              >
                {/* Cover Frame */}
                <div className="relative h-56 bg-gray-200 dark:bg-gray-850 overflow-hidden">
                  <img
                    src={blog.coverImage || "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=600&auto=format&fit=crop"}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute bottom-3 left-4">
                    {blog.area ? (
                      <span className="flex items-center gap-1 text-[11px] bg-primary text-white px-2.5 py-1 rounded-full font-bold shadow">
                        <MapPinIcon className="w-3.5 h-3.5" />
                        {blog.area.name}
                      </span>
                    ) : (
                      <span className="text-[11px] bg-gray-900 text-white px-2.5 py-1 rounded-full font-bold shadow">
                        General Advice
                      </span>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Meta stats */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <CalendarDaysIcon className="w-4 h-4" />
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {getReadTime(blog.content)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h3>

                    {/* Snippet */}
                    <p className="text-sm text-gray-550 dark:text-gray-400 line-clamp-3">
                      {blog.summary || "Click to read this article's full diagnostic overview."}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400">
                      By Motion Zip Experts
                    </span>
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="text-xs font-bold text-primary hover:text-red-700 flex items-center gap-1"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
