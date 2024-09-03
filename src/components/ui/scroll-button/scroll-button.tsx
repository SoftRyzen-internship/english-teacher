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
      styles =
        'border solid  px-[60px] border-text1Icon3 hover:bg-buttonHoverPink hover:border-buttonHoverPink focus:bg-buttonClickPink focus:border-buttonClickPink';
      break;
    case 'mobile-menu':
      styles =
        'px-[60px] border solid  border-text1Icon3  smOnly:w-full md:w-[351px] hover:bg-buttonHoverPink hover:border-buttonHoverPink focus:bg-buttonClickPink focus:border-buttonClickPink';
      break;
    case 'hero':
      styles =
        'px-[25px]  bg-accent1 smOnly:w-full hover:bg-buttonHover focus:bg-buttonClickYellow';
      break;
    case 'about':
      styles =
        'px-[25px] bg-accent1 smOnly:w-full hover:bg-buttonHover focus:bg-buttonClickYellow';
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
        'h-[56px] inline-flex justify-center cursor-pointer items-center min-w-[221px] rounded-[20px] text-base font-bold leading-normal transition-colors duration-300'
      )}
    >
      {children}
    </ScrollLink>
  );
};
