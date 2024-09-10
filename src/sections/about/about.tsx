import { AboutInfo } from '@/components/common/about-info/about-info';
import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';
import React from 'react';
import data from '@/data/about.json';
import Image from 'next/image';

export const About = () => {
  return (
    <section className="pt-[50px] md:py-[50px] xl:py-[80px]">
      <div className="container flex flex-col gap-[30px] md:gap-10 xl:flex-row xl:justify-between">
        <div className="flex flex-col gap-[30px] md:gap-10 xl:justify-center xl:gap-[30px]">
          <AboutInfo />
          <ScrollButton
            className="md:mx-auto"
            colorButton={true}
            href={data.href}
          >
            {data.button}
          </ScrollButton>
        </div>
        <div className="about-bg relative  flex justify-center h-[340px] rounded-2xl bg-bgDefault md:h-[609px] xl:h-[714px] xl:w-[596px]">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={485}
            height={608}
            className="absolute bottom-0 w-[262px] h-[336px] md:w-[485px] md:h-[608px]"
          />
        </div>
      </div>
    </section>
  );
};
