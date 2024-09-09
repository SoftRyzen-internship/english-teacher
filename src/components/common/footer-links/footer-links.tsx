import Link from 'next/link';
import GoItIcon from '@/../../public/assets/images/icons/partners/goit.svg';
import SoftRyzenIcon from '@/../../public/assets/images/icons/partners/softryzen.svg';
import footerData from '@/data/footer.json';
import { LinkKey } from '@/layout/ooter/types';

const iconComponents = {
  goit: GoItIcon,
  softryzen: SoftRyzenIcon,
};

const links = footerData.links.linksList.map((link) => ({
  ...link,
  component: iconComponents[link.icon as LinkKey],
}));

export const FooterLinks = () => {
  return (
    <div className="flex gap-5">
      {links.map(
        ({ id, href, ariaLabel, component: IconComponent, width, height }) => (
          <Link
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={ariaLabel}
            className="group"
          >
            <IconComponent
              width={width}
              height={height}
              className="group-hover:text-textClick group-focus:text-textClick transition-colors duration-300"
            />
          </Link>
        )
      )}
    </div>
  );
};
