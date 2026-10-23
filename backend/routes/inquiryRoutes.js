import express from 'express';
import Inquiry from '../models/Inquiry.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ success: true, message: 'Inquiry received' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

export default router;