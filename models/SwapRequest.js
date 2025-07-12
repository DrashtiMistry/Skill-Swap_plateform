import mongoose from 'mongoose';

const SwapRequestSchema = new mongoose.Schema({
  fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  toUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  offeredSkill: String,
  wantedSkill: String,
  status: { type: String, enum: ['pending', 'accepted', 'rejected', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('SwapRequest', SwapRequestSchema);
