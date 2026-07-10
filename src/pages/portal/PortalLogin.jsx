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
import Logo from "../../assets/graphics/garagelogo.jpeg";
import BgImage from "../../assets/images/portal_login_bg.png";

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ backgroundImage: `url(${BgImage})` }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 relative"
    >
      {/* Dark premium overlay with heavy blur overlay */}
      <div className="absolute inset-0 bg-slate-200/20 backdrop-blur-sm z-0"></div>

      <Helmet>
        <title>Client Portal Login | Motion Zip Ltd</title>
        <meta
          name="description"
          content="Access your Motion Zip Ltd Client Portal to track vehicles, invoices, quotes, and checkins."
        />
      </Helmet>

      <div className="max-w-md w-full bg-black/60 dark:bg-black/60 border border-white/10 backdrop-blur-xl p-8 md:p-10 shadow-2xl rounded-3xl z-10 relative overflow-hidden">
        {/* Neon accent glowing top line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary shadow-[0_1px_15px_#E63946]"></div>

        <div className="text-center mb-8">
          {/* Branded Garage Logo */}
          <div className="w-20 h-20 overflow-hidden rounded-full border-2 border-primary shadow-lg mx-auto mb-4 bg-black flex items-center justify-center">
            <img
              src={Logo}
              alt="Motion Zip Ltd Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-2xl font-black text-white uppercase tracking-tight">
            Client Portal
          </h1>
          <p className="text-gray-400 mt-2 text-xs font-light leading-relaxed">
            {step === 1
              ? "Enter your registered mobile number to log in via verification code"
              : `Enter the 6-digit OTP code sent to ${phone}`}
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleRequestOtp} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wide">
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
                  className="w-full pl-11 pr-4 py-3.5 bg-black/45 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all disabled:opacity-50"
            >
              {loading ? (
                <ArrowPathIcon className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Request OTP Code</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </>
              )}
            </button>
            <div className="text-center pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors font-semibold"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <span>Back to Website</span>
              </Link>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wide">
                Verification Code
              </label>
              <input
                type="text"
                required
                maxLength={6}
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                className="w-full text-center tracking-[0.5em] text-2xl font-bold py-3.5 bg-black/45 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all disabled:opacity-50"
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

            <div className="flex justify-between items-center text-xs pt-2">
              <button
                type="button"
                onClick={handleBackToPhone}
                className="text-gray-400 hover:text-primary transition-colors font-medium"
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
                <span className="text-gray-500 font-medium">
                  Resend in {resendTimer}s
                </span>
              )}
            </div>
          </form>
        )}

        {/* Live system state diagnostic readouts */}
        <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-gray-500">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span>SYSTEM ONLINE</span>
          </div>
          <div>NODE: MZIP_RUIRU_HQ</div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortalLogin;
