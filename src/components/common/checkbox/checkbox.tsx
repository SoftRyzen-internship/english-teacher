import clsx from 'clsx';

interface CheckboxProps {
  id: string;
  label: string;
  type: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, label, type }) => {
  return (
    <label
      htmlFor={id}
      className="relative inline-flex items-center gap-3 cursor-pointer"
    >
      <div className="relative w-6 h-6">
        <input
          type={type}
          id={id}
          className={clsx(
            'peer cursor-pointer w-5 h-5 rounded appearance-none border border-text3',
            'checked:bg-bg3 checked:border-buttonClickPink'
          )}
        />
        <span
          className={clsx(
            'absolute top-0 left-0 bg-bg3 border border-text3 rounded cursor-pointer w-6 h-6 peer-checked:bg-accent2 peer-checked:border-none',
            'flex justify-center items-center peer-checked:before:block peer-checked:before:w-3 peer-checked:before:h-1.5 peer-checked:before:border-l-[2px] peer-checked:before:border-b-[2px] peer-checked:before:border-white peer-checked:before:rotate-[-45deg]'
          )}
        ></span>
      </div>
      <span className="text-[12px] leading-[1.5] md:text-[18px] md:font-medium xl:text-[16px] xl:font-semibold">
        {label}
      </span>
    </label>
  );
};
