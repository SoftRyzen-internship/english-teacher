import React from 'react';

import { SkillsCard } from '../skills-card/skills-card';

import { SkillsListProps } from './types';

export const SkillsList = ({ skillsData }: SkillsListProps) => {
  return (
    <ul className=" girl flex flex-col gap-5 justify-center items-center md:h-[312px] md:gap-0 md:relative xl:h-[480px]  xl:w-[1167px] xl:mx-auto">
      {skillsData.teacherSkillsProfile.skillPlate.map((skill, index) => (
        <SkillsCard
          key={skill.id}
          index={index}
          number={skill.number}
          name={skill.name}
        />
      ))}
    </ul>
  );
};
