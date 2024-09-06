export interface IReviewModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  author: string;
  text: string;
}
