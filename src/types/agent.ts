export interface Agent {
  id: string;
  platform: SocialPlatform;
  capabilities: AgentCapability[];
  config: AgentConfig;
}

export enum SocialPlatform {
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter',
  TIKTOK = 'tiktok'
}

export enum AgentCapability {
  POST_CREATION = 'post_creation',
  ENGAGEMENT = 'engagement',
  ANALYTICS = 'analytics',
  TREND_ANALYSIS = 'trend_analysis',
  CONTENT_MODERATION = 'content_moderation'
}

export interface AgentConfig {
  apiKey: string;
  modelName: string;
  maxTokens: number;
  temperature: number;
  platformSpecific: Record<string, any>;
}