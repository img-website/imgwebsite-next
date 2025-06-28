import NotificationToken from '@/app/models/NotificationToken';
import Newsletter from '@/app/models/Newsletter';
import { sendPushNotification } from '@/app/lib/notifications';
import { queueEmail } from '@/app/lib/mail';

export async function notifyBlog(blog) {
  const tokens = await NotificationToken.find().lean();
  if (tokens.length) {
    const tokenList = tokens.map(t => t.token);
    await sendPushNotification(tokenList, {
      title: blog.title,
      body: blog.short_description || 'New blog published',
      data: { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${blog.slug}` }
    });
  }

  const newsletters = await Newsletter.find().lean();
  if (newsletters.length) {
    const recipients = newsletters.map(n => n.email);
    const mailOptions = {
      from: `\"IMG Blogs\" <${process.env.SMTP_FROM}>`,
      bcc: recipients,
      subject: `New Blog: ${blog.title}`,
      html: `<p>${blog.short_description || ''}</p><p><a href="${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${blog.slug}">Read more</a></p>`
    };
    queueEmail(mailOptions);
  }
}
