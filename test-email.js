import { emailService } from './server/email.js';

// Test booking notification
const testBookingData = {
  name: "John Doe",
  phone: "9123-4567",
  email: "john.doe@example.com",
  category: "Parenting Skills & Child Development",
  specialist: "Dr. Priya Sharma",
  details: "I need help with my 3-year-old's bedtime routine. He refuses to go to sleep and throws tantrums every night.",
  timeSlots: [
    {
      date: "2025-01-20",
      startTime: "19:00",
      duration: "30"
    },
    {
      date: "2025-01-21",
      startTime: "20:00",
      duration: "60"
    }
  ]
};

// Test request notification
const testRequestData = {
  name: "Jane Smith",
  phone: "9876-5432",
  email: "jane.smith@example.com",
  details: "I'm struggling with returning to work after maternity leave and need guidance on balancing work and childcare.",
  timeSlots: [
    {
      date: "2025-01-22",
      startTime: "14:00",
      duration: "10"
    }
  ]
};

async function testEmails() {
  console.log('Testing email notifications...');
  
  try {
    console.log('Sending booking notification...');
    await emailService.sendBookingNotification(testBookingData);
    console.log('✅ Booking notification sent successfully!');
    
    console.log('Sending request notification...');
    await emailService.sendRequestNotification(testRequestData);
    console.log('✅ Request notification sent successfully!');
    
    console.log('🎉 All tests passed! Check your notification email.');
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    console.log('\nTroubleshooting tips:');
    console.log('1. Make sure you have set up your .env file with correct SMTP settings');
    console.log('2. Check that you are using an app password for Gmail');
    console.log('3. Verify your email credentials are correct');
    console.log('4. Check the EMAIL_SETUP.md file for detailed setup instructions');
  }
}

testEmails(); 
 