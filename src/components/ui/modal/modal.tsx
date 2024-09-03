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
            'absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-h-[90vh]  w-[89%] ',
            contentClassName
          )}
          // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-h-[90vh]
          //   w-[89%] sm:w-[420px] min-h-[434px] bg-bgButtonInactive p-6 pt-[111px] rounded-lg
          //   md:w-[526px] md:min-h-[378px] md:p-8 md:pt-[137px]
          //   xl:w-[600px] xl:min-h-[390px]"
          aria-describedby="modal-description"
        >
          <button
            className={clsx(
              'absolute text-black hover:text-buttonClickPink focus:text-buttonClickPink transition-all duration-300',
              buttonClassName
            )}
            // className="absolute top-6 right-6 text-black hover:text-buttonClickPink focus:text-buttonClickPink transition-all duration-300
            //   md:top-8 md:right-8 "
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon width={24} height={24} />
          </button>
          <div className={clsx(childContentClassName)}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

// 'use client';

// import * as Dialog from '@radix-ui/react-dialog';
// import clsx from 'clsx';
// import { ModalProps } from './types';
// import CloseIcon from '@/../public/assets/images/icons/ico-x.svg';

// export const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
//   return (
//     <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 bg-semiTransparentGray"/>
//         {/* <div className="fixed inset-0 flex w-screen items-center justify-center  max-h-[90vh]"> */}
//           <Dialog.Content
//             className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-h-[90vh]
//               w-[89%] sm:w-[420px] min-h-[434px] bg-bgButtonInactive p-6 pt-[111px] rounded-lg
//               md:w-[526px] md:min-h-[378px] md:p-8 md:pt-[137px]
//               xl:w-[600px] xl:min-h-[390px]"
//             aria-describedby="modal-description"
//           >
//             <button
//               className="absolute top-6 right-6 text-black hover:text-buttonClickPink focus:text-buttonClickPink transition-all duration-300
//                 md:top-8 md:right-8 "
//               onClick={() => setIsOpen(false)}
//             >
//               <CloseIcon width={24} height={24}/>
//             </button>
//             <div className="max-h-[calc(80vh-68px)] md:max-h-[calc(80vh-88px)] overflow-y-auto overflow-hidden bg-buttonFocusYellow">
//               {children}
//             </div>
//         </Dialog.Content>
//         {/* </div> */}
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };
