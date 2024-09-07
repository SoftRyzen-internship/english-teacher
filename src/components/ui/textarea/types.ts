import { FieldErrors } from 'react-hook-form';

export type TextareaProps = {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  errors: FieldErrors;
  register: any;
}
