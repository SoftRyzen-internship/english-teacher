import footerData from '@/data/footer.json';
import { FooterLinks } from '../footer-links/footer-links';
import { AnotherPageLink } from '../another-page-link/another-page-link';

export const FooterBottomSection = () => {
  return (
    <div className="container flex flex-col xl:flex-row justify-between gap-4 py-6 xl:py-10 smOnly:items-center">
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 xl:gap-[30px] items-center">
        <p className="smOnly:text-[14px] font-medium md:font-semibold leading-[1.4] md:leading-[1.5px]">
          {footerData.links.title}
        </p>
        <FooterLinks />
      </div>
      <AnotherPageLink />
      <p className="smOnly:text-[14px] font-medium md:font-semibold leading-[1.4] md:leading-[1.5]">
        {footerData.copyright}
      </p>
    </div>
  );
};
