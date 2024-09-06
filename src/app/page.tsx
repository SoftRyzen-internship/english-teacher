import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';
import faq from '@/data/faq.json';

import { Accordion } from '@/components/common/accordion/accordion';

import { Logo } from '@/components/ui/logo/logo';
import { Navigation } from '@/components/ui/navigation/navigation';
import { executeQuery } from '@datocms/cda-client';
import React from 'react';
import { SocialLinks } from '@/components/ui/social-links/social-links';
import { skillsQuery } from '@/api/queries';
import { SkillsQueryResult } from '@/api/types';
import { Test } from '@/components/common/test/test';

import { BenefitsList } from '@/components/common/benefits-list/benefits-list';

import { ReviewsList } from '@/components/common/reviews-list/reviews-list';
import { Slider } from '@/components/ui/slider/slider';
import { FAQ } from '@/sections/faq/faq';
import { SkillsList } from '@/components/common/skills-list/skills-list';

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
      <FAQ />

      <div className="container">
        <h2 className="section-title text-center my-4">
          Slider in Reviews section
        </h2>
        <ReviewsList />
        {result && <SkillsList skillsData={result} />}

        <h2 className="section-title text-center my-4">
          Example of slider in Advantages section
        </h2>
        <Slider section="advantages">
          <div className="bg-slate-400 ">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates laudantium architecto provident minus quis? Eius illum
              sapiente voluptas libero, dolorum commodi laborum veniam incidunt
              ipsam id similique molestias aspernatur vitae nam dignissimos,
              dolores labore sed. Sit reprehenderit deserunt excepturi,
              molestiae modi esse doloribus. Doloremque eveniet quidem
              recusandae at laudantium fugit!
            </p>
          </div>
          <div className="bg-orange-400 ">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
              neque, eaque eius ipsum nihil consequatur, quod corrupti placeat
              iure enim dolores minus sunt. A dolorum pariatur modi, cumque,
              veritatis qui vitae distinctio porro aspernatur harum et nam
              commodi! Et, ipsa!
            </p>
          </div>
          <div className="bg-lime-400 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              dolorem! Doloremque explicabo repellendus adipisci veritatis
              necessitatibus consequuntur aut dicta ex, ipsa totam delectus
              repudiandae, nisi voluptates maiores dolores ipsum asperiores
              voluptatem architecto! Distinctio, dignissimos inventore? Delectus
              error, possimus tenetur officia maxime placeat dicta earum vitae
              eos hic amet fugiat necessitatibus, deserunt assumenda
              reprehenderit accusantium quis voluptatem quo. Placeat, quas
              aliquid?
            </p>
          </div>
        </Slider>

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
        <BenefitsList />
        <Test />
      </div>
    </main>
  );
}
