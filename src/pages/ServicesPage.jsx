import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import {
  WrenchScrewdriverIcon,
  BoltIcon,
  Battery100Icon,
  SpeakerWaveIcon,
  PauseIcon,
  CalculatorIcon,
  FireIcon,
  CogIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

// Helper to select an icon based on service name
const getServiceIcon = (name = "") => {
  const lower = name.toLowerCase();
  if (lower.includes("brake")) return <PauseIcon className="w-8 h-8" />;
  if (lower.includes("battery") || lower.includes("electric") || lower.includes("power")) 
    return <Battery100Icon className="w-8 h-8" />;
  if (lower.includes("engine") || lower.includes("diagnos") || lower.includes("rebuild") || lower.includes("overheating")) 
    return <CogIcon className="w-8 h-8" />;
  if (lower.includes("air") || lower.includes("ac ") || lower.includes("cool")) 
    return <BoltIcon className="w-8 h-8" />;
  if (lower.includes("stereo") || lower.includes("audio") || lower.includes("sound")) 
    return <SpeakerWaveIcon className="w-8 h-8" />;
  if (lower.includes("tune") || lower.includes("maintenance") || lower.includes("check")) 
    return <CalculatorIcon className="w-8 h-8" />;
  return <WrenchScrewdriverIcon className="w-8 h-8" />;
};

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/services");
        const data = Array.isArray(response.data) ? response.data : response.data.data || [];
        // Filter out parts and non-active services
        setServices(data.filter((s) => s.isActive && s.category !== "Part"));
      } catch (err) {
        console.error("Failed to load services", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Split list: First 3 services are highlighted as featured, rest go in the grid list
  const featuredServices = services.slice(0, 3);
  const additionalServices = services.slice(3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 dark:bg-dark"
    >
      <Helmet>
        <title>Our Services | Motion Zip Ltd</title>
        <meta
          name="description"
          content="Explore our comprehensive auto repair services including tune-ups, engine rebuilds, brake replacements, alternator swaps, and electrical fixes in Ruiru."
        />
        <link rel="canonical" href="https://motionzipltd.com/services" />
      </Helmet>

      {/* Header */}
      <div className="bg-dark text-white py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary via-dark to-dark"></div>
        <div className="container-custom relative z-10">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white"
          >
            Our <span className="text-primary">Premium</span> Services
          </motion.h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive auto care solutions for every need. Combining
            traditional craftsmanship with modern diagnostic technology.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : services.length > 0 ? (
        <>
          {/* Featured Services */}
          {featuredServices.length > 0 && (
            <div className="section-padding bg-white dark:bg-dark-lighter/20 border-b border-gray-150/50 dark:border-white/5">
              <div className="container-custom">
                <div className="flex flex-col gap-24">
                  {featuredServices.map((service, idx) => (
                    <motion.div
                      key={service._id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className={`flex flex-col ${
                        idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      } items-center gap-12`}
                    >
                      {/* Image Side */}
                      <div className="w-full lg:w-1/2">
                        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/5">
                          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                          <img
                            src={service.coverImage || "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600"}
                            alt={service.name}
                            className="w-full h-80 md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                          />
                          {/* Floating Icon Badge */}
                          <div className="absolute top-6 right-6 z-20 w-16 h-16 bg-white dark:bg-dark-lighter rounded-2xl flex items-center justify-center shadow-lg text-primary">
                            {getServiceIcon(service.name)}
                          </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
                          {service.name}
                        </h2>
                        <div
                          className={`w-20 h-1.5 bg-primary rounded-full mb-6 ${
                            idx % 2 === 0 ? "mx-auto lg:mx-0" : "mx-auto lg:ml-auto"
                          }`}
                        ></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 font-light">
                          {service.description || "Detailed vehicle diagnosis, repair and performance tuning services."}
                        </p>
                        <Link to={`/services/${service.slug}`} className="btn-outline group inline-flex items-center gap-2">
                          <span>Learn More Details</span>
                          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* More Services Grid */}
          {additionalServices.length > 0 && (
            <div className="section-padding bg-white dark:bg-dark">
              <div className="container-custom">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
                    Additional Specialty Services
                  </h2>
                  <div className="w-20 h-1 bg-gray-200 dark:bg-white/10 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {additionalServices.map((service, index) => (
                    <motion.div
                      key={service._id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      transition={{ delay: index * 0.05 }}
                      className="glass-card hover:border-primary/30 group bg-gray-50/50 dark:bg-dark-lighter/30 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-gray-150 dark:border-white/5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="mb-6 inline-block p-4 rounded-2xl bg-gray-100 dark:bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          {getServiceIcon(service.name)}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-650 dark:text-gray-400 text-sm leading-relaxed font-light mb-6">
                          {service.description || "Professional service delivered by certified mechanics."}
                        </p>
                      </div>
                      <Link to={`/services/${service.slug}`} className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                        <span>Read details</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="container-custom text-center py-20 bg-white dark:bg-dark-lighter rounded-3xl border border-gray-200 dark:border-white/5 my-16 max-w-2xl mx-auto shadow-sm">
          <WrenchScrewdriverIcon className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">No Services Listed Yet</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-sm mx-auto font-light leading-relaxed">
            We are currently updating our database of diagnostic and repair services. Please contact our reception desk directly for inquiries.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="tel:0748333555" className="btn-primary py-2.5 px-6 rounded-xl font-bold text-sm">
              Call Reception
            </a>
            <a
              href="https://wa.me/254723669437"
              target="_blank"
              rel="noreferrer"
              className="btn-outline border border-gray-250 dark:border-white/10 py-2.5 px-6 rounded-xl font-bold text-sm flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              WhatsApp Inquire
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ServicesPage;
