import { TranscriptItem } from "@/types/transcript";

const API_KEY = "bb_live_xvR5QSdh67u5huzuFsQ7LBWjOQ0";
const API_ENDPOINT = "https://api.browserbase.com/v1/execute";

export async function extractYoutubeTranscript(
  videoUrl: string,
): Promise<TranscriptItem[]> {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        script: {
          steps: [
            { action: "goto", url: videoUrl },
            { action: "wait", milliseconds: 2000 },
            // Open transcript panel
            { action: "click", selector: "button[aria-label='More actions']" },
            { action: "wait", milliseconds: 500 },
            {
              action: "click",
              selector: "tp-yt-paper-item:contains('Show transcript')",
            },
            { action: "wait", milliseconds: 1000 },
            // Extract transcript entries
            {
              action: "evaluate",
              script: `
                const transcriptItems = [];
                const entries = document.querySelectorAll('ytd-transcript-segment-renderer');
                
                entries.forEach(entry => {
                  const timestampEl = entry.querySelector('.segment-timestamp');
                  const textEl = entry.querySelector('.segment-text');
                  
                  if (timestampEl && textEl) {
                    const timestamp = timestampEl.textContent.trim();
                    const text = textEl.textContent.trim();
                    
                    // Convert timestamp to seconds
                    let seconds = 0;
                    const parts = timestamp.split(':');
                    if (parts.length === 2) {
                      seconds = parseInt(parts[0]) * 60 + parseInt(parts[1]);
                    } else if (parts.length === 3) {
                      seconds = parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
                    }
                    
                    transcriptItems.push({ timestamp, text, seconds });
                  }
                });
                
                return transcriptItems;
              `,
            },
          ],
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`BrowserBase API error: ${response.status}`);
    }

    const data = await response.json();
    return data.result || [];
  } catch (error) {
    console.error("Failed to extract transcript:", error);
    throw error;
  }
}
