import { validationSchema } from '@/utils/validation';
import * as yup from 'yup';

export type FormData = yup.InferType<typeof validationSchema>;

export type Name = 'username' | 'phone' | 'comment' | 'checked' | 'email';

export type Status = 'success' | 'error';