import React from 'react';

import clsx from 'clsx';

import { SkillsCardProps } from './types';

export const SkillsCard = ({ name, number, index }: SkillsCardProps) => {
  return (
    <li
      className={clsx(
        'py-3 px-6 inline-flex w-fit gap-[14px] rounded-full items-center md:gap-5 xl:py-6 xl:px-12  xl:gap-6 md:absolute',
        index === 0 &&
          'bg-accent4 mdOnly:top-0 mdOnly:left-0 xl:top-[11px] xl:right-[26px] ',
        index === 1 &&
          'bg-accent3  mdOnly:right-0 mdOnly:top-4 xl:bottom-0 xl:left-[39px] ',
        index === 2 &&
          'bg-accent5Icon1 mdOnly:left-[5px] mdOnly:bottom-[10px] xl:right-0 xl:bottom-[89px]',
        index === 3 &&
          'bg-accent2 mdOnly:right-[19px] mdOnly:bottom-[10px] xl:left-0 xl:top-[47px] '
      )}
    >
      <p className="font-montserrat  font-bold leading-[1.1] text-2xl md:text-[32px] md:leading-[1.3] xl:text-[48px] xl:leading-[1.1]">
        {number}
      </p>
      <p className="md:text-[18px] md:font-medium leading-[1.4] xl:text-2xl xl:leading-[1.5] md:w-min xl:w-[174px] tracking-wide">
        {name}
      </p>
    </li>
  );
};
