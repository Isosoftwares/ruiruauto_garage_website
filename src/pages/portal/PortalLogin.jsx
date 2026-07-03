import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useClientAuth } from "../../hooks/useClientAuth";
import axios from "../../api/axios";
import { toast } from "react-toastify";
import {
  PhoneIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  ArrowPathIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const PortalLogin = () => {
  const { login, token } = useClientAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 = Phone Input, 2 = OTP Input
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // If already logged in, redirect to dashboard
  useEffect(() => {
    if (token) {
      const origin = location.state?.from?.pathname || "/portal/dashboard";
      navigate(origin, { replace: true });
    }
  }, [token, navigate, location]);

  // Countdown timer for OTP resend
  useEffect(() => {
    let interval = null;
    if (step === 2 && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [step, resendTimer]);

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    if (!phone) {
      toast.error("Please enter your phone number");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/client-portal/auth/request-otp", { phone });
      if (response.data.success) {
        toast.success(response.data.message);
        setStep(2);
        setResendTimer(60);
        setCanResend(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP code");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      toast.error("Please enter the verification code");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/client-portal/auth/verify-otp", {
        phone,
        otp,
      });
      if (response.data.success) {
        toast.success("Welcome back!");
        login(response.data.token, response.data.client);
        navigate("/portal/dashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid or expired verification code");
    } finally {
      setLoading(false);
    }
  };

  const handleBackToPhone = () => {
    setStep(1);
    setOtp("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gray-50 dark:bg-dark px-4"
    >
      <Helmet>
        <title>Client Portal Login | Ruiru Auto Garage</title>
        <meta
          name="description"
          content="Access your Ruiru Auto Garage Client Portal to track vehicles, invoices, quotes, and checkins."
        />
      </Helmet>

      <div className="max-w-md w-full glass-card p-8 md:p-10 shadow-2xl rounded-3xl border border-gray-200 dark:border-white/5 bg-white/70 dark:bg-dark-lighter/50 backdrop-blur-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
            {step === 1 ? (
              <PhoneIcon className="w-8 h-8" />
            ) : (
              <ShieldCheckIcon className="w-8 h-8 animate-pulse" />
            )}
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Client Portal
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            {step === 1
              ? "Enter your registered mobile number to log in via verification code"
              : `Enter the 6-digit OTP code sent to ${phone}`}
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleRequestOtp} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0748333555"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-dark border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all disabled:opacity-50"
            >
              {loading ? (
                <ArrowPathIcon className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Request Code</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </>
              )}
            </button>
            <div className="text-center pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors font-semibold"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <span>Back to Website</span>
              </Link>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Verification Code
              </label>
              <input
                type="text"
                required
                maxLength={6}
                placeholder="000 000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                className="w-full text-center tracking-[1em] text-2xl font-bold py-3 bg-gray-50 dark:bg-dark border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder-gray-300 dark:placeholder-gray-700"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all disabled:opacity-50"
            >
              {loading ? (
                <ArrowPathIcon className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Verify and Login</span>
                  <ShieldCheckIcon className="w-5 h-5" />
                </>
              )}
            </button>

            <div className="flex justify-between items-center text-sm pt-2">
              <button
                type="button"
                onClick={handleBackToPhone}
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors font-medium"
              >
                Change Number
              </button>
              {canResend ? (
                <button
                  type="button"
                  onClick={handleRequestOtp}
                  className="text-primary hover:underline font-bold transition-all"
                >
                  Resend Code
                </button>
              ) : (
                <span className="text-gray-400 dark:text-gray-600 font-medium">
                  Resend in {resendTimer}s
                </span>
              )}
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default PortalLogin;
