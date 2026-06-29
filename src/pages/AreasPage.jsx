import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPinIcon } from "@heroicons/react/24/outline";

const AreasPage = () => {
  // Placeholder data
  const areas = ["Ruiru", "Juja", "Thika", "Kiambu Road", "Kahawa Sukari"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <Helmet>
        <title>Service Areas | Ruiru Auto Garage</title>
        <meta
          name="description"
          content="Areas we serve around Ruiru and Nairobi."
        />
      </Helmet>

      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Areas We Serve
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          We provide reliable breakdown and recovery services across these key
          locations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="glass-card flex items-center gap-4 p-6 hover:border-primary/50 transition-colors cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <span className="text-xl font-medium text-gray-800 dark:text-gray-200">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AreasPage;
