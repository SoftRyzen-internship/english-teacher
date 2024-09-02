'use client';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { ScrollButtonProps } from './types';
import clsx from 'clsx';

export const ScrollButton = ({
  children,
  section,
  href,
}: ScrollButtonProps) => {
  let styles = '';
  switch (section) {
    case 'header':
      styles = 'border solid  px-[60px] border-text1icon3 border-black';
      break;
    case 'mobile-menu':
      styles =
        'px-[60px] border solid  border-text1icon3 border-black smOnly:w-full md:w-[351px]';
      break;
    case 'hero':
      styles = 'px-[25px] bg-yellow-400 bg-accent-1 smOnly:w-full md:w-[261px]';
      break;
    case 'about':
      styles = 'px-[25px] bg-yellow-400 bg-accent-1 smOnly:w-full md:w-[261px]';
      break;
    default:
      styles = '';
      break;
  }
  return (
    <ScrollLink
      to={href}
      href=""
      smooth={true}
      offset={0}
      duration={500}
      className={clsx(
        styles,
        'h-[56px] inline-flex justify-center items-center min-w-[221px] rounded-[20px] text-base font-bold leading-normal'
      )}
    >
      {children}
    </ScrollLink>
  );
};
