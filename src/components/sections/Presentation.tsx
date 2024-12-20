import React from 'react';
import { Camera, Theater } from 'lucide-react';
import DetailedSection from '../DetailedSection';

export default function Presentation() {
  return (
    <>
      <p className="text-lg leading-relaxed opacity-90">
        Acting and Speaking propose des formations artistiques pour le cinéma et l'audiovisuel. 
        Ces formations ont pour centre, le jeu d'acteur ou "acting" avec un travail sur deux dimensions, 
        le jeu théatral et le jeu face caméra. Les autres formations seront des ouvertures aux autres 
        métiers artistiques du cinéma comme assistant réalisateur, scripte, accessoiriste, décorateur, costumier, et scénariste.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <DetailedSection
          title="Jeu d'Acteur Face Caméra"
          icon={<Camera />}
          description="Maîtrisez les techniques spécifiques du jeu face caméra pour le cinéma et la télévision."
          points={[
            "Techniques de regard et positionnement face caméra",
            "Gestion des marques et des axes",
            "Adaptation de l'intensité du jeu selon les plans",
            "Travail sur la subtilité des expressions",
            "Gestion du rythme et des silences",
            "Interaction avec les partenaires hors-champ"
          ]}
        />
        <DetailedSection
          title="Jeu Théâtral"
          icon={<Theater />}
          description="Développez vos compétences théâtrales fondamentales pour enrichir votre jeu d'acteur."
          points={[
            "Techniques de projection vocale",
            "Expression corporelle et gestuelle",
            "Improvisation et création de personnages",
            "Analyse et interprétation de textes",
            "Travail sur les émotions",
            "Présence scénique et occupation de l'espace"
          ]}
        />
      </div>
    </>
  );
}