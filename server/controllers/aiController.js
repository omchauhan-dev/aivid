const OpenAI = require('openai');

const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;
const baseURL = process.env.OPENROUTER_API_KEY ? 'https://openrouter.ai/api/v1' : undefined;
const defaultModel = process.env.OPENROUTER_API_KEY ? 'openai/gpt-3.5-turbo' : 'gpt-3.5-turbo';
const model = process.env.AI_MODEL || defaultModel;

const openai = new OpenAI({
  apiKey: apiKey || 'dummy-key',
  baseURL: baseURL,
});

exports.generateHook = async (req, res) => {
  const { topic, style } = req.body;

  if (!apiKey) {
      return res.json({
          hooks: [
              `Stop doing ${topic} wrong! (Mock data)`,
              `The secret to ${topic} revealed (Mock data)`,
              `Why 99% fail at ${topic} (Mock data)`
          ]
      });
  }

  try {
    const prompt = `Generate 3 viral hooks for a social media reel about "${topic}". The style should be ${style}. 
    Focus on curiosity, shock, or questions. Keep them short (under 3 seconds).`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: model,
    });

    const content = completion.choices[0].message.content;
    const hooks = content.split('\n').filter(line => line.trim() !== '');

    res.json({ hooks });
  } catch (error) {
    console.error('Error generating hook:', error);
    res.status(500).json({ error: 'Failed to generate hooks' });
  }
};

exports.generateScript = async (req, res) => {
  const { topic, duration, language } = req.body; // duration: '15s', '30s', '60s'; language: 'Hinglish', 'Hindi', 'English'

  if (!apiKey) {
      return res.json({
          script: `[0-3s] Hook: Are you struggling with ${topic}? (Mock)\n[3-12s] Value: Here is how you fix it...\n[12-15s] CTA: Follow for more!`
      });
  }

  try {
    const prompt = `Write a script for a ${duration} reel about "${topic}" in ${language}.
    Follow this structure:
    1. Hook (0-3s)
    2. Value/Story (Body)
    3. CTA (Call to Action)
    Make it engaging and suitable for social media.`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: model,
    });

    res.json({ script: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error generating script:', error);
    res.status(500).json({ error: 'Failed to generate script' });
  }
};

exports.generateCaption = async (req, res) => {
  const { topic, emotion } = req.body;

  if (!apiKey) {
      return res.json({
          caption: `Loving this new way to handle ${topic}! 😍 #${topic} #viral (Mock)`,
          hashtags: [`#${topic}`, '#trending', '#viral']
      });
  }

  try {
    const prompt = `Write an emotion-based caption for a post about "${topic}". The emotion should be ${emotion}.
    Also provide a list of 5-10 relevant trending and niche hashtags.
    Format: Caption first, then hashtags on a new line.`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: model,
    });

    const content = completion.choices[0].message.content;
    res.json({ result: content });
  } catch (error) {
    console.error('Error generating caption:', error);
    res.status(500).json({ error: 'Failed to generate caption' });
  }
};

exports.generateCta = async (req, res) => {
  const { topic, goal } = req.body; // goal: 'Follow', 'Save', 'Comment', 'Sales'

  if (!apiKey) {
      return res.json({
          ctas: [
              `Follow for more ${topic} tips! (Mock)`,
              `Save this for later! (Mock)`,
              `Comment "YES" if you agree! (Mock)`
          ]
      });
  }

  try {
    const prompt = `Generate 3 effective Call to Actions (CTAs) for a post about "${topic}". The goal is "${goal}".
    Keep them punchy and persuasive.`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: model,
    });

    const content = completion.choices[0].message.content;
    const ctas = content.split('\n').filter(line => line.trim() !== '');

    res.json({ ctas });
  } catch (error) {
    console.error('Error generating CTA:', error);
    res.status(500).json({ error: 'Failed to generate CTAs' });
  }
};
