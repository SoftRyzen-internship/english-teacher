'use client';

import { useState } from 'react';

import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';

import { Modal } from '@/components/ui/modal/modal';
import { Checkbox } from '../../ui/checkbox/checkbox';
import { Textarea } from '../../ui/textarea/textarea';
import { InputField } from '../../ui/input-field/input-field';
import { SuccessErrorMessageComponent } from '../success-error-message-component/success-error-message-component';
import { Button } from '../../ui/button/button';

import { sendMessageToTelegram } from '@/actions/send-message-to-telegram';
import { validationSchema } from '@/utils/validation';
import { FormData, Name, Status } from './types';

import formData from '@/data/contact.json';

export const ContactForm = () => {
  const [status, setStatus] = useState<Status>('success');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    mode: 'onSubmit',
    resolver: yupResolver(validationSchema),
  });

  useFormPersist('contactForm', {
    watch,
    setValue,
    exclude: ['checked'],
  });

  const onSubmit = async ({ username, phone, comment, email }: FormData) => {
    try {
      const message = `Ім'я: ${username}\n\nТелефон: ${phone}\n\nПошта: ${email}\n\nПовідомлення: ${comment}\n`;
      await sendMessageToTelegram(message);
      setStatus('success');
      reset();
    } catch (error) {
      setStatus('error');
    } finally {
      setIsModalOpen(true);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full xl:w-[596px]">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-9">
          {formData.inputs.map((input) => (
            <li
              key={input.id}
              className={clsx(
                'col-span-1',
                input.name === 'email' && 'md:col-span-2'
              )}
            >
              <InputField
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
            </li>
          ))}
        </ul>
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
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <SuccessErrorMessageComponent status={status} />
      </Modal>
    </>
  );
};
