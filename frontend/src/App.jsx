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