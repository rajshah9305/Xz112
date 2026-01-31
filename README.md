# 🚀 Open Genspark (Groq Edition)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Groq](https://img.shields.io/badge/AI-Groq-orange?style=for-the-badge)](https://groq.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Open Genspark** is a high-performance, open-source AI assistant platform powered by **Groq Llama 3.3 70B**. It seamlessly integrates document analysis, presentation generation, and real-time AI interaction into a beautiful, responsive interface.

---

## ✨ Key Features

### 🤖 Intelligent Super Agent
*   **Powered by Groq**: Experience lightning-fast responses with Llama 3.3 70B.
*   **Multi-Modal Capabilities**: From general chat to complex task automation.
*   **Context-Aware**: Remembers your conversation and adapts to your needs.

### 📊 Seamless Document Integration
*   **Google Sheets & Docs**: Connect your documents by simply pasting a URL.
*   **Real-time Analysis**: Ask questions about your data or summarize long documents instantly.
*   **Interactive Sidebar**: View and interact with your documents without leaving the chat.

### 🎨 AI Presentation Engine
*   **Instant Slides**: Generate professional, structured presentations from a single prompt.
*   **Live Preview**: Browse through your slides with a beautiful, interactive previewer.
*   **Export to PPTX**: Download your creations as native PowerPoint files for further editing.

### 🛠️ Advanced Toolset
*   **Web Search**: Real-time information retrieval.
*   **Image & Video Generation**: Creative assets at your fingertips.
*   **Composio Integration**: Powerful tool-calling capabilities for real-world tasks.

---

## 🚀 Deployment & Getting Started

### Vercel Deployment Configuration
The project is pre-configured for Vercel. Use these settings in the Vercel Dashboard:
- **Framework Preset**: Next.js
- **Install Command**: `npm install --legacy-peer-deps`
- **Build Command**: `npm run build`

### Environment Variables
Ensure these are set in your deployment environment:
- `GROQ_API_KEY`: Your Groq API key.
- `COMPOSIO_API_KEY`: Your Composio API key.
- `NEXT_PUBLIC_APP_URL`: Your deployment URL (e.g., `https://your-app.vercel.app`).

---

## 💻 Local Development

### Prerequisites
*   **Node.js 18+**
*   **Groq API Key** ([Get it here](https://console.groq.com/keys))
*   **Composio API Key** ([Get it here](https://composio.dev/signup))

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rajshah9305/Xz112.git
    cd Xz112
    ```

2.  **Install dependencies:**
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Configure Environment:**
    Create a `.env.local` file in the root directory:
    ```env
    GROQ_API_KEY=your_groq_api_key
    COMPOSIO_API_KEY=your_composio_api_key
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    ```

4.  **Verify Setup:**
    Run the verification script to ensure your environment is correctly configured:
    ```bash
    node scripts/verify-setup.js
    ```

5.  **Launch Development Server:**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:3000` to start exploring!

---

## 🏗️ Architecture

### Tech Stack
*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **AI SDK**: [Vercel AI SDK](https://sdk.vercel.ai/)
*   **LLM**: [Groq Llama 3.3 70B](https://groq.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Integrations**: [Composio](https://composio.dev/)

### API Endpoints
| Endpoint | Description |
| :--- | :--- |
| `/api/superagent` | Core AI assistant logic |
| `/api/generate-slides` | AI-powered slide content generation |
| `/api/convert-to-ppt` | PPTX file generation engine |
| `/api/google-sheets-agent` | Spreadsheet analysis & interaction |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ using Groq and Next.js
</p>
