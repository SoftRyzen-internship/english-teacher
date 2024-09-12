'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Slider } from '@/components/ui/slider/slider';

import { useDeviceType } from '@/hooks/use-device-type';

import reviewsData from '@/data/reviews.json';
import { ReviewsCard } from '../review-card/review-card';

gsap.registerPlugin(ScrollTrigger);

export const ReviewsList = () => {
  const { isDesktop, isTablet, isMobile } = useDeviceType();
  const reviewsCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isDesktop) {
      reviewsCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, x: 100 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                once: true,
              },
              delay: index * 0.6,
            }
          );
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
