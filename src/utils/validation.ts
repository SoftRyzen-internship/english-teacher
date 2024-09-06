import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Ваше ім’я обов’язкове')
    .min(2, 'Мінімум 2 символи')
    .max(30, 'Максимум 30 символів')
    .matches(
      /^(?!.*(?:[ -]{2,}| -| - |^[ -]|^-))[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'ʼ` -]+$/,
      'Максимальна довжина 30 символів.'
    ),
  phone: yup
    .string()
    .required('Номер телефону обов’язковий')
    .matches(
      /^\+38\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/,
      'Номер телефону обов’язковий'
    ),
  email: yup
    .string()
    .required('Пошта обов’язкова')
    .matches(
      /^[A-Za-z0-9._%+-]{2,}@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      'Введена адреса недійсна.'
    ),
  comment: yup.string().max(300, 'У тексті має бути не більше 300 символів.'),
  checked: yup.boolean().required().oneOf([true]),
});
