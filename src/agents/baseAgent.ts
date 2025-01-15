import { Agent, AgentCapability, AgentConfig, SocialPlatform } from '../types/agent';

export abstract class BaseAgent implements Agent {
  id: string;
  platform: SocialPlatform;
  capabilities: AgentCapability[];
  config: AgentConfig;

  constructor(id: string, platform: SocialPlatform, config: AgentConfig) {
    this.id = id;
    this.platform = platform;
    this.config = config;
    this.capabilities = [];
  }

  abstract initialize(): Promise<void>;
  abstract analyze(content: string): Promise<any>;
  abstract createContent(prompt: string): Promise<string>;
  abstract engage(contentId: string): Promise<void>;
}