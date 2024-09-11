'use client';

import React from 'react';

import { useDeviceType } from '@/hooks/use-device-type';

import LeftQuestionMarks from '@/../public/assets/images/icons/faq/left-question-marks.svg';
import RightQuestionMarks from '@/../public/assets/images/icons/faq/right-question-marks.svg';

export const QuestionMarks = () => {
  const { isDesktop } = useDeviceType();

  if (!isDesktop) return null;
  return (
    <>
      <LeftQuestionMarks className="absolute left-14 top-[150px]" />
      <RightQuestionMarks className="absolute right-12 top-[100px]" />
    </>
  );
};
