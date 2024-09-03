'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { ModalProps } from './types';
import CloseIcon from '@/../public/assets/images/icons/ico-x.svg';

export const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-semiTransparentGray" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[420px] bg-bgButtonInactive p-6 rounded-lg
          md:w-[526px] md:p-8
          xl:w-[600px]"
          aria-describedby="modal-description"
        >
          <Dialog.Title className="text-lg font-semibold">
            Заголовок{' '}
          </Dialog.Title>
          <button
            className="absolute top-6 right-6 text-black hover:text-buttonClickPink transition-all duration-300
              md:top-8 md:right-8 "
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </button>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
