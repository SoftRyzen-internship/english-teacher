'use client';

import Link from 'next/link';
import { useIsHomePage } from '@/hooks/use-is-home-page';
import footerData from '@/data/footer.json';

export const AnotherPageLink = () => {
  const isHomePage = useIsHomePage();

  const { home, policy } = footerData.anotherPageTitle;
  const { href, title } = isHomePage ? policy : home;

  return (
    <Link
      href={href}
      className="smOnly:text-[14px] font-medium md:font-semibold leading-6 md:leading-[1.5] inline-flex w-fit hover:text-textClick focus:text-textClick transition-colors duration-300"
    >
      {title}
    </Link>
  );
};
