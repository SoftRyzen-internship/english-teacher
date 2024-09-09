import { Logo } from '@/components/ui/logo/logo';
import { SocialLinks } from '@/components/ui/social-links/social-links';

export const FooterTopSection: React.FC = () => {
  return (
    <div className="container flex justify-between pt-[25px] pb-[28px] xl:pt-10 xl:pb-[60px]">
      <Logo />
      <SocialLinks section="footer" />
    </div>
  );
};
