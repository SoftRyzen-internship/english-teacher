'use client';

import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { ModalProps } from './types';
import CloseIcon from '@/../public/assets/images/icons/ico-x.svg';

export const Modal = ({ children, isOpen, setIsOpen, reviews }: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-semiTransparentGray" />
        <Dialog.Content
          className={clsx(
            'fixed z-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-h-[90vh] w-[89%] ',
            reviews
              ? 'w-[89%] sm:w-[420px] min-h-[434px] bg-bgButtonInactive p-6 pt-[111px] rounded-lg md:w-[526px] md:min-h-[378px] md:p-8 md:pt-[137px] xl:w-[600px] xl:min-h-[390px]'
              : 'w-[80%] sm:w-[382px] min-h-[600px] bg-bg3 p-6 flex items-center justify-center md:w-[688px] md:h-[700px] md:p-8 xl:w-[1216px] xl:min-h-[755px]'
          )}
        >
          <Dialog.Close asChild>
            <button
              className={clsx(
                'absolute text-black top-6 right-6 md:top-8 md:right-8 transition-all duration-300',
                'hover:text-buttonClickPink',
                'focus-visible:text-buttonClickPink'
              )}
            >
              <CloseIcon width={24} height={24} />
            </button>
          </Dialog.Close>
          <div
            className={clsx(
              reviews
                ? 'max-h-[calc(80vh-68px)] md:max-h-[calc(80vh-88px)] overflow-y-auto overflow-hidden'
                : 'flex flex-col items-center justify-center'
            )}
          >
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
