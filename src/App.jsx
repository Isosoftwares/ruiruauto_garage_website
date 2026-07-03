import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
// Pages
import F404Page from "./F404Page";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AreasPage from "./pages/AreasPage";
import AreaDetailPage from "./pages/AreaDetailPage";

// Client Portal
import { ClientAuthProvider } from "./hooks/useClientAuth";
import PortalLogin from "./pages/portal/PortalLogin";
import PortalLayout from "./pages/portal/PortalLayout";
import PortalDashboard from "./pages/portal/PortalDashboard";
import PortalVehicles from "./pages/portal/PortalVehicles";
import PortalInvoices from "./pages/portal/PortalInvoices";
import PortalQuotes from "./pages/portal/PortalQuotes";
import PortalCheckIns from "./pages/portal/PortalCheckIns";

import WhatsAppFloat from "./components/WhatsAppFloat";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import useScrollToTop from "./components/useScrollToTop";

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
      <PWAInstallPrompt />
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
          <ClientAuthProvider>
            <Layout>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/:slug" element={<ServiceDetailPage />} />
                  <Route path="/areas" element={<AreasPage />} />
                  <Route path="/areas/:slug" element={<AreaDetailPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />

                  {/* Client Portal Routes */}
                  <Route path="/portal/login" element={<PortalLogin />} />
                  <Route path="/portal" element={<PortalLayout />}>
                    <Route index element={<Navigate to="/portal/dashboard" replace />} />
                    <Route path="dashboard" element={<PortalDashboard />} />
                    <Route path="vehicles" element={<PortalVehicles />} />
                    <Route path="invoices" element={<PortalInvoices />} />
                    <Route path="quotes" element={<PortalQuotes />} />
                    <Route path="checkins" element={<PortalCheckIns />} />
                  </Route>

                  {/* 404 */}
                  <Route path="/*" element={<F404Page />} />
                </Routes>
              </AnimatePresence>
            </Layout>
          </ClientAuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
