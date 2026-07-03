import React, { useEffect, useState } from "react";
import { useClientAuth } from "../../hooks/useClientAuth";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const PortalVehicles = () => {
  const { axiosClient } = useClientAuth();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axiosClient.get("/client-portal/vehicles");
        setVehicles(response.data.data || []);
      } catch (error) {
        console.error("Failed to load vehicles", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVehicles();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg md:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            My Registered Cars
          </h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1 font-light">
            Review the cars associated with your profile at Ruiru Auto Garage.
          </p>
        </div>
      </div>

      {vehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {vehicles.map((car, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-dark-lighter rounded-3xl border border-gray-200 dark:border-white/5 shadow-sm p-4 md:p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full translate-x-4 -translate-y-4"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <WrenchScrewdriverIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">
                    {car.model}
                  </h3>
                  <span className="inline-block px-2 py-0.5 bg-gray-100 dark:bg-white/10 rounded-full text-[10px] md:text-xs font-semibold tracking-wider text-gray-600 dark:text-gray-300 mt-0.5">
                    {car.registration}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm border-t border-gray-100 dark:border-white/5 pt-3">
                <div>
                  <p className="text-gray-400 dark:text-gray-500 text-[10px] md:text-xs">Body Type</p>
                  <p className="font-bold text-gray-800 dark:text-gray-200 mt-0.5 text-xs md:text-sm">
                    {car.type || "Sedan/SUV"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 dark:text-gray-500 text-[10px] md:text-xs">Color</p>
                  <p className="font-bold text-gray-800 dark:text-gray-200 mt-0.5 text-xs md:text-sm">
                    {car.color || "N/A"}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-gray-400 dark:text-gray-500 text-xs">Year</p>
                  <p className="font-bold text-gray-800 dark:text-gray-200 mt-0.5">
                    {car.year || "N/A"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-dark-lighter rounded-3xl border border-gray-200 dark:border-white/5">
          <WrenchScrewdriverIcon className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">No vehicles found</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-sm mx-auto font-light leading-relaxed">
            Please ask the garage receptionist to add your vehicles to your profile
            on your next visit.
          </p>
        </div>
      )}
    </div>
  );
};

export default PortalVehicles;
