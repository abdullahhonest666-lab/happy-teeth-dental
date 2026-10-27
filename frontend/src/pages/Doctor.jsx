import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, CheckCircle2, Award, Clock, MapPin, Sparkles } from 'lucide-react';

export default function Doctor() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-card border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm">
            <img
              src="/images/doctor_portrait_1793138869583.jpg"
              alt="Dr. Muhammad Abubakar Malik BDS Dental Surgeon"
              className="rounded-3xl object-cover h-96 w-full shadow-xl border-4 border-tealLight"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-md border border-gray-100 flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-xs text-charcoal">Dr. Abubakar Malik</p>
                <p className="text-[10px] text-tealPrimary font-semibold">PMC Verified Dentist</p>
              </div>
              <span className="bg-tealLight text-tealDark font-bold text-[10px] px-2 py-0.5 rounded-full">B.D.S</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-1.5 bg-tealLight text-tealPrimary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles size={12} /> Lead Dental Surgeon & Founder
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal">
            Dr. Muhammad Abubakar Malik
          </h1>
          <p className="text-tealPrimary font-semibold text-sm">
            B.D.S. — Dental Surgeon & Aesthetic Consultant
          </p>
          <p className="text-softgray text-sm leading-relaxed">
            Dr. Muhammad Abubakar Malik is a distinguished dental practitioner in Multan committed to gentle, anxiety-free dentistry. He holds a Bachelor of Dental Surgery (B.D.S.) with specialized clinical focus in painless single-sitting root canal treatments, aesthetic composite veneers, and preventive oral health.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-charcoal pt-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-tealPrimary shrink-0" />
              <span>Advanced Rotary Endodontics</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-tealPrimary shrink-0" />
              <span>Aesthetic Tooth Restorations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-tealPrimary shrink-0" />
              <span>Strict Autoclave Sterilization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-tealPrimary shrink-0" />
              <span>Patient-Centric Gentle Care</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <Link
              to="/book"
              className="bg-coral hover:bg-coralHover text-white text-xs font-semibold px-6 py-3 rounded-xl shadow-coral flex items-center gap-2 transition-all hover:scale-105"
            >
              <Calendar size={14} /> <span>Book Consultation with Dr. Malik</span>
            </Link>
            <a
              href="tel:+923166793950"
              className="border border-tealPrimary text-tealPrimary hover:bg-tealLight text-xs font-semibold px-5 py-3 rounded-xl flex items-center gap-2 transition-colors"
            >
              <Phone size={14} /> <span>Direct Call (+92 316 6793950)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Clinical Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-surface rounded-2xl border border-gray-100">
          <Clock className="text-tealPrimary mb-2" size={24} />
          <h3 className="font-heading font-bold text-sm text-charcoal mb-1">Consultation Timings</h3>
          <p className="text-xs text-softgray">Monday – Saturday: 11:00 AM to 02:00 PM and 06:00 PM to 10:00 PM</p>
        </div>
        <div className="p-6 bg-surface rounded-2xl border border-gray-100">
          <MapPin className="text-tealPrimary mb-2" size={24} />
          <h3 className="font-heading font-bold text-sm text-charcoal mb-1">Clinic Chamber</h3>
          <p className="text-xs text-softgray">Jail Road, Near Jinnah Town main street, Multan 59070</p>
        </div>
        <div className="p-6 bg-surface rounded-2xl border border-gray-100">
          <Award className="text-tealPrimary mb-2" size={24} />
          <h3 className="font-heading font-bold text-sm text-charcoal mb-1">Clinical Experience</h3>
          <p className="text-xs text-softgray">Over 3,500+ procedures performed with high patient satisfaction rate</p>
        </div>
      </div>
    </div>
  );
}