import User from '../models/User.js';

export const getProfile = async (req, res) => {
  const user = await User.findById(req.params.id).select('-passwordHash');
  if (!user) return res.status(404).json({ msg: 'User not found' });
  res.json(user);
};

export const updateProfile = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.json({ msg: 'Profile updated' });
};

export const browseUsers = async (req, res) => {
  const { skill } = req.query;
  const query = skill ? { skillsOffered: skill, isPublic: true, isBanned: false } : { isPublic: true, isBanned: false };
  const users = await User.find(query).select('-passwordHash');
  res.json(users);
};

export const togglePublic = async (req, res) => {
  const user = await User.findById(req.params.id);
  user.isPublic = !user.isPublic;
  await user.save();
  res.json({ msg: `Profile is now ${user.isPublic ? 'public' : 'private'}` });
};
