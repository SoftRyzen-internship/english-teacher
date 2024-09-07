import clsx from 'clsx';
import { ErrorMessage } from '../../ui/error-message/error-message';
import { TextareaProps } from './types';

export const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  name,
  placeholder,
  errors,
  register,
}) => {
  console.log(errors);
  return (
    <div className="relative flex flex-col gap-1.5 mb-6 md:mb-10">
      <label htmlFor={id} className="">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        {...register(name)}
        className={clsx(
          'w-full h-[150px] p-4 rounded-[10px] bg-veryLightGray md:h-[167px] ',
          'focus:outline-none focus:bg-bgButtonInactive',
          'resize-none',
          'text-text1Icon3',
          errors[name] ? 'border border-error' : 'border border-transparent'
        )}
      />
      <ErrorMessage message={errors[name]?.message as string} />
    </div>
  );
};
