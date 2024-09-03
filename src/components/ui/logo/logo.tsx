import Link from 'next/link';

import clsx from 'clsx';

import LogoIcon from '@/../public/assets/images/icons/logo.svg';

import { LogoProps } from './types';

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={clsx('inline-block', className)}>
      <LogoIcon
        width={142}
        height={60}
        className="hover:scale-105 focus:scale-105 transition-all ease duration-300"
      />
    </Link>
  );
};
