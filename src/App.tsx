import React from 'react';
import { Info, Film, UserPlus, Phone, Users } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Program from './components/sections/Program';
import Section from './components/Section';
import Footer from './components/Footer';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import MatrixRain from './components/MatrixRain';
import Presentation from './components/sections/Presentation';
import Formations from './components/sections/Formations';
import Trainers from './components/sections/Trainers';

function App() {
  return (
    <div className="min-h-screen text-[#00ff00]">
      <MatrixRain />
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 relative z-10">
        <Program />
        
        <div className="space-y-24 py-16">
          <Section 
            id="presentation" 
            title="Présentation" 
            icon={<Info className="w-8 h-8" />}
          >
            <Presentation />
          </Section>

          <Section 
            id="formations" 
            title="Formations" 
            icon={<Film className="w-8 h-8" />}
          >
            <Formations />
          </Section>

          <Section 
            id="formateurs" 
            title="Les Formateurs" 
            icon={<Users className="w-8 h-8" />}
          >
            <Trainers />
          </Section>

          <Section 
            id="inscription" 
            title="S'inscrire" 
            icon={<UserPlus className="w-8 h-8" />}
          >
            <SignUp />
          </Section>

          <Section 
            id="contact" 
            title="Nous Contacter" 
            icon={<Phone className="w-8 h-8" />}
          >
            <Contact />
          </Section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;