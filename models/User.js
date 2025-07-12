import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  location: String,
  profilePhotoURL: String,
  skillsOffered: [String],
  skillsWanted: [String],
  availability: String,
  isPublic: { type: Boolean, default: true },
  isBanned: { type: Boolean, default: false },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

export default mongoose.model('User', UserSchema);
