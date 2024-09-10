'use client';

import Link from 'next/link';

import { BurgerMenu } from '@/components/common/burger-menu/burger-menu';
import { Logo } from '@/components/ui/logo/logo';
import { Navigation } from '@/components/ui/navigation/navigation';
import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';

import { useDeviceType } from '@/hooks/use-device-type';
import { useIsHomePage } from '@/hooks/use-is-home-page';

import data from '@/data/common.json';

export const Header = () => {
  const home = useIsHomePage();
  const { isDesktop, isTablet, isMobile } = useDeviceType();
  const { header } = data;

  return (
    <header className="absolute w-full z-[3]">
      <div className="container flex justify-between items-center py-5">
        <Logo />
        {isDesktop && (
          <>
            <Navigation />
            {home ? (
              <ScrollButton href={header.href} borderButton>
                {header.button}
              </ScrollButton>
            ) : (
              <Link
                href={`/#${header.href}`}
                className="h-[56px] inline-flex font-montserrat justify-center cursor-pointer smOnly:w-full items-center min-w-[221px] rounded-[20px] text-base font-bold leading-normal transition-colors duration-300 border solid px-[60px] border-text1Icon3 mdOnly:w-[351px] hover:bg-buttonHoverPink hover:border-buttonHoverPink focus:bg-buttonClickPink focus:border-buttonClickPink"
              >
                {header.button}
              </Link>
            )}
          </>
        )}
        {(isTablet || isMobile) && <BurgerMenu />}
      </div>
    </header>
  );
};
