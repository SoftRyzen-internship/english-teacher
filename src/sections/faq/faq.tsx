import React from 'react';

import { Accordion } from '@/components/common/accordion/accordion';
import { QuestionMarks } from '@/components/common/question-marks.tsx/question-marks';

import faq from '@/data/faq.json';

export const FAQ = () => {
  return (
    <section id="faq" className="py-[50px] xl:py-[80px] ">
      <div className="container relative">
        <QuestionMarks />
        <h2 className="section-title text-center mb-[30px] xl:mb-[54px] xl:w-[546px] xl:mx-auto">
          {faq.title}
        </h2>
        <Accordion faqs={faq.accordion} />
      </div>
    </section>
  );
};
