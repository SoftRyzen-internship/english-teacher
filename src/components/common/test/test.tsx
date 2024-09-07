'use client';

import { Modal } from '@/components/ui/modal/modal';
import { useState } from 'react';
import { SuccessErrorMessageComponent } from '../success-error-message-component/success-error-message-component';
import { yupResolver } from '@hookform/resolvers/yup';
import formData from '@/data/contact.json';
import { Checkbox } from '../../ui/checkbox/checkbox';
import { Textarea } from '../../ui/textarea/textarea';
import { InputField } from '../../ui/input-field/input-field';
import { useForm } from 'react-hook-form';
import { validationSchema } from '@/utils/validation';
export type Status = 'success' | 'error';

import * as yup from 'yup';
import { Button } from '../../ui/button/button';
import { Name } from '@/components/ui/input-field/types';
import { sendMessageToTelegram } from '@/actions/send-message-to-telegram';

export type FormData = yup.InferType<typeof validationSchema>;

export const Test = () => {
  const [status, setStatus] = useState<Status>('success');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = ({ username, phone, comment, email }: FormData) => {
    const message = `Ім'я: ${username}\n\nТелефон: ${phone}\n\nПошта: ${email}\n\nПовідомлення: ${comment}\n`;
    sendMessageToTelegram(message);
    setIsModalOpen(true);
    setStatus('success');
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formData.inputs.map((input) => (
          <InputField
            key={input.id}
            id={input.id}
            label={input.label}
            type={input.type}
            name={input.name as Name}
            register={register}
            placeholder={input.placeholder}
            autoComplete={input.autoComplete}
            mask={input.mask}
            errors={errors}
          />
        ))}

        <Textarea
          id={formData.textarea.id}
          label={formData.textarea.label}
          name={formData.textarea.name as Name}
          placeholder={formData.textarea.placeholder}
          errors={errors}
          register={register}
        />
        <Checkbox
          id={formData.checkbox.id}
          label={formData.checkbox.label}
          type={formData.checkbox.type}
          name={formData.checkbox.name as Name}
          register={register}
          errors={errors}
        />
        <Button>{formData.sendButton}</Button>
      </form>

      <button
        onClick={() => setIsModalOpen(true)}
        className="btn w-100 h-100 text-buttonFocusPink my-10
           md:top-8 md:right-8"
      >
        Форма связи
      </button>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <SuccessErrorMessageComponent status={status} />
      </Modal>
    </>
  );
};
