const fs = require('fs');
const path = require('path');

function makeFile(relPath, content) {
  const fullPath = path.join(__dirname, relPath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
  console.log(`✓ Created: ${relPath}`);
}

// 1. App.jsx
makeFile('src/App.jsx', `
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctor from './pages/Doctor';
import BookAppointment from './pages/BookAppointment';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-charcoal">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
`);

// 2. Navbar.jsx
makeFile('src/components/Navbar.jsx', `
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
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-tealPrimary flex items-center justify-center text-white shadow-teal">
                <Sparkles size={24} className="text-mint" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-xl md:text-2xl text-tealPrimary">Happy Teeth</span>
                  <span className="bg-mintSoft text-tealDark font-semibold text-[10px] px-2 py-0.5 rounded-full uppercase">Multan</span>
                </div>
                <p className="text-[11px] text-softgray tracking-wider uppercase font-medium">Dental Clinic & Aesthetic Care</p>
              </div>
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
`);

// 3. Footer.jsx
makeFile('src/components/Footer.jsx', `
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-heading font-extrabold text-xl text-white">Happy Teeth Multan</h3>
            <p className="text-sm text-gray-300 italic">“Your Smile, Our Passion”</p>
            <p className="text-xs text-gray-400">Gentle, sterile, and pain-free treatments under Dr. Muhammad Abubakar Malik (BDS).</p>
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
`);

// 4. FloatingWhatsApp.jsx
makeFile('src/components/FloatingWhatsApp.jsx', `
import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const url = "https://wa.me/923166793950?text=" + encodeURIComponent("Hello Happy Teeth Dental Clinic Multan, I would like to book a dental consultation.");
  return (
    <a href={url} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
      <MessageCircle size={30} />
      <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full"></span>
    </a>
  );
}
`);

// 5. Home.jsx
makeFile('src/pages/Home.jsx', `
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, HeartPulse, ShieldCheck, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <section className="pt-12 pb-20 bg-gradient-to-b from-tealLight/50 via-white to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="bg-white px-4 py-1.5 rounded-full border border-tealPrimary/20 text-xs font-semibold text-tealPrimary">
              ★ 4.9 Patient Rated Clinic in Multan
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-charcoal leading-tight">
              Happy Teeth Dental Clinic <span className="text-tealPrimary">Multan</span>
            </h1>
            <p className="text-xl font-heading font-semibold text-softgray">“Your Smile, Our Passion”</p>
            <p className="text-softgray text-base max-w-xl">
              Painless Dentistry • Beautiful Smiles • Trusted Care. Led by Dr. Muhammad Abubakar Malik (BDS) on Jail Road, Jinnah Town, Multan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/book" className="bg-coral hover:bg-coralHover text-white font-semibold px-8 py-3.5 rounded-xl shadow-coral flex items-center justify-center gap-2">
                <Calendar size={18} /> Book Appointment
              </Link>
              <a href="tel:+923166793950" className="border-2 border-tealPrimary text-tealPrimary hover:bg-tealLight font-semibold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2">
                <Phone size={18} /> Call Clinic
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80" alt="Happy Teeth Clinic Multan" className="rounded-3xl shadow-2xl border-4 border-white object-cover h-[400px] w-full" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-surface rounded-2xl border border-gray-100">
            <HeartPulse className="text-tealPrimary mb-3" size={28} />
            <h3 className="font-heading font-bold text-lg mb-2">Painless Dentistry</h3>
            <p className="text-xs text-softgray leading-relaxed">Modern gentle numbing protocols ensure zero discomfort during dental procedures.</p>
          </div>
          <div className="p-6 bg-surface rounded-2xl border border-gray-100">
            <ShieldCheck className="text-tealPrimary mb-3" size={28} />
            <h3 className="font-heading font-bold text-lg mb-2">100% Sterilized</h3>
            <p className="text-xs text-softgray leading-relaxed">Class-B autoclave sterilization with individual sealed packets opened in your presence.</p>
          </div>
          <div className="p-6 bg-surface rounded-2xl border border-gray-100">
            <Award className="text-tealPrimary mb-3" size={28} />
            <h3 className="font-heading font-bold text-lg mb-2">Expert Care</h3>
            <p className="text-xs text-softgray leading-relaxed">Under the hands-on care of Dr. Muhammad Abubakar Malik (BDS) with 3,500+ happy smiles.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
`);

// 6. About.jsx
makeFile('src/pages/About.jsx', `
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
`);

// 7. Services.jsx
makeFile('src/pages/Services.jsx', `
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
            <Link to={\`/book?service=\${encodeURIComponent(item)}\`} className="text-xs font-bold text-coral hover:underline">
              Book this service →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
`);

// 8. Doctor.jsx
makeFile('src/pages/Doctor.jsx', `
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
`);

// 9. BookAppointment.jsx
makeFile('src/pages/BookAppointment.jsx', `
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
      const api = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(\`\${api}/api/appointments\`, formData);
    } catch (err) {
      console.warn("Backend not active, sending directly to WhatsApp");
    }

    const text = \`*New Dental Appointment*%0A👤 *Patient:* \${encodeURIComponent(formData.patientName)}%0A📞 *Phone:* \${encodeURIComponent(formData.phone)}%0A🦷 *Service:* \${encodeURIComponent(formData.service)}%0A📅 *Date:* \${encodeURIComponent(formData.appointmentDate)}%0A⏰ *Slot:* \${encodeURIComponent(formData.timeSlot)}\`;
    window.open(\`https://wa.me/923166793950?text=\${text}\`, '_blank');
    setDone(true);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-card">
        <h1 className="font-heading font-bold text-2xl text-center mb-6">Book an Appointment</h1>
        {done ? (
          <div className="text-center space-y-3 py-6">
            <p className="text-emerald-600 font-bold">Appointment details submitted!</p>
            <button onClick={() => setDone(false)} className="text-xs text-tealPrimary underline">Book another</button>
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
`);

// 10. Contact.jsx
makeFile('src/pages/Contact.jsx', `
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
`);

// 11. AdminDashboard.jsx
makeFile('src/pages/AdminDashboard.jsx', `
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  const api = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const loadData = async () => {
    try {
      const res = await axios.get(\`\${api}/api/appointments\`);
      setData(res.data);
    } catch (err) {
      console.warn("Backend API not reachable");
    }
  };

  useEffect(() => { loadData(); }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-heading font-bold text-2xl mb-4">Clinic Staff Portal (Appointments)</h1>
      <div className="bg-white rounded-2xl border shadow-card overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface border-b p-3">
            <tr>
              <th className="p-3">Patient</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Service</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.length === 0 ? (
              <tr><td colSpan="5" className="p-6 text-center text-softgray">No records yet in MongoDB. Book an appointment to test!</td></tr>
            ) : (
              data.map((item) => (
                <tr key={item._id}>
                  <td className="p-3 font-semibold">{item.patientName}</td>
                  <td className="p-3">{item.phone}</td>
                  <td className="p-3">{item.service}</td>
                  <td className="p-3">{item.appointmentDate}</td>
                  <td className="p-3 font-bold text-tealPrimary">{item.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
`);

console.log("\n All frontend files generated successfully!");