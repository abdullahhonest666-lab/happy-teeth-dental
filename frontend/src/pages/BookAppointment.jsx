import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function BookAppointment() {
  const query = new URLSearchParams(useLocation().search);
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    service: query.get('service') || 'General Dental Consultation',
    appointmentDate: new Date().toISOString().split('T')[0],
    timeSlot: 'Evening (06:00 PM - 10:00 PM)',
    notes: ''
  });
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = import.meta.env.VITE_API_URL || '';
      await axios.post(`${api}/api/appointments`, formData);
    } catch (err) {
      console.warn("Backend not active, sending directly to WhatsApp");
    }

    const text = `*New Dental Appointment*%0A👤 *Patient:* ${encodeURIComponent(formData.patientName)}%0A📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A🦷 *Service:* ${encodeURIComponent(formData.service)}%0A📅 *Date:* ${encodeURIComponent(formData.appointmentDate)}%0A⏰ *Slot:* ${encodeURIComponent(formData.timeSlot)}`;
    try {
      window.open(`https://wa.me/923166793950?text=${text}`, '_blank');
    } catch {
      // Ignored if window.open is blocked by iframe policy
    }
    setDone(true);
  };

  const whatsappLink = `https://wa.me/923166793950?text=*New Dental Appointment*%0A👤 *Patient:* ${encodeURIComponent(formData.patientName)}%0A📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A🦷 *Service:* ${encodeURIComponent(formData.service)}%0A📅 *Date:* ${encodeURIComponent(formData.appointmentDate)}%0A⏰ *Slot:* ${encodeURIComponent(formData.timeSlot)}`;

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-card">
        <h1 className="font-heading font-bold text-2xl text-center mb-6">Book an Appointment</h1>
        {done ? (
          <div className="text-center space-y-4 py-6">
            <p className="text-emerald-600 font-bold">Appointment details submitted successfully!</p>
            <p className="text-xs text-softgray">Your appointment has been registered with clinic staff.</p>
            <div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-xl text-xs shadow hover:opacity-95"
              >
                Chat on WhatsApp (+92 316 6793950)
              </a>
            </div>
            <div>
              <button onClick={() => setDone(false)} className="text-xs text-tealPrimary underline">Book another appointment</button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1">Patient Name *</label>
              <input required type="text" className="w-full bg-surface border rounded-xl p-2.5 text-sm" value={formData.patientName} onChange={e => setFormData({...formData, patientName: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">WhatsApp / Phone *</label>
              <input required type="tel" className="w-full bg-surface border rounded-xl p-2.5 text-sm" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Service</label>
              <select className="w-full bg-surface border rounded-xl p-2.5 text-sm" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                <option value="General Dental Consultation">General Dental Consultation</option>
                <option value="Root Canal Treatment">Root Canal Treatment</option>
                <option value="Teeth Scaling & Polishing">Teeth Scaling & Polishing</option>
                <option value="Dental Fillings">Dental Fillings</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
                <option value="Braces & Aligners">Braces & Aligners</option>
                <option value="Crowns & Bridges">Crowns & Bridges</option>
                <option value="Tooth Extraction">Tooth Extraction</option>
                <option value="Gum Treatment">Gum Treatment</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1">Date</label>
                <input required type="date" className="w-full bg-surface border rounded-xl p-2.5 text-sm" value={formData.appointmentDate} onChange={e => setFormData({...formData, appointmentDate: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Time Slot</label>
                <select className="w-full bg-surface border rounded-xl p-2.5 text-sm" value={formData.timeSlot} onChange={e => setFormData({...formData, timeSlot: e.target.value})}>
                  <option value="Morning (11:00 AM - 02:00 PM)">Morning (11am-2pm)</option>
                  <option value="Evening (06:00 PM - 10:00 PM)">Evening (6pm-10pm)</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full bg-coral text-white font-semibold py-3 rounded-xl shadow-coral text-sm mt-2">
              Confirm & Open WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
}