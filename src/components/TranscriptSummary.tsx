import React from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Lightbulb, Loader2, Sparkles } from "lucide-react";

interface TranscriptSummaryProps {
  summary: string;
  isLoading: boolean;
  onGenerateSummary: () => void;
}

const TranscriptSummary = ({
  summary = "",
  isLoading = false,
  onGenerateSummary = () => {},
}: TranscriptSummaryProps) => {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-5 border-b bg-gradient-to-r from-purple-50 to-white flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-purple-100 p-1.5 rounded-md mr-3">
            <Sparkles className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">AI Summary</h2>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onGenerateSummary}
          disabled={isLoading}
          className="bg-white border-purple-200 hover:bg-purple-50 hover:text-purple-700 text-gray-700"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin text-purple-600" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Lightbulb className="h-4 w-4 mr-2 text-amber-500" />
              <span>Generate AI Summary</span>
            </>
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1 p-5">
        {summary ? (
          <div className="prose prose-sm max-w-none">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-100 mb-4">
              <p className="text-sm text-purple-700 font-medium">
                AI-Generated Summary
              </p>
            </div>
            <div className="space-y-4 text-gray-700 whitespace-pre-line leading-relaxed">
              {summary.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 p-8">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <Lightbulb className="h-8 w-8 text-amber-500" />
            </div>
            <p className="font-medium text-gray-700">No summary available</p>
            <p className="text-sm mt-2 text-center max-w-xs text-gray-500">
              Click "Generate AI Summary" to create an AI-powered summary of the
              transcript content
            </p>
            <Button
              onClick={onGenerateSummary}
              className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  <span>Please wait...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span>Generate Summary</span>
                </>
              )}
            </Button>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default TranscriptSummary;
