import { TranscriptItem } from "@/types/transcript";

// This is a mock implementation that returns sample transcript data
// since we're removing the actual Stagehand implementation
export async function extractYoutubeTranscript(
  videoUrl: string,
): Promise<TranscriptItem[]> {
  console.log("Processing video URL:", videoUrl);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Return mock transcript data
  return [
    { timestamp: "0:00", text: "Hello and welcome to this video!", seconds: 0 },
    {
      timestamp: "0:15",
      text: "Today we're going to talk about an interesting topic.",
      seconds: 15,
    },
    {
      timestamp: "0:30",
      text: "Let's dive right into the main points.",
      seconds: 30,
    },
    {
      timestamp: "0:45",
      text: "First, we need to understand the basics.",
      seconds: 45,
    },
    {
      timestamp: "1:00",
      text: "This concept is fundamental to our discussion.",
      seconds: 60,
    },
    {
      timestamp: "1:15",
      text: "Many people overlook this important detail.",
      seconds: 75,
    },
    {
      timestamp: "1:30",
      text: "Let me show you a practical example.",
      seconds: 90,
    },
    {
      timestamp: "1:45",
      text: "As you can see, the results are quite interesting.",
      seconds: 105,
    },
    {
      timestamp: "2:00",
      text: "Now let's look at some real-world applications.",
      seconds: 120,
    },
    {
      timestamp: "2:15",
      text: "This technology is being used in various industries.",
      seconds: 135,
    },
    {
      timestamp: "2:30",
      text: "The potential for future development is enormous.",
      seconds: 150,
    },
    {
      timestamp: "2:45",
      text: "Let's summarize what we've learned today.",
      seconds: 165,
    },
    {
      timestamp: "3:00",
      text: "Thank you for watching! Don't forget to like and subscribe.",
      seconds: 180,
    },
  ];
}
