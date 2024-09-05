import { Slider } from '@/components/ui/slider/slider';
import { ReviewCard } from '../review-card/review-card';

import list from '@/data/reviews.json';

export const ReviewsList = () => {
  const { reviews } = list;
  return (
    <div className="flex gap-6 flex-wrap xl:flex-nowrap">
      <Slider section="reviews">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            author={review.author}
            text={review.text}
          />
        ))}
      </Slider>
      {/* {reviews.map((review) => (
        <li key={review.id}>
          <ReviewCard author={review.author} text={review.text} />
        </li>
      ))} */}
    </div>
  );
};
