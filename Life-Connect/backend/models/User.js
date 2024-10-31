const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: String,
  phone: String,
  address: String,
  emergencyContacts: [{
    name: String,
    phone: String,
    relationship: String
  }],
  depressionScreeningResult: {
    score: Number,
    date: Date
  },
  preferences: {
    theme: String,
    notifications: Boolean
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  lastActive: Date
}, {
  timestamps: true
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);