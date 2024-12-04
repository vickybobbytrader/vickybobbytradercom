import React from 'react';
import { Section } from '../shared/Section';
import { Container } from '../shared/Container';
import { SectionTitle } from '../shared/SectionTitle';
import { Card } from '../shared/Card';
import { features } from '../../data/features';

export function Features() {
  return (
    <Section background="gray">
      <Container>
        <SectionTitle>Why Choose Us</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}