import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-xl p-2.5 inline-block">
              <img
                src="/assets/aistudio/HAPPY_TEETH_DENTAL_CLINIC_b252f782.png"
                alt="Happy Teeth Dental Clinic Multan"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-gray-300 italic">“Your Smile, Our Passion”</p>
            <p className="text-xs text-gray-400">Gentle, sterile, and pain-free treatments under Dr. Muhammad Abubakar Malik (BDS) on Jail Road, Multan.</p>
          </div>
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase text-tealPrimary">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Dental Treatments</Link></li>
              <li><Link to="/book" className="hover:text-white">Book Appointment</Link></li>
              <li><Link to="/admin" className="hover:text-white">Staff Admin Dashboard</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase text-tealPrimary">Clinic Location</h4>
            <p className="text-xs text-gray-400 flex items-start gap-2">
              <MapPin size={16} className="text-tealPrimary shrink-0 mt-0.5" />
              <span>Jail Road, Near Jinnah Town main street, Multan 59070</span>
            </p>
            <p className="text-xs text-gray-400 flex items-center gap-2">
              <Phone size={16} className="text-tealPrimary shrink-0" />
              <a href="tel:+923166793950" className="hover:text-white">+92 316 6793950</a>
            </p>
          </div>
        </div>
        <div className="pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Happy Teeth Dental Clinic Multan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}