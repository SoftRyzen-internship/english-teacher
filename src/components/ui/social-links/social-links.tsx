import TelegramIcon from '@/../public/assets/images/icons/socials/telegram.svg';
import InstagramIcon from '@/../public/assets/images/icons/socials/instagram.svg';
import MailIcon from '@/../public/assets/images/icons/socials/mail.svg';
import { SocialLinksProps } from './types';
import commonData from '@/data/common.json';

const iconMap = {
  telegram: TelegramIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
} ;

export const SocialLinks: React.FC<SocialLinksProps> = ({ section }) => {
  return (
    <ul className='flex gap-6'>
      {commonData.socials.map((social) => {
        const IconComponent = iconMap[social.name as keyof typeof iconMap];

        return (
          <li key={social.id} className="flex items-center">
            <a href={social.link} aria-label={social.ariaLabel} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              {IconComponent && <IconComponent className="w-[50px] h-[50px] fill-accent5Icon1 hover:fill-buttonClickPink" />}
              {section && <span>{social.link}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
};