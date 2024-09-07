import { UseFormRegister, FieldErrors } from 'react-hook-form';

export type CheckboxProps = {
  id: string;
  label: string;
  type: string;
  name: Name;
  register: UseFormRegister<FormData>;
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
