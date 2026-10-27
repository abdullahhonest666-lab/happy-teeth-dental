import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Calendar, Menu, X, Sparkles, MapPin, Clock } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-tealPrimary font-semibold border-b-2 border-tealPrimary pb-1"
      : "text-charcoal/80 hover:text-tealPrimary font-medium transition-colors pb-1";

  return (
    <>
      <div className="bg-tealPrimary text-white text-xs md:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-mint" /> Jail Road, Jinnah Town, Multan
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock size={14} className="text-mint" /> Mon – Sat: 11:00 AM – 10:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+923166793950" className="flex items-center gap-1.5 font-semibold hover:text-mint">
              <Phone size={14} /> +92 316 6793950
            </a>
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-bold">★ 4.9 Rated</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/assets/aistudio/HAPPY_TEETH_DENTAL_CLINIC_b252f782.png"
                alt="Happy Teeth Dental Clinic Multan"
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-7 text-sm">
              <NavLink to="/" className={activeClass}>Home</NavLink>
              <NavLink to="/about" className={activeClass}>About Clinic</NavLink>
              <NavLink to="/services" className={activeClass}>Services</NavLink>
              <NavLink to="/doctor" className={activeClass}>Dr. Abubakar Malik</NavLink>
              <NavLink to="/contact" className={activeClass}>Contact & Map</NavLink>
              <NavLink to="/admin" className={activeClass}>Staff Portal</NavLink>
            </nav>

            <div className="hidden sm:flex items-center gap-3">
              <Link to="/book" className="inline-flex items-center gap-2 bg-coral hover:bg-coralHover text-white font-medium px-5 py-2.5 rounded-xl shadow-coral text-sm">
                <Calendar size={16} /> <span>Book Appointment</span>
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <button onClick={() => setOpen(!open)} className="p-2 text-charcoal">
                {open ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            <Link to="/" onClick={() => setOpen(false)} className="block py-2">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="block py-2">About Us</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="block py-2">Services</Link>
            <Link to="/doctor" onClick={() => setOpen(false)} className="block py-2">Doctor Profile</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block py-2">Contact</Link>
            <Link to="/admin" onClick={() => setOpen(false)} className="block py-2">Staff Portal</Link>
            <Link to="/book" onClick={() => setOpen(false)} className="block py-2.5 text-center bg-coral text-white rounded-xl font-semibold">Book Appointment</Link>
          </div>
        )}
      </header>
    </>
  );
}