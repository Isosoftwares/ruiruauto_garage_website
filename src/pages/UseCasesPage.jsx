import { Link } from "react-router-dom";
import {
  FaCut,
  FaStore,
  FaSpa,
  FaTshirt,
  FaUserTie,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import NavBar from "../components/NavBarLanding";
import Footer from "../components/FooterLanding";
import SEOHelmet from "../components/SEOHelmet";
import salon from "../assets/graphics/salon.jpg";
import retail from "../assets/graphics/retail.jpg";
import gym from "../assets/graphics/gym.jpg";
import boutiques from "../assets/graphics/boutiques.png";

function UseCasesPage() {
  const useCases = [
    {
      icon: FaSpa,
      title: "Salons & Spas",
      image: salon,
      description:
        "Manage appointments, track product sales, calculate staff commissions, and monitor service performance.",
      color: "from-pink-500 to-pink-600",
      features: [
        "Appointment scheduling with calendar view",
        "Service menu management",
        "Product sales tracking",
        "Staff commission calculations",
        "Client preferences and history",
        "SMS appointment reminders",
      ],
      benefits: [
        "Reduce no-shows with automated reminders",
        "Track which services are most profitable",
        "Manage multiple stylists and rooms",
        "Build client loyalty with history tracking",
      ],
    },
    {
      icon: FaStore,
      title: "Retail Stores",
      image: retail,
      description:
        "Multi-location inventory, POS system, courier management, and comprehensive sales reporting.",
      color: "from-blue-500 to-blue-600",
      features: [
        "Multi-location inventory management",
        "Fast POS system",
        "Courier and delivery management",
        "Sales reporting and analytics",
        "Stock transfer between locations",
        "Low stock alerts",
      ],
      benefits: [
        "Never run out of stock with smart alerts",
        "Track sales across all locations",
        "Manage deliveries efficiently",
        "Make data-driven purchasing decisions",
      ],
    },
    {
      icon: FaSpa,
      title: "Beauty & Wellness Centers",
      image: gym,
      description:
        "Service menu management, client history tracking, appointment calendar, and staff scheduling.",
      color: "from-purple-500 to-purple-600",
      features: [
        "Comprehensive service catalog",
        "Client visit history and preferences",
        "Appointment booking system",
        "Staff scheduling and assignments",
        "Treatment package management",
        "Client loyalty tracking",
      ],
      benefits: [
        "Personalize client experiences",
        "Optimize staff schedules",
        "Track treatment effectiveness",
        "Build long-term client relationships",
      ],
    },
    {
      icon: FaCut,
      title: "Barbershops",
      image: salon,
      description:
        "Quick appointment booking, walk-in management, product sales, and commission tracking.",
      color: "from-orange-500 to-orange-600",
      features: [
        "Quick appointment booking",
        "Walk-in customer management",
        "Product sales at POS",
        "Barber commission tracking",
        "Service pricing by staff level",
        "Client loyalty programs",
      ],
      benefits: [
        "Serve walk-ins and appointments efficiently",
        "Track barber performance",
        "Boost product sales",
        "Reward loyal clients",
      ],
    },
    {
      icon: FaTshirt,
      title: "Boutiques & Fashion Stores",
      image: boutiques,
      description:
        "Inventory across locations, spoilage tracking, client preferences, and delivery management.",
      color: "from-indigo-500 to-indigo-600",
      features: [
        "Multi-location inventory control",
        "Spoilage and damage tracking",
        "Client style preferences",
        "Delivery and courier management",
        "Seasonal stock management",
        "Customer purchase history",
      ],
      benefits: [
        "Minimize inventory losses",
        "Personalize shopping experience",
        "Manage deliveries seamlessly",
        "Understand customer preferences",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-white selection:bg-primary selection:text-white transition-colors duration-300 overflow-x-hidden">
      <SEOHelmet
        pageKey="useCases"
        includeSchemas={["organization", "softwareApplication"]}
      />
      <NavBar />

      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 dark:bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-primary/10 dark:bg-white/5 border border-primary/20 dark:border-white/10 text-primary px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              Industry Solutions
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Perfect For Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              Business
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            RyzonPlus is designed to meet the unique needs of service-based and
            retail businesses across Kenya
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-24">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <useCase.icon className="text-white text-3xl" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                      {useCase.title}
                    </h2>
                  </div>

                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <FaArrowRight className="text-primary mr-2" /> Key
                      Features:
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <FaCheckCircle className="text-primary mt-1 flex-shrink-0 text-sm" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8 border border-gray-200 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Benefits for Your Business:
                    </h3>
                    <div className="space-y-4">
                      {useCase.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/features"
                    className="inline-flex items-center space-x-2 text-primary font-bold hover:space-x-3 transition-all text-lg"
                  >
                    <span>Explore all features</span>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>

                {/* Image Placeholder */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div
                    className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 min-h-[500px] flex items-center justify-center shadow-2xl border border-gray-200 dark:border-white/5`}
                  >
                    <img
                      src={useCase?.image}
                      alt={useCase.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-dark/90 to-transparent"></div>

                    {/* Overlay Content */}
                    <div className="absolute bottom-10 left-10 right-10">
                      <div className="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 dark:border-white/10 shadow-lg">
                        <h4 className="text-gray-900 dark:text-white font-bold text-xl mb-2">
                          {useCase.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Empowering {useCase.title.toLowerCase()} across Kenya
                          with simplified management tools.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative blur */}
                  <div
                    className={`absolute -z-10 ${
                      index % 2 === 0 ? "-right-8" : "-left-8"
                    } top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r ${
                      useCase.color
                    } rounded-full blur-[100px] opacity-20`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Industries Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-dark-lighter/30 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            And Many More Business Types
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            RyzonPlus is flexible enough to work with any service-based or
            retail business. If you manage appointments, inventory, sales, or
            clients - we've got you covered.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Fitness Centers",
              "Pet Grooming",
              "Nail Salons",
              "Massage Therapy",
              "Dental Clinics",
              "Photography Studios",
              "Car Wash Services",
              "Tailoring Shops",
            ].map((business, index) => (
              <div
                key={index}
                className="bg-white dark:bg-white/5 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-white/5 hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                  {business}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-white dark:bg-dark transition-colors duration-300">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            See How RyzonPlus Works for Your Business
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Start your free 14-day trial and experience the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/signup"
              className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <span>Start Free Trial</span>
              <FaArrowRight className="ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <span>View Pricing</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default UseCasesPage;
