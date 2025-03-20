import React, { useState } from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Copy, Download, Clock, FileText } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import { TranscriptItem } from "@/types/transcript";

interface TranscriptDisplayProps {
  transcript: TranscriptItem[];
  isLoading?: boolean;
  onTimestampClick?: (seconds: number) => void;
}

// Fixed component with proper scrolling
const TranscriptDisplay = ({
  transcript = [
    {
      timestamp: "0:00",
      text: "Welcome to this video about machine learning.",
      seconds: 0,
    },
    {
      timestamp: "0:15",
      text: "Today we will cover the basics of neural networks.",
      seconds: 15,
    },
    {
      timestamp: "0:30",
      text: "Let's start with understanding what a neuron is.",
      seconds: 30,
    },
    {
      timestamp: "0:45",
      text: "A neuron takes multiple inputs and produces a single output.",
      seconds: 45,
    },
    {
      timestamp: "1:00",
      text: "The connections between neurons have weights that affect the strength of the signal.",
      seconds: 60,
    },
    {
      timestamp: "1:15",
      text: "Training a neural network involves adjusting these weights.",
      seconds: 75,
    },
    {
      timestamp: "1:30",
      text: "This is done through a process called backpropagation.",
      seconds: 90,
    },
    {
      timestamp: "1:45",
      text: "Let's look at a simple example to understand this better.",
      seconds: 105,
    },
    {
      timestamp: "2:00",
      text: "Thank you for watching this introduction to neural networks.",
      seconds: 120,
    },
  ],
  isLoading = false,
  onTimestampClick = () => {},
}: TranscriptDisplayProps) => {
  const [activeTimestamp, setActiveTimestamp] = useState<number | null>(null);

  const handleTimestampClick = (seconds: number) => {
    setActiveTimestamp(seconds);
    onTimestampClick(seconds);
  };

  const copyTranscript = () => {
    const text = transcript
      .map((item) => `${item.timestamp}: ${item.text}`)
      .join("\n");
    navigator.clipboard.writeText(text);
    // In a real implementation, you would show a toast notification here
  };

  const downloadTranscript = () => {
    const text = transcript
      .map((item) => `${item.timestamp}: ${item.text}`)
      .join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transcript.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-800 p-4 rounded-xl shadow-md">
        <p className="text-gray-400 animate-pulse">Loading transcript...</p>
      </div>
    );
  }

  return (
    <div
      className="w-full h-full flex flex-col bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-700"
      style={{ height: "650px", maxHeight: "100vh" }}
    >
      <div className="p-5 border-b border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-indigo-900 p-1.5 rounded-md mr-3">
            <FileText className="h-5 w-5 text-indigo-400" />
          </div>
          <h2 className="text-lg font-semibold text-white">📝 Transcript</h2>
        </div>
        <div className="flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyTranscript}
                  className="border-gray-600 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-indigo-400"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy transcript</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={downloadTranscript}
                  className="border-gray-600 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-indigo-400"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download transcript</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4 h-[calc(100%-70px)]" type="always">
        {transcript.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 p-8">
            <FileText className="h-12 w-12 text-gray-500 mb-3" />
            <p className="font-medium">No transcript available 📝</p>
            <p className="text-sm mt-2 text-center max-w-xs px-2">
              Enter a YouTube URL and click "Extract Transcript" to see the
              content here ✨
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {transcript.map((item, index) => (
              <div key={index} className="group">
                <div
                  className={`flex items-start cursor-pointer p-3 rounded-lg transition-all duration-150 ${activeTimestamp === item.seconds ? "bg-indigo-900/30 border-l-4 border-indigo-500" : "hover:bg-gray-700 border-l-4 border-transparent"}`}
                  onClick={() => handleTimestampClick(item.seconds)}
                >
                  <div
                    className={`flex items-center text-sm font-medium min-w-[70px] ${activeTimestamp === item.seconds ? "text-indigo-400" : "text-gray-400 group-hover:text-indigo-400"}`}
                  >
                    <div className="bg-gray-700 p-1 rounded mr-1.5 group-hover:bg-indigo-900/50">
                      <Clock className="h-3 w-3" />
                    </div>
                    {item.timestamp}
                  </div>
                  <p className="text-gray-300 ml-2 leading-relaxed">
                    {item.text}
                  </p>
                </div>
                {index < transcript.length - 1 && (
                  <Separator className="my-1 opacity-30" />
                )}
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default TranscriptDisplay;
