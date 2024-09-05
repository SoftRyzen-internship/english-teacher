import { ReviewCard } from '../review-card/review-card';

import list from '@/data/reviews.json';

export const ReviewsList = () => {
  const { reviews } = list;
  return (
    <ul className="flex gap-6 flex-wrap xl:flex-nowrap">
      {reviews.map((review) => (
        <li key={review.id}>
          <ReviewCard author={review.author} text={review.text} />
        </li>
      ))}
    </ul>
  );
};
