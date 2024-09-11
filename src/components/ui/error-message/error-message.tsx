import { ErrorMessageProps } from './types';

import ErrIcon from '@/../public/assets/images/icons/err-sign.svg';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <p className="absolute top-full left-0 flex gap-0.5 text-sm font-medium text-error pt-1">
      <ErrIcon width={17} hanging={18} className="min-w-[17px] " /> {message}
    </p>
  );
};
