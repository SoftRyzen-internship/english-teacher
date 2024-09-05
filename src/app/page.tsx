import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';
import faq from '@/data/fag.json';

import { Accordion } from '@/components/common/accordion/accordion';

import { Logo } from '@/components/ui/logo/logo';
import { Navigation } from '@/components/ui/navigation/navigation';
import { executeQuery } from '@datocms/cda-client';
import React from 'react';
import { SocialLinks } from '@/components/ui/social-links/social-links';
import { skillsQuery } from '@/api/queries';
import { SkillsQueryResult } from '@/api/types';
import { Test } from '@/components/common/test/test';
import { ReviewsList } from '@/components/common/reviews-list/reviews-list';
import { BurgerMenu } from '@/components/common/burger-menu/burger-menu';

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
      <div className="container">
        <BurgerMenu />

        <ReviewsList />
        <div>
          {result.teacherSkillsProfile.skillPlate.map((skill) => (
            <div key={skill.id}>
              <p>{skill.number}</p>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        <Logo />
        <Navigation />
        <br />
        <ScrollButton borderButton={true} href="contacts">
          Записатись
        </ScrollButton>
        <br />
        <ScrollButton colorButton={true} href="contacts">
          Безплатна консультація
        </ScrollButton>

        <p className="font-montserrat bg-accent1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          architecto minima. Nihil inventore tempora minus similique eaque ea
          voluptate, laboriosam quis quia molestias deserunt fugiat asperiores
          repellendus molestiae esse eveniet?
        </p>

        <h2 className="section-title">Title h2</h2>
        <h3 className="section-subtitle">Title h3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          architecto minima. Nihil inventore tempora minus similique eaque ea
          voluptate, laboriosam quis quia molestias deserunt fugiat asperiores
          repellendus molestiae esse eveniet?
        </p>

        <SocialLinks section="footer" />
        <SocialLinks section="contacts" />
        <SocialLinks />
        <Accordion faqs={faq.accordion} />

        <Test />
      </div>
    </main>
  );
}
