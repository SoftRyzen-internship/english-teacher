'use client';

import { Slider } from '@/components/ui/slider/slider';
import { ReviewCard } from '../review-card/review-card';

import { useDeviceType } from '@/hooks/use-device-type';

import reviewsData from '@/data/reviews.json';

export const ReviewsList = () => {
  const { isDesktop } = useDeviceType();

  const cards = reviewsData.cards.map((review) => (
    <ReviewCard key={review.id} author={review.author} text={review.text} />
  ));

  return isDesktop ? (
    <div className="xl:flex xl:gap-6">{cards}</div>
  ) : (
    <Slider section="reviews">{cards}</Slider>
  );
};
