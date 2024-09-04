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
          <FAQ.Trigger className="font-montserrat w-full inline-flex justify-between items-center cursor-pointer md:gap-12 leading-[27px]">
            <span className="flex-1  smOnly:max-w-[75%] text-left text-base md:text-2xl">
              {item.question}
            </span>

            <Arrow
              className={clsx(
                'mr-0 ml-auto transition-transform duration-300',
                { invisible: openItem === `item-${item.id}` }
              )}
              width={25}
              height={25}
            />
          </FAQ.Trigger>

          <FAQ.Content className="mt-[30px] lg:mt-6">
            <FAQ.Trigger className=" w-full  font-comfortaa flex justify-between self-stretch  md:gap-8 items-end">
              <span className="flex-1 smOnly:max-w-[75%] text-left text-sm md:text-lg">
                {item.answer}
              </span>
              <Arrow
                className=" transition-transform duration-300 rotate-180 "
                width={25}
                height={25}
              />
            </FAQ.Trigger>
          </FAQ.Content>
        </FAQ.Item>
      ))}
    </FAQ.Root>
  );
};
