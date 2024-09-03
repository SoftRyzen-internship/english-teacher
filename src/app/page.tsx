import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';

export default function Home() {
  return (
    <main>
      <div className="container font-montserrat text-base">
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
