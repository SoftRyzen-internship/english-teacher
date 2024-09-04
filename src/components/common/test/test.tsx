'use client';

import { Modal } from '@/components/ui/modal/modal';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { SuccessErrorMessageComponent } from '../success-error-message-component/success-error-message-component';

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

      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} reviews>
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

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <SuccessErrorMessageComponent status="success" />
      </Modal>

      {/* <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <Dialog.Title className=" text-lg font-semibold ">Заk</Dialog.Title>
        <Dialog.Description>
          Это описание Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ab, architecto minima. Nihil inventore tempora minus similique eaque
          ea voluptate, laboriosam quis quia molestias deserunt fugiat
          asperiores repellendus molestiae esse eveniet? sssssssssssss
        </Dialog.Description>
      </Modal> */}
    </>
  );
};
