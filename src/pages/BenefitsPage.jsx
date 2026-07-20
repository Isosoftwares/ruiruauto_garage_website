import { Link } from "react-router-dom";
import {
  FaClock,
  FaDollarSign,
  FaChartLine,
  FaShieldAlt,
  FaStar,
  FaLightbulb,
  FaLock,
  FaArrowRight,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";
import NavBar from "../components/NavBarLanding";
import Footer from "../components/FooterLanding";
import SEOHelmet from "../components/SEOHelmet";

function BenefitsPage() {
  const benefits = [
    {
      icon: FaClock,
      title: "Save Time",
      description:
        "Automate appointment reminders, invoicing, and stock alerts. Focus on growing your business, not managing spreadsheets.",
      color: "from-blue-500 to-blue-600",
      points: [
        "Automated SMS and email reminders",
        "One-click invoice generation",
        "Automatic low stock alerts",
        "Quick appointment booking",
        "Streamlined checkout process",
      ],
      impact: "Save up to 10 hours per week",
    },
    {
      icon: FaDollarSign,
      title: "Reduce Costs",
      description:
        "Affordable pricing at KSH 500/month means no expensive software licenses or hidden fees.",
      color: "from-green-500 to-green-600",
      points: [
        "Starting at just KSH 500/month",
        "No setup fees or hidden costs",
        "No per-transaction charges",
        "Free updates and upgrades",
        "Cancel anytime, no contracts",
      ],
      impact: "Save huge vs legacy software",
    },
    {
      icon: FaChartLine,
      title: "Increase Revenue",
      description:
        "Track best-performing services and products. Identify top clients and optimize your offerings.",
      color: "from-purple-500 to-purple-600",
      points: [
        "Identify your most profitable services",
        "Track top-spending clients",
        "Analyze sales trends and patterns",
        "Reduce no-shows with reminders",
        "Upsell opportunities at checkout",
      ],
      impact: "Average 25% revenue increase",
    },
    {
      icon: FaShieldAlt,
      title: "Better Control",
      description:
        "Real-time visibility into inventory, sales, and staff performance across all locations.",
      color: "from-orange-500 to-orange-600",
      points: [
        "Live inventory tracking",
        "Real-time sales monitoring",
        "Staff performance metrics",
        "Multi-location oversight",
        "Transaction history tracking",
      ],
      impact: "100% visibility into operations",
    },
    {
      icon: FaStar,
      title: "Professional Image",
      description:
        "Generate polished invoices and receipts that build customer trust.",
      color: "from-pink-500 to-pink-600",
      points: [
        "Branded invoices and receipts",
        "Professional email communications",
        "Clean, modern interface",
        "Detailed service descriptions",
        "Multiple payment options",
      ],
      impact: "Stand out from competitors",
    },
    {
      icon: FaLightbulb,
      title: "Data-Driven Decisions",
      description:
        "Comprehensive reports on profit & loss, revenue trends, customer analytics, and expense tracking.",
      color: "from-indigo-500 to-indigo-600",
      points: [
        "Profit & loss statements",
        "Revenue trend analysis",
        "Customer spending patterns",
        "Expense tracking by category",
        "Staff commission reports",
      ],
      impact: "Data-backed growth strategy",
    },
    {
      icon: FaLock,
      title: "Secure & Reliable",
      description:
        "Permission-based access controls keep your business data safe.",
      color: "from-red-500 to-red-600",
      points: [
        "Role-based access control",
        "Encrypted data storage",
        "Regular automatic backups",
        "99.9% uptime guarantee",
        "Secure payment processing",
      ],
      impact: "Enterprise-grade security",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-white selection:bg-primary selection:text-white transition-colors duration-300 overflow-x-hidden">
      <SEOHelmet
        pageKey="benefits"
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
              Why Choose RyzonPlus
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Transform Your{" "}
            <span className="text-primary">
              Business
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover the powerful benefits that make RyzonPlus the smart choice
            for Kenyan businesses
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-24">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20`}
                  >
                    <benefit.icon className="text-white text-3xl" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Key Points */}
                  <div className="space-y-4">
                    {benefit.points.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Impact Badge */}
                  <div className="bg-white dark:bg-white/5 rounded-xl p-6 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm dark:shadow-none">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaChartLine className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">
                          BUSINESS IMPACT
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {benefit.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div
                    className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${benefit.color} p-16 min-h-[400px] flex items-center justify-center shadow-2xl`}
                  >
                    <benefit.icon className="text-white text-9xl opacity-20" />
                    <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-[1px]"></div>

                    {/* Floating Stats Cards */}
                    <div className="absolute top-10 left-10 bg-white dark:bg-dark/90 text-gray-900 dark:text-white rounded-xl p-6 shadow-xl border border-gray-100 dark:border-white/10 backdrop-blur-md">
                      <benefit.icon className="text-primary text-xl mb-2" />
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                        Efficiency
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                        +45%
                      </div>
                    </div>
                    <div className="absolute bottom-10 right-10 bg-white text-dark rounded-xl p-6 shadow-xl border border-gray-100 dark:border-none">
                      <FaChartLine className="text-green-600 text-xl mb-2" />
                      <div className="text-xs text-gray-500 uppercase tracking-widest">
                        Growth
                      </div>
                      <div className="text-2xl font-bold text-dark mt-1">
                        +25%
                      </div>
                    </div>
                  </div>
                  {/* Decorative blur */}
                  <div
                    className={`absolute -z-10 ${
                      index % 2 === 0 ? "-right-12" : "-left-12"
                    } top-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r ${
                      benefit.color
                    } rounded-full blur-[100px] opacity-20`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-dark-lighter/30 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Before vs After RyzonPlus
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-red-200 dark:border-red-500/30 hover:bg-red-50 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
              <div className="text-center mb-8">
                <div className="inline-block bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 px-6 py-2 rounded-full font-bold border border-red-200 dark:border-red-500/20">
                  Before RyzonPlus
                </div>
              </div>
              <div className="space-y-5">
                {[
                  "Manual appointment scheduling",
                  "Paper-based records and receipts",
                  "No inventory visibility",
                  "Difficult to track staff performance",
                  "Time-consuming reporting",
                  "Lost customer information",
                  "Frequent stock-outs",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                  >
                    <FaTimes className="text-red-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-green-200 dark:border-green-500/30 hover:bg-green-50 dark:hover:bg-white/10 transition-colors relative shadow-sm dark:shadow-none">
              <div className="absolute inset-0 bg-green-500/5 rounded-2xl pointer-events-none" />
              <div className="text-center mb-8">
                <div className="inline-block bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 px-6 py-2 rounded-full font-bold border border-green-200 dark:border-green-500/20">
                  With RyzonPlus
                </div>
              </div>
              <div className="space-y-5">
                {[
                  "Automated online booking system",
                  "Digital records accessible anywhere",
                  "Real-time inventory tracking",
                  "Detailed staff performance metrics",
                  "Instant reports at your fingertips",
                  "Complete customer history",
                  "Automated low stock alerts",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                  >
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-16">
            Join Successful Businesses Across Kenya
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "500+",
                label: "Active Businesses",
                description: "Trust RyzonPlus daily",
              },
              {
                metric: "10K+",
                label: "Appointments",
                description: "Managed every month",
              },
              {
                metric: "99.9%",
                label: "Uptime",
                description: "Reliable and always available",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8 border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">
                  {stat.metric}
                </div>
                <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
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
            Experience These Benefits Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Start your free 14-day trial and see the difference RyzonPlus can
            make
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
              to="/features"
              className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <span>Explore Features</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BenefitsPage;
