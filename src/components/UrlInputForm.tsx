import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

interface UrlInputFormProps {
  onSubmit?: (url: string) => void;
  isLoading?: boolean;
}

const UrlInputForm = ({
  onSubmit = () => {},
  isLoading = false,
}: UrlInputFormProps) => {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validateYoutubeUrl = (url: string): boolean => {
    // Basic YouTube URL validation
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11}).*$/;
    return youtubeRegex.test(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!url.trim()) {
      setError("Please enter a YouTube URL");
      return;
    }

    if (!validateYoutubeUrl(url)) {
      setError("Please enter a valid YouTube URL");
      return;
    }

    setError("");
    onSubmit(url);
  };

  return (
    <div className="w-full bg-gray-800 p-4 sm:p-8 rounded-xl shadow-md border border-gray-700">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <div className="flex-1 relative">
            <Input
              type="url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className={cn(
                "pr-10 w-full h-12 text-base rounded-lg border-2",
                error
                  ? "border-red-500 focus-visible:ring-red-500"
                  : "border-gray-600 focus-visible:border-indigo-500 bg-gray-700 text-white",
              )}
              disabled={isLoading}
            />
            <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-300" />
          </div>
          <Button
            type="submit"
            className="h-12 px-4 sm:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
            disabled={isLoading}
          >
            {isLoading ? "📝 Extracting..." : "📝 Extract Transcript"}
          </Button>
        </div>

        {error && (
          <div className="bg-red-50 p-3 rounded-lg border border-red-200">
            <p className="text-sm text-red-600 flex items-center">
              <span className="inline-block w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
              {error}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default UrlInputForm;
