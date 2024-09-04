import * as Dialog from '@radix-ui/react-dialog';
import { SuccessErrorMessageComponentProps } from './types';
import commonData from '@/data/common.json';
import SuccessImg from '@/../public/assets/images/icons/modals/success.svg';
import ErrorImg from '@/../public/assets/images/icons/modals/err.svg';

const { successErrorMessage } = commonData;

export const SuccessErrorMessageComponent = ({
  status,
}: SuccessErrorMessageComponentProps) => {
  const { title, text, ariaLabel } = successErrorMessage[status];
  return (
    <>
      {status == 'success' ? (
        <SuccessImg
          width={198}
          height={195}
          aria-label={ariaLabel}
          className="w-[106px] h-[99px] mb-6  md:w-[198px] md:h-[185px] md:mb-8"
        />
      ) : (
        <ErrorImg
          width={198}
          height={195}
          aria-label={ariaLabel}
          className="w-[106px] h-[99px] mb-6  md:w-[198px] md:h-[185px] md:mb-8"
        />
      )}

      <Dialog.Title className="font-montserrat text-[32px] font-bold leading-[1.3] text-text1Icon3 text-center mb-6 smOnly:max-w-[247px] md:text-[48px] leading-[1.1]">
        {title}
      </Dialog.Title>
      <Dialog.Description className="font-montserrat text-lg font-medium text-center smOnly:max-w-[295px] mdOnly:w-[530px] md:text-[24px] leading-[1.5] ">
        {text}
      </Dialog.Description>
    </>
  );
};
