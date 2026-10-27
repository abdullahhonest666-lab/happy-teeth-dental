import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, HeartPulse, ShieldCheck, Award, ArrowRight, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="pt-10 pb-16 bg-gradient-to-b from-tealLight/60 via-white to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-tealPrimary/25 text-xs font-semibold text-tealPrimary shadow-sm">
              <img
                src="/images/HDC-fav-icon_1356d970.png"
                alt="Happy Teeth Dental Clinic Icon"
                className="w-4 h-4 object-contain"
                referrerPolicy="no-referrer"
              />
              <span>★ 4.9 Patient Rated Dental Clinic in Multan</span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-charcoal leading-tight">
              Happy Teeth Dental Clinic <span className="text-tealPrimary">Multan</span>
            </h1>
            <p className="text-xl font-heading font-semibold text-softgray italic">“Your Smile, Our Passion”</p>
            <p className="text-softgray text-base max-w-xl leading-relaxed">
              Painless Dentistry • Beautiful Smiles • Trusted Care. Led by Dr. Muhammad Abubakar Malik (BDS) on Jail Road, Near Jinnah Town main street, Multan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                to="/book"
                className="bg-coral hover:bg-coralHover text-white font-semibold px-8 py-3.5 rounded-2xl shadow-coral flex items-center justify-center gap-2 text-sm transition-all hover:scale-105"
              >
                <Calendar size={18} /> <span>Book Appointment</span>
              </Link>
              <a
                href="tel:+923166793950"
                className="border-2 border-tealPrimary text-tealPrimary hover:bg-tealLight font-semibold px-8 py-3.5 rounded-2xl flex items-center justify-center gap-2 text-sm transition-all"
              >
                <Phone size={18} /> <span>Call +92 316 6793950</span>
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-xs text-softgray">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-tealPrimary" /> Painless Anesthesia</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-tealPrimary" /> Class-B Sterilization</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-tealPrimary" /> 3,500+ Patients</span>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/hero_clinic_1793138868655.jpg"
                alt="Happy Teeth Dental Clinic Multan Operatory"
                className="object-cover h-[440px] w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg flex items-center justify-between border border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/HDC-fav-icon_1356d970.png"
                    alt="Logo"
                    className="w-10 h-10 object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-xs text-charcoal">Happy Teeth Clinic</h4>
                    <p className="text-[11px] text-softgray flex items-center gap-1">
                      <MapPin size={11} className="text-tealPrimary" /> Jail Road, Multan
                    </p>
                  </div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Open Daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-surface rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-tealLight text-tealPrimary flex items-center justify-center mb-4">
              <HeartPulse size={26} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2 text-charcoal">Painless Dentistry</h3>
            <p className="text-xs text-softgray leading-relaxed">Modern gentle numbing protocols and high-precision instruments ensure maximum patient comfort and zero distress.</p>
          </div>
          <div className="p-8 bg-surface rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-tealLight text-tealPrimary flex items-center justify-center mb-4">
              <ShieldCheck size={26} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2 text-charcoal">100% Sterilization</h3>
            <p className="text-xs text-softgray leading-relaxed">International hospital-grade Class-B autoclave sterilization with individual sealed instrument cassettes opened right before your treatment.</p>
          </div>
          <div className="p-8 bg-surface rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-tealLight text-tealPrimary flex items-center justify-center mb-4">
              <Award size={26} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2 text-charcoal">Specialist Expertise</h3>
            <p className="text-xs text-softgray leading-relaxed">Under the direct surgical leadership of Dr. Muhammad Abubakar Malik (BDS) with thousands of successful root canals and aesthetic restorations.</p>
          </div>
        </div>
      </section>

      {/* Meet Lead Surgeon Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-tealDark to-tealPrimary rounded-3xl p-8 sm:p-12 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <img
                src="/images/doctor_portrait_1793138869583.jpg"
                alt="Dr. Muhammad Abubakar Malik BDS Dental Surgeon Multan"
                className="w-64 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white/30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-3 -right-3 bg-white text-charcoal px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5">
                <Sparkles size={14} className="text-tealPrimary" /> BDS Surgeon
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Meet Your Dentist</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">Dr. Muhammad Abubakar Malik</h2>
            <p className="text-mint font-medium text-sm">B.D.S. — Dental Surgeon & Aesthetic Consultant</p>
            <p className="text-white/90 text-sm leading-relaxed">
              Dr. Malik is renowned in Multan for combining warm, empathetic patient communication with modern painless dental techniques. From routine pediatric cleanings to advanced rotary root canals and cosmetic smile reconstructions, each patient receives personalized, dedicated attention.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/doctor"
                className="bg-white hover:bg-gray-100 text-tealDark font-semibold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-colors"
              >
                <span>Read Full Doctor Profile</span> <ArrowRight size={14} />
              </Link>
              <Link
                to="/book"
                className="bg-coral hover:bg-coralHover text-white font-semibold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-colors shadow-coral"
              >
                <Calendar size={14} /> <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Smile & Facility Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase text-tealPrimary tracking-wider">Clinical Standards</span>
          <h2 className="font-heading font-extrabold text-3xl text-charcoal mt-1">Advanced Technology & Confident Smiles</h2>
          <p className="text-xs text-softgray mt-2">Every treatment is backed by precision digital diagnostics and ergonomic patient comfort.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
            <img
              src="/images/happy_patient_smile_1793138869931.jpg"
              alt="Cosmetic smile transformation at Happy Teeth Multan"
              className="h-64 w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Cosmetic Smile Rejuvenation</h3>
                <p className="text-xs text-softgray leading-relaxed">Professional teeth whitening, aesthetic composite bonding, veneers, and alignment solutions engineered to give you a bright, natural, radiant smile.</p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-tealPrimary mt-4 hover:underline">
                Explore Aesthetic Treatments <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
            <img
              src="/images/clinic_facility_1793138869805.jpg"
              alt="Sterilized treatment room at Happy Teeth Dental Clinic"
              className="h-64 w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Advanced Rotary Endodontics</h3>
                <p className="text-xs text-softgray leading-relaxed">Pain-free single-visit root canal treatments utilizing rotary nickel-titanium files and digital apex locators to safely preserve your natural teeth.</p>
              </div>
              <Link to="/book" className="inline-flex items-center gap-1.5 text-xs font-bold text-coral mt-4 hover:underline">
                Schedule an Appointment <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}