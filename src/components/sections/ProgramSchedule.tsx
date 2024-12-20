import React from 'react';

interface ScheduleBlockProps {
  dates: string;
  title: string;
  trainer: string;
  content: string;
}

function ScheduleBlock({ dates, title, trainer, content }: ScheduleBlockProps) {
  return (
    <div className="border border-[#00ff00] rounded-lg p-6 space-y-4 matrix-border bg-black/30">
      <div className="border-b border-[#00ff00]/30 pb-4">
        <h3 className="text-xl font-bold matrix-glow mb-2">{title}</h3>
        <div className="flex flex-col space-y-1">
          <p className="text-sm opacity-80">{dates}</p>
          <p className="font-medium">Formateur : {trainer}</p>
        </div>
      </div>
      <div className="text-sm leading-relaxed opacity-90 whitespace-pre-line">
        {content}
      </div>
    </div>
  );
}

export default function ProgramSchedule() {
  const scheduleBlocks = [
    {
      dates: "Du 22 au 26 avril 2025",
      title: "JEU",
      trainer: "Guillaume Fargas",
      content: `Training avec la Méthode Lecoq
Interprétation de Juste la fin du monde de Jean-Luc Lagarce.

La méthode Lecoq porte sur l'imaginaire du jeu. Les comédien.ne.s ne sont pas seulement un corps en scène, mais un corps poétique qui raconte sa propre poésie de jeu, son imaginaire, sa blessure secrète. Les comédien.ne.s sont aussi des créateur.rice.s comme l'auteur. Il entre dans le texte à travers l'identification et trouve la distanciation pour inviter le spectateur à pénétrer son imaginaire. 

Nous nous saisirons du texte de Jean Luc Lagarce afin d'explorer ce texte dramatique et d'en saisir la force et l'intensité. L'objectif est d'une part, d'épuiser la réalité du jeu théâtral dans sa dimension spectaculaire afin de déployer la profondeur du texte et d'autre part, de créer des interprétations originales à partir d'extrait de scènes dans une mise en scène adaptée aux contraintes du groupe et de chaque personnalité. 

Le dernier jour, la mise en jeu va devenir mise en scène dans le but de présenter son travail devant un public. L'objectif est de réaliser une proposition scénique de la pièce afin d'expérimenter le rapport avec ce public propre au théâtre.`
    },
    {
      dates: "Du 28 avril au 3 mai",
      title: "ACTING",
      trainer: "Martin Le Gall",
      content: `Ce qui est frappant à la lecture de la pièce de théâtre, c'est la notion d'attente qui représente un défi pour l'"acting". Tous les personnages, semblent attendre que quelque chose arrive, que ces retrouvailles démarrent, que les langues se délient et puis rien... Filmer l'attente. Filmer le silence. Juste la fin du monde a quelque chose de très cinématographique...

L'objectif est de préserver l'énergie du jeu théâtral de la première semaine et de la transformer en précision et concision face caméra. L'expérience permettra de sentir la résonance entre théâtre et cinéma comme un enjeu majeur pour l'acting. Ce dialogue instauré entre les deux va prendre tout son sens dans le travail mené avec le réalisateur Martin Le Gall, accompagné dans certaines étapes par Guillaume Fargas. 

Durant une semaine, les stagiaires seront filmés afin de les mettre dans un dispositif cinématographique tout en ne perdant pas de vue (et d'ouïe) que le matériel de départ est une œuvre théâtrale.`
    },
    {
      dates: "Du 12 au 16 mai 2025",
      title: "CASTING",
      trainer: "Gilles Martinez",
      content: `Sur les cinq jours, cinq directeur.rice.s de casting se succéderont dans le but d'entraîner et de perfectionner le jeu face caméra des comédien.ne.s en les confrontant à des situations réelles de casting. 

En plus d'étoffer leur réseaux professionnel, cela leur permettra aussi de mieux appréhender les différentes méthodologies de travail des directeur.rice.s de casting en fonction de leur spécificité : Long métrage populaire ou d'auteur, téléfilm, mini-série ou série quotidienne.`
    }
  ];

  return (
    <div className="space-y-8">
      {scheduleBlocks.map((block, index) => (
        <ScheduleBlock key={index} {...block} />
      ))}
    </div>
  );
}