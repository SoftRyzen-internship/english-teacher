import React from 'react';

import { SkillsListProps } from './types';
import { SkillsCard } from '../skills-card/skills-card';

export const SkillsList = ({ skillsData }: SkillsListProps) => {
  return (
    <ul className="flex flex-col gap-5 justify-center items-center">
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
