import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-8">
      <h1 className="font-heading font-extrabold text-3xl text-center">Contact & Location</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface p-6 rounded-2xl border space-y-4">
          <p className="font-bold">Happy Teeth Dental Clinic Multan</p>
          <p className="text-sm text-softgray">📍 Jail Road, Near Jinnah Town main street, Jinnah Town, Multan 59070</p>
          <p className="text-sm text-softgray">📞 Phone: <a href="tel:+923166793950" className="text-tealPrimary font-semibold">+92 316 6793950</a></p>
          <p className="text-sm text-softgray">⏰ Mon – Sat: 11:00 AM – 10:00 PM</p>
        </div>
        <div className="rounded-2xl overflow-hidden border min-h-[300px]">
          <iframe title="Map" className="w-full h-full min-h-[300px] border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13788.134262145326!2d71.44293!3d30.19827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b33fd17b075e7%3A0x6b7724a87ad14d3!2sJail%20Rd%2C%20Multan%2C%20Punjab!5e0!3m2!1sen!2sPK!4v1710000000000!5m2!1sen!2sPK"></iframe>
        </div>
      </div>
    </div>
  );
}