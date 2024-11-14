"use client";

import { IFormValues, InputProps } from "@/@types";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { formData } from "@/data";

import { useState } from "react";
import { Path, useForm, SubmitHandler } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist';
import { sendingEmail } from '@/utils';

const ContactsForm = () => {
  const {
    register,
    watch,
    setValue,
    trigger,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IFormValues>();

  const {
    namedField: { name, phone, email, checkbox, textarea },
    buttonText,
    modalInfo: { successful, failure, button },
  } = formData;

  useFormPersist("storageKey", {
    watch, 
    setValue
  });

  const [isChecked, setIsChecked] = useState(false);
 
  const [modalOpen, setModalOpen] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    
   
      setSendError(false);
      const sanitizedData = {
        ...data,
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: data.email.trim(),
        message: data.message ? data.message.trim() : '',
      };
      try {
        setSendEmail(true);
        await sendingEmail(sanitizedData);
        reset();
      } catch (error) {
        setSendError(true);
      } finally {
        // setModalOpen(true);
        setSendEmail(false);
      }
    };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-between gap-6 md:gap-4 lg:gap-6">
          <div className="mb-4 md:mb-8 md:flex justify-between md:gap-2 lg:gap-4">
            <div className="w-full md:w-1/2 md:h-50 mb-4 md:mb-0 flex flex-col gap-4">
              <Input
                id="name"
                label={name.label}
                type="text"
                placeholder={name.placeholder}
                errorMessage={errors.name?.message}
                {...register("name", {
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
                })}
              />

              <Input
                id="email"
                label="E-mail"
                type="text"
                placeholder="johnsmith@email.com"
                errorMessage={errors.email?.message}
                {...register("email", {
                  required: email.errorMessage || true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: email.rules,
                  },
                })}
              />

              <Input
                id="phone"
                label="Phone"
                type="text"
                placeholder="380971234567"
                errorMessage={errors.phone?.message}
                {...register("phone", {
                  required: name.errorMessage || true,
                  maxLength: {
                    value: 13,
                    message: phone.maxLength,
                  },
                  pattern: {
                    value: /^(380)([3-9][0-9]{8})$/,
                    message: phone.rules,
                  },
                })}
              />
            </div>

            <div className="w-full md:w-1/2 h-50">
              <Textarea
                id="message"
                label="Message"
                className="block resize-none py-1 md:py-2 px-2 h-[196px] md:h-[204px] lg:h-[184px]"
                {...register("message")}
              />
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="md:w-1/2 lg:w-full mb-4 md:mb-0 flex gap-2 items-center">
              <Checkbox
                id="checkbox"
                type="checkbox"
                className="hidden appearance-none"
                checked={isChecked}
                onChange={handleChange}
              />

              <p className="font-extralight text-[12px] md:text-xs leading-loose ">
                I confirm my consent to the processing of personal data.
              </p>
            </div>

            <div className="ml-auto mr-0">
              <Button variant="text" type="submit">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactsForm;
