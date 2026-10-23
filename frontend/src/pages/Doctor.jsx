import React from 'react';
import { Link } from 'react-router-dom';

export default function Doctor() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-card border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5">
          <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" alt="Dr Muhammad Abubakar Malik BDS" className="rounded-2xl object-cover h-80 w-full" />
        </div>
        <div className="md:col-span-7 space-y-4">
          <span className="bg-tealLight text-tealPrimary text-xs font-bold px-3 py-1 rounded-full uppercase">Lead Dental Surgeon</span>
          <h1 className="font-heading font-extrabold text-3xl text-charcoal">Dr. Muhammad Abubakar Malik</h1>
          <p className="text-tealPrimary font-semibold text-sm">B.D.S. — Dental Surgeon & Aesthetic Consultant</p>
          <p className="text-softgray text-xs leading-relaxed">Dedicated to gentle and pain-free dentistry in Multan with extensive expertise in endodontics and cosmetic tooth restorations.</p>
          <Link to="/book" className="inline-block bg-coral text-white text-xs font-semibold px-6 py-3 rounded-xl shadow-coral">Book Consultation with Dr. Malik</Link>
        </div>
      </div>
    </div>
  );
}