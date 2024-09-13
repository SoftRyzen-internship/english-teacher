import { gsap } from 'gsap';

import { AnimationHeroProps, OptionsCardProps } from './types';

export const animationHero = ({ elements, isDesktop }: AnimationHeroProps) => {
  if (!isDesktop) return;

  gsap.set(
    elements.map((el) => el.current),
    {
      x: '-200%',
      opacity: 0,
    }
  );

  const duration = 1;

  gsap.to(elements[0].current, { x: 0, opacity: 1, duration, delay: 0.3 });
  gsap.to(elements[1].current, { x: 0, opacity: 1, duration, delay: 0.3 });
  gsap.to(elements[2].current, { x: 0, opacity: 1, duration, delay: 0.3 });
  gsap.to(elements[3].current, { x: 0, opacity: 1, duration, delay: 0.5 });
  gsap.to(elements[4].current, { x: 0, opacity: 1, duration, delay: 0.7 });
};

export const optionsCard = ({ card, index }: OptionsCardProps) => ({
  opacity: 0,
  y: 50,
  duration: 0.5,
  scrollTrigger: {
    trigger: card,
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    once: true,
  },
  delay: index * 0.6,
});
