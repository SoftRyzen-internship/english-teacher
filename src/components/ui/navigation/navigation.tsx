'use client';

import { Link as ScrollLink } from 'react-scroll';

import { INavigationProps } from './types';

import nav from '@/data/common.json';

export const Navigation = ({ onClick, className }: INavigationProps) => {
  const { navList } = nav;

  return (
    <nav className={className}>
      <ul className="flex flex-col gap-5 xl:flex-row xl:gap-[27px]">
        {navList.map(({ id, to, name }) => (
          <li key={id}>
            <ScrollLink
              to={to}
              href=""
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              ignoreCancelEvents={true}
              onClick={onClick}
              className="text-lg font-montserrat font-medium leading-normal text-text1Icon3 
              xl:font-comfortaa xl:leading-[1.4] 
              transition-colors duration-300  hover:text-buttonClickPink  focus:text-buttonClickPink"
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
