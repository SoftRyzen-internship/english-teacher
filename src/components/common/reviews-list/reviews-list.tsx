'use client';

import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Slider } from '@/components/ui/slider/slider';
import { ReviewsCard } from '../review-card/review-card';

import { useDeviceType } from '@/hooks/use-device-type';
import { optionsCard } from '@/utils/animation';

import reviewsData from '@/data/reviews.json';

gsap.registerPlugin(ScrollTrigger);

export const ReviewsList = () => {
  const { isDesktop, isTablet, isMobile } = useDeviceType();
  const reviewsCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isDesktop) {
      reviewsCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, optionsCard({ card, index }));
        }
      });
    }
  }, [isDesktop]);

  const cards = reviewsData.cards.map((item, index) => (
    <ReviewsCard
      key={item.id}
      author={item.author}
      text={item.text}
      ref={(el) => {
        reviewsCardsRef.current[index] = el;
      }}
    />
  ));

  if (isDesktop) {
    return <div className="xl:flex xl:gap-6">{cards}</div>;
  } else if (isTablet || isMobile) {
    return <Slider section="reviews">{cards}</Slider>;
  } else {
    return null;
  }
};
