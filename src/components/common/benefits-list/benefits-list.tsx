'use client';

import React from 'react';
import benefitsData from '@/data/benefits.json';
import { BenefitsCard } from '../benefits-card/benefits-card';
import { useDeviceType } from '@/hooks/use-device-type';
import { Slider } from '@/components/ui/slider/slider';

export const BenefitsList = () => {
  const { isDesktop } = useDeviceType();

  const cards = benefitsData.cards.map((item) => (
    <BenefitsCard
      key={item.id}
      title={item.title}
      name={item.name}
      text={item.text}
    />
  ));

  return isDesktop ? (
    <div className="xl:flex xl:gap-6">{cards}</div>
  ) : (
    <Slider section="benefits">{cards}</Slider>
  );
};
