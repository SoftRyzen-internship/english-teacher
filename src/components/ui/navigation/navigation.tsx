'use client';

import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

import { useIsHomePage } from '@/hooks/use-is-home-page';

import { INavigationProps } from './types';

import nav from '@/data/common.json';

export const Navigation = ({ onClick, className }: INavigationProps) => {
  const isHomePage = useIsHomePage();
  const { navList } = nav;

  const style =
    'text-lg font-montserrat font-medium leading-normal text-text1Icon3 xl:font-comfortaa xl:leading-[1.4] transition-colors duration-300  hover:text-buttonClickPink  focus:text-buttonClickPink';

  return (
    <nav className={className}>
      <ul className="flex flex-col gap-5 xl:flex-row xl:gap-[27px]">
        {navList.map(({ id, to, name }) => (
          <li key={id}>
            {isHomePage ? (
              <ScrollLink
                to={to}
                href=""
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                ignoreCancelEvents={true}
                onClick={onClick}
                className={style}
              >
                {name}
              </ScrollLink>
            ) : (
              <Link href={`/#${to}`} onClick={onClick} className={style}>
                {name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
