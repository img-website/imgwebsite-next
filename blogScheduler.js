// blogScheduler.js
// This script will run independently to publish scheduled blogs at the right time.
// To use: `node blogScheduler.js` (run with pm2/forever for production)

import dotenv from 'dotenv';

// Load environment variables before importing modules that depend on them
dotenv.config({ path: '.env.local' });

const mongoose = (await import('mongoose')).default;
const { default: Blog } = await import('./app/models/Blog.js');
const { sendNotification } = await import('./app/actions/pwa.js');

const MONGODB_URI = process.env.MONGODB_URI || process.env.NEXT_PUBLIC_MONGODB_URI;
const notify = process.env.NOTIFY_AFTER_PUBLISH || false;

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
    if (notify) {
      // Send notification if enabled
      const icon = blog.banner
        ? (blog.banner.startsWith('http')
            ? blog.banner
            : `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/blogs/${blog.banner}`)
        : undefined;
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.slug}`;
      const actions = [
        { action: 'view', title: 'View' },
        { action: 'dismiss', title: 'Dismiss' }
      ];
      await sendNotification({
        body: blog.short_description,
        title: blog.title,
        icon,
        url,
        actions,
      });
    }
    console.log(`Published blog: ${blog.title} (${blog._id})`);
  }
}

// Run every hour
setInterval(publishScheduledBlogs, 60 * 60 * 1000);

// Run once on start
publishScheduledBlogs();

// Keep process alive
process.stdin.resume();
