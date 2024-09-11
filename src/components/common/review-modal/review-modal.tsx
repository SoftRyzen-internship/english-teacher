import * as Dialog from '@radix-ui/react-dialog';

import { Modal } from '@/components/ui/modal/modal';

import { IReviewModalProps } from './types';

import Quotes from '@/../public/assets/images/icons/quotes.svg';

export const ReviewModal = ({
  isOpen,
  setIsOpen,
  author,
  text,
}: IReviewModalProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} reviews>
      <>
        <Dialog.Title className="absolute top-[32px]">
          <Quotes width={28} height={20} className="mb-5 md:mb-7" />
          <p className="text-lg font-medium leading-normal font-montserrat text-text1Icon3">
            {author}
          </p>
        </Dialog.Title>

        <Dialog.Description className="font-comfortaa text-base font-semibold">
          {text}
        </Dialog.Description>
      </>
    </Modal>
  );
};
