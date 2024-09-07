import { UseFormRegister, FieldErrors } from 'react-hook-form';

export type TextareaProps = {
  id: string;
  label: string;
  name: Name;
  placeholder: string;
  errors: FieldErrors;
  register: UseFormRegister<FormData>;
};

export type Name = 'username' | 'phone' | 'comment' | 'checked' | 'email';

export type FormData = {
  username: string;
  phone: string;
  email: string;
  comment?: string;
  checked: boolean;
};