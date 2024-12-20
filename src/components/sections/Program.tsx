import React from 'react';
import { Calendar, Clock, Users, Target, EuroIcon, MapPin, UserCircle, CheckSquare, CalendarClock } from 'lucide-react';
import ProgramSchedule from './ProgramSchedule';

export default function Program() {
  const programDetails = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Durée",
      content: (
        <>
          <p className="mb-2">Session : du 22 au 26 avril, 2025 et du 12 au 16 mai 2025</p>
          <p>Durée totale : 105 heures</p>
        </>
      )
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      content: "De 10h à 18h"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Groupes",
      content: "Effectif maximum : 6 personnes"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Objectifs",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Expérimenter une méthode de jeu</li>
          <li>Développer la créativité et l'interprétation des comédien.ne.s</li>
          <li>Optimiser son jeu devant la caméra</li>
          <li>Préparer une audition et analyser les enjeux et objectifs d'un casting</li>
          <li>S'adapter aux méthodes de chaque directeur.rice.s de casting</li>
        </ul>
      )
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: "Pré-requis",
      content: "Connaissances et pratiques du jeu"
    },
    {
      icon: <UserCircle className="w-6 h-6" />,
      title: "Public",
      content: "Demandeurs d'emploi et intermittents du spectacle"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Lieu",
      content: "à déterminer"
    },
    {
      icon: <EuroIcon className="w-6 h-6" />,
      title: "Prix",
      content: "A définir"
    },
    {
      icon: <CalendarClock className="w-6 h-6" />,
      title: "Clôture des inscriptions",
      content: "22 mars 2025"
    }
  ];

  return (
    <section id="programme" className="py-16">
      <h2 className="text-3xl font-bold mb-8 matrix-glow">Programme de Formation</h2>
      
      <div className="space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {programDetails.map((detail, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-black/30 border border-[#00ff00] matrix-border">
              <div className="text-[#00ff00]">
                {detail.icon}
              </div>
              <div>
                <h3 className="font-bold mb-2 matrix-glow">{detail.title}</h3>
                <div className="text-sm opacity-90">{detail.content}</div>
              </div>
            </div>
          ))}
        </div>

        <ProgramSchedule />
      </div>
    </section>
  );
}