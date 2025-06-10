import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function sendLoginEmail(admin) {
  try {
    const currentTime = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata'
    });

    // Email content
    const mailOptions = {
      from: `"IMG Security" <${process.env.SMTP_FROM}>`,
      to: admin.email,
      subject: '🔐 New Login Alert - IMG Admin Panel',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Login Alert - IMG</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <tr>
              <td style="padding: 30px 0; text-align: center; background: #2563eb; border-radius: 8px 8px 0 0;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px;">IMG</h1>
                <p style="color: #ffffff; margin: 10px 0 0; font-size: 16px;">Admin Security Alert</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px;">
                <h2 style="color: #1f2937; margin: 0 0 20px; font-size: 20px;">New Login Detected 🔔</h2>
                <p style="color: #4b5563; margin: 0 0 20px; font-size: 16px;">Hello ${admin.firstName || "Admin"},</p>
                <p style="color: #4b5563; margin: 0 0 20px; font-size: 16px;">We detected a new login to your IMG admin account. Here are the details:</p>
                
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="padding: 10px 0;">
                        <strong style="color: #1f2937;">Time:</strong>
                        <span style="color: #4b5563;">${currentTime}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0;">
                        <strong style="color: #1f2937;">Username:</strong>
                        <span style="color: #4b5563;">${admin.username}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0;">
                        <strong style="color: #1f2937;">Account Type:</strong>
                        <span style="color: #4b5563; text-transform: capitalize;">${admin.role}</span>
                      </td>
                    </tr>
                  </table>
                </div>

                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p style="color: #991b1b; margin: 0; font-size: 14px;">
                    🔒 <strong>Security Tip:</strong> If you did not initiate this login, please:
                    <ol style="color: #991b1b; margin: 10px 0 0; padding-left: 20px;">
                      <li>Change your password immediately</li>
                      <li>Enable two-factor authentication</li>
                      <li>Contact our support team</li>
                    </ol>
                  </p>
                </div>

                <p style="color: #4b5563; margin: 20px 0; font-size: 16px;">If this was you, you can safely ignore this email.</p>
                
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                
                <div style="text-align: center;">
                  <p style="color: #6b7280; margin: 0 0 10px; font-size: 14px;">IMG Global Infotech Pvt Ltd</p>
                  <p style="color: #6b7280; margin: 0; font-size: 12px;">This is an automated message, please do not reply.</p>
                  <div style="margin-top: 20px;">
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL}" style="color: #2563eb; text-decoration: none; font-size: 14px;">Visit IMG</a>
                    <span style="color: #6b7280; margin: 0 10px;">|</span>
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL}/contact" style="color: #2563eb; text-decoration: none; font-size: 14px;">Contact Support</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center; background: #1f2937; border-radius: 0 0 8px 8px;">
                <p style="color: #ffffff; margin: 0; font-size: 12px;">
                  &copy; ${new Date().getFullYear()} IMG. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return { success: true };

  } catch (error) {
    console.error('Send login email error:', error);
    return {
      success: false,
      error: 'Error sending login email'
    };
  }
}

export async function sendWelcomeEmail(admin) {
  try {
    const mailOptions = {
      from: `"IMG Team" <${process.env.SMTP_FROM}>`,
      to: admin.email,
      subject: '🎉 Welcome to IMG Admin Panel!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to IMG</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <tr>
              <td style="padding: 40px 0; text-align: center; background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); border-radius: 8px 8px 0 0;">
                <h1 style="color: #ffffff; margin: 0; font-size: 32px;">Welcome to IMG!</h1>
                <p style="color: #ffffff; margin: 10px 0 0; font-size: 18px;">Stay Update, Stay Ahead</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 40px;">
                <h2 style="color: #1f2937; margin: 0 0 20px; font-size: 24px;">Hello ${admin.firstName || "Admin"} 👋</h2>
                <p style="color: #4b5563; margin: 0 0 20px; font-size: 16px;">Welcome to the IMG admin team! We're excited to have you on board.</p>
                
                <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin: 30px 0;">
                  <h3 style="color: #1f2937; margin: 0 0 15px; font-size: 18px;">Your Account Details:</h3>
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="padding: 10px 0;">
                        <strong style="color: #1f2937;">Username:</strong>
                        <span style="color: #4b5563;">${admin.username}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0;">
                        <strong style="color: #1f2937;">Role:</strong>
                        <span style="color: #4b5563; text-transform: capitalize;">${admin.role}</span>
                      </td>
                    </tr>
                  </table>
                </div>

                <div style="background: #ecfdf5; padding: 25px; border-radius: 8px; margin: 30px 0;">
                  <h3 style="color: #065f46; margin: 0 0 15px; font-size: 18px;">Quick Start Guide:</h3>
                  <ul style="color: #047857; margin: 0; padding-left: 20px;">
                    <li style="margin-bottom: 10px;">Update your profile and add a profile picture</li>
                    <li style="margin-bottom: 10px;">Review our admin guidelines and policies</li>
                    <li style="margin-bottom: 10px;">Enable two-factor authentication for extra security</li>
                    <li style="margin-bottom: 0;">Explore the admin dashboard features</li>
                  </ul>
                </div>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="${process.env.NEXT_PUBLIC_BASE_URL}/admin/dashboard" 
                     style="display: inline-block; padding: 12px 24px; background: #2563eb; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    Access Dashboard
                  </a>
                </div>

                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                
                <div style="text-align: center;">
                  <p style="color: #6b7280; margin: 0 0 10px; font-size: 14px;">Need help getting started?</p>
                  <div style="margin-top: 15px;">
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL}/admin/guide" style="color: #2563eb; text-decoration: none; font-size: 14px;">Read Admin Guide</a>
                    <span style="color: #6b7280; margin: 0 10px;">|</span>
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL}/contact" style="color: #2563eb; text-decoration: none; font-size: 14px;">Contact Support</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center; background: #1f2937; border-radius: 0 0 8px 8px;">
                <p style="color: #ffffff; margin: 0; font-size: 12px;">
                  &copy; ${new Date().getFullYear()} IMG. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);
    return { success: true };

  } catch (error) {
    console.error('Send welcome email error:', error);
    return {
      success: false,
      error: 'Error sending welcome email'
    };
  }
}

