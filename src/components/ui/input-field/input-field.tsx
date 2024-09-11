import clsx from 'clsx';
import InputMask from 'react-input-mask-next';

import { ErrorMessage } from '../error-message/error-message';

import { InputFieldProps } from './types';

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  name,
  register,
  placeholder,
  autoComplete,
  mask,
  errors,
}) => {
  return (
    <div className="relative flex flex-col gap-1.5 mb-6 md:mb-10">
      <label htmlFor={id} className="">
        {label}
      </label>

      {mask ? (
        <InputMask
          mask={mask}
          id={id}
          {...register(name)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          type="tel"
          className={clsx(
            'w-full p-4 rounded-[10px] bg-veryLightGray text-text1Icon3',
            'focus:outline-none focus:bg-bgButtonInactive',
            errors[name] ? 'border border-error' : 'border border-transparent'
          )}
        />
      ) : (
        <input
          type={type}
          id={id}
          {...register(name)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={clsx(
            'w-full p-4 rounded-[10px] bg-veryLightGray text-text1Icon3',
            'focus:outline-none focus:bg-bgButtonInactive',
            errors[name] ? 'border border-error' : 'border border-transparent'
          )}
        />
      )}
      <ErrorMessage message={errors[name]?.message as string} />
    </div>
  );
};
