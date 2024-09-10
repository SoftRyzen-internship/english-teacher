'use client';

import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';
import hero from '@/data/hero.json';
import { useDeviceType } from '@/hooks/use-device-type';
import Image from 'next/image';

export const Hero = () => {
  const { isDesktop } = useDeviceType();
  const { mainTitle, subtitle, button, img } = hero;
  return (
    <section className="hero-ellipses">
      <div className="relative container">
        <div className="pt-[119px] pb-[74px] md:pt-[150px] md:pb-[110px] xl:pt-[223px] xl:pb-[217px] ">
          <h1 className="relative z-[2] font-montserrat text-[32px] font-bold leading-[1.3] text-text1Icon3 mb-[30px] max-w-80 md:text-[56px] md:leading-[1.1] md:max-w-[534px]">
            <span className="highlight">{mainTitle.span1}</span>{' '}
            {mainTitle.title1}
            <span className="highlight">{mainTitle.span2}</span>{' '}
            {mainTitle.title2}
          </h1>
          <p className="font-comfortaa text-base font-semibold text-text1Icon3 mb-6 md:mb-[30px] md:text-lg md:font-medium leading-[1.4] md:max-w-[467px]">
            {subtitle}
          </p>
          <ScrollButton href={button.href} colorButton>
            {button.name}
          </ScrollButton>
        </div>
        {isDesktop && (
          <Image
            src={img.src}
            alt={img.alt}
            width={527}
            height={685}
            priority
            className="absolute right-12 bottom-0"
          />
        )}
      </div>
    </section>
  );
};
