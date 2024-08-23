import { RegisterOptions } from "react-hook-form";

import { formData } from "@/data";
import { IFormValues } from "@/@types";

const { name, phone, email, checkbox } = formData.namedField;

// export const formSchema: Record<keyof IFormState, RegisterOptions> = {

const formSchema: Record<keyof IFormValues, RegisterOptions<IFormValues>> = {
  name: {
    required: name.errorMessage || true, 
    pattern: {
      value:
        /^(?!.*\s{2})[А-Яа-яЄєІіЇїҐґʼA-Za-z'-]+(\s[А-Яа-яЄєІіЇїҐґʼA-Za-z'-]+)*$/,
      message: name.rules,
    },
    minLength: {
      value: 2,
      message: name.minLength,
    },
    maxLength: {
      value: 30,
      message: name.maxLength,
    },
  },

  phone: {
    required: phone.errorMessage || true,
    pattern: {
      value: /^\d{1,3}\d{9,15}$/,
      message: phone.rules,
    },
  },

  email: {
    required: email.errorMessage || true,
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: email.rules,
    },
  },
  message: {},
  approval: {
    required: checkbox.errorMessage || true,
  },
};

export default formSchema;