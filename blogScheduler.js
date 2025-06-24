// blogScheduler.js
// This script will run independently to publish scheduled blogs at the right time.
// To use: `node blogScheduler.js` (run with pm2/forever for production)

import mongoose from 'mongoose';
import Blog from './app/models/Blog.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

console.log('TEST ENV:', process.env.MONGODB_URI);
const MONGODB_URI = process.env.MONGODB_URI || process.env.NEXT_PUBLIC_MONGODB_URI;
console.log('MONGODB_URI:', MONGODB_URI); // Debug: check if env variable is loaded

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI);
  }
}

async function publishScheduledBlogs() {
  await connectDB();
  const now = new Date();
  // Find blogs scheduled to be published
  const blogs = await Blog.find({
    status: 4,
    published_date_time: { $lte: now }
  });
  for (const blog of blogs) {
    blog.status = 2; // Change status to published
    await blog.save();
    console.log(`Published blog: ${blog.title} (${blog._id})`);
  }
}

// Run every hour
setInterval(publishScheduledBlogs, 60 * 60 * 1000);

// Run once on start
publishScheduledBlogs();

// Keep process alive
process.stdin.resume();
