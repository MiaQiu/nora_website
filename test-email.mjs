// Quick test script to verify email configuration
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('SMTP_HOST:', process.env.SMTP_HOST);
  console.log('SMTP_PORT:', process.env.SMTP_PORT);
  console.log('SMTP_USER:', process.env.SMTP_USER);
  console.log('SMTP_FROM:', process.env.SMTP_FROM);
  console.log('NOTIFICATION_EMAIL:', process.env.NOTIFICATION_EMAIL);
  console.log('SMTP_PASS set:', !!process.env.SMTP_PASS);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    console.log('\nVerifying SMTP connection...');
    await transporter.verify();
    console.log('✓ SMTP connection verified successfully');

    console.log('\nSending test email...');
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      subject: 'Test Email - Nora Beta Waitlist',
      text: 'This is a test email to verify the email configuration is working correctly.',
      html: '<h2>Test Email</h2><p>This is a test email to verify the email configuration is working correctly.</p>',
    });

    console.log('✓ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('\nPlease check the inbox:', process.env.NOTIFICATION_EMAIL);
  } catch (error) {
    console.error('✗ Error:', error.message);
    console.error('\nFull error:', error);
  }
}

testEmail();
