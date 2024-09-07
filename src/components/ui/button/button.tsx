import clsx from 'clsx';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  type = 'submit',
  children,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        'h-[50px] inline-flex font-montserrat justify-center cursor-pointer',
        'smOnly:w-full items-center rounded-[20px] md:w-[200px]',
        'text-base font-bold transition-colors duration-300',
        'bg-accent1 hover:bg-buttonHover focus:bg-buttonClickYellow'
      )}
    >
      {children}
    </button>
  );
};
