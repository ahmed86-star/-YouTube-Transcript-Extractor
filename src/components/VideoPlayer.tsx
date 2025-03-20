import React, { useState, useEffect, useRef } from "react";
import { AlertCircle, Youtube } from "lucide-react";

interface VideoPlayerProps {
  videoId?: string;
  onTimeUpdate?: (currentTime: number) => void;
  seekToTime?: number;
}

const VideoPlayer = ({
  videoId = "dQw4w9WgXcQ", // Default to a placeholder video
  onTimeUpdate,
  seekToTime,
}: VideoPlayerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const playerApiRef = useRef<any>(null);

  // Initialize YouTube iframe API
  useEffect(() => {
    // Load YouTube API if not already loaded
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      // This function will be called when the API is ready
      window.onYouTubeIframeAPIReady = initializePlayer;
    } else {
      initializePlayer();
    }

    return () => {
      // Cleanup
      if (playerApiRef.current) {
        playerApiRef.current.destroy();
      }
    };
  }, [videoId]);

  // Handle seeking to specific timestamp
  useEffect(() => {
    if (isLoaded && seekToTime !== undefined && playerApiRef.current) {
      playerApiRef.current.seekTo(seekToTime, true);
    }
  }, [seekToTime, isLoaded]);

  const initializePlayer = () => {
    try {
      if (!videoId) {
        setError("No video ID provided");
        return;
      }

      playerApiRef.current = new window.YT.Player("youtube-player", {
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          modestbranding: 1,
          rel: 0,
          controls: 1,
          showinfo: 1,
          fs: 1,
        },
        events: {
          onReady: () => setIsLoaded(true),
          onError: (e: any) => setError(`YouTube player error: ${e.data}`),
          onStateChange: handlePlayerStateChange,
        },
      });
    } catch (err) {
      setError(`Failed to initialize player: ${err}`);
    }
  };

  const handlePlayerStateChange = (event: any) => {
    // If video is playing, start sending time updates
    if (event.data === window.YT.PlayerState.PLAYING && onTimeUpdate) {
      const interval = setInterval(() => {
        if (
          playerApiRef.current &&
          typeof playerApiRef.current.getCurrentTime === "function"
        ) {
          onTimeUpdate(playerApiRef.current.getCurrentTime());
        }
      }, 500); // Update every half second

      return () => clearInterval(interval);
    }
  };

  return (
    <div className="w-full h-full bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-700">
      {error ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-red-50 p-6 text-red-500">
          <div className="bg-red-100 p-3 rounded-full mb-4">
            <AlertCircle className="h-6 w-6" />
          </div>
          <p className="text-red-600 font-medium">{error} ❌</p>
          <p className="text-red-400 text-sm mt-2">
            Please check the video ID and try again 🔄
          </p>
        </div>
      ) : (
        <div
          className="relative w-full"
          style={{ paddingBottom: "56.25%", maxHeight: "80vh" }}
        >
          <div
            id="youtube-player"
            className="absolute top-0 left-0 w-full h-full"
          />
          {!isLoaded && (
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-900">
              <div className="bg-red-500 p-3 rounded-full mb-4 animate-pulse">
                <Youtube className="h-6 w-6 text-white" />
              </div>
              <p className="text-gray-300 font-medium">
                Loading video player... 🎬
              </p>
              <div className="mt-4 flex space-x-2">
                <div
                  className="h-2 w-2 bg-red-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="h-2 w-2 bg-red-500 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="h-2 w-2 bg-red-500 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Add this to make TypeScript happy with the YouTube API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default VideoPlayer;
