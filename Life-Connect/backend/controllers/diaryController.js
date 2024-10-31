const DiaryEntry = require('../models/DiaryEntry');
const { analyzeSentiment } = require('../services/openaiService');
const { catchAsync } = require('../utils/errorHandlers');

exports.createEntry = catchAsync(async (req, res) => {
  const { content } = req.body;
  const userId = req.user.id;

  const sentiment = await analyzeSentiment(content);
  
  const entry = await DiaryEntry.create({
    userId,
    content,
    sentiment
  });

  // Check for concerning content
  if (sentiment.score < -0.7) {
    // Trigger crisis protocol
    await require('../services/crisisService').assessRisk(userId, content);
  }

  res.status(201).json(entry);
});

exports.getEntries = catchAsync(async (req, res) => {
  const entries = await DiaryEntry.find({ userId: req.user.id })
    .sort({ createdAt: -1 });

  res.json(entries);
});
