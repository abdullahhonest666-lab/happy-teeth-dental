import React, { useState } from 'react';
import axios from 'axios';
import { MapPin, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Consultation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const api = import.meta.env.VITE_API_URL || '';
      await axios.post(`${api}/api/inquiries`, formData);
      setSubmitted(true);
    } catch (err) {
      console.warn("Failed to submit inquiry:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal">Contact & Location</h1>
        <p className="text-sm text-softgray mt-2">Visit Happy Teeth Dental Clinic in Multan or send us a direct message</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="bg-surface p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-5">
            <h2 className="font-heading font-bold text-xl text-charcoal">Clinic Details</h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-tealPrimary shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="font-semibold text-charcoal">Address</div>
                  <div className="text-softgray">Jail Road, Near Jinnah Town main street, Jinnah Town, Multan 59070</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-tealPrimary shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="font-semibold text-charcoal">Phone & WhatsApp</div>
                  <a href="tel:+923166793950" className="text-tealPrimary font-semibold hover:underline">+92 316 6793950</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-tealPrimary shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="font-semibold text-charcoal">Clinic Hours</div>
                  <div className="text-softgray">Monday – Saturday: 11:00 AM – 10:00 PM</div>
                  <div className="text-xs text-gray-400">Sunday: By Emergency Appointment Only</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-heading font-bold text-lg text-charcoal mb-4">Send Us a Direct Message</h3>
            {submitted ? (
              <div className="text-center py-6 space-y-2">
                <CheckCircle2 size={36} className="text-emerald-500 mx-auto" />
                <p className="font-bold text-charcoal text-sm">Thank you for your message!</p>
                <p className="text-xs text-softgray">Dr. Malik's team will contact you shortly.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', service: 'General Consultation', message: '' }); }}
                  className="text-xs text-tealPrimary underline font-semibold mt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-charcoal">Your Name *</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-surface border rounded-xl p-2.5 text-xs text-charcoal"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-charcoal">Phone / WhatsApp *</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-surface border rounded-xl p-2.5 text-xs text-charcoal"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-charcoal">Interested Service</label>
                  <select
                    className="w-full bg-surface border rounded-xl p-2.5 text-xs text-charcoal"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="General Consultation">General Consultation</option>
                    <option value="Root Canal Treatment">Root Canal Treatment</option>
                    <option value="Teeth Scaling & Polishing">Teeth Scaling & Polishing</option>
                    <option value="Braces & Aligners">Braces & Aligners</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-charcoal">Your Question or Note *</label>
                  <textarea
                    required
                    rows={3}
                    className="w-full bg-surface border rounded-xl p-2.5 text-xs text-charcoal"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-tealPrimary hover:bg-tealDark text-white font-semibold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-teal transition-colors"
                >
                  <Send size={14} />
                  <span>{loading ? 'Sending...' : 'Send Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border shadow-sm min-h-[500px] h-full">
          <iframe
            title="Happy Teeth Clinic Multan Location Map"
            className="w-full h-full min-h-[500px] border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13788.134262145326!2d71.44293!3d30.19827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b33fd17b075e7%3A0x6b7724a87ad14d3!2sJail%20Rd%2C%20Multan%2C%20Punjab!5e0!3m2!1sen!2sPK!4v1710000000000!5m2!1sen!2sPK"
          />
        </div>
      </div>
    </div>
  );
}