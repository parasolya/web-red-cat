import { CheckboxtProp } from '@/@types';
import clsx from "clsx";

const Checkbox: React.FC<CheckboxtProp> = ({
  id,
  label,
  type,
  className,
  classNameLabel,
  checked,
  errorMessage,
  ...rest
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className={clsx(
          "h-6 w-6 flex flex-shrink-0 items-center justify-center border cursor-pointer",
          {
            "border-errors": errorMessage && !checked, 
            "border-white": !errorMessage || checked, 
          }
        )}
      >
        <div className="h-4 w-4 flex-shrink-0 flex items-center justify-center bg-opacity-5 bg-white hover:bg-opacity-20 transition-colors duration-300 ease-in-out">
          {checked && <div className="w-4 h-4 bg-white"></div>}
        </div>
      </label>
      <input
        id={id}
        type={id}
        className="hidden appearance-none"
        checked={checked}
        {...rest}
      />
    </>
  );
};

export default Checkbox;
