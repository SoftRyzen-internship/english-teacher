import { ReviewsList } from '@/components/common/reviews-list/reviews-list';
import reviewsData from '@/data/reviews.json';

export const Reviews = () => {
  return (
    <section className="pt-[50px] md:pb-[50px] xl:py-20">
      <div className="container">
        <h2 className="section-title text-center mb-[30px] xl:mb-16">
          {reviewsData.title}
        </h2>
        <ReviewsList />
      </div>
    </section>
  );
};
