import { RegisterOptions } from "react-hook-form";

import { formData } from "@/data";
import { IFormValues } from "@/@types";
const { name, phone, checkbox } = formData.namedField;

export const formSchema: Record<keyof IFormValues, RegisterOptions> = {
  name: {
    required: `${name.errorMessage}`,
    pattern: {
      value:
        /^(?!.*\s{2})[А-Яа-яЄєІіЇїҐґʼA-Za-z'-]+(\s[А-Яа-яЄєІіЇїҐґʼA-Za-z'-]+)*$/,
      message: `${name.rules}`,
    },
    minLength: {
      value: 2,
      message: `${name.minLength}`,
    },
    maxLength: {
      value: 30,
      message: `${name.maxLength}`,
    },
  },
  phone: {
    required: `${phone.errorMessage}`,
    pattern: {
      value: /^\+380\d{9}$/,
      message: `${phone.rules}`,
    },
    minLength: {
      value: 13,
      message: `${phone.minLength}`,
    },
    maxLength: {
      value: 13,
      message: `${phone.maxLength}`,
    },
  },
  email: {
    required: `${name.errorMessage}`,
    pattern: {
      value:
        /^(?!.*\s{2})[А-Яа-яЄєІіЇїҐґʼA-Za-z'-]+(\s[А-Яа-яЄєІіЇїҐґʼA-Za-z'-]+)*$/,
      message: `${name.rules}`,
    },
    minLength: {
      value: 2,
      message: `${name.minLength}`,
    },
    maxLength: {
      value: 30,
      message: `${name.maxLength}`,
    },
  },
  message: {}
  // approval: {
  //   required: `${checkbox.errorMessage}`,
  // },
};
