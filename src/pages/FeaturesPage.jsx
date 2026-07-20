import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarCheck,
  FaCashRegister,
  FaBoxes,
  FaUsers,
  FaClipboardList,
  FaUsersCog,
  FaTruck,
  FaChartLine,
  FaMapMarkedAlt,
  FaArrowRight,
  FaCheckCircle,
  FaEye,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Modal } from "@mantine/core";
import NavBar from "../components/NavBarLanding";
import Footer from "../components/FooterLanding";
import SEOHelmet from "../components/SEOHelmet";
import appointmentsImg from "../assets/screenshots/appointments.png";
import salesImg from "../assets/screenshots/sales.png";
import stockImg from "../assets/screenshots/stock1.png";
import clientsImg from "../assets/screenshots/clients.png";
import servicesImg from "../assets/screenshots/services.png";
import teamImg from "../assets/screenshots/team.png";
import couriersImg from "../assets/screenshots/couriers.png";
import reportsImg from "../assets/screenshots/reports.png";
import locations from "../assets/screenshots/locations.png";

function FeaturesPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  const handleImageClick = (image, title) => {
    setSelectedImage({ image, title });
    setModalOpened(true);
  };

  const features = [
    {
      icon: FaCalendarCheck,
      title: "Appointments & Booking",
      description:
        "Schedule and manage customer appointments with ease. Calendar view, automated reminders, and staff assignment. Track completed, scheduled, and cancelled appointments across all locations.",
      image: appointmentsImg,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      highlights: [
        "Calendar view with daily, weekly, monthly options",
        "Automated SMS and email reminders",
        "Staff assignment and scheduling",
        "Track appointment status in real-time",
        "Multi-location appointment management",
      ],
    },
    {
      icon: FaCashRegister,
      title: "Sales & POS",
      description:
        "Process sales instantly with our intuitive POS system. Generate professional invoices and receipts. Accept multiple payment methods. Track daily sales, commissions, and revenue in real-time.",
      image: salesImg,
      color: "text-green-400",
      bg: "bg-green-500/10",
      highlights: [
        "Lightning-fast POS interface",
        "Professional invoice and receipt generation",
        "Multiple payment methods (Cash, M-Pesa, Bank)",
        "Real-time sales tracking and reporting",
        "Staff commission calculations",
      ],
    },
    {
      icon: FaBoxes,
      title: "Inventory Management",
      description:
        "Monitor inventory across all locations with comprehensive stock tracking. Low stock alerts ensure you never run out of essential items.",
      image: stockImg,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      highlights: [
        "Stock Levels: Monitor inventory across all locations",
        "Transaction History: Track every product movement",
        "Spoilage Tracking: Record and manage stock losses",
        "Low Stock Alerts: Never run out of essential items",
        "Location-Based Inventory: Separate stock for each branch",
      ],
    },
    {
      icon: FaUsers,
      title: "Client Management",
      description:
        "Build lasting relationships with comprehensive client profiles. Track visit history, total spending, and preferences. Identify your VIP customers and walk-ins at a glance.",
      image: clientsImg,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      highlights: [
        "Detailed client profiles and history",
        "Track total spending and visit frequency",
        "Customer preferences and notes",
        "VIP customer identification",
        "Client contact information management",
      ],
    },
    {
      icon: FaClipboardList,
      title: "Service & Product Catalog",
      description:
        "Create detailed service menus with pricing, duration, and staff assignments. Manage product inventory with SKUs, categories, and multiple pricing tiers.",
      image: servicesImg,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      highlights: [
        "Service menu with pricing and duration",
        "Staff assignment to services",
        "Product catalog with SKUs and categories",
        "Multiple pricing tiers (Retail, Member, Wholesale, VIP)",
        "Easy catalog management and updates",
      ],
    },
    {
      icon: FaUsersCog,
      title: "Team Management",
      description:
        "Add employees and set role-based permissions. Track staff performance and commissions. Manage user access levels (admin vs. employee).",
      image: teamImg,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      highlights: [
        "Role-based access control",
        "Staff performance tracking",
        "Automated commission calculations",
        "Employee scheduling and assignments",
        "Admin and employee permission levels",
      ],
    },
    {
      icon: FaTruck,
      title: "Delivery Management",
      description:
        "Assign couriers to orders with real-time availability tracking. Set delivery fees and monitor courier performance. Perfect for businesses offering product delivery.",
      image: couriersImg,
      color: "text-red-400",
      bg: "bg-red-500/10",
      highlights: [
        "Courier assignment and tracking",
        "Real-time delivery status updates",
        "Delivery fee management",
        "Courier performance monitoring",
        "Order delivery history",
      ],
    },
    {
      icon: FaChartLine,
      title: "Financial Tracking",
      description:
        "Comprehensive financial management tools to track every aspect of your business finances.",
      image: reportsImg,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      highlights: [
        "Payments: Record and reconcile all transactions",
        "Expenses: Track business costs by category",
        "Reports: Generate profit & loss, revenue analytics",
        "Commission Tracking: Calculate staff earnings automatically",
        "Financial insights and trends",
      ],
    },
    {
      icon: FaMapMarkedAlt,
      title: "Multi-Location Support",
      description:
        "Manage multiple branches from one dashboard. Compare performance, transfer stock, and maintain separate inventory for each location.",
      image: locations,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      highlights: [
        "Centralized multi-location dashboard",
        "Compare performance across locations",
        "Stock transfer between branches",
        "Location-specific inventory and sales",
        "Branch-level reporting and analytics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-white selection:bg-primary selection:text-white transition-colors duration-300 overflow-x-hidden">
      <SEOHelmet
        pageKey="features"
        includeSchemas={["organization", "softwareApplication"]}
      />
      <NavBar />

      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="bg-primary/10 dark:bg-white/5 border border-primary/20 dark:border-white/10 text-primary px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              Complete Feature Suite
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Powerful Features for <br />
            <span className="text-primary">
              Your Business
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Everything you need to manage appointments, inventory, sales,
            clients, and multiple locations with RyzonPlus
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-32">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                {/* Content */}
                <div
                  className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div
                    className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center`}
                  >
                    <feature.icon className={`${feature.color} text-3xl`} />
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-4 bg-gray-50 dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/5">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div
                    className="relative rounded-2xl overflow-hidden glass-panel group cursor-pointer border border-gray-200 dark:border-white/5"
                    onClick={() =>
                      handleImageClick(feature.image, feature.title)
                    }
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* View Button Overlay */}
                    <div className="absolute inset-0 bg-white/60 dark:bg-dark/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center space-x-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <FaEye className="text-xl" />
                        <span>View Screenshot</span>
                      </button>
                    </div>
                  </div>

                  {/* Decorative Glow */}
                  <div
                    className={`absolute -z-10 ${
                      index % 2 === 0 ? "-right-20" : "-left-20"
                    } top-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r ${
                      feature.color.includes("blue")
                        ? "from-blue-600/20"
                        : feature.color.includes("green")
                        ? "from-green-600/20"
                        : feature.color.includes("purple")
                        ? "from-purple-600/20"
                        : feature.color.includes("pink")
                        ? "from-pink-600/20"
                        : feature.color.includes("orange")
                        ? "from-orange-600/20"
                        : "from-primary/20"
                    } to-transparent rounded-full blur-[100px] pointer-events-none opacity-50`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-white dark:bg-dark transition-colors duration-300">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            See RyzonPlus in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Book a free demo and discover how our features can transform your
            business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://mybusiness.RyzonPlus.com/get-started"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              Start Free Trial <FaArrowRight />
            </a>
            <Link
              to="/pricing"
              className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="auto"
        centered
        title={selectedImage?.title}
        overlayProps={{
          color: "#0e111d",
          opacity: 0.85,
          blur: 3,
        }}
        classNames={{
          content:
            "!bg-white dark:!bg-dark-lighter !border !border-gray-200 dark:!border-white/10 !text-gray-900 dark:!text-white",
          header:
            "!bg-white dark:!bg-dark-lighter !text-gray-900 dark:!text-white",
          title: "!font-bold !text-xl",
          close:
            "!text-gray-500 dark:!text-gray-400 hover:!bg-gray-100 dark:hover:!bg-white/10 hover:!text-gray-900 dark:hover:!text-white",
        }}
      >
        {selectedImage && (
          <div className="relative max-w-5xl">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl border border-gray-200 dark:border-white/5"
            />
          </div>
        )}
      </Modal>

      <Footer />
    </div>
  );
}

export default FeaturesPage;
