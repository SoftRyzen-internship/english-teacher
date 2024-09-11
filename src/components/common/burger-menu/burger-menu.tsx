'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { Navigation } from '@/components/ui/navigation/navigation';
import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';
import { SocialLinks } from '@/components/ui/social-links/social-links';
import { Logo } from '@/components/ui/logo/logo';

import { useIsHomePage } from '@/hooks/use-is-home-page';

import Burger from '@/../public/assets/images/icons/burger.svg';
import IconClose from '@/../public/assets/images/icons/ico-x.svg';
import data from '@/data/common.json';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const home = useIsHomePage();

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={data.burger.burgerAriaLabel}
          className="inline-block "
        >
          <Burger width={24} height={24} className="stroke-text1Icon3 " />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed z-10 inset-0 bg-semiTransparentGray" />
        <Dialog.Content
          aria-describedby={undefined}
          className=" bg-white  w-full h-full fixed z-10 top-0 right-0 py-5 px-5  md:py-5 md:w-[462px] md:h-[510px] "
        >
          <VisuallyHidden asChild>
            <Dialog.Title>{data.burger.title}</Dialog.Title>
          </VisuallyHidden>

          <div className="flex flex-col gap-11 smOnly:max-w-[440px] relative smOnly:mx-auto md:gap-10 md:pt-[62px]">
            <Dialog.Close
              asChild
              className="absolute top-[18px] right-0 md:right-5"
            >
              <button
                type="button"
                aria-label={data.burger.closeBtnAriaLabel}
                className="inline-block"
              >
                <IconClose width={24} height={24} />
              </button>
            </Dialog.Close>
            <Logo className="md:hidden" />

            <Navigation onClick={() => setIsOpen(false)} />
            {home ? (
              <ScrollButton
                href={data.burger.href}
                borderButton={true}
                onClick={() => setIsOpen(false)}
              >
                {data.burger.scrollBtn}
              </ScrollButton>
            ) : (
              <Link
                href={`/#${data.burger.href}`}
                onClick={() => setIsOpen(false)}
                className="h-[56px] inline-flex font-montserrat justify-center cursor-pointer smOnly:w-full items-center min-w-[221px] rounded-[20px] text-base font-bold leading-normal transition-colors duration-300 border solid px-[60px] border-text1Icon3 mdOnly:w-[351px] hover:bg-buttonHoverPink hover:border-buttonHoverPink focus:bg-buttonClickPink focus:border-buttonClickPink"
              >
                {data.burger.scrollBtn}
              </Link>
            )}
            <SocialLinks section="mob-menu" />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
