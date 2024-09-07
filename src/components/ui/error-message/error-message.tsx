import ErrIcon from '@/../public/assets/images/icons/err-sign.svg';
import { ErrorMessageProps } from './types';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <p className="absolute bottom-[-24px] flex gap-0.5 text-sm font-medium text-error">
      <ErrIcon width={17} hanging={18} /> {message}
    </p>
  );
};
