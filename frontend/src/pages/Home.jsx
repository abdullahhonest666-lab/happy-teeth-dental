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