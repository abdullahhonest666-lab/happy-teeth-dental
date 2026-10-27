import express from 'express';
import mongoose from 'mongoose';
import Inquiry from '../models/Inquiry.js';

const router = express.Router();

const memoryInquiries = [
  {
    _id: 'inq-sample-1',
    name: 'Hamza Khan',
    phone: '+92 301 7654321',
    service: 'Braces & Aligners',
    message: 'What is the consultation fee and initial installment for clear aligners?',
    isRead: false,
    createdAt: new Date().toISOString()
  }
];

router.post('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const inquiry = new Inquiry(req.body);
      await inquiry.save();
      return res.status(201).json({ success: true, message: 'Inquiry received' });
    }
  } catch (err) {
    console.warn('[AI Studio] MongoDB inquiry save error, using in-memory store:', err.message);
  }

  memoryInquiries.unshift({
    _id: 'inq-' + Date.now(),
    name: req.body.name || 'Anonymous',
    phone: req.body.phone || '',
    service: req.body.service || 'General Consultation',
    message: req.body.message || '',
    isRead: false,
    createdAt: new Date().toISOString()
  });
  return res.status(201).json({ success: true, message: 'Inquiry received' });
});

router.get('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const inquiries = await Inquiry.find().sort({ createdAt: -1 });
      return res.status(200).json(inquiries);
    }
  } catch (err) {
    console.warn('[AI Studio] MongoDB inquiry get error, using in-memory store:', err.message);
  }
  return res.status(200).json(memoryInquiries);
});

export default router;