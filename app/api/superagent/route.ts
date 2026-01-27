// app/api/superagent/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Composio } from "@composio/core";
import { VercelProvider } from "@composio/vercel";
import { generateText, generateObject } from 'ai';
import { groq } from "@ai-sdk/groq";
import { z } from 'zod';

const composio = new Composio({
    apiKey: process.env.COMPOSIO_API_KEY,
    provider: new VercelProvider()
});

// ... (keep all the slide generation functions and schemas the same)

export async function POST(req: NextRequest) {
    try {
        const { prompt, selectedTool, conversationHistory, userId, sheetUrl, docUrl } = await req.json();
        
        // Remove authentication check - generate userId if not provided
        const effectiveUserId = userId || Math.floor(1000000000 + Math.random() * 9000000000).toString();

        // ... (rest of the code remains the same, just use effectiveUserId instead of userId)

    } catch (error) {
        console.error('Connection error:', error);
        return NextResponse.json(
            { error: 'Failed to process your request. Please try again.' },
            { status: 500 }
        );
    }
}
