import Link from 'next/link';

import LogoIcon from '@/../public/assets/images/icons/logo.svg';

export const Logo = () => {
  return (
    <Link href="/" className="inline-block">
      <LogoIcon
        width={142}
        height={60}
        className="hover:scale-105 focus:scale-105 transition-all ease duration-300"
      />
    </Link>
  );
};
