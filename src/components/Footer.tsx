import React from 'react';
import { Film } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center space-x-2">
          <Film className="w-6 h-6 text-red-600" />
          <span className="text-neutral-400">© 2024 Acting and Speaking. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}