'use client'

import { IFormValues, InputProps } from "@/@types";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";


// interface IFormValues {
//   "First Name": string;  
// }

// type InputProps = {
//   label: Path<IFormValues>;
//   register: UseFormRegister<IFormValues>;
//   required: boolean;
// };


// const Input = ({ label, register, required }: InputProps) => (
//   <>
//     <label>{label}</label>
//     <input {...register(label, { required })} />
//   </>
// );

const ContactsForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = data => {
    alert(JSON.stringify(data));
  };

 
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex flex-col justify-between gap-4">
          <div className="lg:w-full flex flex-col gap-8 md:flex-row lg:flex-col justify-between md:gap-4 lg:gap-6">
            <div className="w-full md:w-1/3 lg:w-full h-50 flex gap-8 flex-col lg:flex-row md:gap-4">
              <div className="lg:w-full">
                <Input
                  id="name"
                  label="Full name"
                  placeholder="John Smith"
                  type="text"
                  {...register('name', {
                    required: {
                      value: true,
                      message: '❌ This field is required.',
                    },
                    maxLength: {
                      value: 30,
                      message: '❌ Max length is 30 characters.',
                    },
                    pattern: {
                      value: /^[A-Za-z]+\s[A-Za-z]+$/,
                      message: '❌ Incorrect name',
                    },
                  })}
                  errors={errors}
                />
              </div>

              <div className="lg:w-full">
                <Input
                  id="email"
                  label="E-mail"
                  placeholder="johnsmith@email.com"
                  type="text"
                  {...register('email', {
                    required: {
                      value: true,
                      message: '❌ This field is required.',
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: '❌ Incorrect email',
                    },
                  })}
                  errors={errors}
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-full">
              <Textarea
                id="message"
                label="Message"
                className='block resize-none py-1 md:py-2 px-2 h-[193px] md:h-[221px] lg:h-[174px]'
                {...register('message')}
              />
            </div>
          </div>

          <div className="ml-auto mr-0">
            <Button variant="text" type="submit">
              SEND
            </Button>
          </div>
        </div>
    </form>
    </div>
  );
};

export default ContactsForm;
