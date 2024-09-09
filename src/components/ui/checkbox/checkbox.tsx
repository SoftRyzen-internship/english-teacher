import clsx from 'clsx';
import { CheckboxProps } from './type';
import { ErrorMessage } from '../error-message/error-message';

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  type,
  name,
  register,
  errors,
}) => {
  return (
    <div className="relative mb-6 md:mb-10">
      <label
        htmlFor={id}
        className="relative inline-flex items-center gap-3 cursor-pointer"
      >
        <div className="relative w-6 h-6">
          <input
            type={type}
            id={id}
            {...register(name)}
            className={clsx(
              'peer cursor-pointer w-5 h-5 rounded appearance-none border',
              errors[name] ? 'border-error' : 'border-text3',
              'focus:ring-2 focus:ring-stokeDisabled'
            )}
          />
          <span
            className={clsx(
              'absolute top-0 left-0 bg-bg3 border rounded cursor-pointer w-6 h-6',
              'peer-checked:bg-accent2 peer-checked:border-none',
              'flex justify-center items-center peer-checked:before:block peer-checked:before:w-3 peer-checked:before:h-1.5 peer-checked:before:border-l-[1.5px] peer-checked:before:border-b-[1.5px] peer-checked:before:border-white peer-checked:before:rotate-[-45deg]',
              'peer-checked:before:translate-y-[-2px]',
              errors[name] ? 'border-error' : 'border-text3',
              'peer-focus:ring-2 peer-focus:ring-stokeDisabled peer-focus:border-none'
            )}
          />
        </div>
        <span className="text-[12px] leading-[1.5] md:text-[18px] md:font-medium xl:text-[16px] xl:font-semibold">
          {label}
        </span>
      </label>
      <ErrorMessage message={errors[name]?.message as string} />
    </div>
  );
};
