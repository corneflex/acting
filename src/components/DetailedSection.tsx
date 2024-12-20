import React, { ReactNode } from 'react';

interface DetailedSectionProps {
  title: string;
  icon: ReactNode;
  description: string;
  points: string[];
}

export default function DetailedSection({ title, icon, description, points }: DetailedSectionProps) {
  return (
    <div className="border border-[#00ff00] bg-black/50 p-8 rounded-lg matrix-border">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 border border-[#00ff00] rounded-full flex items-center justify-center matrix-border">
          {icon}
        </div>
        <h3 className="text-2xl font-bold matrix-glow">{title}</h3>
      </div>
      <p className="text-lg mb-6 opacity-90">{description}</p>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-[#00ff00] mt-1">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}