import { BaseAgent } from '../agents/baseAgent';
import { AgentFactory } from './agentFactory';
import { SocialPlatform, AgentConfig } from '../types/agent';

export class AgentOrchestrator {
  private agents: Map<string, BaseAgent> = new Map();

  async createAgent(platform: SocialPlatform, config: AgentConfig): Promise<string> {
    const agent = AgentFactory.createAgent(platform, config);
    await agent.initialize();
    this.agents.set(agent.id, agent);
    return agent.id;
  }

  async analyzeContent(agentId: string, content: string): Promise<any> {
    const agent = this.agents.get(agentId);
    if (!agent) throw new Error('Agent not found');
    return agent.analyze(content);
  }

  async generateContent(agentId: string, prompt: string): Promise<string> {
    const agent = this.agents.get(agentId);
    if (!agent) throw new Error('Agent not found');
    return agent.createContent(prompt);
  }

  async engageWithContent(agentId: string, contentId: string): Promise<void> {
    const agent = this.agents.get(agentId);
    if (!agent) throw new Error('Agent not found');
    await agent.engage(contentId);
  }
}