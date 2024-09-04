import { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  reviews?: boolean;
};
