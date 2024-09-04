'use client';
import React, { useState } from 'react';
import { AccordionProps } from './types';
import * as FAQ from '@radix-ui/react-accordion';
import Arrow from '@/../public/assets/images/icons/arrow-down.svg';
import clsx from 'clsx';

export const Accordion = ({ faqs }: AccordionProps) => {
  const [openItem, setOpenItem] = useState<string>('item-2');

  return (
    <FAQ.Root
      type="single"
      defaultValue="item-2"
      collapsible
      className="flex flex-col gap-5 md:gap-6 max-w-[810px] mx-auto"
      onValueChange={(value) => setOpenItem(value)}
    >
      {faqs.map((item) => (
        <FAQ.Item
          value={`item-${item.id}`}
          key={item.id}
          className="border border-stokeDisabled p-5 rounded-[25px] md:p-6 font-medium"
        >
          <FAQ.Trigger className="font-montserrat w-full inline-flex justify-between items-start cursor-pointer md:gap-12 leading-[27px] ">
            <span className="flex-1  smOnly:max-w-[75%] text-left text-lg leading-[1.5] md:text-2xl">
              {item.question}
            </span>

            <Arrow
              className={clsx('  transition-transform duration-300', {
                'transition-transform duration-300 rotate-180':
                  openItem === `item-${item.id}`,
              })}
              width={25}
              height={25}
            />
          </FAQ.Trigger>

          <FAQ.Content className="mt-[30px] lg:mt-6">
            <FAQ.Trigger className=" w-full cursor-pointer font-comfortaa flex justify-between self-stretch  md:gap-8 items-end">
              <span className="flex-1 smOnly:max-w-[75%] md:pr-[73px] text-left leading-[1.5] text-sm md:leading-[1.4] md:text-lg pr">
                {item.answer}
              </span>
            </FAQ.Trigger>
          </FAQ.Content>
        </FAQ.Item>
      ))}
    </FAQ.Root>
  );
};
