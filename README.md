# Fortune-Final: AI-Powered Fortune Application

## Executive Summary

Fortune-Final is a privacy-focused web application that generates personalized daily fortunes through AI-powered insights. Built with Next.js 15 and leveraging Google's Gemini 1.5 Flash API, the application prioritizes user privacy by utilizing session-only storage and stateless processing.

## Technical Architecture

### Core Technology Stack

- **Framework**: Next.js 15.3.3 (App Router, Edge Runtime)
- **UI Framework**: React 19 with TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with ShadCN/Radix UI primitives
- **AI Integration**: Google Gemini 1.5 Flash via Google AI SDK
- **Animation**: MagicUI micro-components for enhanced UX

### System Architecture

The application follows a stateless, privacy-first architecture:

```
User Input → Session Storage → Edge API → Google Gemini → Response
     ↓              ↓            ↓         ↓        ↓
  Browser Only   Temporary    No Logging  External  Display Only
```

## Environment Variables

To run this application, you'll need to set up the following environment variables:

```bash
# Google AI API Key (get from https://makersuite.google.com/app/apikey)
GOOGLE_AI_API_KEY=your_google_ai_api_key_here

# Optional: OpenAI API Key (if you want to switch back)
OPENAI_API_KEY=your_openai_api_key_here
```

## Switching AI Providers

The application is designed to easily switch between AI providers. Currently configured for Google Gemini 1.5 Flash (fastest and most cost-effective), but can be switched to OpenAI or other providers.

### Google Gemini API (Current)

- **Model**: `gemini-1.5-flash`
- **Speed**: Very fast
- **Cost**: Most cost-effective
- **Features**: JSON response support, multilingual

### OpenAI API (Alternative)

- **Model**: `gpt-4o-mini`
- **Speed**: Fast
- **Cost**: Competitive
- **Features**: Excellent JSON formatting

The switch is as simple as changing the API route implementation - all other code remains the same!
