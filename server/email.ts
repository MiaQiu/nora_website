import nodemailer from 'nodemailer';

export interface BookingDetails {
  name: string;
  phone: string;
  email: string;
  category?: string;
  specialist?: string;
  details: string;
  timeSlots: Array<{
    date: string;
    startTime: string;
    duration: string;
  }>;
}

export interface RequestDetails {
  name: string;
  phone: string;
  email: string;
  details: string;
  timeSlots: Array<{
    date: string;
    startTime: string;
    duration: string;
  }>;
}

export interface BetaWaitlistDetails {
  name: string;
  email: string;
  phone: string;
  numberOfChildren: string;
  children: Array<{
    age: string;
  }>;
  interestedPackage?: string;
  topics?: string;
}

export interface ConsultationDetails {
  name: string;
  email: string;
  phone: string;
  numberOfChildren: string;
  children: Array<{
    age: string;
  }>;
  familyNeeds: string[];
  additionalDetails?: string;
}

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Configure your email provider here
    // For development, you can use a service like Gmail, Outlook, or a dedicated email service
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // your email password or app password
      },
    });
  }

  private formatTimeSlots(timeSlots: Array<{ date: string; startTime: string; duration: string }>): string {
    const durations = [
      { value: "10", label: "10 minutes (Free consultation)" },
      { value: "30", label: "30 minutes" },
      { value: "60", label: "1 hour" }
    ];

    return timeSlots.map((slot, index) => {
      const date = new Date(slot.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      const duration = durations.find(d => d.value === slot.duration)?.label || `${slot.duration} minutes`;
      return `${index + 1}. ${date} at ${slot.startTime} (${duration})`;
    }).join('\n');
  }

  async sendBookingNotification(bookingDetails: BookingDetails): Promise<void> {
    const { name, phone, email, category, specialist, details, timeSlots } = bookingDetails;

    const subject = `New Session Booking Request - ${name}`;
    const htmlContent = `
      <h2>New Session Booking Request</h2>
      
      <h3>Client Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Email:</strong> ${email}</li>
        ${category ? `<li><strong>Category:</strong> ${category}</li>` : ''}
        ${specialist ? `<li><strong>Preferred Specialist:</strong> ${specialist}</li>` : ''}
      </ul>

      <h3>Session Details:</h3>
      <p><strong>What they want to discuss:</strong></p>
      <p>${details.replace(/\n/g, '<br>')}</p>

      <h3>Available Time Slots:</h3>
      <pre>${this.formatTimeSlots(timeSlots)}</pre>

      <hr>
      <p><em>This booking request was submitted through the AskFellow website.</em></p>
    `;

    const textContent = `
New Session Booking Request

Client Information:
- Name: ${name}
- Phone: ${phone}
- Email: ${email}
${category ? `- Category: ${category}` : ''}
${specialist ? `- Preferred Specialist: ${specialist}` : ''}

Session Details:
What they want to discuss:
${details}

Available Time Slots:
${this.formatTimeSlots(timeSlots)}

---
This booking request was submitted through the AskFellow website.
    `;

    await this.transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      subject,
      text: textContent,
      html: htmlContent,
    });
  }

  async sendRequestNotification(requestDetails: RequestDetails): Promise<void> {
    const { name, phone, email, details, timeSlots } = requestDetails;

    const subject = `New General Request - ${name}`;
    const htmlContent = `
      <h2>New General Request</h2>
      
      <h3>Client Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>

      <h3>Request Details:</h3>
      <p><strong>What they want to discuss:</strong></p>
      <p>${details.replace(/\n/g, '<br>')}</p>

      <h3>Available Time Slots:</h3>
      <pre>${this.formatTimeSlots(timeSlots)}</pre>

      <hr>
      <p><em>This request was submitted through the AskFellow website.</em></p>
    `;

    const textContent = `
New General Request

Client Information:
- Name: ${name}
- Phone: ${phone}
- Email: ${email}

Request Details:
What they want to discuss:
${details}

Available Time Slots:
${this.formatTimeSlots(timeSlots)}

---
This request was submitted through the AskFellow website.
    `;

    await this.transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      subject,
      text: textContent,
      html: htmlContent,
    });
  }

  async sendBetaWaitlistNotification(waitlistDetails: BetaWaitlistDetails): Promise<void> {
    const { name, email, phone, numberOfChildren, children, interestedPackage, topics } = waitlistDetails;

    const subject = `New Beta Waitlist Signup - ${name}`;

    const childrenList = children.map((child, index) =>
      `<li>Child ${index + 1}: ${child.age}</li>`
    ).join('\n');

    const childrenTextList = children.map((child, index) =>
      `  ${index + 1}. ${child.age}`
    ).join('\n');

    const htmlContent = `
      <h2>New Beta Waitlist Signup</h2>

      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>

      <h3>Family Information:</h3>
      <ul>
        <li><strong>Number of Children:</strong> ${numberOfChildren}</li>
      </ul>

      <h3>Children Ages:</h3>
      <ul>
        ${childrenList}
      </ul>

      ${interestedPackage ? `
      <h3>Interested Package/Program:</h3>
      <p><strong>${interestedPackage}</strong></p>
      ` : ''}

      ${topics ? `
      <h3>Topics of Interest:</h3>
      <p>${topics.replace(/\n/g, '<br>')}</p>
      ` : ''}

      <hr>
      <p><em>This beta waitlist signup was submitted through the Nora website.</em></p>
    `;

    const textContent = `
New Beta Waitlist Signup

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Family Information:
- Number of Children: ${numberOfChildren}

Children Ages:
${childrenTextList}

${interestedPackage ? `Interested Package/Program:\n${interestedPackage}\n\n` : ''}${topics ? `Topics of Interest:\n${topics}\n` : ''}
---
This beta waitlist signup was submitted through the Nora website.
    `;

    await this.transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      subject,
      text: textContent,
      html: htmlContent,
    });
  }

  async sendConsultationNotification(consultationDetails: ConsultationDetails): Promise<void> {
    const { name, email, phone, numberOfChildren, children, familyNeeds, additionalDetails } = consultationDetails;

    const subject = `New Consultation Request - ${name}`;

    const childrenList = children.map((child, index) =>
      `<li>Child ${index + 1}: ${child.age}</li>`
    ).join('\n');

    const childrenTextList = children.map((child, index) =>
      `  ${index + 1}. ${child.age}`
    ).join('\n');

    const needsList = familyNeeds.map(need => `<li>${need}</li>`).join('\n');
    const needsTextList = familyNeeds.map((need, index) => `  ${index + 1}. ${need}`).join('\n');

    const htmlContent = `
      <h2>New Consultation Request</h2>

      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>

      <h3>Family Information:</h3>
      <ul>
        <li><strong>Number of Children:</strong> ${numberOfChildren}</li>
      </ul>

      <h3>Children Ages:</h3>
      <ul>
        ${childrenList}
      </ul>

      <h3>What Can We Help With:</h3>
      <ul>
        ${needsList}
      </ul>

      ${additionalDetails ? `
      <h3>Additional Details:</h3>
      <p>${additionalDetails.replace(/\n/g, '<br>')}</p>
      ` : ''}

      <hr>
      <p><em>This consultation request was submitted through the Nora website.</em></p>
    `;

    const textContent = `
New Consultation Request

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Family Information:
- Number of Children: ${numberOfChildren}

Children Ages:
${childrenTextList}

What Can We Help With:
${needsTextList}

${additionalDetails ? `Additional Details:\n${additionalDetails}\n` : ''}
---
This consultation request was submitted through the Nora website.
    `;

    await this.transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      subject,
      text: textContent,
      html: htmlContent,
    });
  }
}

export const emailService = new EmailService(); 