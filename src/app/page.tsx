import { executeQuery } from '@datocms/cda-client';
import { skillsQuery } from '@/api/queries';
import { SkillsQueryResult } from '@/api/types';
import { ReviewsList } from '@/components/common/reviews-list/reviews-list';
import { BurgerMenu } from '@/components/common/burger-menu/burger-menu';
import { Slider } from '@/components/ui/slider/slider';
import { FAQ } from '@/sections/faq/faq';
import { AboutInfo } from '@/components/common/about-info/about-info';
import { Benefits } from '@/sections/benefits/benefits';
import { Reviews } from '@/sections/reviews/reviews';
import { TelegramButton } from '@/components/ui/test-button';

export default async function Home() {
  const token = process.env.DATOCMS_READONLY_TOKEN;

  if (!token) {
    throw new Error('DATOCMS_READONLY_TOKEN is not defined');
  }

  const result: SkillsQueryResult = await executeQuery(skillsQuery, {
    token: token,
  });

  return (
    <main>
      <Benefits />
      <Reviews />
      <FAQ />
      <div className="container">
        <BurgerMenu />

        <TelegramButton>Press me</TelegramButton>

        <AboutInfo />
      </div>
    </main>
  );
}
