'use client';

import { useState, useRef, useEffect } from 'react';

import { ReviewModal } from '../review-modal/review-modal';

import { IReviewCardProps } from './types';

import Quotes from '@/../public/assets/images/icons/quotes.svg';
import reviews from '@/data/reviews.json';

export const ReviewCard = ({ author, text }: IReviewCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const [selectedReview, setSelectedReview] = useState<IReviewCardProps | null>(
    null
  );
  const textRef = useRef<HTMLParagraphElement>(null);

  const openModalWithReview = (review: IReviewCardProps) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

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

  return (
    <div className="h-[366px] md:h-[358px] xl:h-[319px] p-6 rounded-lg bg-bgButtonInactive md:w-[334px] md:py-8 md:px-10 xl:p-8 xl:w-[390px]">
      <Quotes width={28} height={20} className="mb-5" />
      <h3 className="text-lg font-medium leading-normal font-montserrat text-text1Icon3 mb-4 md:mb-7">
        {author}
      </h3>
      <p
        ref={textRef}
        className="font-comfortaa text-base font-semibold overflow-hidden text-ellipsis line-clamp-8 md:line-clamp-6 xl:line-clamp-5"
      >
        {text}
      </p>
      {isTruncated && (
        <button
          type="button"
          onClick={() => openModalWithReview({ author, text })}
          className="font-comfortaa text-base font-semibold text-accent5Icon1 flex ml-auto mt-[19px] md:mt-[33px] xl:mt-[30px] hover:text-buttonClickPink transition-colors ease duration-300"
        >
          {reviews.button}
        </button>
      )}

      {selectedReview && (
        <ReviewModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          author={selectedReview.author}
          text={selectedReview.text}
        />
      )}
    </div>
  );
};
