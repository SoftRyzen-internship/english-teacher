'use client';

import React from 'react';

import clsx from 'clsx';

import { Link as ScrollLink } from 'react-scroll';

import { ScrollButtonProps } from './types';

export const ScrollButton = ({
  children,
  colorButton,
  borderButton,
  href,
  onClick,
  className,
}: ScrollButtonProps) => {
  const styles = clsx(
    'h-[56px] inline-flex font-montserrat justify-center cursor-pointer smOnly:w-full items-center min-w-[221px] rounded-[20px] text-base font-bold leading-normal transition-colors duration-300',
    className,
    {
      'border solid px-[60px] border-text1Icon3 mdOnly:w-[351px] hover:bg-buttonHoverPink hover:border-buttonHoverPink focus:bg-buttonClickPink focus:border-buttonClickPink':
        borderButton,
      'px-[25px] w-[261px] bg-accent1 hover:bg-buttonHover focus:bg-buttonClickYellow':
        colorButton,
    }
  );

  return (
    <ScrollLink
      to={href}
      href=""
      smooth={true}
      offset={0}
      duration={500}
      className={styles}
      onClick={onClick}
    >
      {children}
    </ScrollLink>
  );
};
