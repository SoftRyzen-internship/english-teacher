import clsx from 'clsx';
import InputMask from 'react-input-mask-next';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import ErrIcon from '@/../public/assets/images/icons/err-sign.svg';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  name: string;
  register: any;
  placeholder: string;
  autoComplete?: string;
  mask?: string;
  errors: FieldErrors;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  name,
  register,
  placeholder,
  autoComplete,
  mask, 
  errors
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
          name={name}
          {...register(name)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          type="tel"
          className={clsx(
            'w-full p-4 rounded-[10px] bg-veryLightGray text-text1Icon3',
            'focus:outline-none focus:bg-bgButtonInactive',
            errors[name] && 'border border-error' 
          )}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          {...register(name)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={clsx(
            'w-full p-4 rounded-[10px] bg-veryLightGray text-text1Icon3',
            'focus:outline-none focus:bg-bgButtonInactive',
            errors[name] && 'border border-error' 
          )}
        />
      )}
      {errors[name] && (
        <p className="absolute bottom-[-24px] flex gap-0.5 text-sm font-medium text-error ">
         <ErrIcon  width={17} hanging={18}/> {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
