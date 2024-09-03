import { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  contentClassName?: string;
  buttonClassName?: string;
  childContentClassName?: string;
};
