import mongoose from 'mongoose';

const demoRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  fundType: {
    type: String,
    required: true,
  },
  fundSize: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'scheduled', 'completed', 'cancelled'],
    default: 'pending',
  },
  calendlyLink: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { versionKey: false });

export const DemoRequest = mongoose.models.DemoRequest || mongoose.model('DemoRequest', demoRequestSchema);