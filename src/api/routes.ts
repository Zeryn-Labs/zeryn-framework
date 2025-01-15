import express from 'express';
import { AgentOrchestrator } from '../services/agentOrchestrator';
import { SocialPlatform } from '../types/agent';

const router = express.Router();
const orchestrator = new AgentOrchestrator();

router.post('/agents', async (req, res) => {
  try {
    const { platform, config } = req.body;
    const agentId = await orchestrator.createAgent(platform as SocialPlatform, config);
    res.json({ agentId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/agents/:agentId/analyze', async (req, res) => {
  try {
    const { agentId } = req.params;
    const { content } = req.body;
    const analysis = await orchestrator.analyzeContent(agentId, content);
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/agents/:agentId/generate', async (req, res) => {
  try {
    const { agentId } = req.params;
    const { prompt } = req.body;
    const content = await orchestrator.generateContent(agentId, prompt);
    res.json({ content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/agents/:agentId/engage', async (req, res) => {
  try {
    const { agentId } = req.params;
    const { contentId } = req.body;
    await orchestrator.engageWithContent(agentId, contentId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;