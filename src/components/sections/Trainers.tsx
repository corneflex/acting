import React from 'react';
import TrainerCard from './TrainerCard';

export default function Trainers() {
  const trainers = [
    {
      name: "Guillaume Fargas",
      role: "Formateur Jeu Théâtral",
      bio: "Spécialiste de la Méthode Lecoq, Guillaume Fargas apporte une approche unique du jeu théâtral, mettant l'accent sur le corps poétique et l'imaginaire de l'acteur.",
      specialties: ["Méthode Lecoq", "Direction d'acteurs", "Mise en scène", "Interprétation"]
    },
    {
      name: "Martin Le Gall",
      role: "Formateur Acting",
      bio: "Réalisateur expérimenté, Martin Le Gall se spécialise dans la transition du jeu théâtral vers le jeu face caméra, explorant la subtilité et la précision nécessaires au cinéma.",
      specialties: ["Acting", "Réalisation", "Direction d'acteurs", "Cinéma"]
    },
    {
      name: "Gilles Martinez",
      role: "Superviseur Casting",
      bio: "Expert en casting, Gilles Martinez coordonne les sessions avec différents directeurs de casting, offrant une expérience concrète des auditions professionnelles.",
      specialties: ["Casting", "Direction d'acteurs", "Coaching", "Auditions"]
    },
    {
      name: "Florie Carbonne",
      role: "Directrice de Casting",
      bio: "Directrice de casting expérimentée, Florie Carbonne apporte son expertise dans la sélection et l'accompagnement des acteurs pour divers projets audiovisuels.",
      specialties: ["Casting", "Coaching", "Direction d'acteurs", "Auditions"]
    },
    {
      name: "Pierre-François Créancier",
      role: "Formateur Acting",
      bio: "Membre d'ASSORDA, Pierre-François Créancier partage son expérience approfondie du jeu d'acteur et des techniques de performance.",
      specialties: ["Acting", "Technique vocale", "Interprétation", "Direction d'acteurs"]
    },
    {
      name: "Constance Demontoy",
      role: "Coach d'acteurs",
      bio: "Membre active d'ASSORDA, Constance Demontoy se spécialise dans le coaching personnalisé et le développement des capacités expressives des acteurs.",
      specialties: ["Coaching", "Expression corporelle", "Technique vocale", "Improvisation"]
    },
    {
      name: "Annette Trumel",
      role: "Formatrice",
      bio: "Membre expérimentée d'ASSORDA, Annette Trumel apporte son expertise dans la formation des acteurs et le développement de leurs compétences.",
      specialties: ["Formation", "Technique", "Interprétation", "Coaching"]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {trainers.map((trainer, index) => (
        <TrainerCard key={index} {...trainer} />
      ))}
    </div>
  );
}