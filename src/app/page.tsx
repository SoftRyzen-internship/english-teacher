import { executeQuery } from '@datocms/cda-client';
import { skillsQuery } from '@/api/queries';
import { SkillsQueryResult } from '@/api/types';
import { FAQ } from '@/sections/faq/faq';

import { fetchData } from '@/api/api';
import { Skills } from '@/sections/skills/skills';

import { Benefits } from '@/sections/benefits/benefits';
import { Reviews } from '@/sections/reviews/reviews';

import { About } from '@/sections/about/about';

import { Contact } from '@/sections/contact/contact';

export default async function Home() {
  let result: SkillsQueryResult | null = null;

  result = (await fetchData(skillsQuery)) as SkillsQueryResult;

  return (
    <main>
      {result && <Skills skillsData={result} />}
      <Benefits />
      <About />
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  );
}
