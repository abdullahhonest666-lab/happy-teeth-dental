import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, CheckCircle2, HeartPulse, Award, Calendar } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-tealLight text-tealPrimary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Sparkles size={13} /> About Our Practice
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-charcoal">
          Gentle Dental Excellence in <span className="text-tealPrimary">Multan</span>
        </h1>
        <p className="text-sm text-softgray max-w-xl mx-auto">
          Combining patient empathy, painless anesthesia, and hospital-grade sterilization protocols to redefine your dental experience.
        </p>
      </div>

      {/* Main Feature Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-5 text-softgray text-sm leading-relaxed">
          <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm inline-block mb-2">
            <img
              src="/images/HAPPY_TEETH_DENTAL_CLINIC_b252f782.png"
              alt="Happy Teeth Dental Clinic Multan Logo"
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <p>
            Conveniently located on <strong>Jail Road, Near Jinnah Town main street in Multan</strong>, <strong>Happy Teeth Dental Clinic</strong> was established with a singular vision: to make visits to the dentist a tranquil, painless, and completely transparent experience.
          </p>
          <p>
            Under the clinical direction of <strong>Dr. Muhammad Abubakar Malik (BDS)</strong>, our practice utilizes modern rotary endodontics, high-magnification dental loupes, and digital imaging to deliver long-lasting restorative outcomes.
          </p>

          <div className="space-y-2.5 pt-2 text-xs text-charcoal">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-tealPrimary" />
              <span>International standard Class-B autoclave sterilization</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-tealPrimary" />
              <span>Rotary NiTi root canal therapy for fast, gentle recovery</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-tealPrimary" />
              <span>Aesthetic shade-matched composite fillings and zirconia crowns</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 bg-coral hover:bg-coralHover text-white px-7 py-3 rounded-xl font-semibold text-xs shadow-coral transition-all hover:scale-105"
            >
              <Calendar size={15} /> <span>Schedule a Visit at Our Clinic</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="relative flex w-full max-w-[440px] items-center justify-center rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <img
              src="/images/clinic-room-enhanced.jpg"
              alt="Happy Teeth Dental Clinic Facility and Sterile Instruments"
              className="h-[400px] w-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-bold text-tealDark shadow-sm flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-tealPrimary" /> 100% Sterile Standards
            </div>
          </div>
        </div>
      </div>

      {/* 3 Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="bg-surface p-6 rounded-2xl border border-gray-100">
          <HeartPulse className="text-tealPrimary mb-2" size={24} />
          <h4 className="font-heading font-bold text-base text-charcoal mb-1">Empathetic Atmosphere</h4>
          <p className="text-xs text-softgray leading-relaxed">We understand dental anxiety. Our team takes time to explain every step so you feel entirely in control.</p>
        </div>
        <div className="bg-surface p-6 rounded-2xl border border-gray-100">
          <ShieldCheck className="text-tealPrimary mb-2" size={24} />
          <h4 className="font-heading font-bold text-base text-charcoal mb-1">Infection Control</h4>
          <p className="text-xs text-softgray leading-relaxed">Sealed instrument pouches, single-use disposables, and chemical indicator tape validation on every cycle.</p>
        </div>
        <div className="bg-surface p-6 rounded-2xl border border-gray-100">
          <Award className="text-tealPrimary mb-2" size={24} />
          <h4 className="font-heading font-bold text-base text-charcoal mb-1">Affordable Excellence</h4>
          <p className="text-xs text-softgray leading-relaxed">Honest diagnoses with no hidden fees, providing accessible quality dental healthcare to Multan families.</p>
        </div>
      </div>
    </div>
  );
}