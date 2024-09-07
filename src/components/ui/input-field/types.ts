import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type InputFieldProps = {
  id: string;
  label: string;
  type: string;
  name: Name;
  register: UseFormRegister<FormData>;
  placeholder: string;
  autoComplete?: string;
  mask?: string;
  errors: FieldErrors;
};

export type Name = 'username' | 'phone' | 'comment' | 'checked' | 'email';

export type FormData = {
  username: string;
  phone: string;
  email: string;
  comment?: string;
  checked: boolean;
};
