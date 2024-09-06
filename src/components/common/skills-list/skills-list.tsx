import React from 'react';

import { SkillsListProps } from './types';
import { SkillsCard } from '../skills-card/skills-card';

export const SkillsList = ({ skillsData }: SkillsListProps) => {
  return (
    <ul className="">
      {skillsData.teacherSkillsProfile.skillPlate.map((skill) => (
        <SkillsCard
          key={skill.id}
          id={skill.id}
          number={skill.number}
          name={skill.name}
        />
      ))}
    </ul>
  );
};
