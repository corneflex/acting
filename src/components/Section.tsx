import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function Section({ id, title, icon, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-center space-x-4 mb-8">
        <div className="text-red-600">
          {icon}
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
}