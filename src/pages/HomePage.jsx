import React from "react";
import { Link } from "react-router-dom";
import {
  StarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import {
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
  HandThumbUpIcon,
  ClipboardDocumentCheckIcon,
  CogIcon,
  CheckBadgeIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  LifebuoyIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import HeroImage from "../assets/images/hero_premium.png";
import TikTokFeedSection from "../components/TikTokFeedSection";
import FacebookFeedSection from "../components/FacebookFeedSection";

import LogoMercedes from "../assets/images/brands/mercedes.svg";
import LogoBmw from "../assets/images/brands/bmw.svg";
import LogoAudi from "../assets/images/brands/audi.svg";
import LogoVw from "../assets/images/brands/vw.svg";
import LogoLandRover from "../assets/images/brands/landrover.svg";
import LogoToyota from "../assets/images/brands/toyota.svg";
import LogoSubaru from "../assets/images/brands/subaru.svg";
import LogoNissan from "../assets/images/brands/nissan.svg";
import LogoMazda from "../assets/images/brands/mazda.svg";
import LogoHyundai from "../assets/images/brands/hyundai.svg";

// FAQ Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 dark:border-white/10 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none group"
      >
        <span className="text-base md:text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-primary" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 pb-4 font-light leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

// Page Transition Variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HomePage = () => {
  const [scanProgress, setScanProgress] = React.useState(0);
  const [logs, setLogs] = React.useState([
    { text: "Initializing OBD-II Interface...", status: "PENDING" },
  ]);

  React.useEffect(() => {
    const logsSequence = [
      { text: "Establishing secure ECU handshake...", status: "OK" },
      { text: "Scanning Engine Control Module (ECM)...", status: "OK" },
      { text: "Reading Throttle Body Actuator values...", status: "OK" },
      { text: "Analyzing fuel trim ratios...", status: "OK" },
      { text: "ABS Module diagnostic test...", status: "OK" },
      { text: "Airbag SRS safety check...", status: "OK" },
      { text: "Gearbox TCU telemetry query...", status: "OK" },
      { text: "Fault Code: P0303 Cylinder 3 Misfire", status: "FAULT" },
      { text: "Scan complete. Reporting to Client Portal.", status: "DONE" },
    ];

    const progressInterval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          setLogs([{ text: "Re-initializing scanner...", status: "PENDING" }]);
          return 0;
        }

        const logIndex = Math.floor((prev / 100) * logsSequence.length);
        if (logIndex >= 0 && logIndex < logsSequence.length) {
          setLogs((currentLogs) => {
            const nextLog = logsSequence[logIndex];
            if (currentLogs[currentLogs.length - 1]?.text !== nextLog.text) {
              return [...currentLogs.slice(-2), nextLog]; // keep last 3 logs
            }
            return currentLogs;
          });
        }

        return prev + 1;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-hidden"
    >
      <Helmet>
        <title>
          Motion Zip Ltd | Dealership-Grade Diagnostics & Mechanical Repairs
        </title>
        <meta
          name="description"
          content="Ruiru's premier independent service center. Specializing in advanced diagnostics, engine tuning, gearbox overhauls, and auto AC servicing for European & Japanese brands."
        />
        <link rel="canonical" href="https://motionzipltd.com/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-4 overflow-hidden py-16 md:py-24 bg-dark">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-dark/85 z-10"></div>
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center z-0 opacity-90"
          style={{
            backgroundImage: `url(${HeroImage})`,
          }}
        />

        <div className="relative z-20 container-custom w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Left Hero Description */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 w-max"
            >
              <span className="py-1 px-4 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                ✦ RUIRU'S PREMIER INDEPENDENT GARAGE
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
            >
              Dealer-Level <br />
              <span className="text-primary">Diagnostics</span> <br />&
              Precision <span className="text-light">Car Repairs</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-300 font-light leading-relaxed max-w-2xl"
            >
              Motion Zip Ltd delivers advanced mechanical engineering, computer
              diagnostics scanning, and gearbox servicing for Mercedes-Benz,
              BMW, Audi, VW, Toyota, and Subaru at a fraction of dealership
              rates.
            </motion.p>

            {/* Core Highlights make this core text readable */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2 text-[11px] md:text-xs"
            >
              <div className="flex items-center gap-2 text-light px-4 py-2 bg-white/5 border border-white/10 text-gray-305 rounded-xl font-medium backdrop-blur-sm hover:border-primary/30 transition-colors">
                {/* <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> */}
                Manufacturer Software
              </div>
              <div className="flex items-center text-light gap-2 px-4 py-2 bg-white/5 border border-white/10 text-gray-305 rounded-xl font-medium backdrop-blur-sm hover:border-secondary/30 transition-colors">
                {/* <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> */}
                Certified Technicians
              </div>
              <div className="flex items-center gap-2 text-light px-4 py-2 bg-white/5 border border-white/10 text-gray-350 rounded-xl font-medium backdrop-blur-sm hover:border-green-500/30 transition-colors">
                {/* <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> */}
                Real-Time Portal
              </div>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4 text-xs font-bold"
            >
              <Link
                to="/contact"
                className="group relative overflow-hidden btn-primary text-sm px-8 py-4 shadow-lg shadow-primary/20 text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Diagnostic Scan
                </span>
                <span className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <Link
                to="/portal/login"
                className="group btn-secondary text-sm px-8 py-4 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Access Portal
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </motion.div>

            {/* Rating Badges */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-2 text-xs"
            >
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5" />
                  ))}
                </div>
                <span className="text-white font-bold ml-1">4.9/5</span>
              </div>
              <span className="text-gray-400 font-light">
                Trusted by 1,500+ premium car & SUV owners
              </span>
            </motion.div>
          </div>

          {/* Right Hero Interactive Diagnostic Mockup Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative bg-white/5 dark:bg-dark-lighter/40 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-md space-y-5"
            >
              {/* Card top */}
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <AdjustmentsHorizontalIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      Live Diagnostics Hub
                    </h4>
                    <p className="text-[9px] text-gray-450">
                      ECU Scanner Online
                    </p>
                  </div>
                </div>
                <span className="text-[9px] px-2.5 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full font-bold uppercase tracking-wider animate-pulse">
                  Scanning
                </span>
              </div>

              {/* Car Diagnostic Visualizer */}
              <div className="relative h-28 bg-black/30 rounded-2xl flex items-center justify-center overflow-hidden border border-white/5">
                {/* Glowing Laser Scan Bar */}
                <motion.div
                  animate={{ y: [-40, 40] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_8px_#E63946] z-10"
                ></motion.div>

                {/* SVG Car Outline */}
                <svg
                  className="w-40 h-20 text-white/20"
                  viewBox="0 0 100 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    d="M15 15 H85 C88 15 90 20 90 25 C90 30 88 35 85 35 H15 C12 35 10 30 10 25 C10 20 12 15 15 15 Z"
                    strokeDasharray="2 2"
                  />
                  {/* Wheel wells */}
                  <circle
                    cx="28"
                    cy="15"
                    r="3"
                    className={`${scanProgress > 25 ? "text-green-500/50" : "text-white/10"}`}
                    fill="currentColor"
                  />
                  <circle
                    cx="28"
                    cy="35"
                    r="3"
                    className={`${scanProgress > 25 ? "text-green-500/50" : "text-white/10"}`}
                    fill="currentColor"
                  />
                  <circle
                    cx="72"
                    cy="15"
                    r="3"
                    className={`${scanProgress > 75 ? "text-green-500/50" : "text-white/10"}`}
                    fill="currentColor"
                  />
                  <circle
                    cx="72"
                    cy="35"
                    r="3"
                    className={`${scanProgress > 75 ? "text-green-500/50" : "text-white/10"}`}
                    fill="currentColor"
                  />
                  {/* Engine sensor indicator */}
                  <circle
                    cx="50"
                    cy="25"
                    r="4"
                    className={`${scanProgress > 50 ? "text-red-500 animate-ping" : "text-white/10"}`}
                    fill="currentColor"
                  />
                  <circle
                    cx="50"
                    cy="25"
                    r="2"
                    className={`${scanProgress > 50 ? "text-red-500" : "text-white/10"}`}
                    fill="currentColor"
                  />
                </svg>

                <div className="absolute top-2 left-3 text-[8px] uppercase tracking-widest text-gray-400 font-bold">
                  OBD-II CAN telemetry
                </div>
                <div className="absolute bottom-2 right-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-[8px] text-red-400 font-mono">
                    DTC: Cylinder 3 Misfire
                  </span>
                </div>
              </div>

              {/* Vehicle scan status */}
              <div className="space-y-1.5 text-xs text-white">
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Test:</span>
                  <span className="font-bold">BMW 320i F30 (KDB ***Z)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Target ECU Module:</span>
                  <span className="font-bold">DME Engine Controller</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Progress:</span>
                  <span className="text-primary font-bold">
                    {scanProgress}% Complete
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                <div
                  style={{ width: `${scanProgress}%` }}
                  className="bg-primary h-full rounded-full transition-all duration-150 ease-out shadow-[0_0_8px_#E63946]"
                ></div>
              </div>

              {/* Diagnostics scan details log */}
              <div className="bg-black/40 rounded-2xl p-4 text-[10px] space-y-1.5 font-mono text-gray-300 min-h-[90px] flex flex-col justify-end border border-white/5">
                {logs.map((log, index) => (
                  <div
                    key={index}
                    className={`flex justify-between ${
                      log.status === "FAULT"
                        ? "text-red-400"
                        : log.status === "DONE"
                          ? "text-secondary font-bold"
                          : log.status === "OK"
                            ? "text-green-400"
                            : "text-gray-400"
                    }`}
                  >
                    <span>&gt; {log.text}</span>
                    <span>[ {log.status} ]</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 z-20 text-white/50 cursor-pointer"
        >
          <ChevronDownIcon className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Brands We Service Carousel */}
      <section className="py-10 bg-white dark:bg-dark border-b border-gray-100 dark:border-white/5 overflow-hidden">
        <div className="container-custom">
          <p className="text-center text-[10px] md:text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-widest mb-6">
            Expertly Servicing Leading Passenger & SUV Brands
          </p>
        </div>
        {/* Infinite scrolling marquee track */}
        <div className="relative w-full flex items-center bg-gray-50/50 dark:bg-dark-lighter/10 py-6 border-y border-gray-100/50 dark:border-white/5">
          <div className="flex w-max animate-marquee gap-8 md:gap-12 items-center">
            {/* First Set of Logos */}
            {[
              { name: "Mercedes-Benz", url: LogoMercedes },
              { name: "BMW", url: LogoBmw },
              { name: "Audi", url: LogoAudi },
              { name: "Volkswagen", url: LogoVw },
              { name: "Land Rover", url: LogoLandRover },
              { name: "Toyota", url: LogoToyota },
              { name: "Subaru", url: LogoSubaru },
              { name: "Nissan", url: LogoNissan },
              { name: "Mazda", url: LogoMazda },
              { name: "Hyundai", url: LogoHyundai },
            ].map((brand, idx) => (
              <div
                key={`brand-1-${idx}`}
                className="opacity-90 hover:opacity-100 transition-all hover:scale-105 duration-300 bg-white px-5 py-3 rounded-xl flex items-center justify-center shadow-sm border border-gray-250/20 h-16 w-32 md:h-20 md:w-40 flex-shrink-0"
              >
                <img
                  src={brand.url}
                  alt={brand.name}
                  className="h-10 md:h-12 w-auto object-contain dark:brightness-95"
                />
              </div>
            ))}
            
            {/* Second Set of Logos (Duplicate for Infinite Scroll Loop) */}
            {[
              { name: "Mercedes-Benz", url: LogoMercedes },
              { name: "BMW", url: LogoBmw },
              { name: "Audi", url: LogoAudi },
              { name: "Volkswagen", url: LogoVw },
              { name: "Land Rover", url: LogoLandRover },
              { name: "Toyota", url: LogoToyota },
              { name: "Subaru", url: LogoSubaru },
              { name: "Nissan", url: LogoNissan },
              { name: "Mazda", url: LogoMazda },
              { name: "Hyundai", url: LogoHyundai },
            ].map((brand, idx) => (
              <div
                key={`brand-2-${idx}`}
                className="opacity-90 hover:opacity-100 transition-all hover:scale-105 duration-300 bg-white px-5 py-3 rounded-xl flex items-center justify-center shadow-sm border border-gray-250/20 h-16 w-32 md:h-20 md:w-40 flex-shrink-0"
              >
                <img
                  src={brand.url}
                  alt={brand.name}
                  className="h-10 md:h-12 w-auto object-contain dark:brightness-95"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Common Services Grid */}
      <section className="section-padding bg-gray-50 dark:bg-dark-lighter/20 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider font-extrabold text-primary">
              Core Specializations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
              Professional Automotive Services
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-3"></div>
            <p className="mt-4 text-gray-650 dark:text-gray-450 max-w-2xl mx-auto text-xs md:text-sm font-light leading-relaxed">
              Our technicians carry out diagnostic scans, suspension
              calibrations, automatic gearbox flushing, and complex mechanical
              repairs using factory-certified OEM diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Computer Diagnostic Scanning",
                icon: <AdjustmentsHorizontalIcon className="w-6 h-6" />,
                desc: "Dealer-grade ECU code retrieval, check engine light resets, sensor recalibrations, and electrical module troubleshooting.",
              },
              {
                title: "Engine Tuning & Overhauls",
                icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
                desc: "Complete engine head gasket replacements, piston rings overhaul, timing chain synchronization, and performance spark plugs service.",
              },
              {
                title: "Automatic Gearbox Service",
                icon: <CogIcon className="w-6 h-6" />,
                desc: "Transmission fluid flushes, clutch adaptations, torque converter repair, and diagnostic solenoid replacements.",
              },
              {
                title: "Suspension & Steering Overhauls",
                icon: <SparklesIcon className="w-6 h-6" />,
                desc: "Replacing worn control arm bushings, shock absorbers, stabilizer links, steering rack repair, and tie rod ends replacement.",
              },
              {
                title: "Braking & ABS Module Repairs",
                icon: <CheckBadgeIcon className="w-6 h-6" />,
                desc: "Brake pads swap, disc rotor resurfacing, brake master cylinder overhauls, and electronic ABS sensor resets.",
              },
              {
                title: "AC Gas Leak & Charge Service",
                icon: <LifebuoyIcon className="w-6 h-6" />,
                desc: "AC leak pressure tests, compressor clutch replacement, R134a refrigeration gas refilling, and evaporator core deodorizing.",
              },
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-lighter p-5 md:p-6 rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-primary shadow-sm hover:shadow-md transition-all flex gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white mb-1.5">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-gray-550 dark:text-gray-400 leading-relaxed font-light">
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Transparency Showcase */}
      <section className="section-padding bg-gray-50 dark:bg-dark-lighter/10 relative overflow-hidden">
        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-[10px] md:text-xs font-bold uppercase tracking-wider">
              Unmatched Transparency
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
              Track Your Vehicle Service <br />
              <span className="text-primary">Live in Real-Time</span>
            </h2>
            <p className="text-gray-650 dark:text-gray-300 text-sm md:text-base font-light leading-relaxed">
              No more guesswork. Log in to our secure Client Portal using a
              simple SMS verification code to review vehicle inspection logs,
              approve estimates, sign digitally, and view intake photo records.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <ComputerDesktopIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                    Secure OTP Login
                  </h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 font-light">
                    Passwordless, instant login codes dispatched straight to
                    your phone.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <ClipboardDocumentCheckIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                    Approve Work Estimates
                  </h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 font-light">
                    Review transparent cost breakdowns and select items to
                    approve instantly.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 flex flex-wrap gap-4 text-xs">
              <Link
                to="/portal/login"
                className="btn-primary px-6 py-3 font-bold shadow-lg shadow-primary/20"
              >
                Log In to Customer Portal
              </Link>
              <a
                href="https://wa.me/254748333555"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-850 dark:text-white border border-gray-250 dark:border-white/10 font-bold rounded-2xl transition-all"
              >
                Ask a Question via WhatsApp
              </a>
            </div>
          </div>

          {/* Interactive Portal UI Preview Mockup */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-dark-lighter p-5 md:p-6 rounded-3xl border border-gray-200 dark:border-white/5 shadow-2xl space-y-4 max-w-sm mx-auto w-full"
          >
            {/* Header Mockup */}
            <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 rounded-full font-bold">
                In-Service
              </span>
            </div>

            {/* Vehicle Mockup */}
            <div className="space-y-0.5">
              <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
                Active Check-In Log
              </span>
              <h3 className="text-sm font-extrabold text-gray-900 dark:text-white">
                Subaru Outback 2.5i (KDD ***X)
              </h3>
              <p className="text-[10px] text-gray-500">
                Intake Mileage: 124,500 KM
              </p>
            </div>

            {/* Checklist Mockup */}
            <div className="bg-gray-50 dark:bg-dark p-3.5 rounded-2xl space-y-2 text-[11px]">
              <div className="flex justify-between">
                <span className="text-gray-500">Engine Oil Level Check</span>
                <span className="font-bold text-green-500">✓ Normal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Brake Pad Thickness (Front)
                </span>
                <span className="font-bold text-red-500">⚠ Worn (3mm)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">AC Cooling Performance</span>
                <span className="font-bold text-green-500">✓ Excellent</span>
              </div>
            </div>

            {/* Action Mockup */}
            <div className="pt-1 flex justify-between items-center text-xs">
              <div>
                <p className="text-[9px] text-gray-400">Total Work Estimate</p>
                <p className="text-xs font-extrabold text-primary">
                  KES 14,500
                </p>
              </div>
              <span className="px-3 py-1 bg-primary text-white rounded-lg font-bold text-[10px] shadow-sm shadow-primary/10">
                Review Estimate
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-padding bg-white dark:bg-dark relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              How We Work
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-650 dark:text-gray-400 max-w-2xl mx-auto text-xs md:text-sm font-light">
              Our streamlined vehicle check-in and repair workflow keeps you in
              full control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "1. Check In",
                icon: <ClipboardDocumentCheckIcon className="w-7 h-7" />,
                desc: "We perform an intake review with photos and checklists.",
              },
              {
                title: "2. Diagnose",
                icon: <CogIcon className="w-7 h-7" />,
                desc: "Expert diagnostic scanner analysis identifies ECU codes.",
              },
              {
                title: "3. Quote & Approve",
                icon: <WrenchScrewdriverIcon className="w-7 h-7" />,
                desc: "View cost breakdowns and click accept in your client portal.",
              },
              {
                title: "4. Deliver",
                icon: <CheckBadgeIcon className="w-7 h-7" />,
                desc: "Completed repairs are quality verified and keys returned.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card text-center relative p-5 bg-gray-50/50 dark:bg-dark-lighter/40 rounded-3xl"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-md shadow-primary/20">
                  {step.icon}
                </div>
                <h3 className="text-sm md:text-base font-bold mb-1 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition / Features */}
      <section className="section-padding bg-gray-50 dark:bg-dark-lighter/30 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose Us?
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card border-t-4 border-t-primary p-6 bg-white dark:bg-dark-lighter rounded-3xl border-gray-200 dark:border-gray-800"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <WrenchScrewdriverIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                High Performance
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                We believe premium maintenance shouldn't come with a premium
                price tag. Our technicians carry out top-tier diagnostics with
                absolute attention to detail.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card border-t-4 border-t-black dark:border-t-white p-6 bg-white dark:bg-dark-lighter rounded-3xl border-gray-200 dark:border-gray-800"
            >
              <div className="w-12 h-12 bg-black/10 dark:bg-white/10 rounded-2xl flex items-center justify-center text-gray-900 dark:text-white mb-6">
                <CurrencyDollarIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                Transparent Pricing
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                No surprises. You will receive transparent quotes via the
                customer portal detailing exactly what parts and labor are
                required, before we touch your vehicle.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card border-t-4 border-t-primary p-6 bg-white dark:bg-dark-lighter rounded-3xl border-gray-200 dark:border-gray-800"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <HandThumbUpIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                Satisfaction Guaranteed
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                We treat every car as if it were our own. Our repairs come with
                a satisfaction guarantee and direct support channels.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              What Our Customers Say
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "James Mwangi",
                quote:
                  "Always professional and thorough. Motion Zip Ltd makes vehicle repairs stress-free and very transparent.",
                color: "bg-primary",
              },
              {
                name: "Peter Kamau",
                quote:
                  "Excellent experience from start to finish. Being able to log in to my portal and see my brake pad inspection photo was incredible.",
                color: "bg-gray-900 dark:bg-white",
              },
              {
                name: "Aisha Njeri",
                quote:
                  "Honest mechanics and very reasonable prices. I've been coming here for routine timing belt and engine tune-ups.",
                color: "bg-primary",
              },
              {
                name: "Daniel Odhiambo",
                quote:
                  "Super quick and reliable! Highly recommend their electrical scanning and gearbox servicing.",
                color: "bg-gray-900 dark:bg-white",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass-card relative overflow-hidden p-5 bg-white dark:bg-dark-lighter rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm hover:border-primary"
              >
                <div
                  className={`absolute top-0 left-0 w-1 h-full ${t.color}`}
                ></div>
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-305 mb-6 italic font-light leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 dark:border-white/5 pt-3">
                  <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-500 text-[10px] shadow-inner">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white text-xs">
                    {t.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TikTok & Facebook Live Social Feeds */}
      <TikTokFeedSection />
      <FacebookFeedSection />

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-lighter/30">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="glass-card p-4 md:p-8 shadow-sm bg-white dark:bg-dark-lighter rounded-3xl border border-gray-200 dark:border-gray-800">
            <FAQItem
              question="What brands of vehicles do you specialize in?"
              answer="We service all passenger cars and SUVs, but carry specialized manufacturer diagnostics for European (Mercedes-Benz, BMW, Audi, VW, Land Rover) and Japanese (Toyota, Lexus, Subaru, Honda, Mazda, Nissan) models."
            />
            <FAQItem
              question="How do I log in to the Customer Portal?"
              answer="Simply click on 'Client Portal' in the navigation bar or footer, enter your registered phone number, and type the verification code sent straight to your phone. No passwords required."
            />
            <FAQItem
              question="Do you use genuine OEM spare parts?"
              answer="Yes, we prioritize genuine original equipment manufacturer (OEM) parts backed by warranty. If requested, we can source high-quality certified aftermarket options to match your budget."
            />
            <FAQItem
              question="Can I approve or decline specific repairs in the Portal?"
              answer="Yes. Our portal lists estimates item-by-item (parts, labor, taxes). You can review details and check which items you authorize and sign the work order digitally."
            />
            <FAQItem
              question="Where is Motion Zip Ltd located?"
              answer="Our service center is located along Mathigu Road, Ruiru Town. We also offer emergency towing and roadside assistance within Kiambu and Nairobi Counties."
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
