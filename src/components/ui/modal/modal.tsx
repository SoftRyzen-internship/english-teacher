'use client';

import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { ModalProps } from './types';
import CloseIcon from '@/../public/assets/images/icons/ico-x.svg';

export const Modal = ({
  children,
  isOpen,
  setIsOpen,
  contentClassName,
  buttonClassName,
  childContentClassName,
}: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-semiTransparentGray" />
        <Dialog.Content
          className={clsx(
            'fixed z-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-h-[90vh]  w-[89%] ',
            contentClassName
          )}
        >
          <Dialog.Close asChild>
            <button
              className={clsx(
                'absolute text-black transition-all duration-300',
                'hover:text-buttonClickPink',
                'focus-visible:text-buttonClickPink',
                buttonClassName
              )}
            >
              <CloseIcon width={24} height={24} />
            </button>
          </Dialog.Close>
          <div className={clsx(childContentClassName)}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
