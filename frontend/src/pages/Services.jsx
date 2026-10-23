import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  'Root Canal Treatment',
  'Teeth Scaling & Polishing',
  'Dental Fillings',
  'Teeth Whitening',
  'Braces & Aligners',
  'Crowns & Bridges',
  'Tooth Extraction',
  'Gum Treatment'
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="font-heading font-extrabold text-3xl text-charcoal">Complete Dental Services in Multan</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-card flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-tealPrimary">0{i + 1}</span>
              <h3 className="font-heading font-bold text-lg mt-2 mb-2">{item}</h3>
              <p className="text-xs text-softgray mb-4">Painless and high-standard clinical procedure tailored for you.</p>
            </div>
            <Link to={`/book?service=${encodeURIComponent(item)}`} className="text-xs font-bold text-coral hover:underline">
              Book this service →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}