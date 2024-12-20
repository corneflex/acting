import React, { useState } from 'react';
import { Theater, Pen, Video, Clapperboard, Scissors, Palette, Shirt, BookText } from 'lucide-react';
import FormationCard from '../FormationCard';
import FormationDetails from './FormationDetails';
import { formations } from '../../data/formations';

export default function Formations() {
  const [selectedFormation, setSelectedFormation] = useState<string | null>(null);

  const getFormationDetails = (id: string) => {
    return formations[id as keyof typeof formations] || null;
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FormationCard
          title="Acting"
          icon={<Theater />}
          description="Formation approfondie en jeu d'acteur, techniques théâtrales et jeu face caméra"
          onClick={() => setSelectedFormation('acting')}
        />
        <FormationCard
          title="Artistique"
          icon={<Pen />}
          description="Développement des compétences artistiques: costumes, décors, accessoires"
          onClick={() => setSelectedFormation('artistique')}
        />
        <FormationCard
          title="Réalisation"
          icon={<Video />}
          description="Apprentissage des techniques de réalisation et direction d'acteurs"
          onClick={() => setSelectedFormation('realisation')}
        />
        <FormationCard
          title="Assistant Réalisateur"
          icon={<Clapperboard />}
          description="Formation aux fonctions d'assistant réalisateur: organisation, planning, coordination"
          onClick={() => setSelectedFormation('assistant-realisateur')}
        />
        <FormationCard
          title="Accessoiriste"
          icon={<Scissors />}
          description="Formation à la gestion et création d'accessoires pour le cinéma et l'audiovisuel"
          onClick={() => setSelectedFormation('accessoiriste')}
        />
        <FormationCard
          title="Décorateur"
          icon={<Palette />}
          description="Conception et réalisation des décors, aménagement des espaces scéniques"
          onClick={() => setSelectedFormation('decorateur')}
        />
        <FormationCard
          title="Costumier"
          icon={<Shirt />}
          description="Création et gestion des costumes, conception des looks des personnages"
          onClick={() => setSelectedFormation('costumier')}
        />
        <FormationCard
          title="Scénariste"
          icon={<BookText />}
          description="Écriture de scénarios, développement d'histoires et structure narrative"
          onClick={() => setSelectedFormation('scenariste')}
        />
        <FormationCard
          title="Écriture"
          icon={<Pen />}
          description="Scénario, dramaturgie et adaptation pour l'écran"
          onClick={() => setSelectedFormation('ecriture')}
        />
      </div>

      {selectedFormation && (
        <FormationDetails
          formation={getFormationDetails(selectedFormation)}
          onClose={() => setSelectedFormation(null)}
        />
      )}
    </>
  );
}