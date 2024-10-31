const mongoose = require('mongoose');

const diaryEntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  sentiment: {
    score: Number,
    label: String
  },
  tags: [String],
  aiResponse: String
}, {
  timestamps: true
});

module.exports = mongoose.model('DiaryEntry', diaryEntrySchema);
