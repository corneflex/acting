import React, { ReactNode } from 'react';

interface FormationCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  onClick: () => void;
}

export default function FormationCard({ title, icon, description, onClick }: FormationCardProps) {
  return (
    <div 
      className="border border-[#00ff00] bg-black/50 p-6 rounded-lg hover:bg-[#003300] transition-colors matrix-border cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 border border-[#00ff00] rounded-full flex items-center justify-center mb-4 matrix-border">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 matrix-glow">{title}</h3>
      <p className="opacity-90">{description}</p>
    </div>
  );
}