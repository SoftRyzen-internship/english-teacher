import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';

import { Logo } from '@/components/ui/logo/logo';

export default function Home() {
  return (
    <main>
      <div className="container">
        <Logo />
        <br />

        <ScrollButton section="header" href="contacts">
          Записатись
        </ScrollButton>
        <br />
        <ScrollButton section="mobile-menu" href="contacts">
          Записатись
        </ScrollButton>
        <br />
        <ScrollButton section="hero" href="contacts">
          Безплатна консультація
        </ScrollButton>

        <p className="font-montserrat bg-accent1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          architecto minima. Nihil inventore tempora minus similique eaque ea
          voluptate, laboriosam quis quia molestias deserunt fugiat asperiores
          repellendus molestiae esse eveniet?
        </p>

        <h2 className='section-title'>Title h2</h2>
        <h3 className='subsection-title'>Title h3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          architecto minima. Nihil inventore tempora minus similique eaque ea
          voluptate, laboriosam quis quia molestias deserunt fugiat asperiores
          repellendus molestiae esse eveniet?
        </p>
      </div>
    </main>
  );
}
