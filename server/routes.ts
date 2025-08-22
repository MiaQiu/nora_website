import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { emailService, type BookingDetails, type RequestDetails } from "./email";

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

  const httpServer = createServer(app);

  return httpServer;
}
