import { ContactForm } from '@/components/common/contact-form/contact-form';
import { ContactInfoBlock } from '@/components/common/contact-info-block/contact-info-block';

export const Contact = () => {
  return (
    <section id="contacts" className="py-[50px] xl:py-[80px] bg-contact">
      <div className="container flex flex-col items-center gap-[30px] md:gap-[50px] xl:flex-row xl:gap-[86px] xl:items-start">
        <ContactInfoBlock />
        <ContactForm />
      </div>
    </section>
  );
};
