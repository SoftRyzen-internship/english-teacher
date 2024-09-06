import clsx from 'clsx';
import { FieldErrors } from 'react-hook-form';
import ErrIcon from '@/../public/assets/images/icons/err-sign.svg';
import { useState } from 'react';

interface TextareaProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  errors: FieldErrors;
  register: any; 
}

export const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  name,
  placeholder,
  errors,
  register,
}) => {
  const [charCount, setCharCount] = useState(0); 

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
  };
  // console.log(errors)
  return (
    <div className="flex flex-col gap-1.5 mb-6 md:mb-10">
      <label htmlFor={id} className="">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        {...register(name)}
        maxLength={300} 
        onChange={handleInputChange}
        className={clsx(
          'w-full h-[150px] p-4 rounded-[10px] bg-veryLightGray md:h-[167px] ',
          'focus:outline-none focus:bg-bgButtonInactive',
          'resize-none',
          'text-text1Icon3',
           (charCount === 300 || errors[name]) ? 'border border-error' : ''
        )}
      />
      {(charCount === 300 || errors[name]) && (
        <p className="absolute bottom-[-24px] flex gap-0.5 text-sm font-medium text-error ">
         <ErrIcon  width={17} hanging={18}/> {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
