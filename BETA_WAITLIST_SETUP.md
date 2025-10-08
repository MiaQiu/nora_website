# Beta Waitlist Email Notification Setup

## Overview
The beta waitlist form (`/beta-waitlist`) now sends email notifications when users sign up.

## How It Works

### 1. Form Submission Flow
When a user fills out and submits the beta waitlist form:
1. Form data is sent to `/api/beta-waitlist` endpoint
2. Server validates required fields (name, email, phone, number of children, children ages)
3. Email notification is sent to the configured notification email address
4. Success page is displayed to the user

### 2. Email Configuration
Email settings are configured in the `.env` file:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=qiuy0002@gmail.com
SMTP_PASS=ydnhuuwkbisolbih
SMTP_FROM=qiuy0002@gmail.com
NOTIFICATION_EMAIL=qiuy0002@ntu.edu.sg
```

### 3. Email Content
When someone joins the waitlist, an email is sent with:
- Contact Information (Name, Email, Phone)
- Family Information (Number of Children)
- Children Ages (list of all children with their ages)
- Topics of Interest (optional - what they want to discuss with experts)

### 4. Email Example

**Subject:** New Beta Waitlist Signup - [User Name]

**Content:**
```
New Beta Waitlist Signup

Contact Information:
- Name: John Doe
- Email: john@example.com
- Phone: 9123 4567

Family Information:
- Number of Children: 2

Children Ages:
  1. 3 years old
  2. 6 months

Topics of Interest:
Sleep training, behavior management

---
This beta waitlist signup was submitted through the Nora website.
```

## Testing

### To test the email functionality:

1. Make sure the server is running:
   ```bash
   npm run dev
   ```

2. Navigate to `/beta-waitlist` in your browser

3. Fill out the form with test data

4. Submit the form

5. Check the `NOTIFICATION_EMAIL` inbox for the notification email

## Troubleshooting

### Emails not sending?

1. **Check SMTP credentials**: Make sure the Gmail account credentials in `.env` are correct

2. **Gmail App Password**: If using Gmail, you need to use an "App Password" instead of your regular password:
   - Go to Google Account Settings → Security
   - Enable 2-Step Verification
   - Generate an App Password
   - Use that password in `SMTP_PASS`

3. **Check server logs**: Look for error messages in the terminal where the server is running

4. **Email provider settings**: Some email providers require additional settings or have rate limits

## Customization

### To change the notification recipient:
Update `NOTIFICATION_EMAIL` in `.env` file

### To add multiple recipients:
Modify `server/email.ts` line 249:
```typescript
to: 'email1@example.com, email2@example.com, email3@example.com',
```

### To customize email template:
Edit the `sendBetaWaitlistNotification` method in `server/email.ts`

## Next Steps

Consider adding:
1. Database storage of waitlist signups
2. Automatic confirmation email to the user
3. Integration with email marketing platforms (Mailchimp, SendGrid, etc.)
4. Analytics tracking
