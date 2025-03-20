# 📝 YouTube Transcript Extractor ▶️

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## 🚀 Overview

A clean, user-friendly web application that automatically extracts and displays timestamped transcripts from any YouTube video URL. This tool makes it easy to access, navigate, and export video transcripts with just a few clicks.

## ✨ Features

- 🔍 **Simple URL Input**: Just paste any YouTube URL and click "Extract Transcript"
- 📺 **Two-Panel Layout**: Watch the video while reading the transcript side-by-side
- ⏱️ **Clickable Timestamps**: Jump to specific parts of the video by clicking on transcript timestamps
- 💾 **Export Options**: Copy to clipboard or download as a text file
- 🔄 **Loading Indicators**: Clear feedback during the extraction process
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🌐 **No API Key Required**: Works directly in the browser

## 🖥️ Demo

Check out the live demo: [YouTube Transcript Extractor](https://admiring-colden9-adgcf.dev-3.tempolabs.ai)

## 🛠️ Technologies Used

- ⚛️ React + TypeScript
- 🎨 Tailwind CSS
- 🧩 ShadCN UI Components
- 🔄 Vite for fast development

## 📋 How It Works

1. Enter a valid YouTube URL in the input field
2. Click the "Extract Transcript" button
3. Wait for the transcript to be processed
4. View the video and transcript side-by-side
5. Click on timestamps to navigate the video
6. Use the copy or download buttons to export the transcript

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/youtube-transcript-extractor.git

# Navigate to the project directory
cd youtube-transcript-extractor

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🚀 Deployment

This project can be easily deployed to Vercel, Netlify, or any other static site hosting service.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## 🧩 Project Structure

```
src/
├── components/         # UI Components
│   ├── LoadingIndicator.tsx
│   ├── ProcessingInfo.tsx
│   ├── TranscriptDisplay.tsx
│   ├── TranscriptExtractor.tsx
│   ├── TranscriptSummary.tsx
│   ├── UrlInputForm.tsx
│   └── VideoPlayer.tsx
├── lib/               # Utility functions
│   ├── browserbase.ts
│   ├── stagehand.ts
│   └── utils.ts
├── types/             # TypeScript type definitions
│   └── transcript.ts
└── App.tsx            # Main application component
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)
- [YouTube Player API](https://developers.google.com/youtube/iframe_api_reference)

## 📞 Contact

Have questions or suggestions? Open an issue or reach out to the maintainer:

- GitHub: https://github.com/ahmed86-star
- Website: https://ahmed-dev1.com/

---

⭐ Star this repo if you found it useful! ⭐
