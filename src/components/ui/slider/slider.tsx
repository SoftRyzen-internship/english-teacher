'use client';

import 'swiper/css';

import { Children, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import clsx from 'clsx';

import { SliderProps } from './types';

import PrevButtonIcon from '@/../public/assets/images/icons/arrow-prev.svg';
import NextButtonIcon from '@/../public/assets/images/icons/arrow-next.svg';
import { useDeviceType } from '@/hooks/use-device-type';

import common from '@/data/common.json';

export type SwiperSettings = {
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
    };
  };
};

export type SectionSettings = {
  [key: string]: SwiperSettings;
};

export const Slider = ({ section, children }: SliderProps) => {
  const { isTablet } = useDeviceType();

  const { sliderButton } = common;

  const swiperSettings: SectionSettings = {
    reviews: {
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    },
  };

  const settings = swiperSettings[section] || '';

  const slides = Children.toArray(children);

  const paginationClass = `custom-pagination-${section}`;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(slides.length);

  const lastPage =
    section === 'reviews' && isTablet ? totalPages - 1 : totalPages;

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        grabCursor={true}
        pagination={{ el: `.${paginationClass}`, type: 'fraction' }}
        navigation={{
          prevEl: `.swiper-button-prev-${section}`,
          nextEl: `.swiper-button-next-${section}`,
        }}
        onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)}
        onSwiper={(swiper) => setTotalPages(swiper.slides.length)}
        {...settings}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <div
        className={clsx(
          'flex items-center justify-center w-full mt-5 md:mt-6',
          {
            'md:gap-[30px]': section === 'reviews',
          }
        )}
      >
        <button
          type="button"
          className={clsx(
            `swiper-button-prev-${section} w-[50px] h-[50px] rounded-full flex items-center justify-center`,
            {
              'bg-buttonFocusPink text-text3 cursor-default': currentPage === 1,
              'bg-accent5Icon1 hover:bg-buttonHoverPink focus:bg-buttonClickPink':
                currentPage !== 1,
            }
          )}
        >
          <PrevButtonIcon />
        </button>
        <div
          className={clsx(
            paginationClass,
            'w-[75px] flex justify-center items-center',
            'font-montserrat font-medium text-[24px] leading-[1.5]',
            {
              block: section === 'benefits',
              'block md:hidden': section === 'reviews',
            }
          )}
          aria-label={sliderButton.ariaLabelPrev}
        >
          {currentPage} / {totalPages}
        </div>
        <button
          type="button"
          className={clsx(
            `swiper-button-next-${section} w-[50px] h-[50px] rounded-full flex items-center justify-center`,
            {
              'bg-buttonFocusPink text-text3 cursor-default':
                currentPage === lastPage,
              'bg-accent5Icon1 hover:bg-buttonHoverPink focus:bg-buttonClickPink':
                currentPage !== lastPage,
            }
          )}
          aria-label={sliderButton.ariaLabelNext}
        >
          <NextButtonIcon />
        </button>
      </div>
    </>
  );
};
