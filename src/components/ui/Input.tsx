import React, { forwardRef } from 'react';
import { InputProps } from '@/@types';
import clsx from 'clsx';

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    id,
    label,
    placeholder,
    type,
    errors,
    className,
    classNameLabel,
    ...rest
  },
  ref
) => {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`block font-extralight text-[12px] md:text-xs leading-6 tracking-widest mb-1 lg:mb-2 ${classNameLabel}`}
      >
        {label}
      </label>
      <div className="w-full flex items-center overflow-hidden">
        {id === 'phone' && (
          <div className="block whitespace-nowrap text-center font-extralight md:text-xs lg:text-xl leading-6 py-1 lg:py-0 pl-2 bg-white bg-opacity-5">
            +
          </div>
        )}

        <input
          className={clsx('w-full bg-white bg-opacity-5 py-1 lg:py-0 pl-2 Inter font-extralight placeholder-white placeholder-opacity-20 md:text-xs lg:text-xl leading-6 hover:bg-opacity-10 cursor-pointer hover:outline-none transition', id === 'phone' && 'pl-0', className,
            errors[id] ? 'text-errors' : '')}
          id={id}
          autoComplete={id}
          type={type}
          placeholder={placeholder}
          ref={ref} 
          {...rest}
        />
      </div>
      {errors[id] && typeof errors[id]?.message === 'string' && (
        <p
          className="absolute right-0 font-extralight text-xs tracking-widest tracking-6 text-errors"
          style={{ visibility: 'visible' }}
        >
          {errors[id]?.message}
        </p>
      )}
    </div>
  );
};

export default forwardRef(Input);