import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface TitleProps {
  firstWords: string;
  secondWords: string;
  firstWordsClassName?: string;
  secondWordsClassName?: string;
}

export interface NavMenyProps {
  className?: string;
  classNameList?: string;
  classNameLink?: string;
  onMenuToggled?: () => void;
}

export interface BurgerMenuProps {
  handleMenuToggled: () => void;
  className: string;
}

export interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "slider" | "text";
  children: string;
  className?: string;
}

export interface LinkButtonProp
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: "main" | "navLink";
  children: React.ReactNode;
  to: string;
  className?: string;
  handleMenuToggled?: () => void;
}

export interface ProjectsItemProps {
  src: string;
  alt: string;
}

export interface IFormValues {
  name: string;
  phone: string;
  email: string;
  message?: string;
  approval: boolean;
}

export interface PhoneNumberProp {
  phone: string;
}

export interface SocialProp {
  social: string;
}

import { FieldError, FieldErrors, FieldValues } from "react-hook-form";

type FieldErrorsToRecord<T> = {
  [K in keyof T]: T[K] extends FieldErrors<any>
    ? Record<string, FieldError | undefined>
    : T[K];
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  placeholder?: string;
  type: string;

  errorMessage?: string;
  className?: string;
  classNameLabel?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxtProp {
  id: string;
  label?: string;
  type: string;
  className?: string;
  classNameLabel?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextareaProps {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  classNameLabel?: string;
}

export interface EmailProp {
  mailClassName?: string;
}

export interface PhoneProp {
  phoneClassName?: string;
}