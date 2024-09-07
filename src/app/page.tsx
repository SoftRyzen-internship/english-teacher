import { executeQuery } from '@datocms/cda-client';
import { skillsQuery } from '@/api/queries';
import { SkillsQueryResult } from '@/api/types';
import { ReviewsList } from '@/components/common/reviews-list/reviews-list';
import { BurgerMenu } from '@/components/common/burger-menu/burger-menu';
import { Slider } from '@/components/ui/slider/slider';
import { FAQ } from '@/sections/faq/faq';
import { AboutInfo } from '@/components/common/about-info/about-info';
import { Benefits } from '@/sections/benefits/benefits';
import { Test } from '@/components/common/test/test';

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
      <FAQ />
      <div className="container">

       
        <BurgerMenu />

        <AboutInfo />

        <h2 className="section-title text-center my-4">
          Slider in Reviews section
        </h2>

        <ReviewsList />

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
        <Test />
      </div>
    </main>
  );
}
