import express from 'express';
import mongoose from 'mongoose';
import Appointment from '../models/Appointment.js';

const router = express.Router();

// In-memory appointments fallback when MongoDB is not connected
const memoryAppointments = [
  {
    _id: 'sample-appt-1',
    patientName: 'Ali Raza',
    phone: '+92 300 1234567',
    service: 'Root Canal Treatment',
    appointmentDate: '2026-10-30',
    timeSlot: 'Evening (06:00 PM - 10:00 PM)',
    notes: 'Experiencing tooth pain on upper left molar',
    status: 'Confirmed',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
  },
  {
    _id: 'sample-appt-2',
    patientName: 'Ayesha Bibi',
    phone: '+92 312 9876543',
    service: 'Teeth Scaling & Polishing',
    appointmentDate: '2026-10-31',
    timeSlot: 'Morning (11:00 AM - 02:00 PM)',
    notes: 'Routine 6-month cleaning',
    status: 'Pending',
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString()
  },
  {
    _id: 'sample-appt-3',
    patientName: 'Muhammad Usman',
    phone: '+92 333 4567890',
    service: 'Dental Fillings',
    appointmentDate: '2026-11-01',
    timeSlot: 'Evening (06:00 PM - 10:00 PM)',
    notes: 'Composite filling replacement',
    status: 'Completed',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
  }
];

router.get('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const { status } = req.query;
      const filter = status ? { status } : {};
      const appointments = await Appointment.find(filter).sort({ createdAt: -1 });
      return res.status(200).json(appointments);
    }
  } catch (err) {
    console.warn('[AI Studio] MongoDB query error, using in-memory appointments:', err.message);
  }
  const { status } = req.query;
  const filtered = status ? memoryAppointments.filter(a => a.status === status) : memoryAppointments;
  return res.status(200).json(filtered);
});

router.post('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const appt = new Appointment(req.body);
      const saved = await appt.save();
      return res.status(201).json({ success: true, data: saved });
    }
  } catch (err) {
    console.warn('[AI Studio] MongoDB save error, using in-memory appointments:', err.message);
  }

  const newAppt = {
    _id: 'mock-' + Date.now(),
    patientName: req.body.patientName || 'Anonymous Patient',
    phone: req.body.phone || '',
    service: req.body.service || 'General Dental Consultation',
    appointmentDate: req.body.appointmentDate || new Date().toISOString().split('T')[0],
    timeSlot: req.body.timeSlot || 'Evening (06:00 PM - 10:00 PM)',
    notes: req.body.notes || '',
    status: req.body.status || 'Pending',
    createdAt: new Date().toISOString()
  };
  memoryAppointments.unshift(newAppt);
  return res.status(201).json({ success: true, data: newAppt });
});

router.patch('/:id/status', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const updated = await Appointment.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
      return res.status(200).json(updated);
    }
  } catch (err) {
    console.warn('[AI Studio] MongoDB patch error, using in-memory appointments:', err.message);
  }

  const item = memoryAppointments.find(a => a._id === req.params.id);
  if (item) {
    item.status = req.body.status;
  }
  return res.status(200).json(item || { _id: req.params.id, status: req.body.status });
});

router.delete('/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      await Appointment.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: 'Appointment deleted successfully' });
    }
  } catch (err) {
    console.warn('[AI Studio] MongoDB delete error, using in-memory appointments:', err.message);
  }

  const index = memoryAppointments.findIndex(a => a._id === req.params.id);
  if (index !== -1) {
    memoryAppointments.splice(index, 1);
  }
  return res.status(200).json({ message: 'Appointment deleted successfully' });
});

export default router;