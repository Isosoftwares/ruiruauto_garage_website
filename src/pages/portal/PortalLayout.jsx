import React, { useState } from "react";
import { Link, Navigate, useLocation, Outlet, useNavigate } from "react-router-dom";
import { useClientAuth } from "../../hooks/useClientAuth";
import { toast } from "react-toastify";
import {
  WrenchIcon,
  Squares2X2Icon,
  DocumentTextIcon,
  DocumentCheckIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

const PortalLayout = () => {
  const { token, client, logout } = useClientAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If not logged in, redirect to login
  if (!token) {
    return <Navigate to="/portal/login" state={{ from: location }} replace />;
  }

  const menuItems = [
    {
      name: "Dashboard",
      path: "/portal/dashboard",
      icon: <Squares2X2Icon className="w-5 h-5" />,
    },
    {
      name: "My Vehicles",
      path: "/portal/vehicles",
      icon: <WrenchIcon className="w-5 h-5" />,
    },
    {
      name: "Quotes & Estimates",
      path: "/portal/quotes",
      icon: <DocumentCheckIcon className="w-5 h-5" />,
    },
    {
      name: "Invoices & Receipts",
      path: "/portal/invoices",
      icon: <DocumentTextIcon className="w-5 h-5" />,
    },
    {
      name: "Vehicle Check-Ins",
      path: "/portal/checkins",
      icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
    },
  ];

  const handleLogout = () => {
    logout();
    toast.info("Logged out from portal");
    navigate("/portal/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark flex flex-col pt-16">
      {/* Top Header Navbar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-dark-lighter border-b border-gray-200 dark:border-white/5 z-40 flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src="/garagelogo.jpeg"
            alt="Ruiru Auto Logo"
            className="w-8  md:w-9 h-9 rounded-full object-cover border border-primary/20"
          />
          <span className="font-extrabold text-gray-900 dark:text-white tracking-tight text-sm md:text-base lg:text-lg">
            Ruiru Auto <span className="text-primary font-bold">Portal</span>
          </span>
        </div>

        {/* Right Side Info & Actions */}
        <div className="flex items-center gap-3">
          {/* Desktop Greeting & Back Actions */}
          <div className="hidden md:flex items-center gap-4 text-xs md:text-sm">
            <span className="text-gray-500 dark:text-gray-400 font-medium">
              Client: <strong className="text-gray-800 dark:text-gray-200">{client?.firstName}</strong>
            </span>
            <Link
              to="/"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold rounded-xl transition-all"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5" />
              <span>Back to Website</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 text-xs font-bold rounded-xl transition-all"
            >
              <ArrowRightOnRectangleIcon className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Main Container Wrapper */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Sidebar - Desktop Layout */}
        <aside className="hidden md:flex flex-col w-60 bg-white dark:bg-dark-lighter border-r border-gray-200 dark:border-white/5 p-5 shrink-0">
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-305 ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/10"
                      : "text-gray-605 dark:text-gray-450 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Drawer Sidebar Navigation */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm pt-16"
            onClick={() => setMobileMenuOpen(false)}
          >
            <aside
              className="w-60 bg-white dark:bg-dark-lighter h-full p-5 flex flex-col pt-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Account Card */}
              <div className="mb-6 pb-4 border-b border-gray-150 dark:border-white/5 text-xxs">
                <p className="text-gray-400 font-semibold uppercase tracking-wider">Customer Portal</p>
                <p className="font-bold text-gray-900 dark:text-white text-sm mt-1">
                  {client?.firstName} {client?.lastName}
                </p>
                <p className="text-gray-550 mt-0.5">{client?.phone}</p>
              </div>

              {/* Menu Links */}
              <nav className="space-y-1 mb-6 flex-grow">
                {menuItems.map((item) => {
                  const isActive = location.pathname.startsWith(item.path);
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive ? "bg-primary text-white" : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-gray-150 dark:border-white/5 space-y-2 text-xs">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-primary bg-primary/10"
                >
                  <ArrowLeftIcon className="w-4 h-4" />
                  <span>Back to Website</span>
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLogout();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-red-500 hover:bg-red-55 dark:hover:bg-red-500/10"
                >
                  <ArrowRightOnRectangleIcon className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </aside>
          </div>
        )}

        {/* Content Render Panel */}
        <main className="flex-grow p-4 md:p-6 max-w-5xl mx-auto w-full pt-6 md:pt-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;
