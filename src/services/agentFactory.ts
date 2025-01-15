import { SocialPlatform, AgentConfig } from '../types/agent';
import { InstagramAgent } from '../agents/instagramAgent';
import { TwitterAgent } from '../agents/twitterAgent';
import { TikTokAgent } from '../agents/tiktokAgent';
import { BaseAgent } from '../agents/baseAgent';

export class AgentFactory {
  static createAgent(platform: SocialPlatform, config: AgentConfig): BaseAgent {
    const id = crypto.randomUUID();
    
    switch (platform) {
      case SocialPlatform.INSTAGRAM:
        return new InstagramAgent(id, config);
      case SocialPlatform.TWITTER:
        return new TwitterAgent(id, config);
      case SocialPlatform.TIKTOK:
        return new TikTokAgent(id, config);
      default:
        throw new Error(`Unsupported platform: ${platform}`);
    }
  }
}