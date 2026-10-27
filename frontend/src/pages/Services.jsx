import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Root Canal Treatment',
    desc: 'Painless single-visit endodontic therapy with rotary NiTi instruments and electronic apex locators.',
    badge: 'Popular',
    tag: 'Tooth Saving'
  },
  {
    title: 'Teeth Scaling & Polishing',
    desc: 'Ultrasonic calculus and plaque removal followed by stain-buffing polish for fresh breath and healthy gums.',
    badge: 'Routine',
    tag: 'Preventive'
  },
  {
    title: 'Dental Fillings',
    desc: 'Tooth-colored composite resin fillings that seamlessly blend with your natural tooth shade.',
    badge: 'Aesthetic',
    tag: 'Restorative'
  },
  {
    title: 'Teeth Whitening',
    desc: 'In-office clinical bleaching treatment that safely brightens stubborn yellowing up to 8 shades in one visit.',
    badge: 'Cosmetic',
    tag: 'Smile Makeover'
  },
  {
    title: 'Braces & Aligners',
    desc: 'Orthodontic solutions including metal braces and clear removable aligners for straightening crooked teeth.',
    badge: 'Orthodontics',
    tag: 'Alignment'
  },
  {
    title: 'Crowns & Bridges',
    desc: 'Durable porcelain and zirconia ceramic crowns designed to restore broken, chipped, or missing teeth.',
    badge: 'Prosthodontics',
    tag: 'Full Function'
  },
  {
    title: 'Tooth Extraction',
    desc: 'Gentle, minimally traumatic tooth removals including impacted wisdom tooth surgical extractions.',
    badge: 'Oral Surgery',
    tag: 'Gentle Care'
  },
  {
    title: 'Gum Treatment',
    desc: 'Deep scaling, root planing, and therapeutic periodontal treatments to arrest gingivitis and gum bleeding.',
    badge: 'Periodontics',
    tag: 'Gum Health'
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Banner */}
      <div className="bg-gradient-to-r from-tealLight/80 to-mintSoft/50 rounded-3xl p-8 sm:p-12 border border-tealPrimary/15 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-1.5 bg-white text-tealPrimary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            <Sparkles size={13} /> Complete Dental Care in Multan
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal">
            Advanced Clinical Treatments by Dr. Abubakar Malik
          </h1>
          <p className="text-softgray text-xs sm:text-sm leading-relaxed">
            From emergency pain relief and gentle root canals to complete cosmetic smile designs, all procedures follow international sterile protocols.
          </p>
        </div>
        <div className="shrink-0">
          <img
            src="/src/assets/images/happy_patient_smile_1793138869931.jpg"
            alt="Healthy smile result"
            className="w-48 h-36 object-cover rounded-2xl shadow-lg border-2 border-white"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Grid of Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-card transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-extrabold text-tealPrimary font-heading">0{i + 1}</span>
                <span className="text-[10px] font-bold uppercase bg-tealLight text-tealDark px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-2 group-hover:text-tealPrimary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-softgray leading-relaxed mb-4">
                {item.desc}
              </p>
            </div>
            <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
              <span className="text-[11px] text-gray-400 font-medium">{item.tag}</span>
              <Link
                to={`/book?service=${encodeURIComponent(item.title)}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-coral group-hover:text-coralHover"
              >
                <span>Book</span> <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-surface rounded-3xl p-8 border border-gray-100 text-center max-w-2xl mx-auto space-y-4">
        <h3 className="font-heading font-bold text-xl text-charcoal">Not sure which treatment you need?</h3>
        <p className="text-xs text-softgray">Schedule an initial examination with Dr. Muhammad Abubakar Malik to receive an accurate digital assessment and transparent treatment plan.</p>
        <Link
          to="/book"
          className="inline-flex items-center gap-2 bg-coral hover:bg-coralHover text-white text-xs font-semibold px-6 py-3 rounded-xl shadow-coral transition-all"
        >
          <Calendar size={14} /> <span>Book a Consultation Session</span>
        </Link>
      </div>
    </div>
  );
}