import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

function DemoCredentials() {
  return (
    <div>
      <section className="py-20 px-4 bg-gray-50 dark:bg-dark-lighter/30 relative transition-colors duration-300">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Try RyzonPlus Now
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Use our demo account to explore all features
              </p>
            </div>

            <div className="bg-white dark:bg-white/5 rounded-2xl backdrop-blur-md border border-gray-200 dark:border-white/10 p-6 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Demo Info */}
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-primary text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Demo Credentials
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Login and explore all features with full access to the
                        demo environment
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-black/20 rounded-xl p-4 md:p-6 space-y-5 border border-gray-200 dark:border-white/5">
                    <div>
                      <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">
                        Email Address
                      </label>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <code className="w-full sm:w-auto sm:flex-1 bg-white dark:bg-white/5 px-3 py-3 rounded-lg border border-gray-200 dark:border-white/5 text-primary font-mono text-xs sm:text-sm overflow-x-auto whitespace-nowrap min-w-0">
                          demo@ryzonplus.com
                        </code>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText("demo@RyzonPlus.com");
                            toast.info("Email copied!");
                          }}
                          className="w-full sm:w-auto px-4 py-3 bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all text-sm font-semibold flex-shrink-0"
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">
                        Password
                      </label>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <code className="w-full sm:w-auto sm:flex-1 bg-white dark:bg-white/5 px-3 py-3 rounded-lg border border-gray-200 dark:border-white/5 text-primary font-mono text-xs sm:text-sm overflow-x-auto whitespace-nowrap min-w-0">
                          demo@$2025
                        </code>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText("demo@$2025");
                            toast.info("Password copied!");
                          }}
                          className="w-full sm:w-auto px-4 py-3 bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all text-sm font-semibold flex-shrink-0"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Access */}
                <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    What you can explore:
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Full dashboard with real data",
                      "Appointment management system",
                      "POS and sales tracking",
                      "Inventory management",
                      "Client database",
                      "Reports and analytics",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <FaCheckCircle className="text-primary flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://mybusiness.RyzonPlus.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/25 transition-all text-lg mt-4 transform hover:-translate-y-1"
                  >
                    <span>Login to Demo</span>
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default DemoCredentials;
