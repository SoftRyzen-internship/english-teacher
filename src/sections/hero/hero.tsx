// 'use client';

// import Image from 'next/image';

// import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';

// import { useDeviceType } from '@/hooks/use-device-type';

// import hero from '@/data/hero.json';

// export const Hero = () => {
//   const { isDesktop } = useDeviceType();
//   const { mainTitle, subtitle, button, img } = hero;
//   return (
//     <section className="hero-ellipses">
//       <div className="relative container">
//         <div className="pt-[119px] pb-[74px] md:pt-[150px] md:pb-[110px] xl:pt-[223px] xl:pb-[217px] ">
//           <h1 className="relative z-[2] font-montserrat text-[32px] font-bold leading-[1.3] text-text1Icon3 mb-[30px] max-w-80 md:text-[56px] md:leading-[1.1] md:max-w-[534px]">
//             <span className="highlight">{mainTitle.span1}</span>{' '}
//             {mainTitle.title1}
//             <span className="highlight">{mainTitle.span2}</span>{' '}
//             {mainTitle.title2}
//           </h1>
//           <p className="font-comfortaa text-base font-semibold text-text1Icon3 mb-6 md:mb-[30px] md:text-lg md:font-medium leading-[1.4] md:max-w-[467px]">
//             {subtitle}
//           </p>
//           <ScrollButton href={button.href} colorButton>
//             {button.name}
//           </ScrollButton>
//         </div>
//         {isDesktop && (
//           <Image
//             src={img.src}
//             alt={img.alt}
//             width={527}
//             height={685}
//             priority
//             className="absolute right-12 bottom-0"
//           />
//         )}
//       </div>
//     </section>
//   );
// };

'use client';

import { useEffect, useRef } from 'react';

import Image from 'next/image';

import gsap from 'gsap';

import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';

import { useDeviceType } from '@/hooks/use-device-type';

import hero from '@/data/hero.json';

export const Hero = () => {
  const { isDesktop } = useDeviceType();
  const { mainTitle, subtitle, button, img } = hero;
  const span1 = useRef(null);
  const h1 = useRef(null);
  const span2 = useRef(null);
  const text = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    if (isDesktop) {
      gsap.set(
        [span1.current, h1.current, span2.current, text.current, btn.current],
        {
          x: '-200%',
          opacity: 0,
        }
      );

      gsap.to(span1.current, { x: 0, opacity: 1, duration: 0.5, delay: 0.3 });
      gsap.to(h1.current, { x: 0, opacity: 1, duration: 0.5, delay: 0.3 });
      gsap.to(span2.current, { x: 0, opacity: 1, duration: 0.5, delay: 0.3 });
      gsap.to(text.current, { x: 0, opacity: 1, duration: 0.5, delay: 0.5 });
      gsap.to(btn.current, { x: 0, opacity: 1, duration: 0.5, delay: 0.8 });
    }
  }, [isDesktop]);

  return (
    <section className="hero-ellipses">
      <div className="relative container">
        <div className="pt-[119px] pb-[74px] md:pt-[150px] md:pb-[110px] xl:pt-[223px] xl:pb-[217px] ">
          <h1
            ref={h1}
            className="relative z-[2] font-montserrat text-[32px] font-bold leading-[1.3] text-text1Icon3 mb-[30px] max-w-80 md:text-[56px] md:leading-[1.1] md:max-w-[534px]"
          >
            <span ref={span1} className="highlight">
              {mainTitle.span1}
            </span>{' '}
            <span ref={span1}>{mainTitle.title1}</span>
            <span ref={span2} className="highlight">
              {mainTitle.span2}
            </span>{' '}
            <span ref={span2}>{mainTitle.title2}</span>
          </h1>
          <p
            ref={text}
            className="font-comfortaa text-base font-semibold text-text1Icon3 mb-6 md:mb-[30px] md:text-lg md:font-medium leading-[1.4] md:max-w-[467px]"
          >
            {subtitle}
          </p>
          <div ref={btn}>
            <ScrollButton href={button.href} colorButton>
              {button.name}
            </ScrollButton>
          </div>
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
