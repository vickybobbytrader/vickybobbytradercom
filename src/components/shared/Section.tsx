import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export function Section({ 
  children, 
  className = '', 
  background = 'white' 
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  };

  return (
    <section className={`py-20 ${bgColors[background]} ${className}`}>
      {children}
    </section>
  );
}