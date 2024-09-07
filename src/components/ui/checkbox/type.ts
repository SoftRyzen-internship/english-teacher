import { UseFormRegister, FieldErrors } from 'react-hook-form';

export type CheckboxProps = {
  id: string;
  label: string;
  type: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
};
