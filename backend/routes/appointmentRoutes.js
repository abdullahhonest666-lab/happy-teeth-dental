import express from 'express';
import Appointment from '../models/Appointment.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const appointments = await Appointment.find(filter).sort({ createdAt: -1 });
    res.status(200).json(appointments);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post('/', async (req, res) => {
  try {
    const appt = new Appointment(req.body);
    const saved = await appt.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.patch('/:id/status', async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.status(200).json(updated);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.delete('/:id', async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

export default router;