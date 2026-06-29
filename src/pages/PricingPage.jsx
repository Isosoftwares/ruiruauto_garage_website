import NavBar from "../components/NavBarLanding";
import Footer from "../components/FooterLanding";
import SubscriptionPlans from "../components/SubscriptionPlans";
import SEOHelmet from "../components/SEOHelmet";
import {
  FaCheckCircle,
  FaMobileAlt,
  FaCloudUploadAlt,
  FaHeadset,
  FaLock,
  FaSync,
} from "react-icons/fa";

function PricingPage() {
  const faqs = [
    {
      question: "How many locations can I manage?",
      answer:
        "Depends on your plan. Starter supports 1 location, Professional supports 3, and Enterprise offers unlimited locations.",
    },
    {
      question: "Can I track inventory separately for each location?",
      answer:
        "Yes. Each location has its own inventory tracking and stock levels.",
    },
    {
      question: "Do you support mobile access?",
      answer: "Yes. Access RyzonPlus from any device with internet connection.",
    },
    {
      question: "What payment methods can I track?",
      answer:
        "Cash, M-Pesa, bank transfers, and other methods. Customize to your business needs.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes. Try RyzonPlus free for 14 days with no credit card required.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-white selection:bg-primary selection:text-white transition-colors duration-300">
      <SEOHelmet
        pageKey="pricing"
        includeSchemas={["organization", "softwareApplication"]}
      />
      <NavBar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 dark:bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <span className="bg-primary/10 dark:bg-white/5 border border-primary/20 dark:border-white/10 text-primary px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm mb-6 inline-block">
            Flexible Pricing
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Simple, Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Start with a 14-day free trial. No credit card required. Cancel
            anytime.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-7xl">
          <SubscriptionPlans />
        </div>
      </section>

      {/* Included in All Plans */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-dark-lighter/50 relative transition-colors duration-300">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            All Plans Include
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Free updates", icon: FaSync },
              { text: "Mobile access", icon: FaMobileAlt },
              { text: "Data backup", icon: FaCloudUploadAlt },
              { text: "24/7 support", icon: FaHeadset },
              { text: "SSL Security", icon: FaLock },
              { text: "Regular backups", icon: FaCloudUploadAlt },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-base">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 transition-colors duration-300">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-white/5 rounded-xl p-8 border border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Start Your Free Trial
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of Kenyan businesses already using RyzonPlus to
            streamline their operations.
          </p>
          <a
            href="https://mybusiness.RyzonPlus.com/get-started"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center px-10 py-4 text-lg"
          >
            Get Started Free
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PricingPage;
