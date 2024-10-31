const { OpenAI } = require('openai');
const logger = require('../utils/logger');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

exports.analyzeSentiment = async (text) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a mental health professional analyzing text for emotional content and potential crisis signals."
        },
        {
          role: "user",
          content: text
        }
      ],
      temperature: 0.3
    });

    const analysis = response.choices[0].message.content;
    
    return {
      score: calculateSentimentScore(analysis),
      label: determineSentimentLabel(analysis)
    };
  } catch (error) {
    logger.error('OpenAI API error:', error);
    return {
      score: 0,
      label: 'neutral'
    };
  }
};
