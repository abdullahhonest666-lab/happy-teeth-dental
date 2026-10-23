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