# Email Notifications Setup

This guide explains how to set up email notifications for form submissions in the AskFellow application.

## Environment Variables

Create a `.env` file in the project root with the following variables:

```bash
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=qiuy0002@gmail.com
SMTP_PASS=ydnhuuwkbisolbih
SMTP_FROM=qiuy0002@gmail.com
NOTIFICATION_EMAIL=qiuy0002@ntu.edu.sg

# Other environment variables
PORT=3000
```

## Email Provider Setup

### Gmail Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password as `SMTP_PASS`

### Other Email Providers

#### Outlook/Hotmail
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

#### Yahoo
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

#### Custom SMTP
```bash
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
```

## Environment Variables Explained

- `SMTP_HOST`: Your email provider's SMTP server
- `SMTP_PORT`: SMTP port (usually 587 for TLS or 465 for SSL)
- `SMTP_USER`: Your email address for authentication
- `SMTP_PASS`: Your email password or app password
- `SMTP_FROM`: The "from" address for outgoing emails (usually same as SMTP_USER)
- `NOTIFICATION_EMAIL`: Where form submissions will be sent (can be different from SMTP_USER)

## Features

### Book Session Form
- Sends detailed booking request with client information
- Includes preferred specialist and category
- Lists all available time slots
- Professional HTML email formatting

### General Request Form
- Sends simplified request information
- Includes client contact details
- Lists available time slots
- Clean email formatting

## Testing

To test the email functionality:

1. Set up your environment variables
2. Start the development server: `npm run dev`
3. Fill out a form on the website
4. Check the notification email address for the submission

## Troubleshooting

### Common Issues

1. **Authentication Failed**
   - Make sure you're using an app password for Gmail
   - Check that 2FA is enabled for Gmail
   - Verify SMTP credentials

2. **Connection Refused**
   - Check SMTP_HOST and SMTP_PORT
   - Ensure firewall isn't blocking the connection
   - Try different ports (587, 465, 25)

3. **Emails Not Received**
   - Check spam/junk folder
   - Verify NOTIFICATION_EMAIL address
   - Check email provider logs

### Debug Mode

To enable debug logging for email issues, add this to your environment:

```bash
DEBUG=nodemailer:*
```

## Security Notes

- Never commit your `.env` file to version control
- Use app passwords instead of regular passwords
- Consider using environment-specific email addresses
- Monitor email usage to prevent abuse 