
import { ButtonProp } from '@/@types';
import clsx from 'clsx';

const Button: React.FC<ButtonProp> = ({
  variant,
  children,
  className,
  ...rest
}) => {
  return (
    <button
    className={clsx(
      'text-primary uppercase outline-none shadow-none cursor-pointer hover:underline underline-offset-4 transition',
      variant === 'slider' && 'absolute z-10 text-2xl text-primary decoration-2',
      variant === 'text' && 'text-4xl md:text-3xl lg:text-3xl decoration-2',
      className 
    )}
    {...rest}
  >
      {children}
    </button>
  );
};

export default Button;
