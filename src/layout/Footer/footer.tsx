import { FooterBottomSection } from '@/components/common/footer-bottom-section/footer-bottom-section';
import { FooterTopSection } from '@/components/common/footer-top-section/footer-top-section';

export const Footer = () => {
  return (
    <footer className="bg-bgButtonInactive text-text3 mt-auto font-normal">
      <FooterTopSection />
      <div className="w-full h-[1px] bg-stokeDisabled"></div>
      <FooterBottomSection />
    </footer>
  );
};
