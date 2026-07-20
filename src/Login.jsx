import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import logo from "./assets/graphics/logo1.svg"; // Ensure this logo looks good in dark mode or replace if needed
import axios from "./api/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAuth from "./hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import SEOHelmet from "./components/SEOHelmet"; // Assuming we want SEO here too

function Login() {
  const [errMsg, setErrMsg] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const toDash = "/dashboard";

  React.useEffect(() => {
    if (auth?.accessToken && auth?.roles) {
      const roles = auth.roles;
      if (
        roles?.includes("admin") ||
        roles?.includes("manager") ||
        roles?.includes("employee") ||
        roles?.includes("receptionist")
      ) {
        navigate(toDash, { replace: true });
      }
    }
  }, [auth?.accessToken, auth?.roles, navigate, toDash]);

  const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const login = (loginData) => {
    return axios.post("/auth/login", loginData, {
      withCredentials: true,
    });
  };

  const { mutate: loginMutate, isPending: loginLoading } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      const accessToken = response?.data?.data?.accessToken;
      const user = response?.data?.data?.user;
      const business = response?.data?.data?.bussiness;
      const subscription = response?.data?.data?.subscription;
      const roles = [user?.role];
      const userId = user?._id;

      setAuth({
        roles,
        accessToken,
        user,
        subscription,
        business,
        userId,
        session: response?.data?.data?.sessionInfo,
      });

      const text = `Welcome back ${user?.username || ""}`;

      if (
        roles?.includes("admin") ||
        roles?.includes("manager") ||
        roles?.includes("employee") ||
        roles?.includes("receptionist")
      ) {
        toast.success(text);
        return navigate(toDash, { replace: true });
      }
    },
    onError: (err) => {
      console.log(err);
      const text = err?.response?.data?.message || "Something went wrong";
      setErrMsg(text);
      setTimeout(() => {
        setErrMsg("");
      }, 10000);
      toast.error(text);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setErrMsg("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    const data = { email, password };
    loginMutate(data);
  };

  const salonImageUrl =
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="min-h-screen flex bg-white dark:bg-dark text-gray-900 dark:text-white selection:bg-primary selection:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-dark">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-12 relative z-10 text-gray-900 dark:text-white">
        <div className="w-full max-w-xl relative bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-white/10 p-8 shadow-2xl">
          <div className="mb-8 flex justify-center">
            {/* Logo replacement text if SVG doesn't work well, but keeping img for now */}
            <h2 className="text-3xl font-bold text-primary">
              RyzonPlus
            </h2>
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to manage your business
            </p>
          </div>

          {errMsg && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
              <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                {errMsg}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaEnvelope
                    className={
                      emailError
                        ? "text-red-500 text-base"
                        : "text-gray-400 dark:text-gray-500 text-base group-focus-within:text-primary transition-colors"
                    }
                  />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={
                    emailError
                      ? "w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-dark-lighter border border-red-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all"
                      : "w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-dark-lighter border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all hover:bg-gray-50/80 dark:hover:bg-white/5"
                  }
                  disabled={loginLoading}
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                  {emailError}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock
                    className={
                      passwordError
                        ? "text-red-500 text-base"
                        : "text-gray-400 dark:text-gray-500 text-base group-focus-within:text-primary transition-colors"
                    }
                  />
                </div>
                <input
                  id="password"
                  type={visiblePassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={
                    passwordError
                      ? "w-full pl-12 pr-12 py-3.5 bg-gray-50 dark:bg-dark-lighter border border-red-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all"
                      : "w-full pl-12 pr-12 py-3.5 bg-gray-50 dark:bg-dark-lighter border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all hover:bg-gray-50/80 dark:hover:bg-white/5"
                  }
                  disabled={loginLoading}
                />
                <button
                  type="button"
                  onClick={() => setVisiblePassword(!visiblePassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-white transition-colors"
                  disabled={loginLoading}
                >
                  {visiblePassword ? (
                    <AiOutlineEyeInvisible className="text-xl" />
                  ) : (
                    <AiOutlineEye className="text-xl" />
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                  {passwordError}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
            >
              {loginLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <FaArrowRight className="text-sm" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Don't have an account yet?
            </p>
            <Link
              to="/signup"
              className="btn-secondary w-full inline-flex justify-center items-center py-3"
            >
              <span>Get Started</span>
              <FaArrowRight className="ml-2 text-sm" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${salonImageUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-white/90 dark:bg-dark/80 backdrop-blur-sm z-10"></div>

        <div className="relative z-20 flex flex-col justify-center p-12 pb-16 text-gray-900 dark:text-white max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            Radiate Excellence Every Day
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Everything you need to run a successful business, all in one
            appointments and sales platform.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-100 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                  Smart Scheduling
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Effortless appointment booking and calendar management
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-100 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                  Sales & POS Management
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Track sales, orders, products, services, and payments with
                  real-time analytics
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-100 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                  Client Management
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Build lasting relationships with memberships and loyalty
                  programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
