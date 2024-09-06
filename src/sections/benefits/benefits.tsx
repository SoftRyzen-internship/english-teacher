import { BenefitsList } from '@/components/common/benefits-list/benefits-list';
import benefitsData from '@/data/benefits.json';

export const Benefits = () => {
  return (
    <section className="py-[25px] md:pb-[50px] xl:py-20">
      <div className="container">
        <h2 className="section-title text-center mb-[30px] xl:mb-16">
          {benefitsData.title}
        </h2>
        <BenefitsList />
      </div>
    </section>
  );
};
