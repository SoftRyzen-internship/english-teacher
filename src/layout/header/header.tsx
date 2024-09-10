'use client';

import { BurgerMenu } from '@/components/common/burger-menu/burger-menu';
import { Logo } from '@/components/ui/logo/logo';
import { Navigation } from '@/components/ui/navigation/navigation';
import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';
import { useDeviceType } from '@/hooks/use-device-type';

import data from '@/data/common.json';

export const Header = () => {
  const { isDesktop, isTablet, isMobile } = useDeviceType();
  const { header } = data;

  return (
    <header className="absolute w-full z-[3]">
      <div className="container flex justify-between items-center py-5">
        <Logo />
        {isDesktop && (
          <>
            <Navigation />
            <ScrollButton href={header.href} borderButton>
              {header.button}
            </ScrollButton>
          </>
        )}
        {(isTablet || isMobile) && <BurgerMenu />}
      </div>
    </header>
  );
};
