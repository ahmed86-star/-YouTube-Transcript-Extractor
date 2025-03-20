import React from "react";
import { Info } from "lucide-react";

const ProcessingInfo = () => {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-xl border border-indigo-100 shadow-sm mb-6">
      <div className="flex items-start">
        <div className="bg-indigo-100 p-2 rounded-full mr-4 flex-shrink-0">
          <Info className="h-5 w-5 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-indigo-900">
            YouTube Transcript Extractor
          </h3>
          <p className="text-sm text-indigo-700 mt-1">
            This app demonstrates how to extract and display YouTube video
            transcripts:
          </p>
          <ul className="list-disc list-outside text-sm text-indigo-700 mt-2 space-y-1.5 ml-4">
            <li>Enter any YouTube video URL in the input field</li>
            <li>View the video alongside its timestamped transcript</li>
            <li>Click on timestamps to jump to specific parts of the video</li>
            <li>Generate AI summaries of the transcript content</li>
          </ul>
          <p className="text-sm text-indigo-700 mt-2 italic">
            Note: This demo uses simulated data for demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessingInfo;