export async function sendPasswordResetEmail(admin, resetToken) {
  try {
    // Token expires in 1 hour
    const expiryTime = new Date(Date.now() + 3600000).toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata'
    });

    const mailOptions = {
      from: `"IMG Security" <${process.env.SMTP_FROM}>`,
      to: admin.email,
      subject: '🔑 Password Reset Request - IMG Admin Panel',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Password Reset - IMG</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <tr>
              <td style="padding: 30px 0; text-align: center; background: #dc2626; border-radius: 8px 8px 0 0;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Password Reset Request</h1>
                <p style="color: #ffffff; margin: 10px 0 0; font-size: 16px;">IMG Admin Panel</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px;">
                <h2 style="color: #1f2937; margin: 0 0 20px; font-size: 20px;">Hello ${admin.firstName || "Admin"},</h2>
                <p style="color: #4b5563; margin: 0 0 20px; font-size: 16px;">We received a request to reset your password. Click the button below to create a new password:</p>
                
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}" 
                     style="display: inline-block; padding: 12px 24px; background: #dc2626; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    Reset Password
                  </a>
                </div>

                <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p style="color: #9a3412; margin: 0; font-size: 14px;">
                    ⚠️ <strong>Important:</strong>
                    <ul style="margin: 10px 0 0;">
                      <li>This link will expire on ${expiryTime}</li>
                      <li>If you didn't request this reset, please ignore this email</li>
                      <li>For security, please update your password regularly</li>
                    </ul>
                  </p>
                </div>

                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #1f2937; margin: 0 0 15px; font-size: 16px;">Password Security Tips:</h3>
                  <ul style="color: #4b5563; margin: 0; padding-left: 20px;">
                    <li>Use at least 8 characters</li>
                    <li>Include numbers and special characters</li>
                    <li>Don't reuse passwords from other accounts</li>
                    <li>Enable two-factor authentication for extra security</li>
                  </ul>
                </div>

                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                
                <div style="text-align: center;">
                  <p style="color: #6b7280; margin: 0 0 10px; font-size: 14px;">Need help? Contact our support team</p>
                  <div style="margin-top: 15px;">
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL}/contact" style="color: #2563eb; text-decoration: none; font-size: 14px;">Contact Support</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center; background: #1f2937; border-radius: 0 0 8px 8px;">
                <p style="color: #ffffff; margin: 0; font-size: 12px;">
                  &copy; ${new Date().getFullYear()} IMG. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);
    return { success: true };

  } catch (error) {
    console.error('Send password reset email error:', error);
    return {
      success: false,
      error: 'Error sending password reset email'
    };
  }
}

export async function sendPasswordResetConfirmationEmail(admin) {
  try {
    const currentTime = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata'
    });

    const mailOptions = {
      from: `"IMG Security" <${process.env.SMTP_FROM}>`,
      to: admin.email,
      subject: '🔐 Password Changed Successfully - IMG Admin Panel',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Password Changed - IMG</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <tr>
              <td style="padding: 30px 0; text-align: center; background: #059669; border-radius: 8px 8px 0 0;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Password Changed Successfully</h1>
                <p style="color: #ffffff; margin: 10px 0 0; font-size: 16px;">IMG Admin Panel</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px;">
                <h2 style="color: #1f2937; margin: 0 0 20px; font-size: 20px;">Hello ${admin.firstName || "Admin"},</h2>
                <p style="color: #4b5563; margin: 0 0 20px; font-size: 16px;">Your password has been successfully changed.</p>
                
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #1f2937; margin: 0 0 15px; font-size: 16px;">Change Details:</h3>
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="padding: 10px 0;">
                        <strong style="color: #1f2937;">Time:</strong>
                        <span style="color: #4b5563;">${currentTime}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0;">
                        <strong style="color: #1f2937;">Account:</strong>
                        <span style="color: #4b5563;">${admin.email}</span>
                      </td>
                    </tr>
                  </table>
                </div>

                <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p style="color: #9a3412; margin: 0; font-size: 14px;">
                    ⚠️ <strong>Important:</strong>
                    <br>If you did not change your password, please:
                    <ol style="margin: 10px 0 0;">
                      <li>Login to your account immediately</li>
                      <li>Change your password</li>
                      <li>Enable two-factor authentication</li>
                      <li>Contact our support team</li>
                    </ol>
                  </p>
                </div>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="${process.env.NEXT_PUBLIC_BASE_URL}/admin/login" 
                     style="display: inline-block; padding: 12px 24px; background: #059669; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    Login to Your Account
                  </a>
                </div>

                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                
                <div style="text-align: center;">
                  <p style="color: #6b7280; margin: 0 0 10px; font-size: 14px;">Need help? Contact our support team</p>
                  <div style="margin-top: 15px;">
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL}/contact" style="color: #2563eb; text-decoration: none; font-size: 14px;">Contact Support</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center; background: #1f2937; border-radius: 0 0 8px 8px;">
                <p style="color: #ffffff; margin: 0; font-size: 12px;">
                  &copy; ${new Date().getFullYear()} IMG. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);
    return { success: true };

  } catch (error) {
    console.error('Send password reset confirmation email error:', error);
    return {
      success: false,
      error: 'Error sending password reset confirmation email'
    };
  }
} 