# Open Genspark (Groq Edition)

Open Source Genspark powered by **Groq AI** that can generate content, create presentations, analyze Google Sheets/Docs, and provide intelligent responses. This application combines chat-based AI interaction with document integration and presentation generation capabilities.

## Features

- 🤖 **AI-Powered Assistant**: Chat with Super Agent for various tasks and content generation
- 📊 **Google Sheets Integration**: Connect and analyze Google Sheets directly in the interface
- 📄 **Google Docs Integration**: Connect and work with Google Docs seamlessly
- 🎨 **Presentation Creator**: Generate professional PowerPoint presentations with AI
- 📱 **Responsive Interface**: Works on desktop and mobile devices
- 🔄 **Real-time Chat**: Interactive chat interface with message history
- 📥 **Easy Download**: Export presentations as native PowerPoint (.pptx) files
- ⚡ **Smart URL Detection**: Automatically detects and connects Google Sheets/Docs URLs
- 🎯 **Multiple Tools**: General assistant, presentation creator, web search, image generation, and more

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- A Groq API key

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd genspark
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

4. **Get your Groq API key:**
   - Go to [Groq Console](https://console.groq.com/keys)
   - Create a new API key
   - Copy the key and paste it in your `.env.local` file:
     ```
     GROQ_API_KEY=your_actual_api_key_here
     ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to see the application.

## How to Use

### Chat with Super Agent

1. **Start a conversation** - Type any question or request in the chat interface
2. **Use example prompts** - Click on suggested prompts to get started quickly
3. **Get intelligent responses** - The AI will analyze your request and provide helpful responses

### Connect Google Sheets/Docs

1. **Paste a URL** - Simply paste a Google Sheets or Google Docs URL in the chat
2. **Automatic detection** - The app will automatically detect the URL and open a sidebar
3. **Interactive sidebar** - View and interact with your documents directly in the interface
4. **Ask questions** - Ask the AI about your spreadsheet data or document content

### Create Presentations

1. **Request a presentation** - Ask the AI to create slides about any topic
2. **Automatic generation** - The AI will generate structured slide content
3. **Preview slides** - Browse through the generated slides in the chat interface
4. **Download as PPT** - Click "Download PPT" to get your .pptx file

## Technology Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **AI Integration**: Vercel AI SDK with **Groq (Llama 3.3 70B)**
- **UI Components**: Custom components with Framer Motion animations
- **Icons**: React Icons (Feather Icons)
- **Styling**: Tailwind CSS with custom animations and effects
- **Document Integration**: Google Sheets/Docs API integration via Composio

## Architecture

### Core Components

- **SuperAgent**: Main chat interface with AI assistant
- **PPTCreator**: Dedicated presentation creation interface
- **GoogleSheetsAgent**: Specialized Google Sheets integration
- **Navigation**: Tab-based navigation between different features

### API Endpoints

- `/api/superagent`: Main AI assistant endpoint (Powered by Groq)
- `/api/generate-slides`: Slide content generation (Powered by Groq)
- `/api/convert-to-ppt`: PowerPoint file creation
- `/api/google-sheets-agent`: Google Sheets analysis (Powered by Groq)
- `/api/connection/google-sheet`: Google Sheets connection
- `/api/connection/google-docs`: Google Docs connection

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This application requires an active internet connection to generate content using the Groq API and to connect to Google services.
