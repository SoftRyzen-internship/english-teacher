import clsx from 'clsx';
import InputMask from 'react-input-mask-next';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  autoComplete?: string; 
  mask?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  name,
  placeholder, 
  autoComplete,
  mask, 
}) => {
  return (
    <div className="flex flex-col gap-1.5 mb-6 md:mb-10">
      <label htmlFor={id} className="">
        {label}
      </label>

      {mask ? (
        <InputMask
          mask={mask}
          id={id}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          type="tel" 
          className={clsx(
            'w-full p-4 rounded-[10px] bg-veryLightGray text-text1Icon3',
            'focus:outline-none focus:bg-bgButtonInactive'
          )}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={clsx(
            'w-full p-4 rounded-[10px] bg-veryLightGray text-text1Icon3',
            'focus:outline-none focus:bg-bgButtonInactive'
          )}
        />
      )}
    </div>
  );
};
