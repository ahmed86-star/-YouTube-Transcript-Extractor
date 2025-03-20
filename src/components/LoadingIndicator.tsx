import React from "react";
import { Loader2, Youtube } from "lucide-react";

interface LoadingIndicatorProps {
  isLoading?: boolean;
  message?: string;
}

const LoadingIndicator = ({
  isLoading = true,
  message = "Processing video transcript...",
}: LoadingIndicatorProps) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-xl flex flex-col items-center max-w-md w-full border border-gray-700 z-50">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-full relative z-10">
            <Youtube className="h-8 w-8 text-white" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 text-center">
          ✨ {message} ✨
        </h3>

        <div className="flex items-center justify-center space-x-2 mb-6">
          <div
            className="h-2 w-2 bg-indigo-600 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="h-2 w-2 bg-indigo-600 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="h-2 w-2 bg-indigo-600 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>

        <p className="text-gray-400 text-center">
          Please wait while we extract the transcript from your video 🎬
        </p>
      </div>
    </div>
  );
};

export default LoadingIndicator;
