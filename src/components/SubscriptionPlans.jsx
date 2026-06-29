import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  FaCheck,
  FaTimes,
  FaCrown,
  FaStar,
  FaRocket,
  FaGem,
} from "react-icons/fa";
import LoadingSpinner from "./LoadingSpinner";
import axios from "../api/axios";

const PLAN_ICONS = {
  basic: FaStar,
  pro: FaRocket,
  premium: FaCrown,
  enterprise: FaGem,
};

function SubscriptionPlans() {
  const [selectedCycle, setSelectedCycle] = useState("monthly");

  // Fetch available subscription plans
  const {
    data: plansData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["subscription-plans"],
    queryFn: () => axios.get("/subscription-plans"),
  });

  const plans = plansData?.data?.data || [];
  // console.log(plans)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner size={60} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-500/10 border-l-4 border-red-500 rounded-r-lg p-4">
        <p className="text-sm text-red-500">
          Failed to load subscription plans. Please try again later.
        </p>
      </div>
    );
  }

  const getPlanPrice = (plan) => {
    const basePrice = plan.price || 0;

    // Calculate price based on billing cycle with discounts
    switch (selectedCycle) {
      case "monthly":
        return basePrice;

      case "quarterly":
        // 4% discount: (monthly * 3) * 0.96
        return Math.round(basePrice * 3 * 0.96);

      case "half-yearly":
        // 6% discount: (monthly * 6) * 0.94
        return Math.round(basePrice * 6 * 0.94);

      case "yearly":
        // 10% discount: (monthly * 12) * 0.90
        return Math.round(basePrice * 12 * 0.9);

      default:
        return basePrice;
    }
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Choose Your Plan
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Select the perfect plan for your business needs
        </p>
      </div>

      {/* Billing Cycle Toggle */}
      <div className="flex justify-center mb-16">
        <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl p-1.5 inline-flex flex-wrap gap-1">
          <button
            onClick={() => setSelectedCycle("monthly")}
            className={`px-5 py-2.5 rounded-lg font-semibold transition-all text-sm ${
              selectedCycle === "monthly"
                ? "bg-white dark:bg-dark shadow-sm text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedCycle("quarterly")}
            className={`px-5 py-2.5 rounded-lg font-semibold transition-all relative text-sm ${
              selectedCycle === "quarterly"
                ? "bg-white dark:bg-dark shadow-sm text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Quarterly
            <span className="absolute -top-3 -right-2 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
              -4%
            </span>
          </button>
          <button
            onClick={() => setSelectedCycle("half-yearly")}
            className={`px-5 py-2.5 rounded-lg font-semibold transition-all relative text-sm ${
              selectedCycle === "half-yearly"
                ? "bg-white dark:bg-dark shadow-sm text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Half-Yearly
            <span className="absolute -top-3 -right-2 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
              -6%
            </span>
          </button>
          <button
            onClick={() => setSelectedCycle("yearly")}
            className={`px-5 py-2.5 rounded-lg font-semibold transition-all relative text-sm ${
              selectedCycle === "yearly"
                ? "bg-white dark:bg-dark shadow-sm text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Yearly
            <span className="absolute -top-3 -right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
              -10%
            </span>
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {plans
          .sort((a, b) => (a.tier || 0) - (b.tier || 0))
          .map((plan) => {
            const Icon = PLAN_ICONS[plan.planId?.toLowerCase()] || FaStar;
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan._id}
                className={`relative bg-white dark:bg-white/5 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                  isPopular
                    ? "border-primary shadow-lg shadow-primary/20 scale-105 z-10"
                    : "border-gray-200 dark:border-white/5 hover:border-primary/50 dark:hover:border-white/20"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full text-center">
                    <span className="bg-gradient-to-r from-primary to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Icon & Name */}
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                        isPopular
                          ? "bg-primary/20 text-primary"
                          : "bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      <Icon className="text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {plan.name}
                    </h3>
                    {plan.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {plan.description}
                      </p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8 p-4 bg-gray-50 dark:bg-black/20 rounded-xl">
                    <div className="flex items-baseline justify-center">
                      <span className="text-gray-500 dark:text-gray-400 text-sm mr-1">
                        {plan.currency || "KES"}
                      </span>
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {getPlanPrice(plan).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      {selectedCycle === "monthly" && "Billed monthly"}
                      {selectedCycle === "quarterly" && "Billed every 3 months"}
                      {selectedCycle === "half-yearly" &&
                        "Billed every 6 months"}
                      {selectedCycle === "yearly" && "Billed annually"}
                    </p>
                    {selectedCycle !== "monthly" && (
                      <p className="text-xs text-green-500 dark:text-green-400 mt-1 font-semibold">
                        Save {selectedCycle === "quarterly" && "4%"}
                        {selectedCycle === "half-yearly" && "6%"}
                        {selectedCycle === "yearly" && "10%"} vs monthly
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features &&
                      Object.entries(plan.features)
                        .filter(([_, enabled]) => enabled)
                        .map(([featureName], index) => (
                          <div key={index} className="flex items-start gap-3">
                            <FaCheck className="text-primary mt-1 flex-shrink-0 text-sm" />
                            <span className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                              {featureName.replace(/([A-Z])/g, " $1")}
                            </span>
                          </div>
                        ))}

                    {/* Feature Limits */}
                    {plan.limits && (
                      <>
                        {plan.limits.maxEmployees && (
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-primary mt-1 flex-shrink-0 text-sm" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              Up to{" "}
                              {plan.limits.maxEmployees === -1
                                ? "Unlimited"
                                : plan.limits.maxEmployees}{" "}
                              users
                            </span>
                          </div>
                        )}
                        {plan.limits.maxLocations && (
                          <div className="flex items-start gap-3">
                            <FaCheck className="text-primary mt-1 flex-shrink-0 text-sm" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              Up to{" "}
                              {plan.limits.maxLocations === -1
                                ? "Unlimited"
                                : plan.limits.maxLocations}{" "}
                              locations
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Action Button */}
                  <a
                    href="https://mybusiness.RyzonPlus.com/get-started"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3.5 px-4 rounded-xl font-bold transition-all ${
                      isPopular
                        ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25"
                        : "bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            );
          })}
      </div>

      {/* Additional Info */}
      {plans.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No subscription plans available at the moment.
          </p>
        </div>
      )}
    </div>
  );
}

export default SubscriptionPlans;
