'use client';

import { Logo } from '@/components/ui/logo/logo';
import { Modal } from '@/components/ui/modal/modal';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main>
      <div className="container ">
        <Logo />
        <p className="font-comfortaa bg-icon">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          architecto minima. Nihil inventore tempora minus similique eaque ea
          voluptate, laboriosam quis quia molestias deserunt fugiat asperiores
          repellendus molestiae esse eveniet?
        </p>
        <br />

        <p className="font-montserrat bg-accent1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          architecto minima. Nihil inventore tempora minus similique eaque ea
          voluptate, laboriosam quis quia molestias deserunt fugiat asperiores
          repellendus molestiae esse eveniet?
        </p>

        <h2>Title h2</h2>
        <h3>Title h3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          architecto minima. Nihil inventore tempora minus similique eaque ea
          voluptate, laboriosam quis quia molestias deserunt fugiat asperiores
          repellendus molestiae esse eveniet?
        </p>
        
        

        <button onClick={() => setIsModalOpen(true)} className="btn w-100 h-100 text-buttonFocusPink my-10">
          Открыть модальное окно
        </button>
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <h2 className="text-lg font-semibold">Заголовок модального окна</h2>
          <p>Это описание модального окна.</p>
        </Modal>
      </div>
    </main>
  );
}
