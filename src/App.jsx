import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
// Pages
import F404Page from "./F404Page";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import InvoicesPage from "./pages/InvoicesPage";
import AreasPage from "./pages/AreasPage";
import WhatsAppFloat from "./components/WhatsAppFloat";
import useScrollToTop from "./components/useScrollToTop";
// dashboard imports

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  });

  useScrollToTop();
  const location = useLocation();

  return (
    <div className="relative">
      <WhatsAppFloat />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Layout>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/invoices" element={<InvoicesPage />} />
                <Route path="/areas" element={<AreasPage />} />

                {/* 404 */}
                <Route path="/*" element={<F404Page />} />
              </Routes>
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
