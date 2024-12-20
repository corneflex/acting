import React from 'react';

export default function SignUp() {
  return (
    <form className="max-w-xl mx-auto space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Prénom</label>
          <input type="text" className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700 focus:border-red-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Nom</label>
          <input type="text" className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700 focus:border-red-500 focus:outline-none" />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input type="email" className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700 focus:border-red-500 focus:outline-none" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Formation souhaitée</label>
        <select className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700 focus:border-red-500 focus:outline-none">
          <option value="">Sélectionnez une formation</option>
          <option value="acting">Acting</option>
          <option value="artistique">Artistique</option>
          <option value="realisation">Réalisation</option>
          <option value="assistant-realisateur">Assistant Réalisateur</option>
          <option value="accessoiriste">Accessoiriste</option>
          <option value="decorateur">Décorateur</option>
          <option value="costumier">Costumier</option>
          <option value="scenariste">Scénariste</option>
          <option value="ecriture">Écriture</option>
        </select>
      </div>
      
      <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition-colors font-medium">
        S'inscrire
      </button>
    </form>
  );
}