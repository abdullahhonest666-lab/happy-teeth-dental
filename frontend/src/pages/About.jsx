import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase text-tealPrimary">About Our Practice</span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal mt-2">Gentle Dental Excellence in Multan</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 text-softgray text-sm leading-relaxed">
          <p>Conveniently located on Jail Road, Near Jinnah Town main street in Multan, <strong>Happy Teeth Dental Clinic</strong> is designed to provide a comfortable, non-intimidating dental experience.</p>
          <p>We combine advanced rotary endodontics, cosmetic dental procedures, and rigorous sterilization to protect your smile and health.</p>
          <Link to="/book" className="inline-block mt-4 bg-coral text-white px-6 py-3 rounded-xl font-semibold text-xs shadow-coral">Schedule a Visit</Link>
        </div>
        <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" alt="About Clinic" className="rounded-3xl shadow-card h-80 w-full object-cover" />
      </div>
    </div>
  );
}