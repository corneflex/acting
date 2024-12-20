import React from 'react';

export default function Hero() {
  return (
    <div 
      className="relative h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://www.photocinecomedie.com/47598-large_default/clap-video-et-cinema-35cm-noir.jpg")'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-red-500 drop-shadow-lg">
            Acting and Speaking
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300">
            Découvrez l'art du cinéma à travers nos formations professionnelles
          </p>
        </div>
      </div>
    </div>
  );
}