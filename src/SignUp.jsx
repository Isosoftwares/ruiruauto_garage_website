import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaShoppingBag,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import axios from "./api/axios";
import useAuth from "./hooks/useAuth";
import logo from "./assets/graphics/logo1.svg"; // Reuse logo

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const signUp = (signupData) => {
    // keeping the endpoint as is, though /auth/register might be more appropriate if it existed
    return axios.post("/buyers/register", signupData, {
      withCredentials: true,
    });
  };

  const { mutate: signupMutate, isPending: loadingSignup } = useMutation({
    mutationFn: signUp,
    onSuccess: (response) => {
      const token = response?.data?.token;
      const buyer = response?.data?.buyer;

      // Set auth context
      setAuth({
        accessToken: token,
        user: buyer,
        userType: "buyer",
        isAuthenticated: true,
      });

      // Clear form and error messages
      reset();
      setErrMsg("");

      const message =
        response?.data?.message || "Account created successfully.";
      toast.success(message);

      // Navigate to dashboard or products page
      navigate("/dashboard", { replace: true }); // Changed to dashboard to match Login flow
    },
    onError: (err) => {
      const message =
        err?.response?.data?.message ||
        "Something went wrong. Please try again.";
      setErrMsg(message);
      setTimeout(() => setErrMsg(""), 8000);
      toast.error(message);
    },
  });

  const onSubmit = async (data) => {
    try {
      signupMutate(data);
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  const sideImageUrl =
    "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop"; // Business/Team image

  return (
    <div className="min-h-screen flex bg-white dark:bg-dark text-gray-900 dark:text-white selection:bg-primary selection:text-white relative overflow-hidden transition-colors duration-300">
      <Helmet>
        <title>Sign Up - RyzonPlus</title>
        <meta
          name="description"
          content="Join RyzonPlus and start managing your business efficiently."
        />
      </Helmet>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-dark">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-12 relative z-10 text-gray-900 dark:text-white">
        <div className="w-full max-w-xl relative bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-white/10 p-8 shadow-2xl">
          <div className="mb-8 flex justify-center">
            {/* Logo */}
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-400">
              RyzonPlus
            </h2>
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Create Account
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Start your journey with RyzonPlus
            </p>
          </div>

          {errMsg && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                  {errMsg}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaEnvelope
                    className={
                      errors.email
                        ? "text-red-500 text-base"
                        : "text-gray-400 dark:text-gray-500 text-base group-focus-within:text-primary transition-colors"
                    }
                  />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={
                    errors.email
                      ? "w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-dark-lighter border border-red-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all"
                      : "w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-dark-lighter border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all hover:bg-gray-50/80 dark:hover:bg-white/5"
                  }
                  disabled={loadingSignup}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock
                    className={
                      errors.password
                        ? "text-red-500 text-base"
                        : "text-gray-400 dark:text-gray-500 text-base group-focus-within:text-primary transition-colors"
                    }
                  />
                </div>
                <input
                  type={visiblePassword ? "text" : "password"}
                  placeholder="Create a secure password"
                  className={
                    errors.password
                      ? "w-full pl-12 pr-12 py-3.5 bg-gray-50 dark:bg-dark-lighter border border-red-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all"
                      : "w-full pl-12 pr-12 py-3.5 bg-gray-50 dark:bg-dark-lighter border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all hover:bg-gray-50/80 dark:hover:bg-white/5"
                  }
                  disabled={loadingSignup}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setVisiblePassword(!visiblePassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-white transition-colors"
                  disabled={loadingSignup}
                >
                  {visiblePassword ? (
                    <AiOutlineEyeInvisible className="text-xl" />
                  ) : (
                    <AiOutlineEye className="text-xl" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Terms Agreement */}
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                By creating an account, you agree to our{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>

            <button
              type="submit"
              disabled={loadingSignup}
              className="w-full bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
            >
              {loadingSignup ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <FaShoppingBag className="text-lg" />
                  <span>Create Account</span>
                  <FaArrowRight className="text-sm" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Already have an account?
            </p>
            <Link
              to="/login"
              className="btn-secondary w-full inline-flex justify-center items-center py-3"
            >
              <span>Sign In</span>
              <FaArrowRight className="ml-2 text-sm" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sideImageUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-white/90 dark:bg-dark/80 backdrop-blur-sm z-10"></div>

        <div className="relative z-20 flex flex-col justify-center p-12 pb-16 text-gray-900 dark:text-white max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            Join the Future of Business
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Create an account to access powerful tools for sales, appointments,
            and client management.
          </p>

          {/* Brief Feature List */}
          <div className="space-y-4">
            {[
              "Real-time Sales Tracking",
              "Smart Appointment Scheduling",
              "Customer Loyalty Programs",
              "Inventory Management",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                  ✓
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
