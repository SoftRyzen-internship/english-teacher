import React from 'react';
import { SkillsCardProps } from './types';
import clsx from 'clsx';

export const SkillsCard = ({ name, number, index }: SkillsCardProps) => {
  const getBackgroundColor = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-accent4';
      case 1:
        return 'bg-accent3';
      case 2:
        return 'bg-accent5Icon1';
      default:
        return 'bg-accent2';
    }
  };

  return (
    <li
      className={clsx(
        'py-3 px-6 inline-flex w-fit gap-[14px] rounded-full',
        getBackgroundColor(index)
      )}
    >
      <p className="font-montserrat font-bold leading-[1.1]">{number}</p>
      <p className="">{name}</p>
    </li>
  );
};
