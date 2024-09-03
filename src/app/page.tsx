import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';

import { Logo } from '@/components/ui/logo/logo';

export default function Home() {
  return (
    <main>
      <div className="container font-montserrat">
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
      </div>
    </main>
  );
}
