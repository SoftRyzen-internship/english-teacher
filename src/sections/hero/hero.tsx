import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';
import hero from '@/data/hero.json';

export const Hero = () => {
  const { mainTitle, subtitle, button } = hero;
  return (
    <section className="bg-bgDefault">
      <div className="container pt-[119px] pb-[74px]">
        <div>
          <h1 className="font-montserrat text-[32px] font-bold leading-[1.3] text-text1Icon3 mb-[30px]">
            <span className="highlight">{mainTitle.span1}</span>{' '}
            {mainTitle.title1}
            <span>{mainTitle.span2}</span>
            {mainTitle.title2}
          </h1>
          <p className="font-comfortaa text-base font-semibold text-text1Icon3 mb-6">
            {subtitle}
          </p>
          <ScrollButton href={button.href} colorButton>
            {button.name}
          </ScrollButton>
        </div>
      </div>
    </section>
  );
};
