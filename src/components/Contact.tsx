import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Informations de contact</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-red-500" />
            <span>guillaume.fargas@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-red-500" />
            <span>+33 6 87 20 55 13</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-red-500" />
            <span>04 rue Joseph Delteil, 34830 Jacou</span>
          </div>
        </div>
      </div>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nom</label>
          <input type="text" className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700 focus:border-red-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700 focus:border-red-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea rows={4} className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700 focus:border-red-500 focus:outline-none"></textarea>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors">
          Envoyer
        </button>
      </form>
    </div>
  );
}