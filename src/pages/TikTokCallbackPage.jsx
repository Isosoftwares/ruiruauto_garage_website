import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "../api/axios";

const TikTokCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("processing"); // processing, success, error
  const [message, setMessage] = useState("Processing TikTok Sandbox authorization...");

  useEffect(() => {
    const code = searchParams.get("code");
    const error = searchParams.get("error");
    const errorDescription = searchParams.get("error_description");

    if (error) {
      setStatus("error");
      setMessage(errorDescription || "TikTok authorization was cancelled or failed.");
      return;
    }

    if (!code) {
      setStatus("error");
      setMessage("No authorization code received from TikTok.");
      return;
    }

    // Exchange code for token
    const exchangeToken = async () => {
      try {
        const res = await axios.post("/social/tiktok/callback", { code });
        setStatus("success");
        setMessage(res.data.message || "TikTok Sandbox account authorized successfully!");
        
        setTimeout(() => {
          navigate("/tiktok");
        }, 3000);
      } catch (err) {
        console.error("TikTok callback exchange error:", err);
        setStatus("error");
        setMessage(
          err.response?.data?.message ||
            "Failed to complete TikTok authorization. Please try again."
        );
      }
    };

    exchangeToken();
  }, [searchParams, navigate]);

  return (
    <div className="pt-32 pb-20 bg-gray-50 dark:bg-dark min-h-screen flex items-center justify-center px-4 text-gray-900 dark:text-white">
      <Helmet>
        <title>TikTok OAuth Callback | Motion Zip Ltd</title>
      </Helmet>

      <div className="max-w-md w-full bg-white dark:bg-dark-lighter p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl text-center space-y-4">
        {status === "processing" && (
          <>
            <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <h2 className="text-lg font-bold">Authorizing TikTok Sandbox...</h2>
            <p className="text-xs text-gray-500">{message}</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
              ✓
            </div>
            <h2 className="text-lg font-black text-emerald-600">Authorization Successful!</h2>
            <p className="text-xs text-gray-600 dark:text-gray-300">{message}</p>
            <p className="text-[11px] text-gray-400">Redirecting to TikTok Video Showcase in 3 seconds...</p>
            <Link
              to="/tiktok"
              className="inline-block px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-md"
            >
              View TikTok Feed
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <div className="w-12 h-12 bg-red-100 dark:bg-red-950 text-red-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
              ✕
            </div>
            <h2 className="text-lg font-black text-red-600">Authorization Failed</h2>
            <p className="text-xs text-gray-600 dark:text-gray-300">{message}</p>
            <Link
              to="/tiktok"
              className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold text-xs rounded-xl"
            >
              Return to TikTok Showcase
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TikTokCallbackPage;
