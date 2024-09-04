'use client';

import { useState, useRef, useEffect } from 'react';

import { IReviewCardProps } from './types';

import reviews from '@/data/reviews.json';
import clsx from 'clsx';

export const ReviewCard = () => {
  const {} = reviews;
  console.log(reviews);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const checkTruncation = () => {
    const element = textRef.current;
    if (element) {
      const { scrollHeight, clientHeight } = element;
      setIsTruncated(scrollHeight > clientHeight);
    }
  };

  useEffect(() => {
    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    return () => {
      window.removeEventListener('resize', checkTruncation);
    };
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="max-h-[211px] p-6 rounded-lg bg-bgButtonInactive">
      <h3 className="text-lg font-medium leading-normal font-montserrat text-text1Icon3 mb-4">
        Тетяна
      </h3>
      <p
        ref={textRef}
        className="font-comfortaa text-base font-semibold overflow-hidden text-ellipsis line-clamp-5"
      >
        Дякую за вашу працю з моєю дитиною.\n Сину дуже сподобалось займатися з
        Вами, особливо індивідуальні заняття. Моя дитина багато чому навчилася і
        зрозуміла завдяки Вам.
      </p>
      {isTruncated && (
        <button onClick={toggleModal} className="">
          Читати більше
        </button>
      )}

      {/* {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <span
              className="absolute top-2 right-2 text-2xl cursor-pointer"
              onClick={toggleModal}
            >
              &times;
            </span>
            <h3 className="text-lg mb-4">{title}</h3>
            <p className="text-base">{text}</p>
          </div>
        </div>
      )} */}
    </div>
  );
};
