import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
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
import EngineImage from "../assets/images/service-engine.png";
import BodyImage from "../assets/images/service-body.png";
import DiagnosticsImage from "../assets/images/service-diagnostics.png";

const ServicesPage = () => {
  const featuredServices = [
    {
      title: "Engine Diagnostics & Repair",
      desc: "State-of-the-art computer diagnostics to pinpoint engine issues instantly. From minor tune-ups to complete overhauls, we ensure your engine runs like new.",
      image: EngineImage,
      icon: <CogIcon className="w-6 h-6" />,
    },
    {
      title: "Body Work & Painting",
      desc: "Professional dent repair, scratch removal, and full-body painting. We use premium paints and precision color matching for a showroom finish.",
      image: BodyImage,
      icon: <FireIcon className="w-6 h-6" />,
    },
    {
      title: "Advanced Electrical Systems",
      desc: "Troubleshooting complex electrical faults, sensor issues, and wiring. We handle everything from battery replacements to hybrid system maintenance.",
      image: DiagnosticsImage,
      icon: <BoltIcon className="w-6 h-6" />,
    },
  ];

  const servicesList = [
    {
      title: "Brake Services",
      desc: "Pads, rotors, and fluid checks for your safety.",
      icon: <PauseIcon className="w-8 h-8" />,
    },
    {
      title: "Suspension & Steering",
      desc: "Smooth ride guaranteed with shock and strut repairs.",
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
    },
    {
      title: "Battery Services",
      desc: "Testing, replacement, and charging system checks.",
      icon: <Battery100Icon className="w-8 h-8" />,
    },
    {
      title: "Audio & Accessories",
      desc: "Installation of sound systems, alarms, and cameras.",
      icon: <SpeakerWaveIcon className="w-8 h-8" />,
    },
    {
      title: "Logbook Servicing",
      desc: "Maintain your warranty with manufacturer-standard service.",
      icon: <CalculatorIcon className="w-8 h-8" />,
    },
    {
      title: "Air Conditioning",
      desc: "Re-gassing, leak detection, and compressor repair.",
      icon: <BoltIcon className="w-8 h-8" />,
    },
  ];

  return (
    <motion.div
    >
      <Helmet>
        <title>Our Services | Ruiru Auto Garage</title>
        <meta
          name="description"
          content="Explore our comprehensive auto repair services including tune-ups, engine rebuilds, brake replacements, and EV maintenance."
        />
        <link rel="canonical" href="https://www.ruiruautogarage.com/services" />
      </Helmet>

      {/* Header */}
      <div className="bg-dark text-white py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary via-dark to-dark"></div>
        <div className="container-custom relative z-10">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-secondary">Premium</span> Services
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive auto care solutions for every need. Combining
            traditional craftsmanship with modern technology.
          </p>
        </div>
      </div>

      {/* Featured Services */}
      <div className="section-padding bg-gray-50 dark:bg-dark-lighter/20">
        <div className="container-custom">
          <div className="flex flex-col gap-24">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/5">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 md:h-[450px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Floating Icon Badge */}
                    <div className="absolute top-6 right-6 z-20 w-16 h-16 bg-white dark:bg-dark-lighter rounded-2xl flex items-center justify-center shadow-lg text-primary">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                    {service.title}
                  </h2>
                  <div
                    className={`w-20 h-1 bg-secondary rounded-full mb-6 ${
                      idx % 2 === 0 ? "mx-auto lg:mx-0" : "mx-auto lg:ml-auto"
                    }`}
                  ></div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <button className="btn-outline group">
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* More Services Grid */}
      <div className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Additional Services
            </h2>
            <div className="w-20 h-1 bg-gray-200 dark:bg-white/10 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card hover:border-primary/30 group"
              >
                <div className="mb-6 inline-block p-4 rounded-2xl bg-gray-50 dark:bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
