'use client';

import { Modal } from '@/components/ui/modal/modal';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { SuccessErrorMessageComponent } from '../success-error-message-component/success-error-message-component';
// import { Form } from 'react-hook-form';
import formData from '@/data/contact.json';
import { Checkbox } from '../checkbox/checkbox';
import { Textarea } from '../textarea/textarea';
import { InputField } from '../input-field/input-field';
export type Status = 'success' | 'error';

export const Test = () => {
  const [status, setStatus] = useState<Status>('success');
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
        <SuccessErrorMessageComponent status={status} />
      </Modal>

      {/* <InputField
          id={formData.inputs[0].id}
          label={formData.inputs[0].label}
          type={formData.inputs[0].type}
          name={formData.inputs[0].name}
          placeholder={formData.inputs[0].placeholder}
        />

      
        <InputField
          id={formData.inputs[1].id}
          label={formData.inputs[1].label}
          type={formData.inputs[1].type}
          name={formData.inputs[1].name}
          placeholder={formData.inputs[1].placeholder}
          mask="+38 (999) 999-9999" 
        />

      
        <InputField
          id={formData.inputs[2].id}
          label={formData.inputs[2].label}
          type={formData.inputs[2].type}
          name={formData.inputs[2].name}
          placeholder={formData.inputs[2].placeholder}
        /> */}

      {formData.inputs.map((input) => (
        <InputField
          key={input.id}
          id={input.id}
          label={input.label}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          autoComplete={input.autoComplete}
          mask={input.mask}
        />
      ))}

      <Textarea
        id={formData.textarea.id}
        label={formData.textarea.label}
        name={formData.textarea.name}
        placeholder={formData.textarea.placeholder}
      />
      <Checkbox
        id={formData.checkbox.id}
        label={formData.checkbox.label}
        type={formData.checkbox.type}
        // name={formData.checkbox.name}
        // register={register}
      />
    </>
  );
};
