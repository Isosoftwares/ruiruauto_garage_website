import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../api/axios";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  WrenchScrewdriverIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ArrowLeftIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/services/slug/${slug}`);
        setService(response.data);
        setError(null);
      } catch (err) {
        console.error("Failed to load service", err);
        setError("Service not found");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchServiceDetails();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-dark">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-gray-50 dark:bg-dark text-center px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          Oops! Service Not Found
        </h2>
        <p className="text-gray-655 dark:text-gray-400 mb-8 max-w-md">
          The service you are looking for might have been moved or renamed. Browse
          our current catalog of services.
        </p>
        <Link to="/services" className="btn-primary py-3 px-6 rounded-2xl font-bold flex items-center gap-2">
          <ArrowLeftIcon className="w-5 h-5" />
          <span>Back to Services</span>
        </Link>
      </div>
    );
  }

  // Calculate dynamic WhatsApp text booking link
  const whatsappUrl = `https://wa.me/254748333555?text=Hi%20Ruiru%20Auto%20Garage,%20I'm%20interested%20in%20booking%20an%20appointment%20for%20the%20"${encodeURIComponent(
    service.name
  )}"%20service.`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-dark"
    >
      <Helmet>
        <title>{service.metaTitle || `${service.name} | Ruiru Auto Garage`}</title>
        <meta
          name="description"
          content={service.metaDescription || service.description || `Read details about our ${service.name} service offered in Ruiru.`}
        />
        {service.metaKeywords && (
          <meta name="keywords" content={service.metaKeywords} />
        )}
        <link rel="canonical" href={`https://www.ruiruautogarage.com/services/${slug}`} />
      </Helmet>

      <div className="container-custom max-w-5xl">
        {/* Navigation Breadcrumb */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mb-8 font-medium text-sm"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to all services</span>
        </Link>

        {/* Hero Card */}
        <div className="bg-white dark:bg-dark-lighter rounded-3xl border border-gray-200 dark:border-white/5 shadow-xl overflow-hidden mb-12">
          <div className="relative h-80 md:h-[450px]">
            <img
              src={service.coverImage || "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200"}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 text-white">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/30 border border-primary/40 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-sm text-amber-400">
                {service.category || "General Care"}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                {service.name}
              </h1>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-white/5 bg-gray-50 dark:bg-white/5 p-6 border-b border-gray-100 dark:border-white/5 text-sm">
            {service.price && (
              <div className="flex items-center gap-3 md:justify-center py-2 md:py-0">
                <CurrencyDollarIcon className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-450 dark:text-gray-400">Price / Service cost</p>
                  <p className="font-bold text-gray-900 dark:text-white text-base mt-0.5">
                    KES {service.price.toLocaleString()}
                  </p>
                </div>
              </div>
            )}
            {service.duration && (
              <div className="flex items-center gap-3 md:justify-center py-2 md:py-0">
                <ClockIcon className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-450 dark:text-gray-400">Service Duration</p>
                  <p className="font-bold text-gray-900 dark:text-white text-base mt-0.5">
                    {service.duration} Minutes
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 space-y-8">
            {/* Short Description */}
            {service.description && (
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="text-lg text-gray-650 dark:text-gray-300 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            )}

            {/* Rich details HTML */}
            {service.richDescription ? (
              <div
                className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-light space-y-4"
                dangerouslySetInnerHTML={{ __html: service.richDescription }}
              />
            ) : (
              <p className="text-gray-500 dark:text-gray-450 font-light">
                No detailed guide currently uploaded for this service.
              </p>
            )}

            {/* Tags / Keywords */}
            {service.tags && service.tags.length > 0 && (
              <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex flex-wrap gap-2">
                {service.tags.map((tag, idx) => (
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

        {/* CTA Banner */}
        <div className="bg-white dark:bg-dark-lighter border border-gray-250/50 dark:border-white/5 p-8 rounded-3xl text-center shadow-md space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Need to schedule this service for your vehicle?
          </h3>
          <p className="text-gray-550 dark:text-gray-400 text-sm max-w-xl mx-auto leading-relaxed font-light">
            Contact Ruiru Auto Garage's booking office via WhatsApp or phone.
            Our technicians will prepare for your vehicle intake instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary py-3.5 px-8 text-sm font-bold shadow-lg shadow-primary/20">
              Book via WhatsApp
            </a>
            <a href="tel:0748333555" className="btn-secondary py-3.5 px-8 text-sm font-bold border border-gray-300 dark:border-white/10 flex items-center justify-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              <span>Call 0748 333 555</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetailPage;
