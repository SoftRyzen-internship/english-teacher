import clsx from 'clsx';

import { SocialLink } from '../social-link/social-link';

import { SocialLinksProps } from './types';

import MailIcon from '@/../public/assets/images/icons/socials/mail.svg';
import InstagramIcon from '@/../public/assets/images/icons/socials/instagram.svg';
import TelegramIcon from '@/../public/assets/images/icons/socials/telegram.svg';
import commonData from '@/data/common.json';

const iconMap = {
  telegram: TelegramIcon as React.FC<React.SVGProps<SVGSVGElement>>,
  instagram: InstagramIcon as React.FC<React.SVGProps<SVGSVGElement>>,
  mail: MailIcon as React.FC<React.SVGProps<SVGSVGElement>>,
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ section }) => {
  return (
    <div
      className={clsx(
        'flex gap-6',
        section === 'contacts' && 'hidden xl:flex xl:flex-col',
        section === 'footer' && 'gap-4 md:gap-6 smOnly:mt-[18px] h-fit',
        section === 'mob-menu' && 'justify-center md:justify-start'
      )}
    >
      {commonData.socials.map((social) => {
        const IconComponent = iconMap[social.name as keyof typeof iconMap];
        return (
          <SocialLink
            key={social.id}
            icon={IconComponent}
            link={social.link}
            ariaLabel={social.ariaLabel}
            displayText={social.displayText}
            section={section}
          />
        );
      })}
    </div>
  );
};
