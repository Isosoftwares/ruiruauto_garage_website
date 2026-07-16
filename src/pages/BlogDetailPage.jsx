import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import axios from "../api/axios";
import { ArrowLeftIcon, MapPinIcon, CalendarDaysIcon, ClockIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/blogs/slug/${slug}`);
        if (response.data.success && response.data.data) {
          setBlog(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching blog detail:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  const getReadTime = (text = "") => {
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 225);
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-40">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto text-center py-32 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Article Not Found</h2>
        <p className="text-gray-500 dark:text-gray-400">The blog post you are looking for does not exist or has been removed.</p>
        <Link to="/blogs" className="btn-primary inline-block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-deep py-12 px-4 sm:px-6 lg:px-8">
      {/* Dynamic SEO Tags from Database */}
      <Helmet>
        <title>{blog.metaTitle || `${blog.title} | Motion Zip Ltd`}</title>
        <meta name="description" content={blog.metaDescription || blog.summary} />
        {blog.metaKeywords && <meta name="keywords" content={blog.metaKeywords} />}
        <meta property="og:title" content={blog.metaTitle || blog.title} />
        <meta property="og:description" content={blog.metaDescription || blog.summary} />
        <meta property="og:image" content={blog.coverImage} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation & Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Articles
          </Link>
          <span className="text-xs text-gray-400">
            Home &gt; Blogs &gt; {blog.slug}
          </span>
        </div>

        {/* Hero Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex flex-wrap gap-3 items-center">
            {blog.area ? (
              <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold uppercase">
                <MapPinIcon className="w-3.5 h-3.5" />
                {blog.area.name} Coverage
              </span>
            ) : (
              <span className="inline-flex items-center text-xs bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full font-bold uppercase">
                General Advice
              </span>
            )}
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <CalendarDaysIcon className="w-4 h-4" />
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <ClockIcon className="w-4 h-4" />
              {getReadTime(blog.content)}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl leading-tight">
            {blog.title}
          </h1>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl overflow-hidden shadow-lg h-96 bg-gray-200"
        >
          <img
            src={blog.coverImage || "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=900&auto=format&fit=crop"}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Article Body Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-dark-lighter p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm"
        >
          <div
            className="blog-content-body max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-base space-y-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Area Specific Call to Action */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/10 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-primary" />
              {blog.area ? `Need Car Service in ${blog.area.name}?` : "Dealership-Grade Garage Service"}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {blog.area ? (
                `If you are driving in or commuting from ${blog.area.name}, avoid tow trucks by maintaining your vehicle at Motion Zip Ltd on Mathigu Rd, Ruiru. We provide precise computer diagnostics, engine repairs, brake services, and suspension updates.`
              ) : (
                "Motion Zip Ltd delivers advanced mechanics, computerized ECU diagnostic scans, brake pad replacement, and gearbox overhauls to keep your vehicle running flawlessly."
              )}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact" className="btn-primary text-xs py-2 px-5 font-semibold">
                Book Diagnostic Test
              </Link>
              <a
                href="tel:0748333555"
                className="inline-flex items-center gap-2 text-xs font-bold text-gray-800 dark:text-white hover:text-primary transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-primary" />
                Call 0748 333 555
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
