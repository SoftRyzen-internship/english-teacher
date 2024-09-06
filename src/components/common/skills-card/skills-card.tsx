import React from 'react';
import { SkillsCardProps } from './types';

export const SkillsCard = ({ name, number, id }: SkillsCardProps) => {
  return (
    <li className="">
      <span className="">{number}</span>
      <p className="">{name}</p>
    </li>
  );
};
