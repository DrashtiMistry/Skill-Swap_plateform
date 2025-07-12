import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import connectDB from '../config/db.js';
import User from '../models/User.js';

dotenv.config();
connectDB();

const seedAdmin = async () => {
  const exists = await User.findOne({ email: 'admin@skillswap.com' });
  if (exists) return console.log('Admin already exists');

  const hashed = await bcrypt.hash('Admin@123', 10);

  const admin = new User({
    name: 'Admin',
    email: 'admin@skillswap.com',
    passwordHash: hashed,
    role: 'admin',
    isPublic: true
  });

  await admin.save();
  console.log('Admin seeded');
  process.exit();
};

seedAdmin();
