'use client';

import { useState, useRef, useEffect } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import Quotes from '@/../public/assets/images/icons/quotes.svg';
import { Modal } from '@/components/ui/modal/modal';

import { IReviewCardProps } from './types';

import reviews from '@/data/reviews.json';

export const ReviewCard = ({ author, text }: IReviewCardProps) => {
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
    <div className="max-h-80 p-6 rounded-lg bg-bgButtonInactive md:w-[334px] md:py-8 md:px-10 xl:p-8 xl:w-[390px]">
      <Quotes width={28} height={20} className="mb-5" />
      <h3 className="text-lg font-medium leading-normal font-montserrat text-text1Icon3 mb-4 md:mb-7">
        {author}
      </h3>
      <p
        ref={textRef}
        className="font-comfortaa text-base font-semibold overflow-hidden text-ellipsis line-clamp-5"
      >
        {text}
      </p>
      {isTruncated && (
        <button
          type="button"
          onClick={toggleModal}
          className="font-comfortaa text-base font-semibold text-accent5Icon1 flex ml-auto mt-4 hover:text-buttonClickPink transition-all ease duration-300"
        >
          {reviews.button}
        </button>
      )}

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} reviews>
        <>
          <Dialog.Title className="absolute top-[32px]">
            <Quotes width={28} height={20} className="mb-5 md:mb-7" />
            <p className="text-lg font-medium leading-normal font-montserrat text-text1Icon3">
              {author}
            </p>
          </Dialog.Title>

          <p ref={textRef} className="font-comfortaa text-base font-semibold">
            {text}
          </p>
        </>
      </Modal>
    </div>
  );
};
