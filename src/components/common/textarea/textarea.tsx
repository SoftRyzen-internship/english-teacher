import clsx from 'clsx';

interface TextareaProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
 
}

export const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  name,
  placeholder,

}) => {
  return (
    <div className="flex flex-col gap-1.5 mb-6 md:mb-10">
      <label htmlFor={id} className="">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
    
        className={clsx(
          'w-full h-[150px] p-4 rounded-[10px] bg-veryLightGray md:h-[167px] ',
          'focus:outline-none focus:bg-bgButtonInactive',
          'resize-none',
          'text-text1Icon3'
        )}
      />
    </div>
  );
};

// buttonFocusYellow
// bg-veryLightGray 