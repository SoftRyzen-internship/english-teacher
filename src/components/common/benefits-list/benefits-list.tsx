import React from 'react';
import benefitsData from '@/data/benefits.json';
import { BenefitsCard } from '../benefits-card/benefits-card';

export const BenefitsList = () => {
  return (
    <ul className="xl:flex xl:flex-wrap xl:gap-6">
      {benefitsData.cards.map((item) => (
        <BenefitsCard
          key={item.id}
          title={item.title}
          name={item.name}
          text={item.text}
        />
      ))}
    </ul>
  );
};
