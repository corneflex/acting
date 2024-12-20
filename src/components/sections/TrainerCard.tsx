import React from 'react';
import { User2 } from 'lucide-react';

interface TrainerCardProps {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
}

export default function TrainerCard({ name, role, bio, specialties }: TrainerCardProps) {
  return (
    <div className="border border-[#00ff00] rounded-lg p-6 space-y-4 matrix-border bg-black/30">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 border border-[#00ff00] rounded-full flex items-center justify-center matrix-border">
          <User2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold matrix-glow">{name}</h3>
          <p className="text-sm opacity-80">{role}</p>
        </div>
      </div>
      
      <p className="text-sm leading-relaxed opacity-90">{bio}</p>
      
      <div>
        <h4 className="text-sm font-semibold mb-2">Spécialités</h4>
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 rounded-full border border-[#00ff00] bg-[#003300] matrix-border"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}