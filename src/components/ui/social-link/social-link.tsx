import React from 'react';

import clsx from 'clsx';

import { SocialLinkProps } from './types';

export const SocialLink: React.FC<SocialLinkProps> = ({
  icon: IconComponent,
  link,
  ariaLabel,
  displayText,
  section,
}) => {
  return (
    <a
      href={link}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="inline-flex items-center gap-4 text-accent5Icon1 transition-all duration-300 hover:text-buttonClickPink group max-w-max"
    >
      <IconComponent
        className={clsx(
          section === 'footer'
            ? 'w-[30px] h-[30px] md:w-[50px] md:h-[50px]'
            : section === 'contacts'
              ? 'w-[40px] h-[40px]'
              : 'w-[50px] h-[50px]'
        )}
      />
      {section === 'contacts' && (
        <span className="text-text2 group-hover:text-buttonClickPink transition-all duration-300">
          {displayText}
        </span>
      )}
    </a>
  );
};
