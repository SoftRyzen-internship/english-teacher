import Link from 'next/link';

import clsx from 'clsx';

import LogoIcon from '@/../public/assets/images/icons/logo.svg';

import { LogoProps } from './types';

import common from '@/data/common.json';

export const Logo = ({ className }: LogoProps) => {
  const { ariaLabel } = common.logo;
  return (
    <Link
      href="/"
      className={clsx('inline-block', className)}
      aria-label={ariaLabel}
    >
      <LogoIcon
        width={142}
        height={60}
        className="hover:scale-105 focus:scale-105 transition-all ease duration-300"
      />
    </Link>
  );
};
