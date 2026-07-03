import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useClientAuth } from "../../hooks/useClientAuth";
import {
  WrenchIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const PortalDashboard = () => {
  const { client, axiosClient } = useClientAuth();
  const [stats, setStats] = useState({
    vehiclesCount: 0,
    pendingInvoices: 0,
    unpaidAmount: 0,
    pendingQuotes: 0,
    recentCheckIn: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [vehiclesRes, invoicesRes, quotesRes, checkinsRes] = await Promise.all([
          axiosClient.get("/client-portal/vehicles"),
          axiosClient.get("/client-portal/invoices"),
          axiosClient.get("/client-portal/quotes"),
          axiosClient.get("/client-portal/checkins"),
        ]);

        const vehicles = vehiclesRes.data.data || [];
        const invoices = invoicesRes.data.data || [];
        const quotes = quotesRes.data.data || [];
        const checkins = checkinsRes.data.data || [];

        // Calculate pending invoices (pending / overdue)
        const unpaidInvoicesList = invoices.filter(
          (inv) => inv.status === "pending" || inv.status === "overdue"
        );
        const unpaidAmount = unpaidInvoicesList.reduce(
          (acc, inv) => acc + (inv.totalAmount || 0),
          0
        );

        // Calculate active quotes (sent / draft)
        const pendingQuotesList = quotes.filter(
          (q) => q.status === "sent" || q.status === "draft"
        );

        setStats({
          vehiclesCount: vehicles.length,
          pendingInvoices: unpaidInvoicesList.length,
          unpaidAmount,
          pendingQuotes: pendingQuotesList.length,
          recentCheckIn: checkins.length > 0 ? checkins[0] : null,
        });
      } catch (error) {
        console.error("Dashboard data fetching failed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const statCards = [
    {
      name: "My Registered Cars",
      value: stats.vehiclesCount,
      desc: "Vehicles in garage profile",
      color: "bg-blue-500",
      icon: <WrenchIcon className="w-6 h-6 text-white" />,
      link: "/portal/vehicles",
    },
    {
      name: "Unpaid Invoices",
      value: `${stats.pendingInvoices} (KES ${stats.unpaidAmount.toLocaleString()})`,
      desc: "Outstanding payment actions",
      color: "bg-red-500",
      icon: <DocumentTextIcon className="w-6 h-6 text-white" />,
      link: "/portal/invoices",
    },
    {
      name: "Pending Quotes",
      value: stats.pendingQuotes,
      desc: "Awaiting your approval",
      color: "bg-amber-500",
      icon: <DocumentCheckIcon className="w-6 h-6 text-white" />,
      link: "/portal/quotes",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="bg-primary rounded-3xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl font-extrabold mb-2 tracking-tight">
            Jambo, {client?.firstName}!
          </h1>
          <p className="text-white/95 leading-relaxed font-light">
            Welcome to the Ruiru Auto Garage Client Portal. View and check your
            active work estimates, invoice payments, and vehicle check-in
            reports anywhere, anytime.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {statCards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-dark-lighter p-4 md:p-6 rounded-3xl border border-gray-250/50 dark:border-white/5 shadow-sm flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs md:text-sm font-semibold text-gray-500 dark:text-gray-400">
                  {card.name}
                </p>
                <h3 className="text-lg md:text-2xl font-extrabold mt-1 text-gray-900 dark:text-white">
                  {card.value}
                </h3>
              </div>
              <div className={`p-2.5 rounded-2xl ${card.color} shadow-lg shadow-black/5`}>
                {card.icon}
              </div>
            </div>
            <div className="border-t border-gray-100 dark:border-white/5 mt-3 pt-3 flex justify-between items-center text-[10px] md:text-xs text-gray-400">
              <span>{card.desc}</span>
              <Link
                to={card.link}
                className="text-primary hover:underline flex items-center gap-1 font-bold text-[10px] md:text-xs"
              >
                <span>View Details</span>
                <ArrowRightIcon className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Activities Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Recent Check-in Details */}
        <div className="bg-white dark:bg-dark-lighter p-4 md:p-6 rounded-3xl border border-gray-250/50 dark:border-white/5 shadow-sm">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white">
              Recent Vehicle Intake
            </h3>
            <ClipboardDocumentCheckIcon className="w-5 h-5 text-primary" />
          </div>

          {stats.recentCheckIn ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 md:p-4 bg-gray-50 dark:bg-dark rounded-2xl">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Check-in Date
                  </p>
                  <p className="text-xs md:text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                    {new Date(stats.recentCheckIn.checkInDate).toLocaleDateString("en-KE", {
                      dateStyle: "medium",
                    })}
                  </p>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold ${
                    stats.recentCheckIn.status === "Checked-In"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                      : stats.recentCheckIn.status === "In-Service"
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                      : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                  }`}
                >
                  {stats.recentCheckIn.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] md:text-xs text-gray-550 dark:text-gray-400">Mileage In</p>
                  <p className="text-sm md:text-base font-bold text-gray-900 dark:text-white mt-0.5">
                    {stats.recentCheckIn.mileageIn.toLocaleString()} KM
                  </p>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-555 dark:text-gray-400">Fuel Level</p>
                  <p className="text-sm md:text-base font-bold text-gray-900 dark:text-white mt-0.5">
                    {stats.recentCheckIn.fuelLevel} Tank
                  </p>
                </div>
              </div>

              <Link
                to="/portal/checkins"
                className="w-full btn-outline justify-center font-bold text-xs mt-2 py-2"
              >
                View Full Check-in Intake Report
              </Link>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400 dark:text-gray-650 flex flex-col items-center">
              <ClipboardDocumentCheckIcon className="w-12 h-12 text-gray-300 dark:text-gray-700 mb-3" />
              <p className="text-sm font-medium">No check-in intake reports registered yet.</p>
            </div>
          )}
        </div>

        {/* Quick Action Options */}
        <div className="bg-white dark:bg-dark-lighter p-6 md:p-8 rounded-3xl border border-gray-250/50 dark:border-white/5 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Need immediate support?
            </h3>
            <p className="text-gray-650 dark:text-gray-400 text-sm leading-relaxed mb-6 font-light">
              Are you currently experiencing a vehicle issue or stranded? Reach out to
              our dispatch team. We offer swift breakdown recovery services.
            </p>
            <div className="space-y-4">
              <a
                href="tel:0748333555"
                className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 dark:bg-dark dark:hover:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl group transition-all"
              >
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Call Emergency Towing</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">0748 333 555</p>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 dark:bg-dark dark:hover:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl group transition-all"
              >
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Book Next Routine Service</p>
                  <p className="text-xs text-gray-550 dark:text-gray-400 mt-0.5">Schedule an appointment online</p>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalDashboard;
