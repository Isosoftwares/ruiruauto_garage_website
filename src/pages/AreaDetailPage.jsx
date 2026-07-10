import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../api/axios";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  ArrowLeftIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const AreaDetailPage = () => {
  const { slug } = useParams();
  const [area, setArea] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAreaDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/areas/slug/${slug}`);
        setArea(response.data);
        setError(null);
      } catch (err) {
        console.error("Failed to load area", err);
        setError("Area details not found");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchAreaDetails();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-dark">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !area) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-gray-50 dark:bg-dark text-center px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          Oops! Location Not Found
        </h2>
        <p className="text-gray-655 dark:text-gray-400 mb-8 max-w-md">
          The service location you are looking for might have been moved or renamed. Browse
          our current areas of coverage.
        </p>
        <Link to="/areas" className="btn-primary py-3 px-6 rounded-2xl font-bold flex items-center gap-2">
          <ArrowLeftIcon className="w-5 h-5" />
          <span>Back to Areas We Serve</span>
        </Link>
      </div>
    );
  }

  // Calculate dynamic WhatsApp text booking link
  const whatsappUrl = `https://wa.me/254723669437?text=Hi%20Motion%20Zip%20Ltd,%20I'm%20in%20"${encodeURIComponent(
    area.name
  )}"%20and%20need%20assistance/booking%20for%20my%20vehicle.`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-dark"
    >
      <Helmet>
        <title>{area.metaTitle || `${area.name} Car Service & Repair | Motion Zip Ltd`}</title>
        <meta
          name="description"
          content={area.metaDescription || `Get professional vehicle repair, maintenance, and emergency breakdown recovery in ${area.name}.`}
        />
        {area.metaKeywords && (
          <meta name="keywords" content={area.metaKeywords} />
        )}
        <link rel="canonical" href={`https://motionzipltd.com/areas/${slug}`} />
      </Helmet>

      <div className="container-custom max-w-5xl">
        {/* Navigation Breadcrumb */}
        <Link
          to="/areas"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mb-8 font-medium text-sm"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to service areas</span>
        </Link>

        {/* Hero Card */}
        <div className="bg-white dark:bg-dark-lighter rounded-3xl border border-gray-200 dark:border-white/5 shadow-xl overflow-hidden mb-12">
          <div className="relative h-80 md:h-[400px]">
            <img
              src={area.coverImage || "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200"}
              alt={area.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 text-white flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-amber-400 border border-primary/20">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-450">
                  Motion Zip Ltd Coverage Area
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-1">
                  {area.name}
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 space-y-8">
            {/* Rich details HTML */}
            {area.description ? (
              <div
                className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-light space-y-4"
                dangerouslySetInnerHTML={{ __html: area.description }}
              />
            ) : (
              <p className="text-gray-500 dark:text-gray-450 font-light">
                No custom location details written yet. We provide general servicing across this area.
              </p>
            )}

            {/* Tags / Keywords */}
            {area.tags && area.tags.length > 0 && (
              <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex flex-wrap gap-2">
                {area.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Towing Recovery Alert Banner */}
        <div className="bg-gradient-to-b from-gray-900 to-black text-white p-8 md:p-10 rounded-3xl text-center shadow-lg border border-white/5 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <h3 className="text-2xl font-bold relative z-10">
            Need emergency vehicle recovery in {area.name}?
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed font-light relative z-10">
            Our towing trucks and mobile mechanics operate across {area.name} and
            neighboring regions. Get responsive roadside assistance instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 relative z-10">
            <a href="tel:0748333555" className="btn-primary py-3.5 px-8 text-sm font-bold shadow-lg shadow-primary/20">
              Call Dispatch: 0748 333 555
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-secondary bg-white/5 hover:bg-white/10 text-white border border-white/10 py-3.5 px-8 text-sm font-bold flex items-center justify-center gap-2">
              Share Live Location (WhatsApp)
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AreaDetailPage;
