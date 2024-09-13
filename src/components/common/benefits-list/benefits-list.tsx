'use client';

import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Slider } from '@/components/ui/slider/slider';
import { BenefitsCard } from '../benefits-card/benefits-card';

import { useDeviceType } from '@/hooks/use-device-type';
import { optionsCard } from '@/utils/animation';

import benefitsData from '@/data/benefits.json';

gsap.registerPlugin(ScrollTrigger);

export const BenefitsList = () => {
  const { isDesktop, isTablet, isMobile } = useDeviceType();
  const benefitsCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isDesktop) {
      benefitsCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, optionsCard({ card, index }));
        }
      });
    }
  }, [isDesktop]);

  const cards = benefitsData.cards.map((item, index) => (
    <BenefitsCard
      key={item.id}
      title={item.title}
      name={item.name}
      text={item.text}
      ref={(el) => {
        benefitsCardsRef.current[index] = el;
      }}
    />
  ));

  if (isDesktop) {
    return <div className="xl:flex xl:gap-6">{cards}</div>;
  } else if (isTablet || isMobile) {
    return <Slider section="benefits">{cards}</Slider>;
  } else {
    return null;
  }
};
