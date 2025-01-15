# Zeryn AI Agents Framework

Zeryn is a powerful TypeScript-based framework that provides AI-powered agents for managing and automating content across multiple social media platforms.

## Features

- 🤖 **Platform-Specific AI Agents** - Specialized agents for Instagram, Twitter, and TikTok
- 🔄 **Unified API** - Consistent interface across all platforms
- 🎯 **Platform-Optimized Content** - AI-generated content tailored for each platform
- 📊 **Content Analysis** - AI-powered analysis of social media content
- 🔌 **Extensible Architecture** - Easy to add support for new platforms
- 🛡️ **Type Safety** - Built with TypeScript for robust development

## Installation

```bash
npm install
```

## Quick Start

1. Start the server:
```bash
npm start
```

2. Create a new agent:
```bash
curl -X POST http://localhost:3000/api/agents \
  -H "Content-Type: application/json" \
  -d '{
    "platform": "instagram",
    "config": {
      "apiKey": "your-api-key",
      "modelName": "gpt-4",
      "maxTokens": 1000,
      "temperature": 0.7
    }
  }'
```

## API Reference

### Create Agent
```http
POST /api/agents
```
Creates a new AI agent for a specific platform.

### Analyze Content
```http
POST /api/agents/:agentId/analyze
```
Analyzes content using platform-specific AI capabilities.

### Generate Content
```http
POST /api/agents/:agentId/generate
```
Generates platform-optimized content using AI.

### Engage with Content
```http
POST /api/agents/:agentId/engage
```
Engages with content on the specified platform.

## Agent Capabilities

Each platform agent comes with specific capabilities:

### Instagram Agent
- Post Creation
- Engagement
- Analytics

### Twitter Agent
- Post Creation
- Trend Analysis
- Engagement

### TikTok Agent
- Post Creation
- Trend Analysis
- Content Moderation

## Architecture

The framework is built on a modular architecture:

- `BaseAgent`: Abstract base class defining common agent functionality
- `AgentFactory`: Creates platform-specific agent instances
- `AgentOrchestrator`: Manages multiple agents and their operations
- Platform-specific agents: Implement platform-specific behaviors

## Development

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Run tests:
```bash
npm test
```

## Configuration

Agents can be configured with the following options:

```typescript
interface AgentConfig {
  apiKey: string;        // API key for AI service
  modelName: string;     // AI model to use
  maxTokens: number;     // Maximum tokens for AI responses
  temperature: number;   // AI response randomness (0-1)
  platformSpecific: Record<string, any>; // Platform-specific settings
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - feel free to use this project for your own purposes.

## Support

For support, please open an issue in the GitHub repository.