import { FieldErrors } from 'react-hook-form';

export type InputFieldProps = {
  id: string;
  label: string;
  type: string;
  name: string;
  register: any;
  placeholder: string;
  autoComplete?: string;
  mask?: string;
  errors: FieldErrors;
};
