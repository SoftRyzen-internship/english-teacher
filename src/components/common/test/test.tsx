'use client';

import { Modal } from '@/components/ui/modal/modal';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

export const Test = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="btn w-100 h-100 text-accent5Icon1 m-10"
      >
        форма отзыв
      </button>

      <button
        onClick={() => setIsModalOpen(true)}
        className="btn w-100 h-100 text-buttonFocusPink my-10
           md:top-8 md:right-8"
      >
        Форма связи
      </button>

      <Modal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        reviews
      >
        <Dialog.Title className="absolute top-[66px] text-lg font-semibold">
          Заголовокk
        </Dialog.Title>
        <Dialog.Description>
          Это описание модального окна.s sssssss sssssssssss ssss dssd fdvdf efv
          v edf gf dfs Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ab, architecto minima. Nihil inventore tempora minus similique eaque
          ea voluptate, laboriosam quis quia molestias deserunt fugiat
          asperiores repellendus molestiae esse eveniet? Это описание модального
          окна.s sssssss sssssssssss ssss dssd fdvdf efv v edf gf dfs Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ab, architecto
          minima. Nihil inventore tempora minus similique eaque ea voluptate,
          laboriosam quis quia molestias deserunt fugiat asperiores repellendus
          molestiae esse eveniet? Это описание модального окна.s sssssss
          sssssssssss ssss dssd fdvdf efv v edf gf dfs Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ab, architecto minima. Nihil
          inventore tempora minus similique eaque ea voluptate, laboriosam quis
          quia molestias deserunt fugiat asperiores repellendus molestiae esse
          eveniet? Это описание модального окна.s sssssss sssssssssss ssss dssd
          fdvdf efv v edf gf dfs Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ab, architecto minima. Nihil inventore tempora minus
          similique eaque ea voluptate, laboriosam quis quia molestias deserunt
          fugiat asperiores repellendus molestiae esse eveniet?
        </Dialog.Description>
      </Modal>

      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      >
        <Dialog.Title className=" text-lg font-semibold ">Заk</Dialog.Title>
        <Dialog.Description>
          Это описание Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ab, architecto minima. Nihil inventore tempora minus similique eaque
          ea voluptate, laboriosam quis quia molestias deserunt fugiat
          asperiores repellendus molestiae esse eveniet? sssssssssssss
        </Dialog.Description>
      </Modal>
    </>
  );
};


// 'use client';

// import { Modal } from '@/components/ui/modal/modal';
// import * as Dialog from '@radix-ui/react-dialog';
// import { useState } from 'react';

// export const Test = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   return (
//     <>
//       <button
//         onClick={() => setModalOpen(true)}
//         className="btn w-100 h-100 text-accent5Icon1 m-10"
//       >
//         форма отзыв
//       </button>

//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="btn w-100 h-100 text-buttonFocusPink my-10
//            md:top-8 md:right-8"
//       >
//         Форма связи
//       </button>

//       <Modal
//         isOpen={modalOpen}
//         setIsOpen={setModalOpen}
//         contentClassName="w-[89%] sm:w-[420px] min-h-[434px] bg-bgButtonInactive p-6 pt-[111px] rounded-lg 
//             md:w-[526px] md:min-h-[378px] md:p-8 md:pt-[137px]
//             xl:w-[600px] xl:min-h-[390px]"
//         buttonClassName="top-6 right-6 md:top-8 md:right-8"
//         childContentClassName="max-h-[calc(80vh-68px)] md:max-h-[calc(80vh-88px)] overflow-y-auto overflow-hidden "
//       >
//         <Dialog.Title className="absolute top-[66px] text-lg font-semibold">
//           Заголовокk
//         </Dialog.Title>
//         <Dialog.Description>
//           Это описание модального окна.s sssssss sssssssssss ssss dssd fdvdf efv
//           v edf gf dfs Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Ab, architecto minima. Nihil inventore tempora minus similique eaque
//           ea voluptate, laboriosam quis quia molestias deserunt fugiat
//           asperiores repellendus molestiae esse eveniet? Это описание модального
//           окна.s sssssss sssssssssss ssss dssd fdvdf efv v edf gf dfs Lorem
//           ipsum dolor sit amet consectetur adipisicing elit. Ab, architecto
//           minima. Nihil inventore tempora minus similique eaque ea voluptate,
//           laboriosam quis quia molestias deserunt fugiat asperiores repellendus
//           molestiae esse eveniet? Это описание модального окна.s sssssss
//           sssssssssss ssss dssd fdvdf efv v edf gf dfs Lorem ipsum dolor sit
//           amet consectetur adipisicing elit. Ab, architecto minima. Nihil
//           inventore tempora minus similique eaque ea voluptate, laboriosam quis
//           quia molestias deserunt fugiat asperiores repellendus molestiae esse
//           eveniet? Это описание модального окна.s sssssss sssssssssss ssss dssd
//           fdvdf efv v edf gf dfs Lorem ipsum dolor sit amet consectetur
//           adipisicing elit. Ab, architecto minima. Nihil inventore tempora minus
//           similique eaque ea voluptate, laboriosam quis quia molestias deserunt
//           fugiat asperiores repellendus molestiae esse eveniet?
//         </Dialog.Description>
//       </Modal>

//       <Modal
//         isOpen={isModalOpen}
//         setIsOpen={setIsModalOpen}
//         contentClassName="w-[89%] sm:w-[382px] min-h-[600px] bg-bg3 p-6 flex items-center justify-center 
//             md:w-[688px] md:min-h-[700px] md:p-8 
//             xl:w-[1216px] xl:min-h-[755px]"
//         buttonClassName="top-[30px] right-[30px]"
//         childContentClassName="flex flex-col items-center justify-center"
//       >
//         <Dialog.Title className=" text-lg font-semibold ">Заk</Dialog.Title>
//         <Dialog.Description>
//           Это описание Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Ab, architecto minima. Nihil inventore tempora minus similique eaque
//           ea voluptate, laboriosam quis quia molestias deserunt fugiat
//           asperiores repellendus molestiae esse eveniet? sssssssssssss
//         </Dialog.Description>
//       </Modal>
//     </>
//   );
// };
