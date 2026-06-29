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
} from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import HeroImage from "../assets/images/hero.png";

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
        <span className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
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
        <p className="text-gray-600 dark:text-gray-400 pb-4">{answer}</p>
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
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-hidden"
    >
      <Helmet>
        <title>Ruiru Auto Garage | Reliable & Professional Car Repair</title>
        <meta
          name="description"
          content="Ruiru Auto Garage offers exceptional car repair services in Ruiru. From engine diagnostics to brake repairs, we ensure your vehicle runs perfectly. Book today!"
        />
        <link rel="canonical" href="https://www.ruiruautogarage.com/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/90 z-10"></div>
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${HeroImage})`,
          }}
        />

        <div className="relative z-20 container-custom max-w-5xl">
          <motion.div variants={itemVariants}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold mb-6 backdrop-blur-md">
              Premiere Auto Care in Ruiru
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Reliable. Professional. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              Exceptional.
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-3xl mx-auto"
          >
            Delivering advanced, innovative solutions for your vehicle with a
            touch of perfection.
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/services" className="btn-primary text-lg px-8 py-4">
              Explore Our Services
            </Link>
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Book an Appointment
            </Link>
          </motion.div>
        </div>

        {/* Decorative Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-20 text-white/50"
        >
          <ChevronDownIcon className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Workflow Section (New) */}
      <section className="section-padding bg-white dark:bg-dark relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              How We Work
            </motion.h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our streamlined process ensures your vehicle gets back on the road
              safely and quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Book",
                icon: <ClipboardDocumentCheckIcon className="w-8 h-8" />,
                desc: "Schedule your visit online or by phone.",
              },
              {
                title: "Diagnose",
                icon: <CogIcon className="w-8 h-8" />,
                desc: "Expert assessment using advanced tools.",
              },
              {
                title: "Fix",
                icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
                desc: "Precision repairs by certified mechanics.",
              },
              {
                title: "Deliver",
                icon: <CheckBadgeIcon className="w-8 h-8" />,
                desc: "Quality check and vehicle handover.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-primary/30 rotate-3 hover:rotate-6 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {step.desc}
                </p>

                {/* Connecting Line (Desktop) */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-14 -right-1/2 w-full h-[2px] bg-gradient-to-r from-primary/20 to-transparent -z-10"></div>
                )}
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
              whileHover={{ scale: 1.05 }}
              className="glass-card border-t-4 border-t-primary text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <WrenchScrewdriverIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                High Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe great performance shouldn't come at a high price. Our
                skilled technicians deliver reliable, high-quality service.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card border-t-4 border-t-secondary text-center"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CurrencyDollarIcon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fair and honest pricing with no hidden fees. We ensure complete
                transparency so you know exactly what you're paying for.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card border-t-4 border-t-green-500 text-center"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <HandThumbUpIcon className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your satisfaction is our priority on every visit. We treat every
                car as if it were our own.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Testimonials mapped */}
            {[
              {
                name: "James Mwangi",
                quote:
                  "Always professional and thorough. RuiruAutoGarage makes car repairs stress-free.",
                color: "bg-blue-500",
              },
              {
                name: "Peter Kamau",
                quote:
                  "Excellent experience from start to finish. The team is skilled, polite, and trustworthy.",
                color: "bg-green-500",
              },
              {
                name: "Aisha Njeri",
                quote:
                  "Honest service and fair prices. I've been coming here for routine maintenance.",
                color: "bg-purple-500",
              },
              {
                name: "Daniel Odhiambo",
                quote:
                  "Super quick and reliable! My car had an issue with the brakes, and they fixed it same day.",
                color: "bg-orange-500",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass-card relative overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 w-1 h-full ${t.color}`}
                ></div>
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic text-sm">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-500 text-xs shadow-inner">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">
                    {t.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-lighter/30">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="glass-card p-0 md:p-8 shadow-sm bg-white/50 dark:bg-dark-lighter/50">
            <FAQItem
              question="What types of car services do you offer?"
              answer="We provide comprehensive services including routine maintenance, diagnostics, repairs, brake and engine work, oil changes, and more for all car brands."
            />
            <FAQItem
              question="How often should I bring my car in for maintenance?"
              answer="It's recommended to service your car every 5,000–10,000 km or according to your manufacturer's schedule to ensure optimal performance and longevity."
            />
            <FAQItem
              question="Do you provide diagnostic services for car issues?"
              answer="Yes, we use advanced diagnostic tools to identify issues accurately, helping us fix problems efficiently and prevent future breakdowns."
            />
            <FAQItem
              question="How long does a typical service or repair take?"
              answer="Service duration depends on the type of work. Routine maintenance may take 30–60 minutes, while major repairs may require several hours or a day."
            />
            <FAQItem
              question="Do you use original spare parts or aftermarket parts?"
              answer="We prioritize genuine parts to ensure reliability and performance, but we can provide high-quality aftermarket options if requested."
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
