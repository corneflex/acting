import React from 'react';
import { Film } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Film className="w-8 h-8 text-[#00ff00]" />
            <span className="text-xl font-bold text-[#00ff00] matrix-glow">Acting and Speaking</span>
          </div>
          
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="#programme" className="hover:text-[#00ff00] transition-colors">Programme</a></li>
            <li><a href="#presentation" className="hover:text-[#00ff00] transition-colors">Présentation</a></li>
            <li><a href="#formations" className="hover:text-[#00ff00] transition-colors">Formations</a></li>
            <li><a href="#formateurs" className="hover:text-[#00ff00] transition-colors">Formateurs</a></li>
            <li><a href="#contact" className="hover:text-[#00ff00] transition-colors">Contact</a></li>
            <li><a href="#inscription" className="hover:text-[#00ff00] transition-colors">S'inscrire</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}