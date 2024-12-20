import React from 'react';
import { X } from 'lucide-react';

interface FormationDetailsProps {
  formation: {
    title: string;
    description: string;
    program: string[];
    duration: string;
    prerequisites: string[];
  } | null;
  onClose: () => void;
}

export default function FormationDetails({ formation, onClose }: FormationDetailsProps) {
  if (!formation) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-black border border-[#00ff00] rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto matrix-border">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold matrix-glow">{formation.title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#003300] rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <p className="text-lg mb-4">{formation.description}</p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 matrix-glow">Durée</h3>
              <p>{formation.duration}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 matrix-glow">Prérequis</h3>
            <ul className="list-disc list-inside space-y-1">
              {formation.prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 matrix-glow">Programme</h3>
            <ul className="list-disc list-inside space-y-2">
              {formation.program.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}