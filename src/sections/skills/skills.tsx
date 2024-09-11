import React from 'react';

import { SkillsList } from '@/components/common/skills-list/skills-list';
import { SkillsListProps } from '@/components/common/skills-list/types';

import data from '@/data/skills.json';

export const Skills = ({ skillsData }: SkillsListProps) => {
  return (
    <section className="pt-[50px] xl:py-[80px]">
      <div className="container">
        <h2 className="section-title mb-[30px] xl:mb-16 md:w-[465px] mx-auto text-center xl:w-[733px]">
          {data.title}
        </h2>
        <SkillsList skillsData={skillsData} />
      </div>
    </section>
  );
};
