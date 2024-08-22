"use client";

import { IFormValues, InputProps } from "@/@types";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { formData } from "@/data";
import { useState } from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

const ContactsForm = () => {
  const {
    register,
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

  const [isChecked, setIsChecked] = useState(false);
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const formData = { ...data, checkbox: isChecked };
    localStorage.setItem("formData", JSON.stringify(formData));
    const isValid = await trigger();
    if (isValid) {
      // setShowSuccessMessage(true);
      reset();
      // setTimeout(() => {
      //   setShowSuccessMessage(false);
      // }, 1000);
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
                errors={errors}
                // {...register("name", {
                //   required: {
                //     value: true,
                //     message: "❌ This field is required.",
                //   },
                //   maxLength: {
                //     value: 30,
                //     message: "❌ Max length is 30 characters.",
                //   },
                //   pattern: {
                //     value: /^[A-Za-z]+\s[A-Za-z]+$/,
                //     message: "❌ Incorrect name",
                //   },
                // })}
                
              //   {...register("name" as keyof IFormValues)}
              // errorMessage={errors[name as keyof IFormValues]?.message}


          //       {...register('name', formSchema.name)}
          // errorMessage={errors.name?.message}
              />

              <Input
                id="email"
                label="E-mail"
                type="text"
                placeholder="johnsmith@email.com"
                errors={errors}
                {...register("email", {
                  required: {
                    value: true,
                    message: "❌ This field is required.",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "❌ Incorrect email",
                  },
                })}
              />

              <Input
                id="phone"
                label="Phone"
                type="text"
                placeholder="380971234567"
                errors={errors}
                {...register("phone", {
                  required: {
                    value: true,
                    message: "❌ This field is required.",
                  },
                  maxLength: {
                    value: 20,
                    message: "❌ Max length is 20 characters.",
                  },
                  pattern: {
                    value: /^\(\d{3}\)\s\d{2}\s\d{2}\s\d{3}$/,
                    message: "❌ Incorrect phone",
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
