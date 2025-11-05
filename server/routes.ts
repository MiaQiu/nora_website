import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { emailService, type BookingDetails, type RequestDetails, type BetaWaitlistDetails, type ConsultationDetails } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Booking form submission endpoint
  app.post('/api/book-session', async (req, res) => {
    try {
      const bookingData: BookingDetails = req.body;
      
      // Validate required fields
      if (!bookingData.name || !bookingData.phone || !bookingData.email || 
          !bookingData.details || !bookingData.timeSlots || bookingData.timeSlots.length === 0) {
        return res.status(400).json({ 
          success: false, 
          message: 'Missing required fields' 
        });
      }

      // Send email notification
      await emailService.sendBookingNotification(bookingData);
      
      res.json({ 
        success: true, 
        message: 'Booking request submitted successfully' 
      });
    } catch (error) {
      console.error('Error processing booking request:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  });

  // General request form submission endpoint
  app.post('/api/submit-request', async (req, res) => {
    try {
      const requestData: RequestDetails = req.body;

      // Validate required fields
      if (!requestData.name || !requestData.phone || !requestData.email ||
          !requestData.details || !requestData.timeSlots || requestData.timeSlots.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields'
        });
      }

      // Send email notification
      await emailService.sendRequestNotification(requestData);

      res.json({
        success: true,
        message: 'Request submitted successfully'
      });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  });

  // Beta waitlist form submission endpoint
  app.post('/api/beta-waitlist', async (req, res) => {
    try {
      const waitlistData: BetaWaitlistDetails = req.body;

      // Validate required fields
      if (!waitlistData.name || !waitlistData.email || !waitlistData.phone ||
          !waitlistData.numberOfChildren || !waitlistData.children || waitlistData.children.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields'
        });
      }

      // Validate that all children have ages
      const hasEmptyAges = waitlistData.children.some(child => !child.age || child.age.trim() === '');
      if (hasEmptyAges) {
        return res.status(400).json({
          success: false,
          message: 'Please provide age for all children'
        });
      }

      // Send email notification
      await emailService.sendBetaWaitlistNotification(waitlistData);

      res.json({
        success: true,
        message: 'Beta waitlist signup submitted successfully'
      });
    } catch (error) {
      console.error('Error processing beta waitlist signup:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error. Please try again later.'
      });
    }
  });

  // Consultation form submission endpoint
  app.post('/api/consultation', async (req, res) => {
    try {
      const consultationData: ConsultationDetails = req.body;

      // Validate required fields
      if (!consultationData.name || !consultationData.email || !consultationData.phone ||
          !consultationData.numberOfChildren || !consultationData.children || consultationData.children.length === 0 ||
          !consultationData.familyNeeds || consultationData.familyNeeds.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields'
        });
      }

      // Validate that all children have ages
      const hasEmptyAges = consultationData.children.some(child => !child.age || child.age.trim() === '');
      if (hasEmptyAges) {
        return res.status(400).json({
          success: false,
          message: 'Please provide age for all children'
        });
      }

      // Send email notification
      await emailService.sendConsultationNotification(consultationData);

      res.json({
        success: true,
        message: 'Consultation request submitted successfully'
      });
    } catch (error) {
      console.error('Error processing consultation request:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error. Please try again later.'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
