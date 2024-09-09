import React from 'react';
import clsx from 'clsx';
import { SocialLinks } from '@/components/ui/social-links/social-links';
import contactData from '@/data/contact.json';

export const ContactInfoBlock = () => {
  const { title, text } = contactData;
  const [firstWord, lastWord] = title.split('-англійська для ');

  return (
    <div className="xl:max-w-[534px]">
      <h2
        className={clsx(
          'section-title mb-5 text-center',
          'md:text-[48px] mdOnly:w-[610px] xl:mb-[30px] xl:text-left'
        )}
      >
        <span className="highlight">{firstWord}</span>-англійська для
        <span className="highlight ml-2 pl-1.5 pr-2">{lastWord}</span>
      </h2>
      <p className="text-[12px] leading-[1.5] smOnly:text-center md:text-[18px] md:font-medium xl:mb-10">
        {text}
      </p>
      <SocialLinks section="contacts" />
    </div>
  );
};
