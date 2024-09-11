import React from 'react';

import { BenefitsCardProps } from './types';

import Student from '@/../public/assets/images/icons/advantages/individual-lessons.svg';
import Bell from '@/../public/assets/images/icons/advantages/bell.svg';
import Book from '@/../public/assets/images/icons/advantages/educational-bonuses.svg';

export const BenefitsCard = ({ title, name, text }: BenefitsCardProps) => {
  return (
    <div className="bg-bgButtonInactive rounded-2xl flex flex-col p-6 md:p-10 md:px-11 text-left gap-[18px] md:w-[511px] md:mx-auto md:gap-5 xl:w-full xl:gap-6">
      {name === 'student' && <Student width={70} height={64} />}
      {name === 'bell' && <Bell width={49} height={64} />}
      {name === 'book' && <Book width={74} height={64} />}
      <h3 className="section-subtitle xl:min-h-[72px]">{title}</h3>
      <p className="min-h-[263px] md:min-h-[163px] xl:min-h-60">{text}</p>
    </div>
  );
};
