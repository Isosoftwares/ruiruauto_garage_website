import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPinIcon } from "@heroicons/react/24/outline";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const AreasPage = () => {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get("/areas");
        if (response.data.success) {
          setAreas(response.data.data);
        }
      } catch (err) {
        console.error("Error fetching areas", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAreas();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-dark"
    >
      <Helmet>
        <title>Service Areas We Cover | Ruiru Auto Garage</title>
        <meta
          name="description"
          content="Areas we serve around Ruiru and Nairobi including Juja, Thika, Kiambu Road, Kahawa Sukari, and Githurai."
        />
      </Helmet>

      <div className="container-custom">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-900 dark:text-white tracking-tight">
          Areas We Serve
        </h1>
        <p className="text-center text-gray-650 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          We provide prompt breakdown assistance, recovery towing, and expert garage intake services across these key coverage locations.
        </p>

        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : areas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area._id}
                to={`/areas/${area.slug}`}
                className="glass-card flex items-center gap-4 p-6 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg shadow-black/5 bg-white/70 dark:bg-dark-lighter/50 backdrop-blur-md"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <MapPinIcon className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No service areas registered yet.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AreasPage;
